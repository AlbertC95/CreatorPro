/**
 * ResultCard Component - Premium Design
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, MessageCircle, Download, Copy, Send, X } from 'lucide-react';
import { generateTextReal } from '../services/gemini';

export const ResultCard = ({ image, onDownload, apiKey }) => {
    const [activeTab, setActiveTab] = useState('image');
    const [socialData, setSocialData] = useState(null);
    const [loadingSocial, setLoadingSocial] = useState(false);
    const [chatMessages, setChatMessages] = useState([{ role: 'model', text: '¡Hola! ¿Quién eres tú?' }]);
    const [chatInput, setChatInput] = useState('');
    const [isChatting, setIsChatting] = useState(false);

    const handleGenerateSocial = async () => {
        if (socialData) { setActiveTab('social'); return; }
        if (activeTab === 'social') { setActiveTab('image'); return; }
        if (!apiKey) return alert("Configura tu API Key primero.");

        setLoadingSocial(true);
        setActiveTab('social');

        try {
            const prompt = `Analiza esta imagen. Genera JSON: "instagram" (caption), "linkedin" (post), "hashtags" (10). Solo JSON.`;
            const response = await generateTextReal(prompt, image.url, apiKey, true);
            setSocialData(JSON.parse(response.replace(/```json|```/g, '').trim()));
        } catch {
            setSocialData({ instagram: "Error", linkedin: "Error", hashtags: "#error" });
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
            const prompt = `Eres el personaje de la imagen. Responde breve en español.\n${context}\nUsuario: ${userMsg}\nPersonaje:`;
            const response = await generateTextReal(prompt, image.url, apiKey);
            setChatMessages(prev => [...prev, { role: 'model', text: response }]);
        } catch {
            setChatMessages(prev => [...prev, { role: 'model', text: "(Error...)" }]);
        } finally {
            setIsChatting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl"
        >
            {/* Main Content */}
            <div className="absolute inset-0">
                {activeTab === 'image' && (
                    <img src={image.url} alt="Result" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                )}

                {activeTab === 'social' && (
                    <div className="p-5 h-full overflow-y-auto custom-scrollbar bg-neutral-900/95 backdrop-blur-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-white font-bold text-sm flex gap-2 items-center">
                                <Share2 size={14} className="text-amber-400" />
                                Social Kit
                            </h4>
                            <button onClick={() => setActiveTab('image')} className="text-neutral-500 hover:text-white">
                                <X size={14} />
                            </button>
                        </div>
                        {loadingSocial ? (
                            <div className="h-40 flex flex-col items-center justify-center text-amber-400">
                                <div className="animate-spin w-6 h-6 border-2 border-current border-t-transparent rounded-full mb-2" />
                                <p className="text-[10px] uppercase tracking-widest">Analizando...</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {['instagram', 'linkedin', 'hashtags'].map((key) => (
                                    <div key={key} className="p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-[10px] font-bold text-amber-400 uppercase">{key}</span>
                                            <button onClick={() => navigator.clipboard.writeText(socialData?.[key])} className="text-neutral-500 hover:text-white">
                                                <Copy size={12} />
                                            </button>
                                        </div>
                                        <p className={`text-[11px] leading-relaxed ${key === 'hashtags' ? 'text-blue-400 font-mono' : 'text-neutral-300'}`}>
                                            {socialData?.[key]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'chat' && (
                    <div className="flex flex-col h-full bg-neutral-900/95 backdrop-blur-xl">
                        <div className="p-4 border-b border-white/5 flex justify-between items-center">
                            <h4 className="text-white font-bold text-sm flex gap-2 items-center">
                                <MessageCircle size={14} className="text-purple-400" />
                                Chat
                            </h4>
                            <button onClick={() => setActiveTab('image')} className="text-neutral-500 hover:text-white">
                                <X size={14} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                            {chatMessages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-xs ${
                                        msg.role === 'user' ? 'bg-blue-500 text-white rounded-tr-none' : 'bg-white/10 text-white rounded-tl-none'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isChatting && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none">
                                        <div className="animate-pulse w-4 h-4 bg-neutral-600 rounded-full" />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-3 border-t border-white/5 flex gap-2">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                                placeholder="Escribe..."
                                className="flex-1 input-premium text-xs"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleSendChat}
                                disabled={isChatting}
                                className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black disabled:opacity-50"
                            >
                                <Send size={14} />
                            </motion.button>
                        </div>
                    </div>
                )}
            </div>

            {/* Control Buttons */}
            <div className="absolute top-3 right-3 z-10 flex gap-2">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(activeTab === 'chat' ? 'image' : 'chat')}
                    className={`p-2.5 rounded-xl backdrop-blur-md border transition-all ${
                        activeTab === 'chat' ? 'bg-purple-500 text-white border-purple-500 shadow-lg shadow-purple-500/30' : 'bg-black/40 text-white border-white/10 hover:bg-black/60'
                    }`}
                >
                    <MessageCircle size={14} />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGenerateSocial}
                    className={`p-2.5 rounded-xl backdrop-blur-md border transition-all ${
                        activeTab === 'social' ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/30' : 'bg-black/40 text-white border-white/10 hover:bg-black/60'
                    }`}
                >
                    <Share2 size={14} />
                </motion.button>
            </div>

            {/* Download Overlay */}
            {activeTab === 'image' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                    <p className="text-white/80 text-xs mb-3 line-clamp-1">{image.promptId}</p>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onDownload(image)}
                        className="w-full py-3 rounded-xl bg-white hover:bg-neutral-100 text-black font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                        <Download size={16} />
                        Guardar 4K
                    </motion.button>
                </div>
            )}
        </motion.div>
    );
};
