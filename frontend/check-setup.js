#!/usr/bin/env node

console.log('🔍 Verificando configuração do frontend Suna...\n');

// Teste 1: Verificar se o frontend está rodando
console.log('1. Verificando se o frontend está ativo...');
try {
  const http = require('http');
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET',
    timeout: 5000
  };

  const req = http.request(options, (res) => {
    if (res.statusCode === 200) {
      console.log('   ✅ Frontend está rodando em http://localhost:3000');
    } else {
      console.log(`   ⚠️ Frontend respondeu com status: ${res.statusCode}`);
    }
  });

  req.on('error', (err) => {
    console.log('   ❌ Erro ao conectar com o frontend:', err.message);
  });

  req.on('timeout', () => {
    console.log('   ❌ Timeout ao conectar com o frontend');
    req.destroy();
  });

  req.end();
} catch (error) {
  console.log('   ❌ Erro inesperado:', error.message);
}

// Teste 2: Listar arquivos importantes
console.log('\n2. Verificando arquivos de configuração...');
const fs = require('fs');
const path = require('path');

const files = [
  'src/data/openrouter-models.ts',
  'src/types/openrouter.ts',
  'src/components/thread/chat-input/_use-model-selection.ts',
  'src/components/thread/chat-input/model-selector.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} - ARQUIVO NÃO ENCONTRADO`);
  }
});

// Teste 3: Verificar se não há erros óbvios nos arquivos
console.log('\n3. Verificando integridade dos arquivos...');
try {
  const modelsContent = fs.readFileSync('src/data/openrouter-models.ts', 'utf8');
  const typeContent = fs.readFileSync('src/types/openrouter.ts', 'utf8');
  
  if (modelsContent.includes('export const OPENROUTER_LLM_LIST')) {
    console.log('   ✅ Lista de modelos exportada corretamente');
  } else {
    console.log('   ❌ Problema na exportação da lista de modelos');
  }
  
  if (typeContent.includes('export interface OpenRouterLLM')) {
    console.log('   ✅ Tipos TypeScript definidos corretamente');
  } else {
    console.log('   ❌ Problema na definição dos tipos');
  }
} catch (error) {
  console.log('   ❌ Erro ao ler arquivos:', error.message);
}

console.log('\n🎯 Verificação concluída!');
console.log('\n📋 Para testar completamente:');
console.log('   1. Abra http://localhost:3000 no navegador');
console.log('   2. Inicie um novo chat');
console.log('   3. Clique no seletor de modelo');
console.log('   4. Verifique se apenas modelos do OpenRouter aparecem');
console.log('   5. Teste a seleção de diferentes modelos');
