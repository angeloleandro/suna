import type { OpenRouterLLM } from "@/types/openrouter"

const OPENROUTER_PLATFORM_LINK = "https://openrouter.ai/docs"

// Claude 3.5 Haiku
const CLAUDE_3_5_HAIKU_OR: OpenRouterLLM = {
  modelId: "anthropic/claude-3.5-haiku",
  modelName: "Claude 3.5 Haiku",
  provider: "openrouter-anthropic",
  hostedId: "anthropic/claude-3.5-haiku",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "Modelo rápido e eficiente da Anthropic com excelente compreensão de contexto. Ideal para respostas concisas e tarefas cotidianas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.8,
    outputCost: 4
  }
}

// GPT-4o Mini
const GPT4O_MINI: OpenRouterLLM = {
  modelId: "openai/gpt-4o-mini",
  modelName: "GPT-4o Mini",
  provider: "openrouter-openai",
  hostedId: "openai/gpt-4o-mini",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Versão compacta do GPT-4o com boa relação custo-benefício. Suporta análise de imagens e busca na web, perfeito para uso geral.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.15,
    outputCost: 0.6
  }
}

// GPT-4.1
const GPT4_1: OpenRouterLLM = {
  modelId: "openai/gpt-4.1",
  modelName: "GPT-4.1",
  provider: "openrouter-openai",
  hostedId: "openai/gpt-4.1",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Modelo avançado da OpenAI com recursos visuais e alta capacidade de raciocínio. Excelente para tarefas complexas e análise de imagens.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2,
    outputCost: 8
  }
}

// GPT-4.1 Mini
const GPT4_1_MINI: OpenRouterLLM = {
  modelId: "openai/gpt-4.1-mini",
  modelName: "GPT-4.1 Mini",
  provider: "openrouter-openai",
  hostedId: "openai/gpt-4.1-mini",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Versão compacta do GPT-4.1 com excelente relação custo-benefício. Combina recursos visuais e bom desempenho para uso cotidiano.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.4,
    outputCost: 1.6
  }
}

// GPT-4.1 Nano
const GPT4_1_NANO: OpenRouterLLM = {
  modelId: "openai/gpt-4.1-nano",
  modelName: "GPT-4.1 Nano",
  provider: "openrouter-openai",
  hostedId: "openai/gpt-4.1-nano",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Para tarefas que exigem baixa latência, GPT‑4.1 nano é o modelo mais rápido e barato da série GPT-4.1. Oferece performance excepcional em um tamanho pequeno com janela de contexto de 1 milhão de tokens, e pontua 80.1% no MMLU, 50.3% no GPQA, e 9.8% no Aider polyglot coding – ainda maior que GPT‑4o mini. É ideal para tarefas como classificação ou autocompletar.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.1,
    outputCost: 0.4
  }
}

// GPT-4o-mini Search Preview
const GPT4O_MINI_SEARCH_PREVIEW: OpenRouterLLM = {
  modelId: "openai/gpt-4o-mini-search-preview",
  modelName: "GPT-4o Mini Search Preview",
  provider: "openrouter-openai",
  hostedId: "openai/gpt-4o-mini-search-preview",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true, // Especializado em busca na web
  description:
    "Otimizado para busca na web com excelente capacidade de processar informações online. Ideal para pesquisas em tempo real e consultas baseadas na web.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.15,
    outputCost: 0.6
  }
}

// Cohere Command R
const COHERE_COMMAND_R: OpenRouterLLM = {
  modelId: "cohere/command-r-08-2024",
  modelName: "Command R",
  provider: "openrouter-cohere",
  hostedId: "cohere/command-r-08-2024",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "command-r-08-2024 is an update of the Command R with improved performance for multilingual retrieval-augmented generation (RAG) and tool use. More broadly, it is better at math, code and reasoning and is competitive with the previous version of the larger Command R+ model.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.15,
    outputCost: 0.6
  }
}

// Cohere Command R7B
const COHERE_COMMAND_R7B: OpenRouterLLM = {
  modelId: "cohere/command-r7b-12-2024",
  modelName: "Command R7B",
  provider: "openrouter-cohere",
  hostedId: "cohere/command-r7b-12-2024",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "Command R7B (12-2024) is a small, fast update of the Command R+ model, delivered in December 2024. It excels at RAG, tool use, agents, and similar tasks requiring complex reasoning and multiple steps.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.038,
    outputCost: 0.15
  }
}

// Cohere Command R+
const COHERE_COMMAND_R_PLUS: OpenRouterLLM = {
  modelId: "cohere/command-r-plus-08-2024",
  modelName: "Command R+",
  provider: "openrouter-cohere",
  hostedId: "cohere/command-r-plus-08-2024",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "command-r-plus-08-2024 is an update of the Command R+ with roughly 50% higher throughput and 25% lower latencies as compared to the previous Command R+ version, while keeping the hardware footprint the same.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.5,
    outputCost: 10.0
  }
}

// Arcee AI Caller Large
const ARCEE_CALLER_LARGE: OpenRouterLLM = {
  modelId: "arcee-ai/caller-large",
  modelName: "Caller Large",
  provider: "openrouter-arcee",
  hostedId: "arcee-ai/caller-large",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "Caller Large is Arcee's specialist 'function‑calling' SLM built to orchestrate external tools and APIs. Instead of maximizing next‑token accuracy, training focuses on structured JSON outputs, parameter extraction and multi‑step tool chains, making Caller a natural choice for retrieval‑augmented generation, robotic process automation or data‑pull chatbots. It incorporates a routing head that decides when (and how) to invoke a tool versus answering directly, reducing hallucinated calls.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.55,
    outputCost: 0.85
  }
}

// Arcee AI Maestro Reasoning
const ARCEE_MAESTRO_REASONING: OpenRouterLLM = {
  modelId: "arcee-ai/maestro-reasoning",
  modelName: "Maestro Reasoning",
  provider: "openrouter-arcee",
  hostedId: "arcee-ai/maestro-reasoning",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Maestro Reasoning is Arcee's flagship analysis model: a 32 B‑parameter derivative of Qwen 2.5‑32 B tuned with DPO and chain‑of‑thought RL for step‑by‑step logic. Compared to the earlier 7 B preview, the production 32 B release widens the context window to 128 k tokens and doubles pass‑rate on MATH and GSM‑8K, while also lifting code completion accuracy. Its instruction style encourages structured 'thought → answer' traces that can be parsed or hidden according to user preference.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.9,
    outputCost: 3.3
  }
}

// Arcee AI Spotlight
const ARCEE_SPOTLIGHT: OpenRouterLLM = {
  modelId: "arcee-ai/spotlight",
  modelName: "Spotlight",
  provider: "openrouter-arcee",
  hostedId: "arcee-ai/spotlight",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Spotlight is a 7‑billion‑parameter vision‑language model derived from Qwen 2.5‑VL and fine‑tuned by Arcee AI for tight image‑text grounding tasks. It offers a 32 k‑token context window, enabling rich multimodal conversations that combine lengthy documents with one or more images. Training emphasized fast inference on consumer GPUs while retaining strong captioning, visual‐question‑answering, and diagram‑analysis accuracy.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.18,
    outputCost: 0.18
  }
}

// Arcee AI Virtuoso Large
const ARCEE_VIRTUOSO_LARGE: OpenRouterLLM = {
  modelId: "arcee-ai/virtuoso-large",
  modelName: "Virtuoso Large",
  provider: "openrouter-arcee",
  hostedId: "arcee-ai/virtuoso-large",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "Virtuoso‑Large is Arcee's top‑tier general‑purpose LLM at 72 B parameters, tuned to tackle cross‑domain reasoning, creative writing and enterprise QA. Unlike many 70 B peers, it retains the 128 k context inherited from Qwen 2.5, letting it ingest books, codebases or financial filings wholesale. Training blended DeepSeek R1 distillation, multi‑epoch supervised fine‑tuning and a final DPO/RLHF alignment stage, yielding strong performance on BIG‑Bench‑Hard, GSM‑8K and long‑context Needle‑In‑Haystack tests.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.75,
    outputCost: 1.2
  }
}

// MiniMax
const MINIMAX: OpenRouterLLM = {
  modelId: "minimax/minimax-01",
  modelName: "MiniMax",
  provider: "openrouter-minimax",
  hostedId: "minimax/minimax-01",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Modelo multimodal com boa capacidade de processamento visual e análise contextual. Equilibra desempenho e custo para uso diversificado.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.2,
    outputCost: 1.1
  }
}

// MiniMax M1
const MINIMAX_M1: OpenRouterLLM = {
  modelId: "minimax/minimax-m1",
  modelName: "MiniMax M1",
  provider: "openrouter-minimax",
  hostedId: "minimax/minimax-m1",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Modelo de raciocínio de grande escala com arquitetura híbrida Mixture-of-Experts (MoE) e mecanismo 'lightning attention' personalizado. Capaz de processar sequências longas de até 1 milhão de tokens mantendo eficiência competitiva de FLOP. Com 456 bilhões de parâmetros totais e 45.9B ativos por token, otimizado para tarefas de raciocínio multi-step complexas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.3,
    outputCost: 1.65
  }
}

// MiniMax M1 Extended
const MINIMAX_M1_EXTENDED: OpenRouterLLM = {
  modelId: "minimax/minimax-m1:extended",
  modelName: "MiniMax M1 (extended)",
  provider: "openrouter-minimax",
  hostedId: "minimax/minimax-m1:extended",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Variante extended do MiniMax M1 com contexto de 128k tokens, otimizada para tarefas que requerem menor contexto mas alta eficiência. Mantém a arquitetura MoE e lightning attention para raciocínio multi-step complexo com melhor custo-benefício.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.55,
    outputCost: 2.2
  }
}

// Gemini 2.5 Pro
const GEMINI_2_5_PRO: OpenRouterLLM = {
  modelId: "google/gemini-2.5-pro",
  modelName: "Gemini 2.5 Pro",
  provider: "openrouter-gemini",
  hostedId: "google/gemini-2.5-pro",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Gemini 2.5 Pro é o modelo de IA mais avançado do Google, projetado para tarefas de raciocínio, codificação, matemática e científicas avançadas. Ele emprega capacidades de 'thinking', permitindo raciocinar através das respostas com precisão aprimorada e tratamento de contexto nuançado.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.25,
    outputCost: 10
  }
}

// LLaMA 4 Maverick
const LLAMA_4_MAVERICK: OpenRouterLLM = {
  modelId: "meta-llama/llama-4-maverick",
  modelName: "Llama 4 Maverick",
  provider: "openrouter-llama",
  hostedId: "meta-llama/llama-4-maverick",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Modelo de IA da Meta de alto desempenho com capacidade multimodal. Boa opção para tarefas complexas e análise visual.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.19,
    outputCost: 0.85
  }
}

// LLaMA 4 Scout
const LLAMA_4_SCOUT: OpenRouterLLM = {
  modelId: "meta-llama/llama-4-scout",
  modelName: "Llama 4 Scout",
  provider: "openrouter-llama",
  hostedId: "meta-llama/llama-4-scout",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Versão mais leve e acessível da família Llama 4. Boa relação custo-benefício para tarefas cotidianas e processamento de imagens.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.08,
    outputCost: 0.45
  }
}

// Qwen Turbo
const QWEN_TURBO: OpenRouterLLM = {
  modelId: "qwen/qwen-turbo",
  modelName: "Qwen Turbo",
  provider: "openrouter-qwen",
  hostedId: "qwen/qwen-turbo",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "Modelo otimizado para velocidade com resposta rápida. Ideal para interações em tempo real e tarefas simples que demandam baixa latência.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.05,
    outputCost: 0.2
  }
}

// Qwen2.5 32B Instruct
const QWEN2_5_32B_INSTRUCT: OpenRouterLLM = {
  modelId: "qwen/qwen2.5-32b-instruct",
  modelName: "Qwen2.5 32B Instruct",
  provider: "openrouter-qwen",
  hostedId: "qwen/qwen2.5-32b-instruct",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "Modelo de 32 bilhões de parâmetros otimizado para instruções. Bom equilíbrio entre desempenho e eficiência para tarefas diversas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.79,
    outputCost: 0.79
  }
}

// QwQ 32B
const QWQ_32B: OpenRouterLLM = {
  modelId: "qwen/qwq-32b",
  modelName: "QwQ 32B Resoaning",
  provider: "openrouter-qwen",
  hostedId: "qwen/qwq-32b",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Especializado em raciocínio e resolução de problemas complexos. Ideal para programação, matemática e análise crítica.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.12,
    outputCost: 0.18
  }
}

// Qwen Plus
const QWEN_PLUS: OpenRouterLLM = {
  modelId: "qwen/qwen-plus",
  modelName: "Qwen Plus",
  provider: "openrouter-qwen",
  hostedId: "qwen/qwen-plus",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "Versão avançada da família Qwen com boa performance em tarefas diversas. Oferece respostas mais elaboradas e completas que a versão Turbo.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.4,
    outputCost: 1.2
  }
}

// QwQ 32B (Free)
const QWQ_32B_FREE: OpenRouterLLM = {
  modelId: "qwen/qwq-32b:free",
  modelName: "QwQ 32B Reasoning",
  provider: "openrouter-qwen",
  hostedId: "qwen/qwq-32b:free",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Especializado em raciocínio e resolução de problemas complexos. Ideal para programação, matemática e análise crítica com alta precisão.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0,
    outputCost: 0
  }
}

// Qwen VL Plus
const QWEN_VL_PLUS: OpenRouterLLM = {
  modelId: "qwen/qwen-vl-plus:free",
  modelName: "Qwen VL Plus (Ultra Visão)",
  provider: "openrouter-qwen",
  hostedId: "qwen/qwen-vl-plus:free",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Especializado em processamento de imagens com capacidade excepcional de interpretação visual. Ideal para análise detalhada de imagens.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0,
    outputCost: 0
  }
}

// o4 Mini
const O4_MINI: OpenRouterLLM = {
  modelId: "openai/o4-mini",
  modelName: "o4 Mini",
  provider: "openrouter-openai",
  hostedId: "openai/o4-mini",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Modelo compacto da geração O4 da OpenAI com bom desempenho em tarefas gerais. Suporta análise de imagens e processamento de informações complexas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.1,
    outputCost: 4.4
  }
}

// o4 Mini High
const O4_MINI_HIGH: OpenRouterLLM = {
  modelId: "openai/o4-mini-high",
  modelName: "o4 Mini High",
  provider: "openrouter-openai",
  hostedId: "openai/o4-mini-high",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Versão aprimorada do O4 Mini com capacidade de reflexão. Ideal para tarefas que exigem raciocínio avançado e análise crítica.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.1,
    outputCost: 4.4
  }
}

// O3 Mini
const O3_MINI: OpenRouterLLM = {
  modelId: "openai/o3-mini",
  modelName: "O3 Mini",
  provider: "openrouter-openai",
  hostedId: "openai/o3-mini",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Modelo eficiente da geração O3 com boa capacidade de raciocínio. Equilibra desempenho e velocidade para diversas tarefas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.1,
    outputCost: 4.4
  }
}

// O3 Mini High
const O3_MINI_HIGH: OpenRouterLLM = {
  modelId: "openai/o3-mini-high",
  modelName: "O3 Mini High",
  provider: "openrouter-openai",
  hostedId: "openai/o3-mini-high",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Versão aprimorada do O3 Mini com capacidade de reflexão avançada. Excelente para tarefas que necessitam de análise profunda e pensamento estruturado.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.1,
    outputCost: 4.4
  }
}

// Amazon Nova Lite
const AMAZON_NOVA_LITE: OpenRouterLLM = {
  modelId: "amazon/nova-lite-v1",
  modelName: "Amazon Nova Lite",
  provider: "openrouter-amazon",
  hostedId: "amazon/nova-lite-v1",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Modelo da Amazon otimizado para eficiência com suporte a imagens. Oferece boa performance a um custo acessível para tarefas cotidianas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.06,
    outputCost: 0.24
  }
}

// Claude 3.7 Sonnet
const CLAUDE_3_7_SONNET: OpenRouterLLM = {
  modelId: "anthropic/claude-3.7-sonnet",
  modelName: "Claude 3.7 Sonnet",
  provider: "openrouter-anthropic",
  hostedId: "anthropic/claude-3.7-sonnet",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Modelo intermediário da família Claude 3, equilibra desempenho e eficiência. Excelente capacidade de compreensão de texto e processamento de imagens.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3,
    outputCost: 15
  }
}

// Claude 3.7 Sonnet (thinking)
const CLAUDE_3_7_SONNET_THINKING: OpenRouterLLM = {
  modelId: "anthropic/claude-3.7-sonnet:thinking",
  modelName: "Claude 3.7 Sonnet (thinking)",
  provider: "openrouter-anthropic",
  hostedId: "anthropic/claude-3.7-sonnet:thinking",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Versão do Claude 3.7 Sonnet com capacidade de reflexão, ideal para resolver problemas complexos que requerem maior profundidade de análise.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3.0,
    outputCost: 15.0
  }
}

// Claude Sonnet 4
const CLAUDE_SONNET_4: OpenRouterLLM = {
  modelId: "anthropic/claude-sonnet-4",
  modelName: "Claude Sonnet 4",
  provider: "openrouter-anthropic",
  hostedId: "anthropic/claude-sonnet-4",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Modelo intermediário da família Claude 4, equilibra desempenho e eficiência. Excelente capacidade de compreensão de texto e processamento de imagens.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3,
    outputCost: 15
  }
}

// Claude Sonnet 4 (thinking)
const CLAUDE_SONNET_4_THINKING: OpenRouterLLM = {
  modelId: "anthropic/claude-sonnet-4:thinking",
  modelName: "Claude Sonnet 4 (thinking)",
  provider: "openrouter-anthropic",
  hostedId: "anthropic/claude-sonnet-4:thinking",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Versão do Claude Sonnet 4 com capacidade de reflexão, ideal para resolver problemas complexos que requerem maior profundidade de análise.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3.0,
    outputCost: 15.0
  }
}

// Mistral Devstral Small
const MISTRAL_DEVSTRAL_SMALL: OpenRouterLLM = {
  modelId: "mistralai/devstral-small",
  modelName: "Devstral Small",
  provider: "openrouter-mistral-nemo",
  hostedId: "mistralai/devstral-small",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "Modelo de 24B parâmetros fine-tuned do Mistral-Small-3.1, desenvolvido pela Mistral AI e All Hands AI para tarefas avançadas de engenharia de software. Otimizado para exploração de código-base, edição multi-arquivo e integração em agentes de codificação.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.07,
    outputCost: 0.1
  }
}

// Amazon Nova Pro V1 (atualizado)
const AMAZON_NOVA_PRO_V1: OpenRouterLLM = {
  modelId: "amazon/nova-pro-v1",
  modelName: "Amazon Nova Pro V1",
  provider: "openrouter-amazon",
  hostedId: "amazon/nova-pro-v1",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Modelo multimodal da Amazon focado em fornecer uma combinação de precisão, velocidade e custo para uma ampla gama de tarefas. Alcança desempenho state-of-the-art em benchmarks chave incluindo visual question answering (TextVQA) e compreensão de vídeo (VATEX).",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.8,
    outputCost: 3.2
  }
}

// Microsoft Phi 4 Multimodal
const PHI_4_MULTIMODAL: OpenRouterLLM = {
  modelId: "microsoft/phi-4-multimodal-instruct",
  modelName: "Microsoft Phi-4 Multimodal",
  provider: "openrouter-microsoft",
  hostedId: "microsoft/phi-4-multimodal-instruct",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Modelo multimodal eficiente da Microsoft, com excelente capacidade de análise de imagens a um custo acessível.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.05,
    outputCost: 0.1
  }
}

// Microsoft Phi-4 Reasoning Plus
const PHI_4_REASONING_PLUS: OpenRouterLLM = {
  modelId: "microsoft/phi-4-reasoning-plus",
  modelName: "Microsoft Phi-4 Reasoning Plus",
  provider: "openrouter-microsoft",
  hostedId: "microsoft/phi-4-reasoning-plus",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Modelo da Microsoft especializado em raciocínio avançado. Excelente para lógica, matemática e problemas que exigem pensamento estruturado.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.35,
    outputCost: 0.35
  }
}

// Qwen2.5 VL 72B
const QWEN2_5_VL_72B: OpenRouterLLM = {
  modelId: "qwen/qwen2.5-vl-72b-instruct",
  modelName: "Qwen2.5 VL 72B",
  provider: "openrouter-qwen",
  hostedId: "qwen/qwen2.5-vl-72b-instruct",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Modelo de visão e linguagem de grande porte (72B) com capacidade multimodal avançada. Excelente para análise detalhada de imagens e interações visuais complexas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0,
    outputCost: 0
  }
}

// Qwen 3 235B A22B
const QWEN3_235B_A22B: OpenRouterLLM = {
  modelId: "qwen/qwen3-235b-a22b",
  modelName: "Qwen 3 235B A22B",
  provider: "openrouter-qwen",
  hostedId: "qwen/qwen3-235b-a22b",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Modelo de grande escala da terceira geração Qwen com 235B de parâmetros. Oferece capacidade excepcional de raciocínio e análise para tarefas complexas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.1,
    outputCost: 0.1
  }
}

// Perplexity Sonar Reasoning Pro
const PERPLEXITY_SONAR_REASONING_PRO: OpenRouterLLM = {
  modelId: "perplexity/sonar-reasoning-pro",
  modelName: "Perplexity Sonar Reasoning Pro",
  provider: "openrouter-sonar",
  hostedId: "perplexity/sonar-reasoning-pro",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Modelo premium com excelente raciocínio e busca na web. Ideal para pesquisas avançadas e respostas aprofundadas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2,
    outputCost: 8
  }
}

// Perplexity Sonar Reasoning
const PERPLEXITY_SONAR_REASONING: OpenRouterLLM = {
  modelId: "perplexity/sonar-reasoning",
  modelName: "Perplexity: Sonar Reasoning",
  provider: "openrouter-sonar",
  hostedId: "perplexity/sonar-reasoning",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Modelo especializado em raciocínio e busca na web da Perplexity. Excelente para pesquisas e respostas baseadas em fatos atualizados.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 1.0,
    outputCost: 5.0
  }
}

// Perplexity Sonar Deep Research
const PERPLEXITY_SONAR_DEEP_RESEARCH: OpenRouterLLM = {
  modelId: "perplexity/sonar-deep-research",
  modelName: "Perplexity Sonar Deep Research",
  provider: "openrouter-sonar",
  hostedId: "perplexity/sonar-deep-research",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "Modelo especializado em pesquisas avançadas e aprofundadas. Ideal para análises detalhadas e consultas que exigem informações extensas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2,
    outputCost: 8
  }
}

// Gemini 2.0 Flash
const GEMINI_2_0_FLASH: OpenRouterLLM = {
  modelId: "google/gemini-2.0-flash-001",
  modelName: "Gemini 2.0 Flash",
  provider: "openrouter-gemini",
  hostedId: "google/gemini-2.0-flash-001",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  description:
    "Modelo leve e rápido da família Gemini com capacidade multimodal. Balanceia velocidade e qualidade para uso cotidiano.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.3,
    outputCost: 0.6
  }
}

// Grok 3 Mini Beta
const GROK_3_MINI_BETA: OpenRouterLLM = {
  modelId: "x-ai/grok-3-mini-beta",
  modelName: "Grok 3 Mini Beta",
  provider: "openrouter-xai",
  hostedId: "x-ai/grok-3-mini-beta",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Versão compacta do Grok 3 em fase beta. Oferece boa capacidade de raciocínio e reflexão a um custo mais acessível.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.3,
    outputCost: 0.5
  }
}

// Grok 3 Beta
const GROK_3_BETA: OpenRouterLLM = {
  modelId: "x-ai/grok-3-beta",
  modelName: "Grok 3 Beta",
  provider: "openrouter-xai",
  hostedId: "x-ai/grok-3-beta",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Modelo principal da X AI em fase beta. Oferece raciocínio avançado e reflexão profunda para tarefas complexas e criativas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3,
    outputCost: 15
  }
}

// Mistral Medium 3
const MISTRAL_MEDIUM_3: OpenRouterLLM = {
  modelId: "mistralai/mistral-medium-3",
  modelName: "Mistral Medium 3",
  provider: "openrouter-mistral-nemo",
  hostedId: "mistralai/mistral-medium-3",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Modelo intermediário da terceira geração Mistral com suporte a imagens. Combina boa capacidade de raciocínio e processamento visual.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.4,
    outputCost: 2.0
  }
}

// Magistral Small 2506
const MAGISTRAL_SMALL_2506: OpenRouterLLM = {
  modelId: "mistralai/magistral-small-2506",
  modelName: "Magistral Small",
  provider: "openrouter-mistral-nemo",
  hostedId: "mistralai/magistral-small-2506",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Modelo de 24B parâmetros ajustado por instruções baseado no Mistral-Small-3.1, aprimorado através de fine-tuning supervisionado em traços do Magistral Medium e refinado via aprendizado por reforço. Otimizado para raciocínio e suporte multilíngue amplo, incluindo mais de 20 idiomas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.5,
    outputCost: 1.5
  }
}

// Magistral Medium 2506
const MAGISTRAL_MEDIUM_2506: OpenRouterLLM = {
  modelId: "mistralai/magistral-medium-2506",
  modelName: "Magistral Medium",
  provider: "openrouter-mistral-nemo",
  hostedId: "mistralai/magistral-medium-2506",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Magistral é o primeiro modelo de raciocínio da Mistral. Ideal para uso geral que requer processamento de pensamento mais longo e melhor precisão do que com LLMs não-raciocínio. Da pesquisa jurídica e previsão financeira ao desenvolvimento de software e narrativa criativa — este modelo resolve desafios multi-step onde transparência e precisão são críticas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.0,
    outputCost: 5.0
  }
}

// Magistral Medium 2506 Thinking
const MAGISTRAL_MEDIUM_2506_THINKING: OpenRouterLLM = {
  modelId: "mistralai/magistral-medium-2506:thinking",
  modelName: "Magistral Medium (thinking)",
  provider: "openrouter-mistral-nemo",
  hostedId: "mistralai/magistral-medium-2506:thinking",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Variante thinking do Magistral Medium que retorna tokens de raciocínio transparentes. Primeiro modelo de raciocínio da Mistral com capacidade de thinking explícito, ideal para casos onde é necessário ver o processo de raciocínio passo a passo para tarefas complexas multi-step.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.0,
    outputCost: 5.0
  }
}

// NVIDIA Llama 3.1 Nemotron Ultra 253B v1
const NVIDIA_LLAMA_31_NEMOTRON: OpenRouterLLM = {
  modelId: "nvidia/llama-3.1-nemotron-ultra-253b-v1:free",
  modelName: "NVIDIA: Llama 3.1 Nemotron Ultra 253B v1",
  provider: "openrouter-nvidia",
  hostedId: "nvidia/llama-3.1-nemotron-ultra-253b-v1:free",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "Modelo Ultra da NVIDIA baseado em Llama 3.1 com 253B de parâmetros. Oferece capacidade excepcional para tarefas complexas de raciocínio e análise.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0,
    outputCost: 0
  }
}

// NVIDIA Llama 3.3 Nemotron Super 49B v1
const NVIDIA_LLAMA_33_NEMOTRON: OpenRouterLLM = {
  modelId: "nvidia/llama-3.3-nemotron-super-49b-v1:free",
  modelName: "NVIDIA: Llama 3.3 Nemotron Super 49B v1",
  provider: "openrouter-nvidia",
  hostedId: "nvidia/llama-3.3-nemotron-super-49b-v1:free",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "Modelo Super da NVIDIA baseado em Llama 3.3 com 49B de parâmetros. Excelente para tarefas de processamento de linguagem natural e geração de conteúdo.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0,
    outputCost: 0
  }
}

// Gemini 2.5 Flash
const GEMINI_2_5_FLASH: OpenRouterLLM = {
  modelId: "google/gemini-2.5-flash",
  modelName: "Gemini 2.5 Flash",
  provider: "openrouter-gemini",
  hostedId: "google/gemini-2.5-flash",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Gemini 2.5 Flash é o modelo de IA trabalhador de última geração do Google, especificamente projetado para tarefas avançadas de raciocínio, codificação, matemática e científicas. Inclui capacidades de 'thinking' integradas, permitindo fornecer respostas com maior precisão e tratamento de contexto nuançado. Adicionalmente, o Gemini 2.5 Flash é configurável através do parâmetro 'max tokens for reasoning'.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.3,
    outputCost: 0.6
  }
}

// Gemini 2.5 Flash Lite Preview
const GEMINI_2_5_FLASH_LITE_PREVIEW: OpenRouterLLM = {
  modelId: "google/gemini-2.5-flash-lite-preview-06-17",
  modelName: "Gemini 2.5 Flash Lite Preview",
  provider: "openrouter-gemini",
  hostedId: "google/gemini-2.5-flash-lite-preview-06-17",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: true,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Modelo leve de raciocínio da família Gemini 2.5, otimizado para latência ultra-baixa e eficiência de custo. Oferece throughput melhorado, geração de tokens mais rápida e melhor performance em benchmarks comuns. Por padrão, thinking está desabilitado para priorizar velocidade, mas pode ser habilitado via parâmetro da API de Reasoning para selecionar troca entre custo e inteligência.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.15,
    outputCost: 0.3
  }
}

// DeepSeek Chat V3 0324
const DEEPSEEK_CHAT_V3: OpenRouterLLM = {
  modelId: "deepseek/deepseek-chat-v3-0324",
  modelName: "DeepSeek Chat V3",
  provider: "openrouter-deepseek",
  hostedId: "deepseek/deepseek-chat-v3-0324",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  description:
    "Terceira geração do modelo de chat da DeepSeek. Oferece boa compreensão de contexto e capacidade de resposta para conversas fluidas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.27,
    outputCost: 1.1
  }
}

// DeepSeek R1
const DEEPSEEK_R1: OpenRouterLLM = {
  modelId: "deepseek/deepseek-r1",
  modelName: "DeepSeek R1",
  provider: "openrouter-deepseek",
  hostedId: "deepseek/deepseek-r1",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Modelo da DeepSeek especializado em raciocínio com capacidade de reflexão avançada. Ideal para resolução de problemas complexos e análises aprofundadas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.5,
    outputCost: 3.0
  }
}

// DeepSeek R1 0528
const DEEPSEEK_R1_0528: OpenRouterLLM = {
  modelId: "deepseek/deepseek-r1-0528",
  modelName: "DeepSeek R1 0528",
  provider: "openrouter-deepseek",
  hostedId: "deepseek/deepseek-r1-0528",
  platformLink: OPENROUTER_PLATFORM_LINK,
  imageInput: false,
  webSearchSupported: true,
  hasReflection: true,
  description:
    "Modelo de raciocínio com capacidade de reflexão avançada. Ideal para resolução de problemas complexos e análises aprofundadas.",
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.5,
    outputCost: 3.0
  }
}

export const OPENROUTER_LLM_LIST: OpenRouterLLM[] = [
  CLAUDE_3_5_HAIKU_OR,
  CLAUDE_3_7_SONNET,
  CLAUDE_3_7_SONNET_THINKING,
  CLAUDE_SONNET_4,
  CLAUDE_SONNET_4_THINKING,
  MISTRAL_DEVSTRAL_SMALL,
  AMAZON_NOVA_PRO_V1,
  PHI_4_MULTIMODAL,
  PHI_4_REASONING_PLUS,
  MINIMAX,
  MINIMAX_M1,
  MINIMAX_M1_EXTENDED,
  GEMINI_2_5_PRO,
  LLAMA_4_MAVERICK,
  LLAMA_4_SCOUT,
  PERPLEXITY_SONAR_REASONING_PRO,
  PERPLEXITY_SONAR_REASONING,
  PERPLEXITY_SONAR_DEEP_RESEARCH,
  QWEN_TURBO,
  QWEN_PLUS,
  QWEN2_5_VL_72B,
  O3_MINI,
  QWEN_VL_PLUS,
  O3_MINI_HIGH,
  GEMINI_2_0_FLASH,
  QWEN2_5_32B_INSTRUCT,
  QWQ_32B,
  QWQ_32B_FREE,
  NVIDIA_LLAMA_31_NEMOTRON,
  NVIDIA_LLAMA_33_NEMOTRON,
  O4_MINI,
  O4_MINI_HIGH,
  GPT4O_MINI,
  GPT4_1,
  GPT4_1_MINI,
  GPT4_1_NANO,
  GPT4O_MINI_SEARCH_PREVIEW,
  COHERE_COMMAND_R,
  COHERE_COMMAND_R7B,
  COHERE_COMMAND_R_PLUS,
  ARCEE_CALLER_LARGE,
  ARCEE_MAESTRO_REASONING,
  ARCEE_SPOTLIGHT,
  ARCEE_VIRTUOSO_LARGE,
  GEMINI_2_5_FLASH,
  GEMINI_2_5_FLASH_LITE_PREVIEW,
  DEEPSEEK_CHAT_V3,
  DEEPSEEK_R1,
  QWEN3_235B_A22B,
  GROK_3_MINI_BETA,
  GROK_3_BETA,
  MISTRAL_MEDIUM_3,
  MAGISTRAL_SMALL_2506,
  MAGISTRAL_MEDIUM_2506,
  MAGISTRAL_MEDIUM_2506_THINKING,
  DEEPSEEK_R1_0528,
  AMAZON_NOVA_LITE
]
