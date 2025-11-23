// --- CONSTANTES DE MODELOS (GEMINI 3.0 PRO STACK) ---
const MODEL_IMAGE_ID = "gemini-3-pro-image-preview";
const MODEL_TEXT_ID = "gemini-3-pro-preview";

// --- UTILIDADES ---

export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

const fetchWithRetry = (url, options, retries = 3, backoff = 1000) => {
    return new Promise((resolve, reject) => {
        const attempt = async (retryCount, delay) => {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    if (response.status === 401) reject(new Error("Error 401: Verifica tu API Key."));
                    else if ((response.status === 429 || response.status === 503) && retryCount > 0) {
                        setTimeout(() => attempt(retryCount - 1, delay * 2), delay);
                    } else reject(new Error(`API Error ${response.status}`));
                } else resolve(response.json());
            } catch (error) {
                if (retryCount > 0) setTimeout(() => attempt(retryCount - 1, delay * 2), delay);
                else reject(error);
            }
        };
        attempt(retries, backoff);
    });
};

// --- MOTORES IA ---

export const generateImageReal = async (payload, customApiKey) => {
    const apiKey = customApiKey || "";
    if (!apiKey) throw new Error("Falta API Key 🔑");
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_IMAGE_ID}:generateContent?key=${apiKey}`;
    const result = await fetchWithRetry(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const base64Data = result?.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
    if (base64Data) return `data:image/png;base64,${base64Data}`;
    throw new Error("Fallo en generación visual.");
};

export const generateTextReal = async (prompt, imageBase64, customApiKey, jsonMode = false) => {
    const apiKey = customApiKey || "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_TEXT_ID}:generateContent?key=${apiKey}`;
    const parts = [{ text: prompt }];
    if (imageBase64) parts.push({ inlineData: { mimeType: "image/png", data: imageBase64.split(',')[1] } });
    const payload = { contents: [{ parts }], generationConfig: jsonMode ? { responseMimeType: "application/json" } : undefined };
    const result = await fetchWithRetry(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    return result?.candidates?.[0]?.content?.parts?.[0]?.text || "Error en texto.";
};
