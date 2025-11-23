/**
 * API Client - Cliente para comunicarse con el backend
 * Maneja todas las llamadas al backend API
 */

import { APP_CONFIG } from '../config/app.config';

const API_BASE_URL = APP_CONFIG.backend.url;

class ApiClient {
    /**
     * Generar imagen usando el backend
     */
    async generateImage(payload) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ payload }),
            });

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.error || 'Error al generar imagen');
            }

            return data.imageUrl;
        } catch (error) {
            console.error('Error en generateImage:', error);
            throw error;
        }
    }

    /**
     * Generar texto usando el backend
     */
    async generateText(prompt, imageData = null, returnJson = false) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/analyze`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt,
                    imageData,
                    returnJson
                }),
            });

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.error || 'Error al generar texto');
            }

            return data.analysis;
        } catch (error) {
            console.error('Error en generateText:', error);
            throw error;
        }
    }

    /**
     * Mejorar prompt usando el backend
     */
    async enhancePrompt(prompt) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/enhance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.error || 'Error al mejorar prompt');
            }

            return data.variations;
        } catch (error) {
            console.error('Error en enhancePrompt:', error);
            throw error;
        }
    }

    /**
     * Health check del backend
     */
    async healthCheck() {
        try {
            const response = await fetch(`${API_BASE_URL}/api/health`);
            const data = await response.json();
            return data.status === 'ok';
        } catch (error) {
            console.error('Backend no disponible:', error);
            return false;
        }
    }
}

export const apiClient = new ApiClient();
