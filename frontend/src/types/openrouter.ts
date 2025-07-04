export interface OpenRouterLLM {
  modelId: string;
  modelName: string;
  provider: string;
  hostedId: string;
  platformLink: string;
  imageInput: boolean;
  webSearchSupported: boolean;
  hasReflection?: boolean;
  description: string;
  pricing: {
    currency: string;
    unit: string;
    inputCost: number;
    outputCost: number;
  };
}
