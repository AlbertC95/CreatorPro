/**
 * Gemini Controller - Maneja requests de Gemini API
 */

const GeminiService = require('../services/gemini.service');

class GeminiController {
    constructor() {
        this.geminiService = new GeminiService(process.env.GEMINI_API_KEY);
    }

    /**
     * POST /api/generate
     * Generar imagen con Gemini
     */
    async generateImage(req, res) {
        try {
            const { payload } = req.body;

            if (!payload) {
                return res.status(400).json({
                    success: false,
                    error: 'Payload requerido'
                });
            }

            const imageUrl = await this.geminiService.generateImage(payload);

            res.json({
                success: true,
                imageUrl
            });
        } catch (error) {
            console.error('Error en generateImage:', error);
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    /**
     * POST /api/enhance
     * Mejorar prompt
     */
    async enhancePrompt(req, res) {
        try {
            const { prompt } = req.body;

            if (!prompt) {
                return res.status(400).json({
                    success: false,
                    error: 'Prompt requerido'
                });
            }

            const enhancedPrompt = `Eres un experto en prompts de IA. Genera 3 variaciones mejoradas del siguiente prompt para generar imágenes. Responde SOLO con un JSON array de strings.

Prompt original: ${prompt}

Responde en formato: ["variación 1", "variación 2", "variación 3"]`;

            const variations = await this.geminiService.generateText(enhancedPrompt, null, true);

            res.json({
                success: true,
                variations: Array.isArray(variations) ? variations : [variations]
            });
        } catch (error) {
            console.error('Error en enhancePrompt:', error);
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    /**
     * POST /api/analyze
     * Analizar imagen (Visual Muse)
     */
    async analyzeImage(req, res) {
        try {
            const { imageData } = req.body;

            if (!imageData) {
                return res.status(400).json({
                    success: false,
                    error: 'imageData requerido'
                });
            }

            const prompt = `Analiza esta imagen y genera un prompt creativo para recrearla con IA. 
Describe: estilo artístico, iluminación, colores, composición, mood.
Responde en español, máximo 100 palabras.`;

            const analysis = await this.geminiService.generateText(prompt, imageData);

            res.json({
                success: true,
                analysis
            });
        } catch (error) {
            console.error('Error en analyzeImage:', error);
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
}

module.exports = new GeminiController();
