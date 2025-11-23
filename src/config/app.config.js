/** Configuración centralizada de la aplicación */
export const APP_CONFIG = {
    // Información de la app
    name: 'Creator Pro',
    version: '2.0.0',
    description: 'Generación de imágenes profesionales con Gemini 3 Pro',

    // API Configuration
    api: {
        baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
        timeout: 30000,
        text: 'gemini-3-pro-preview',
    },

    // Backend Configuration
    backend: {
        enabled: import.meta.env.VITE_USE_BACKEND === 'true',
        url: import.meta.env.VITE_BACKEND_URL || (import.meta.env.PROD ? '' : 'http://localhost:3000'),
        healthCheck: '/api/health',
    },

    maxRetries: 3,
    retryDelay: 1000,

    // Planes y límites
    plans: {
        free: {
            id: 'free',
            name: 'Free',
            price: 0,
            credits: 5,
            features: [
                '5 generaciones/mes',
                'Resolución 1024x1024',
                '3 templates básicos',
                'Watermark incluido',
                'Historial limitado (10 últimas)',
            ],
            limits: {
                generationsPerMonth: 5,
                maxResolution: 1024,
                historyLimit: 10,
                templatesAccess: ['professionalPhotoshoot', 'avatarStudio', 'anime'],
            },
        },
        pro: {
            id: 'pro',
            name: 'Pro',
            price: 9.99,
            credits: 100,
            features: [
                '100 generaciones/mes',
                'Resolución 2048x2048 (4K)',
                'Todos los templates',
                'Sin watermark',
                'Historial ilimitado',
                'Descarga de prompts',
                'Soporte prioritario',
            ],
            limits: {
                generationsPerMonth: 100,
                maxResolution: 2048,
                historyLimit: -1,
                templatesAccess: 'all',
            },
        },
        studio: {
            id: 'studio',
            name: 'Studio',
            price: 29.99,
            credits: -1,
            features: [
                'Generaciones ilimitadas',
                'Resolución 4096x4096 (8K)',
                'Upscaling 2x',
                'Batch processing (50 imágenes)',
                'API access',
                'Video generation (beta)',
                'Licencia comercial',
            ],
            limits: {
                generationsPerMonth: -1,
                maxResolution: 4096,
                historyLimit: -1,
                templatesAccess: 'all',
                batchSize: 50,
            },
        },
    },

    // Feature flags
    features: {
        auth: false,
        payments: false,
        videoGeneration: false,
        marketplace: false,
        collaboration: false,
        batchProcessing: false,
    },

    // Límites de archivos
    upload: {
        maxFileSize: 10 * 1024 * 1024,
        acceptedTypes: ['image/jpeg', 'image/png', 'image/webp'],
        maxBatchSize: 50,
    },

    // URLs
    urls: {
        homepage: 'https://creatorpro.app',
        docs: 'https://docs.creatorpro.app',
        support: 'mailto:support@creatorpro.app',
        github: 'https://github.com/yourusername/creator-pro',
    },
};

// Helper para verificar si una feature está activa
export const isFeatureEnabled = (featureName) => {
    return APP_CONFIG.features[featureName] === true;
};

// Helper para obtener límites del plan actual
export const getPlanLimits = (planId = 'free') => {
    return APP_CONFIG.plans[planId]?.limits || APP_CONFIG.plans.free.limits;
};
