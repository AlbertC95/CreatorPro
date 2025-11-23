/**
 * ResultCard Component - Versión Profesional
 * Migrado al nuevo sistema de diseño con componentes UI
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, MessageCircle, Download, Copy, Send, X } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';
import { cn } from '../utils/cn';
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
            className="relative group aspect-[3/4] rounded-2xl overflow-hidden bg-bg-elevated border border-border-primary shadow-xl hover:border-border-secondary transition-all"
        >
            {/* MAIN CONTENT AREA */}
            <div className="absolute inset-0 bg-bg-secondary">
                {activeTab === 'image' && <img src={image.url} alt="Result" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}

                {activeTab === 'social' && (
                    <div className="p-5 overflow-y-auto h-full custom-scrollbar bg-bg-secondary/95 backdrop-blur-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-text-primary font-bold text-xs flex gap-2 items-center uppercase tracking-wider">
                                <Share2 size={14} /> Social Kit
                            </h4>
                            <button onClick={() => setActiveTab('image')} className="text-text-tertiary hover:text-text-primary">
                                <X size={14} />
                            </button>
                        </div>
                        {loadingSocial ? (
                            <div className="h-40 flex flex-col items-center justify-center text-brand-primary">
                                <div className="animate-spin w-6 h-6 border-2 border-current border-t-transparent rounded-full mb-2"></div>
                                <p className="text-[10px] uppercase tracking-widest">Analizando...</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <Card padding="sm" className="bg-bg-primary/40">
                                    <div className="flex justify-between mb-2">
                                        <Badge variant="primary">Instagram</Badge>
                                        <button onClick={() => copyToClipboard(socialData?.instagram)} className="text-text-tertiary hover:text-text-primary">
                                            <Copy size={12} />
                                        </button>
                                    </div>
                                    <p className="text-[11px] text-text-secondary leading-relaxed">{socialData?.instagram}</p>
                                </Card>
                                <Card padding="sm" className="bg-bg-primary/40">
                                    <div className="flex justify-between mb-2">
                                        <Badge variant="primary">LinkedIn</Badge>
                                        <button onClick={() => copyToClipboard(socialData?.linkedin)} className="text-text-tertiary hover:text-text-primary">
                                            <Copy size={12} />
                                        </button>
                                    </div>
                                    <p className="text-[11px] text-text-secondary leading-relaxed">{socialData?.linkedin}</p>
                                </Card>
                                <Card padding="sm" className="bg-bg-primary/40">
                                    <div className="flex justify-between mb-2">
                                        <Badge variant="default">Tags</Badge>
                                        <button onClick={() => copyToClipboard(socialData?.hashtags)} className="text-text-tertiary hover:text-text-primary">
                                            <Copy size={12} />
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-blue-300 font-mono">{socialData?.hashtags}</p>
                                </Card>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'chat' && (
                    <div className="flex flex-col h-full bg-bg-secondary/95 backdrop-blur-xl">
                        <div className="p-4 border-b border-border-primary flex justify-between items-center bg-bg-primary/20">
                            <h4 className="text-text-primary font-bold text-xs flex gap-2 items-center uppercase tracking-wider">
                                <MessageCircle size={14} /> Chat con Personaje
                            </h4>
                            <button onClick={() => setActiveTab('image')} className="text-text-tertiary hover:text-text-primary">
                                <X size={14} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {chatMessages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={cn(
                                        'max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed',
                                        msg.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-tr-none'
                                            : 'bg-bg-tertiary text-text-primary rounded-tl-none'
                                    )}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isChatting && (
                                <div className="flex justify-start">
                                    <div className="bg-bg-tertiary p-3 rounded-2xl rounded-tl-none">
                                        <div className="animate-pulse w-4 h-4 bg-text-tertiary rounded-full"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-3 border-t border-border-primary flex gap-2 bg-bg-primary/40">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                                placeholder="Escribe algo..."
                                className="flex-1 bg-bg-primary/50 border border-border-primary rounded-lg px-3 py-2 text-xs text-text-primary focus:border-brand-primary outline-none transition-colors placeholder:text-text-tertiary"
                            />
                            <Button
                                onClick={handleSendChat}
                                disabled={isChatting}
                                size="sm"
                                variant="primary"
                                icon={Send}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* CONTROLS OVERLAY */}
            <div className="absolute top-3 right-3 z-10 flex gap-2">
                <button
                    onClick={() => setActiveTab(activeTab === 'chat' ? 'image' : 'chat')}
                    className={cn(
                        'p-2 rounded-full backdrop-blur-md border transition-all',
                        activeTab === 'chat'
                            ? 'bg-purple-500 text-white border-purple-500'
                            : 'bg-black/40 text-white border-white/10 hover:bg-black/60'
                    )}
                    title="Chatear"
                >
                    <MessageCircle size={14} />
                </button>
                <button
                    onClick={handleGenerateSocial}
                    className={cn(
                        'p-2 rounded-full backdrop-blur-md border transition-all',
                        activeTab === 'social'
                            ? 'bg-brand-primary text-black border-brand-primary'
                            : 'bg-black/40 text-white border-white/10 hover:bg-black/60'
                    )}
                    title="Social Kit"
                >
                    <Share2 size={14} />
                </button>
            </div>

            {/* HOVER DOWNLOAD OVERLAY */}
            {activeTab === 'image' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end pointer-events-none">
                    <div className="pointer-events-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-medium text-xs mb-3 line-clamp-1 opacity-80">{image.promptId}</p>
                        <Button
                            onClick={() => onDownload(image)}
                            variant="primary"
                            size="md"
                            icon={Download}
                            className="w-full bg-white text-black hover:bg-gray-200"
                        >
                            Guardar 4K
                        </Button>
                    </div>
                </div>
            )}
        </motion.div>
    );
};
