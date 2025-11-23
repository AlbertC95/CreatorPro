import { useState, useCallback } from 'react';
import { generateImageReal, generateTextReal, toBase64 } from '../services/gemini';
import { getRealInstruction, TEMPLATES, DESTINATIONS_DATA } from '../services/prompts';

export const useGemini = (apiKey) => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [isEnhancing, setIsEnhancing] = useState(false);
    const [error, setError] = useState(null);
    const [generatedImages, setGeneratedImages] = useState([]);

    const generateSet = useCallback(async (uploadedImage, templateId, options, freePrompt, selectedLandmarks) => {
        if (!uploadedImage) return;
        if (!apiKey) { setError("⚠️ Falta API Key!"); return; }

        setIsGenerating(true);
        setGeneratedImages([]);
        setError(null);

        try {
            let promptsToRun = [];
            const imageWithoutPrefix = uploadedImage.split(',')[1];

            // Lógica de selección de Prompts
            if (templateId === 'customGen') {
                promptsToRun = Array(6).fill(0).map((_, i) => ({ id: `Versión ${i + 1}`, base: freePrompt }));
            } else if (templateId === 'travelPhotoshoot') {
                const currentDest = DESTINATIONS_DATA[options.styleParams.destination];
                const landmarksToUse = selectedLandmarks.length > 0 ? selectedLandmarks : currentDest.landmarks;
                promptsToRun = Array(6).fill(0).map((_, i) => {
                    const landmark = landmarksToUse[i % landmarksToUse.length];
                    return { id: landmark, base: `Photo taken at ${landmark}, iconic view.` };
                });
            } else {
                promptsToRun = TEMPLATES[templateId].prompts;
            }

            // Ejecutar en paralelo (limitado por el navegador, pero iniciamos todas)
            const promises = promptsToRun.map(async (prompt) => {
                const instruction = getRealInstruction(templateId, prompt, options);
                const payload = { contents: [{ parts: [{ text: instruction }, { inlineData: { mimeType: "image/png", data: imageWithoutPrefix } }] }] };

                try {
                    const imageUrl = await generateImageReal(payload, apiKey);
                    setGeneratedImages(prev => [...prev, { id: Math.random().toString(36), promptId: prompt.id, url: imageUrl }]);
                } catch (err) {
                    console.error(`Error generating ${prompt.id}:`, err);
                }
            });

            await Promise.all(promises);

        } catch (err) {
            setError(err.message || "Error desconocido en la generación.");
        } finally {
            setIsGenerating(false);
        }
    }, [apiKey]);

    const enhancePrompt = useCallback(async (currentPrompt) => {
        if (!apiKey) { setError("Falta API Key"); return null; }
        setIsEnhancing(true);
        try {
            const systemPrompt = `Genera 6 prompts visuales (inglés) basados en: "${currentPrompt}". Devuelve JSON array strings.`;
            const response = await generateTextReal(systemPrompt, null, apiKey, true);
            const variations = JSON.parse(response.replace(/```json|```/g, '').trim());
            return variations;
        } catch (err) {
            setError("Error al potenciar prompt.");
            return null;
        } finally {
            setIsEnhancing(false);
        }
    }, [apiKey]);

    const getVisualMuse = useCallback(async (image) => {
        if (!apiKey) { setError("Falta API Key"); return null; }
        setIsEnhancing(true);
        try {
            const prompt = `Analiza esta persona. Sugiere un concepto artístico único. Responde 1 frase en español.`;
            const text = await generateTextReal(prompt, image, apiKey);
            return text;
        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setIsEnhancing(false);
        }
    }, [apiKey]);

    return {
        isGenerating,
        isEnhancing,
        error,
        generatedImages,
        generateSet,
        enhancePrompt,
        getVisualMuse
    };
};
