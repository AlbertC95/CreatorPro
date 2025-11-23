/**
 * Gemini Service - Proxy para Gemini API
 * Maneja todas las llamadas a la API de Gemini
 */

const axios = require('axios');

const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta';
const MODEL_IMAGE_ID = 'gemini-3-pro-image-preview';
const MODEL_TEXT_ID = 'gemini-3-pro-preview';

class GeminiService {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    /**
     * Generar imagen con Gemini
     */
    async generateImage(payload) {
        try {
            const url = `${GEMINI_BASE_URL}/models/${MODEL_IMAGE_ID}:generateContent?key=${this.apiKey}`;

            const response = await axios.post(url, payload, {
                headers: { 'Content-Type': 'application/json' },
                timeout: 60000, // 60 segundos
            });

            const base64Data = response.data?.candidates?.[0]?.content?.parts?.find(
                p => p.inlineData
            )?.inlineData?.data;

            if (!base64Data) {
                throw new Error('No se pudo generar la imagen');
            }

            return `data:image/png;base64,${base64Data}`;
        } catch (error) {
            console.error('Error en generateImage:', error.message);
            throw new Error(`Error al generar imagen: ${error.message}`);
        }
    }

    /**
     * Generar texto con Gemini
     */
    async generateText(prompt, imageData = null, returnJson = false) {
        try {
            const url = `${GEMINI_BASE_URL}/models/${MODEL_TEXT_ID}:generateContent?key=${this.apiKey}`;

            const parts = [{ text: prompt }];
            if (imageData) {
                // Remover prefijo data:image si existe
                const base64 = imageData.includes(',') ? imageData.split(',')[1] : imageData;
                parts.push({
                    inlineData: {
                        mimeType: 'image/png',
                        data: base64
                    }
                });
            }

            const payload = {
                contents: [{ parts }]
            };

            const response = await axios.post(url, payload, {
                headers: { 'Content-Type': 'application/json' },
                timeout: 30000,
            });

            const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!text) {
                throw new Error('No se pudo generar el texto');
            }

            if (returnJson) {
                // Intentar parsear como JSON
                try {
                    const cleanJson = text.replace(/```json|```/g, '').trim();
                    return JSON.parse(cleanJson);
                } catch {
                    return text;
                }
            }

            return text;
        } catch (error) {
            console.error('Error en generateText:', error.message);
            throw new Error(`Error al generar texto: ${error.message}`);
        }
    }
}

module.exports = GeminiService;
