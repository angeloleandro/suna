# Script para testar o ambiente de desenvolvimento Suna
# Execute: .\test-environment.ps1

Write-Host "🚀 Testando Ambiente de Desenvolvimento Suna" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green

# Teste 1: Verificar se o backend está respondendo
Write-Host ""
Write-Host "1. Testando Backend..." -ForegroundColor Yellow
try {
    $backend = Invoke-WebRequest -Uri "http://localhost:8000/docs" -UseBasicParsing -TimeoutSec 5
    if ($backend.StatusCode -eq 200) {
        Write-Host "   ✅ Backend OK (http://localhost:8000)" -ForegroundColor Green
    }
} catch {
    Write-Host "   ❌ Backend não está respondendo" -ForegroundColor Red
    Write-Host "   💡 Execute: cd backend && .\.venv\Scripts\activate && python -m uvicorn api:app --host 0.0.0.0 --port 8000 --reload" -ForegroundColor Cyan
}

# Teste 2: Verificar se o frontend está respondendo  
Write-Host ""
Write-Host "2. Testando Frontend..." -ForegroundColor Yellow
try {
    $frontend = Invoke-WebRequest -Uri "http://localhost:3000" -UseBasicParsing -TimeoutSec 5
    if ($frontend.StatusCode -eq 200) {
        Write-Host "   ✅ Frontend OK (http://localhost:3000)" -ForegroundColor Green
    }
} catch {
    Write-Host "   ❌ Frontend não está respondendo" -ForegroundColor Red
    Write-Host "   💡 Execute: cd frontend && npm run dev" -ForegroundColor Cyan
}

# Teste 3: Verificar arquivos de configuração
Write-Host ""
Write-Host "3. Testando Configuração..." -ForegroundColor Yellow
$backendEnv = Test-Path "backend\.env"
$frontendEnv = Test-Path "frontend\.env"
$frontendEnvLocal = Test-Path "frontend\.env.local"

if ($backendEnv) {
    Write-Host "   ✅ backend\.env existe" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  backend\.env não encontrado" -ForegroundColor Yellow
}

if ($frontendEnv) {
    Write-Host "   ✅ frontend\.env existe" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  frontend\.env não encontrado" -ForegroundColor Yellow
}

if ($frontendEnvLocal) {
    Write-Host "   ✅ frontend\.env.local existe" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  frontend\.env.local não encontrado" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎯 Resumo:" -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Green
Write-Host "📖 Documentação completa: DEV-README.md" -ForegroundColor Cyan
Write-Host "🌐 Frontend: http://localhost:3000" -ForegroundColor Cyan  
Write-Host "🔧 Backend API: http://localhost:8000/docs" -ForegroundColor Cyan
Write-Host "🐰 RabbitMQ: http://localhost:15672 (guest/guest)" -ForegroundColor Cyan
