/**
 * Gemini Service Wrapper - Usa backend o API directa según configuración
 * Mantiene compatibilidad con código existente
 */

import { APP_CONFIG } from '../config/app.config';
import { apiClient } from './apiClient';
import { generateImageReal as generateImageDirect, generateTextReal as generateTextDirect } from './gemini';

/**
 * Generar imagen - usa backend si está habilitado, sino API directa
 */
export const generateImageReal = async (payload, apiKey, useBackend = APP_CONFIG.backend.enabled) => {
    if (useBackend) {
        // Usar backend
        return await apiClient.generateImage(payload);
    } else {
        // Usar API directa (modo legacy)
        return await generateImageDirect(payload, apiKey);
    }
};

/**
 * Generar texto - usa backend si está habilitado, sino API directa
 */
export const generateTextReal = async (prompt, imageData, apiKey, returnJson = false, useBackend = APP_CONFIG.backend.enabled) => {
    if (useBackend) {
        // Usar backend
        return await apiClient.generateText(prompt, imageData, returnJson);
    } else {
        // Usar API directa (modo legacy)
        return await generateTextDirect(prompt, imageData, apiKey, returnJson);
    }
};

// Re-exportar otras funciones que no cambian
export { toBase64 } from './gemini';
