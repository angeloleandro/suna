'use client';

import { useSubscription } from '@/hooks/react-query/subscriptions/use-subscriptions';
import { useState, useEffect, useMemo } from 'react';
import { isLocalMode } from '@/lib/config';
import { useAvailableModels } from '@/hooks/react-query/subscriptions/use-model';
import { OPENROUTER_LLM_LIST } from '@/data/openrouter-models';

export const STORAGE_KEY_MODEL = 'suna-preferred-model-v2';
export const STORAGE_KEY_CUSTOM_MODELS = 'customModels';
export const DEFAULT_PREMIUM_MODEL_ID = 'anthropic/claude-sonnet-4';
export const DEFAULT_FREE_MODEL_ID = 'deepseek/deepseek-chat-v3-0324';

export type SubscriptionStatus = 'no_subscription' | 'active';

export interface ModelOption {
  id: string;
  label: string;
  requiresSubscription: boolean;
  description?: string;
  top?: boolean;
  isCustom?: boolean;
  priority?: number;
}

export interface CustomModel {
  id: string;
  label: string;
}

// SINGLE SOURCE OF TRUTH for all model data - Using OpenRouter models
export const MODELS = OPENROUTER_LLM_LIST.reduce((acc, model) => {
  const isFree = model.pricing.inputCost === 0 && model.pricing.outputCost === 0;
  const priority = isFree ? 70 : 
                  model.hasReflection ? 95 : 
                  model.imageInput ? 85 : 80;
  
  acc[model.modelId] = {
    tier: isFree ? 'free' : 'premium',
    priority,
    recommended: model.hasReflection || model.modelName.includes('Claude') || model.modelName.includes('GPT'),
    lowQuality: false,
    description: model.description,
    imageInput: model.imageInput,
    webSearchSupported: model.webSearchSupported,
    hasReflection: model.hasReflection || false,
    pricing: model.pricing
  };
  return acc;
}, {} as Record<string, any>);

// Model tier definitions
export const MODEL_TIERS = {
  premium: {
    requiresSubscription: true,
    baseDescription: 'Advanced model with superior capabilities'
  },
  free: {
    requiresSubscription: false,
    baseDescription: 'Available to all users'
  },
  custom: {
    requiresSubscription: false,
    baseDescription: 'User-defined model'
  }
};

// Helper to check if a user can access a model based on subscription status
export const canAccessModel = (
  subscriptionStatus: SubscriptionStatus,
  requiresSubscription: boolean,
): boolean => {
  if (isLocalMode()) {
    return true;
  }
  return subscriptionStatus === 'active' || !requiresSubscription;
};

// Helper to format a model name for display
export const formatModelName = (name: string): string => {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Add openrouter/ prefix to custom models
export const getPrefixedModelId = (modelId: string, isCustom: boolean): string => {
  if (isCustom && !modelId.startsWith('openrouter/')) {
    return `openrouter/${modelId}`;
  }
  return modelId;
};

// Helper to get custom models from localStorage
export const getCustomModels = (): CustomModel[] => {
  if (!isLocalMode() || typeof window === 'undefined') return [];
  
  try {
    const storedModels = localStorage.getItem(STORAGE_KEY_CUSTOM_MODELS);
    if (!storedModels) return [];
    
    const parsedModels = JSON.parse(storedModels);
    if (!Array.isArray(parsedModels)) return [];
    
    return parsedModels
      .filter((model: any) => 
        model && typeof model === 'object' && 
        typeof model.id === 'string' && 
        typeof model.label === 'string');
  } catch (e) {
    console.error('Error parsing custom models:', e);
    return [];
  }
};

// Helper to save model preference to localStorage safely
const saveModelPreference = (modelId: string): void => {
  try {
    localStorage.setItem(STORAGE_KEY_MODEL, modelId);
  } catch (error) {
    console.warn('Failed to save model preference to localStorage:', error);
  }
};

export const useModelSelection = () => {
  const [selectedModel, setSelectedModel] = useState(DEFAULT_FREE_MODEL_ID);
  const [customModels, setCustomModels] = useState<CustomModel[]>([]);
  
  const { data: subscriptionData } = useSubscription();
  const { data: modelsData, isLoading: isLoadingModels } = useAvailableModels({
    refetchOnMount: false,
  });
  
  const subscriptionStatus: SubscriptionStatus = subscriptionData?.status === 'active' 
    ? 'active' 
    : 'no_subscription';

  // Function to refresh custom models from localStorage
  const refreshCustomModels = () => {
    if (isLocalMode() && typeof window !== 'undefined') {
      const freshCustomModels = getCustomModels();
      setCustomModels(freshCustomModels);
    }
  };

  // Load custom models from localStorage
  useEffect(() => {
    refreshCustomModels();
  }, []);

  // Generate model options list with consistent structure - Using only OpenRouter models
  const MODEL_OPTIONS = useMemo(() => {
    // Convert OpenRouter models to the expected format
    let models = OPENROUTER_LLM_LIST.map(model => {
      const modelData = MODELS[model.modelId] || {};
      const isFree = model.pricing.inputCost === 0 && model.pricing.outputCost === 0;
      
      return {
        id: model.modelId,
        label: model.modelName,
        requiresSubscription: !isFree,
        description: model.description,
        top: modelData.priority >= 90,
        priority: modelData.priority || 0,
        lowQuality: false,
        recommended: modelData.recommended || false,
        imageInput: model.imageInput,
        webSearchSupported: model.webSearchSupported,
        hasReflection: model.hasReflection || false,
        pricing: model.pricing
      };
    });

    // Add custom models if in local mode
    if (isLocalMode() && customModels.length > 0) {
      const customModelOptions = customModels.map(model => ({
        id: model.id,
        label: model.label || formatModelName(model.id),
        requiresSubscription: false,
        description: MODEL_TIERS.custom.baseDescription,
        top: false,
        isCustom: true,
        priority: 30,
        lowQuality: false,
        recommended: false,
        imageInput: false,
        webSearchSupported: true,
        hasReflection: false,
        pricing: {
          currency: "USD",
          unit: "1M tokens",
          inputCost: 0,
          outputCost: 0
        }
      }));
      
      models = [...models, ...customModelOptions];
    }

    // Sort models: free first, then by priority, then by name
    const sortedModels = models.sort((a, b) => {
      // First by free/premium status (free first)
      if (a.requiresSubscription !== b.requiresSubscription) {
        return a.requiresSubscription ? 1 : -1;
      }

      // Then by priority (higher first)
      if (a.priority !== b.priority) {
        return b.priority - a.priority;
      }
      
      // Finally by name
      return a.label.localeCompare(b.label);
    });

    return sortedModels;
  }, [modelsData, isLoadingModels, customModels]);

  // Get filtered list of models the user can access (no additional sorting)
  const availableModels = useMemo(() => {
    return isLocalMode() 
      ? MODEL_OPTIONS 
      : MODEL_OPTIONS.filter(model => 
          canAccessModel(subscriptionStatus, model.requiresSubscription)
        );
  }, [MODEL_OPTIONS, subscriptionStatus]);

  // Initialize selected model from localStorage or defaults
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const savedModel = localStorage.getItem(STORAGE_KEY_MODEL);
      
      // Local mode - allow any model
      if (isLocalMode()) {
        if (savedModel && MODEL_OPTIONS.find(option => option.id === savedModel)) {
          setSelectedModel(savedModel);
        } else {
          setSelectedModel(DEFAULT_PREMIUM_MODEL_ID);
          saveModelPreference(DEFAULT_PREMIUM_MODEL_ID);
        }
        return;
      }
      
      // Premium subscription - ALWAYS use premium model
      if (subscriptionStatus === 'active') {
        // If they had a premium model saved and it's still valid, use it
        const hasSavedPremiumModel = savedModel && 
          MODEL_OPTIONS.find(option => 
            option.id === savedModel && 
            option.requiresSubscription && 
            canAccessModel(subscriptionStatus, true)
          );
        
        // Otherwise use the default premium model
        if (hasSavedPremiumModel) {
          setSelectedModel(savedModel!);
        } else {
          setSelectedModel(DEFAULT_PREMIUM_MODEL_ID);
          saveModelPreference(DEFAULT_PREMIUM_MODEL_ID);
        }
        return;
      }
      
      // No subscription - use saved model if accessible (free tier), or default free
      if (savedModel) {
        const modelOption = MODEL_OPTIONS.find(option => option.id === savedModel);
        if (modelOption && canAccessModel(subscriptionStatus, modelOption.requiresSubscription)) {
          setSelectedModel(savedModel);
        } else {
          setSelectedModel(DEFAULT_FREE_MODEL_ID);
          saveModelPreference(DEFAULT_FREE_MODEL_ID);
        }
      } else {
        setSelectedModel(DEFAULT_FREE_MODEL_ID);
        saveModelPreference(DEFAULT_FREE_MODEL_ID);
      }
    } catch (error) {
      console.warn('Failed to load preferences from localStorage:', error);
      setSelectedModel(DEFAULT_FREE_MODEL_ID);
    }
  }, [subscriptionStatus, MODEL_OPTIONS]);

  // Handle model selection change
  const handleModelChange = (modelId: string) => {
    console.log('handleModelChange', modelId);
    
    // Refresh custom models from localStorage to ensure we have the latest
    if (isLocalMode()) {
      refreshCustomModels();
    }
    
    // First check if it's a custom model in local mode
    const isCustomModel = isLocalMode() && customModels.some(model => model.id === modelId);
    
    // Then check if it's in standard MODEL_OPTIONS
    const modelOption = MODEL_OPTIONS.find(option => option.id === modelId);
    
    // Check if model exists in either custom models or standard options
    if (!modelOption && !isCustomModel) {
      console.warn('Model not found in options:', modelId, MODEL_OPTIONS, isCustomModel, customModels);
      
      // Reset to default model when the selected model is not found
      const defaultModel = isLocalMode() ? DEFAULT_PREMIUM_MODEL_ID : DEFAULT_FREE_MODEL_ID;
      setSelectedModel(defaultModel);
      saveModelPreference(defaultModel);
      return;
    }

    // Check access permissions (except for custom models in local mode)
    if (!isCustomModel && !isLocalMode() && 
        !canAccessModel(subscriptionStatus, modelOption?.requiresSubscription ?? false)) {
      console.warn('Model not accessible:', modelId);
      return;
    }
    console.log('setting selected model', modelId);
    setSelectedModel(modelId);
    saveModelPreference(modelId);
  };

  // Get the actual model ID to send to the backend
  const getActualModelId = (modelId: string): string => {
    // No need for automatic prefixing in most cases - just return as is
    return modelId;
  };

  return {
    selectedModel,
    setSelectedModel: (modelId: string) => {
      handleModelChange(modelId);
    },
    subscriptionStatus,
    availableModels,
    allModels: MODEL_OPTIONS,  // Already pre-sorted
    customModels,
    getActualModelId,
    refreshCustomModels,
    canAccessModel: (modelId: string) => {
      if (isLocalMode()) return true;
      const model = MODEL_OPTIONS.find(m => m.id === modelId);
      return model ? canAccessModel(subscriptionStatus, model.requiresSubscription) : false;
    },
    isSubscriptionRequired: (modelId: string) => {
      return MODEL_OPTIONS.find(m => m.id === modelId)?.requiresSubscription || false;
    }
  };
};

// Export the hook but not any sorting logic - sorting is handled internally