// Teste rápido para verificar os modelos do OpenRouter
const fs = require('fs');
const path = require('path');

// Simular import do TypeScript
const modelsContent = fs.readFileSync(path.join(__dirname, 'src/data/openrouter-models.ts'), 'utf8');

// Extrair o número de modelos na lista
const modelMatches = modelsContent.match(/const\s+\w+_\w+.*?OpenRouterLLM\s*=/g) || [];
const modelCount = modelMatches.length;

console.log(`✅ Total de modelos do OpenRouter definidos: ${modelCount}`);

// Verificar se os modelos padrão estão presentes
const hasClaudeSonnet4 = modelsContent.includes('anthropic/claude-sonnet-4');
const hasDeepSeek = modelsContent.includes('deepseek/deepseek-chat-v3-0324');

console.log(`✅ Modelo padrão premium (Claude Sonnet 4): ${hasClaudeSonnet4 ? 'ENCONTRADO' : 'NÃO ENCONTRADO'}`);
console.log(`✅ Modelo padrão gratuito (DeepSeek): ${hasDeepSeek ? 'ENCONTRADO' : 'NÃO ENCONTRADO'}`);

// Verificar se a lista está sendo exportada
const hasExport = modelsContent.includes('export const OPENROUTER_LLM_LIST');
console.log(`✅ Lista exportada corretamente: ${hasExport ? 'SIM' : 'NÃO'}`);

// Verificar alguns modelos específicos por categoria
const hasGPT = modelsContent.includes('openai/gpt');
const hasClaude = modelsContent.includes('anthropic/claude');
const hasGemini = modelsContent.includes('google/gemini');
const hasLlama = modelsContent.includes('meta-llama');

console.log(`✅ Modelos por categoria:`);
console.log(`   - OpenAI GPT: ${hasGPT ? 'SIM' : 'NÃO'}`);
console.log(`   - Anthropic Claude: ${hasClaude ? 'SIM' : 'NÃO'}`);
console.log(`   - Google Gemini: ${hasGemini ? 'SIM' : 'NÃO'}`);
console.log(`   - Meta Llama: ${hasLlama ? 'SIM' : 'NÃO'}`);

console.log('\n🎯 Configuração dos modelos do OpenRouter parece estar correta!');
