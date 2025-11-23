import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, MessageCircle, Download, Copy, Send, Sparkles, X } from 'lucide-react';
import { generateTextReal } from '../services/gemini';

export const ResultCard = ({ image, onDownload, apiKey }) => {
    const [activeTab, setActiveTab] = useState('image');
    const [socialData, setSocialData] = useState(null);
    const [loadingSocial, setLoadingSocial] = useState(false);
    const [chatMessages, setChatMessages] = useState([{ role: 'model', text: '¡Hola! ¿Quién eres tú y qué hacemos aquí?' }]);
    const [chatInput, setChatInput] = useState('');
    const [isChatting, setIsChatting] = useState(false);

    const handleGenerateSocial = async () => {
        if (socialData) { setActiveTab('social'); return; }
        if (activeTab === 'social') { setActiveTab('image'); return; }
        if (!apiKey) return alert("Configura tu API Key primero.");

        setLoadingSocial(true);
        setActiveTab('social');

        try {
            const prompt = `Actúa como un experto en redes sociales. Analiza esta imagen generada. Genera un JSON con: "instagram" (caption divertido), "linkedin" (post profesional), "hashtags" (10 tags). Responde SOLO con el JSON.`;
            const response = await generateTextReal(prompt, image.url, apiKey, true);
            const cleanJson = response.replace(/```json|```/g, '').trim();
            setSocialData(JSON.parse(cleanJson));
        } catch (err) {
            setSocialData({ instagram: "Error al generar.", linkedin: "Intenta de nuevo.", hashtags: "#error" });
        } finally {
            setLoadingSocial(false);
        }
    };

    const handleSendChat = async () => {
        if (!chatInput.trim() || !apiKey) return;
        const userMsg = chatInput;
        setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setChatInput('');
        setIsChatting(true);

        try {
            const context = chatMessages.map(m => `${m.role === 'user' ? 'Usuario' : 'Personaje'}: ${m.text}`).join('\n');
            const prompt = `
            IMAGEN CONTEXTO: El usuario está viendo la imagen adjunta. Tú eres el personaje que aparece en ella.
            INSTRUCCIONES DE ROLEPLAY:
            1. Eres el personaje de la imagen. Adopta su personalidad basada en su ropa, entorno y estilo.
            2. Mantén respuestas breves, ingeniosas y en personaje.
            3. Idioma: Español.
            HISTORIAL:
            ${context}
            Usuario: ${userMsg}
            Personaje:`;

            const response = await generateTextReal(prompt, image.url, apiKey);
            setChatMessages(prev => [...prev, { role: 'model', text: response }]);
        } catch (error) {
            setChatMessages(prev => [...prev, { role: 'model', text: "(El personaje está distraído... intenta de nuevo)" }]);
        } finally {
            setIsChatting(false);
        }
    };

    const copyToClipboard = (text) => navigator.clipboard.writeText(text);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 shadow-2xl ring-1 ring-white/5 hover:ring-yellow-500/50 transition-all"
        >
            {/* MAIN CONTENT AREA */}
            <div className="absolute inset-0 bg-gray-900">
                {activeTab === 'image' && <img src={image.url} alt="Result" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}

                {activeTab === 'social' && (
                    <div className="p-5 overflow-y-auto h-full styled-scrollbar bg-gray-900/95 backdrop-blur-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-white font-bold text-xs flex gap-2 items-center uppercase tracking-wider"><Share2 size={14} /> Social Kit</h4>
                            <button onClick={() => setActiveTab('image')} className="text-gray-400 hover:text-white"><X size={14} /></button>
                        </div>
                        {loadingSocial ? (
                            <div className="h-40 flex flex-col items-center justify-center text-yellow-500">
                                <div className="animate-spin w-6 h-6 border-2 border-current border-t-transparent rounded-full mb-2"></div>
                                <p className="text-[10px] uppercase tracking-widest">Analizando...</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="bg-black/40 p-3 rounded-xl border border-gray-700/50">
                                    <div className="flex justify-between mb-2"><span className="text-[10px] text-pink-400 font-bold uppercase">Instagram</span><button onClick={() => copyToClipboard(socialData?.instagram)} className="text-gray-500 hover:text-white"><Copy size={12} /></button></div>
                                    <p className="text-[11px] text-gray-300 leading-relaxed">{socialData?.instagram}</p>
                                </div>
                                <div className="bg-black/40 p-3 rounded-xl border border-gray-700/50">
                                    <div className="flex justify-between mb-2"><span className="text-[10px] text-blue-400 font-bold uppercase">LinkedIn</span><button onClick={() => copyToClipboard(socialData?.linkedin)} className="text-gray-500 hover:text-white"><Copy size={12} /></button></div>
                                    <p className="text-[11px] text-gray-300 leading-relaxed">{socialData?.linkedin}</p>
                                </div>
                                <div className="bg-black/40 p-3 rounded-xl border border-gray-700/50">
                                    <div className="flex justify-between mb-2"><span className="text-[10px] text-gray-400 font-bold uppercase">Tags</span><button onClick={() => copyToClipboard(socialData?.hashtags)} className="text-gray-500 hover:text-white"><Copy size={12} /></button></div>
                                    <p className="text-[10px] text-blue-300 font-mono">{socialData?.hashtags}</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'chat' && (
                    <div className="flex flex-col h-full bg-gray-900/95 backdrop-blur-xl">
                        <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-black/20">
                            <h4 className="text-white font-bold text-xs flex gap-2 items-center uppercase tracking-wider"><MessageCircle size={14} /> Chat con Personaje</h4>
                            <button onClick={() => setActiveTab('image')} className="text-gray-400 hover:text-white"><X size={14} /></button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 styled-scrollbar">
                            {chatMessages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-gray-800 text-gray-200 rounded-tl-none'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isChatting && <div className="flex justify-start"><div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none"><div className="animate-pulse w-4 h-4 bg-gray-500 rounded-full"></div></div></div>}
                        </div>
                        <div className="p-3 border-t border-gray-800 flex gap-2 bg-black/40">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                                placeholder="Escribe algo..."
                                className="flex-1 bg-black/50 border border-gray-700 rounded-lg px-3 py-2 text-xs text-white focus:border-yellow-500 outline-none transition-colors"
                            />
                            <button onClick={handleSendChat} disabled={isChatting} className="p-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 disabled:opacity-50 transition-colors">
                                <Send size={14} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* CONTROLS OVERLAY */}
            <div className="absolute top-3 right-3 z-10 flex gap-2">
                <button onClick={() => setActiveTab(activeTab === 'chat' ? 'image' : 'chat')} className={`p-2 rounded-full backdrop-blur-md border transition-all ${activeTab === 'chat' ? 'bg-purple-500 text-white border-purple-500' : 'bg-black/40 text-white border-white/10 hover:bg-black/60'}`} title="Chatear">
                    <MessageCircle size={14} />
                </button>
                <button onClick={handleGenerateSocial} className={`p-2 rounded-full backdrop-blur-md border transition-all ${activeTab === 'social' ? 'bg-yellow-500 text-black border-yellow-500' : 'bg-black/40 text-white border-white/10 hover:bg-black/60'}`} title="Social Kit">
                    <Share2 size={14} />
                </button>
            </div>

            {/* HOVER DOWNLOAD OVERLAY */}
            {activeTab === 'image' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end pointer-events-none">
                    <div className="pointer-events-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-medium text-xs mb-3 line-clamp-1 opacity-80">{image.promptId}</p>
                        <button onClick={() => onDownload(image)} className="w-full py-2.5 bg-white text-black hover:bg-gray-200 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-lg">
                            <Download size={14} /> Guardar 4K
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    );
};
