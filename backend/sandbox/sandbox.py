import os
from daytona_sdk import Daytona, DaytonaConfig, CreateSandboxFromImageParams, Sandbox, SessionExecuteRequest, Resources, SandboxState
from dotenv import load_dotenv
from utils.logger import logger
from utils.config import config
from utils.config import Configuration

load_dotenv()

# Check if we're in local development mode
IS_LOCAL_MODE = os.getenv('ENV_MODE', '').lower() == 'local'

# Mock sandbox class for local development
class MockSandbox:
    def __init__(self, sandbox_id: str = "local-sandbox"):
        self.id = sandbox_id
        self.state = SandboxState.RUNNING if hasattr(SandboxState, 'RUNNING') else "running"
        self.name = f"Local Dev Sandbox {sandbox_id}"
        self.fs = MockFileSystem()
        
    def to_dict(self):
        return {
            "id": self.id,
            "state": self.state,
            "name": self.name,
            "status": "running",
            "local_mode": True
        }
        
    def get_preview_link(self, port: int):
        """Mock method for getting preview links in local mode"""
        class MockPreviewLink:
            def __init__(self, port: int):
                self.url = f"http://localhost:{port}"
                self.token = "local-mock-token"
        
        return MockPreviewLink(port)

# Mock file system for local development
class MockFileSystem:
    def list_files(self, path: str):
        """Mock file listing - returns some sample files for demo purposes"""
        from datetime import datetime
        
        # Mock file info class
        class MockFileInfo:
            def __init__(self, name: str, is_dir: bool = False, size: int = 0):
                self.name = name
                self.is_dir = is_dir
                self.size = size
                self.mod_time = datetime.now()
        
        # Return some mock files based on the path
        if path == "/" or path == "/workspace":
            return [
                MockFileInfo("app.py", is_dir=False, size=1024),
                MockFileInfo("requirements.txt", is_dir=False, size=512),
                MockFileInfo("README.md", is_dir=False, size=2048),
                MockFileInfo("src", is_dir=True),
                MockFileInfo("tests", is_dir=True),
                MockFileInfo(".gitignore", is_dir=False, size=256),
            ]
        elif "src" in path:
            return [
                MockFileInfo("main.py", is_dir=False, size=1536),
                MockFileInfo("utils.py", is_dir=False, size=768),
                MockFileInfo("models", is_dir=True),
            ]
        elif "tests" in path:
            return [
                MockFileInfo("test_main.py", is_dir=False, size=1024),
                MockFileInfo("test_utils.py", is_dir=False, size=512),
            ]
        else:
            return []
    
    def read_file(self, path: str):
        """Mock file reading - returns sample content"""
        if path.endswith('.py'):
            return """# Mock Python file content
def hello_world():
    print("Hello from mock sandbox!")
    return "This is a mock file in local development mode"

if __name__ == "__main__":
    hello_world()
"""
        elif path.endswith('.md'):
            return """# Mock README

This is a mock file system for local development.

## Features
- File listing
- File reading
- Directory navigation

This allows testing the file browser without a real sandbox.
"""
        elif path.endswith('.txt'):
            return """Mock requirements file:
flask==2.0.1
requests==2.25.1
pytest==6.2.4
"""
        else:
            return "Mock file content for local development"
    
    def write_file(self, path: str, content: str):
        """Mock file writing - just logs the action"""
        logger.info(f"Mock: Writing {len(content)} bytes to {path}")
        return True
    
    def delete_file(self, path: str):
        """Mock file deletion - just logs the action"""
        logger.info(f"Mock: Deleting file {path}")
        return True

if IS_LOCAL_MODE:
    logger.info("Running in local mode - using mock sandbox")
    daytona = None
else:
    logger.debug("Initializing Daytona sandbox configuration")
    daytona_config = DaytonaConfig(
        api_key=config.DAYTONA_API_KEY,
        server_url=config.DAYTONA_SERVER_URL,
        target=config.DAYTONA_TARGET
    )

    if daytona_config.api_key:
        logger.debug("Daytona API key configured successfully")
    else:
        logger.warning("No Daytona API key found in environment variables")

    if daytona_config.server_url:
        logger.debug(f"Daytona server URL set to: {daytona_config.server_url}")
    else:
        logger.warning("No Daytona server URL found in environment variables")

    if daytona_config.target:
        logger.debug(f"Daytona target set to: {daytona_config.target}")
    else:
        logger.warning("No Daytona target found in environment variables")

    daytona = Daytona(daytona_config)
    logger.debug("Daytona client initialized")

async def get_or_start_sandbox(sandbox_id: str):
    """Retrieve a sandbox by ID, check its state, and start it if needed."""
    
    logger.info(f"Getting or starting sandbox with ID: {sandbox_id}")
    
    # In local mode, return a mock sandbox
    if IS_LOCAL_MODE:
        logger.info("Local mode: returning mock sandbox")
        return MockSandbox(sandbox_id)
    
    # Original Daytona logic for production
    try:
        sandbox = daytona.get(sandbox_id)
        
        # Check if sandbox needs to be started
        if sandbox.state == SandboxState.ARCHIVED or sandbox.state == SandboxState.STOPPED:
            logger.info(f"Sandbox is in {sandbox.state} state. Starting...")
            try:
                daytona.start(sandbox)
                # Wait a moment for the sandbox to initialize
                # sleep(5)
                # Refresh sandbox state after starting
                sandbox = daytona.get(sandbox_id)
                
                # Start supervisord in a session when restarting
                start_supervisord_session(sandbox)
            except Exception as e:
                logger.error(f"Error starting sandbox: {e}")
                raise e
        
        logger.info(f"Sandbox {sandbox_id} is ready")
        return sandbox
        
    except Exception as e:
        logger.error(f"Error retrieving or starting sandbox: {str(e)}")
        raise e

def start_supervisord_session(sandbox: Sandbox):
    """Start supervisord in a session."""
    session_id = "supervisord-session"
    try:
        logger.info(f"Creating session {session_id} for supervisord")
        sandbox.process.create_session(session_id)
        
        # Execute supervisord command
        sandbox.process.execute_session_command(session_id, SessionExecuteRequest(
            command="exec /usr/bin/supervisord -n -c /etc/supervisor/conf.d/supervisord.conf",
            var_async=True
        ))
        logger.info(f"Supervisord started in session {session_id}")
    except Exception as e:
        logger.error(f"Error starting supervisord session: {str(e)}")
        raise e

def create_sandbox(password: str, project_id: str = None):
    """Create a new sandbox with all required services configured and running."""
    
    # In local mode, return a mock sandbox
    if IS_LOCAL_MODE:
        logger.info("Local mode: creating mock sandbox")
        sandbox_id = project_id or f"local-sandbox-{os.urandom(4).hex()}"
        return MockSandbox(sandbox_id)
    
    logger.debug("Creating new Daytona sandbox environment")
    logger.debug("Configuring sandbox with browser-use image and environment variables")
    
    labels = None
    if project_id:
        logger.debug(f"Using sandbox_id as label: {project_id}")
        labels = {'id': project_id}
        
    params = CreateSandboxFromImageParams(
        image=Configuration.SANDBOX_IMAGE_NAME,
        public=True,
        labels=labels,
        env_vars={
            "CHROME_PERSISTENT_SESSION": "true",
            "RESOLUTION": "1024x768x24",
            "RESOLUTION_WIDTH": "1024",
            "RESOLUTION_HEIGHT": "768",
            "VNC_PASSWORD": password,
            "ANONYMIZED_TELEMETRY": "false",
            "CHROME_PATH": "",
            "CHROME_USER_DATA": "",
            "CHROME_DEBUGGING_PORT": "9222",
            "CHROME_DEBUGGING_HOST": "localhost",
            "CHROME_CDP": ""
        },
        resources=Resources(
            cpu=2,
            memory=4,
            disk=5,
        ),
        auto_stop_interval=15,
        auto_archive_interval=24 * 60,
    )
    
    # Create the sandbox
    sandbox = daytona.create(params)
    logger.debug(f"Sandbox created with ID: {sandbox.id}")
    
    # Start supervisord in a session for new sandbox
    start_supervisord_session(sandbox)
    
    logger.debug(f"Sandbox environment successfully initialized")
    return sandbox

async def delete_sandbox(sandbox_id: str):
    """Delete a sandbox by its ID."""
    logger.info(f"Deleting sandbox with ID: {sandbox_id}")
    
    # In local mode, just log the deletion
    if IS_LOCAL_MODE:
        logger.info(f"Local mode: mock deletion of sandbox {sandbox_id}")
        return True
    
    try:
        # Get the sandbox
        sandbox = daytona.get(sandbox_id)
        
        # Delete the sandbox
        daytona.delete(sandbox)
        
        logger.info(f"Sandbox {sandbox_id} deleted successfully")
        return True
        
    except Exception as e:
        logger.error(f"Error deleting sandbox {sandbox_id}: {str(e)}")
        raise e