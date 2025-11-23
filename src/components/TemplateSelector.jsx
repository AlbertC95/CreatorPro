import React from 'react';
import { motion } from 'framer-motion';
import { TEMPLATES } from '../services/prompts';
import { Sparkles, Camera, User, Zap, Box, Clock, Globe } from 'lucide-react';

const ICONS = {
    professionalPhotoshoot: Camera,
    avatarStudio: User,
    anime: Zap,
    figurine: Box,
    timeTravel: Clock,
    travelPhotoshoot: Globe,
    customGen: Sparkles
};

export const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
    return (
        <section>
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-xs text-gray-400 border border-gray-700">2</span>
                Estilo Creativo
            </h3>
            <div className="flex flex-col gap-3">
                {['professionalPhotoshoot', 'avatarStudio', 'anime', 'figurine', 'timeTravel', 'travelPhotoshoot', 'customGen'].map((id) => {
                    const t = TEMPLATES[id];
                    if (!t) return null;
                    const Icon = ICONS[t.id] || Sparkles;
                    const isSelected = selectedTemplate === t.id;

                    return (
                        <button
                            key={t.id}
                            onClick={() => setSelectedTemplate(t.id)}
                            className={`relative p-4 rounded-xl text-left border transition-all group ${isSelected ? 'bg-gray-800 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]' : 'bg-gray-900/40 border-gray-800 hover:bg-gray-800 hover:border-gray-600'}`}
                        >
                            {isSelected && (
                                <div
                                    className="absolute inset-0 border-2 border-yellow-500 rounded-xl pointer-events-none"
                                />
                            )}
                            <div className="flex items-start justify-between mb-2 relative z-10">
                                <div className={`p-2 rounded-lg ${isSelected ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-400 group-hover:text-white group-hover:bg-gray-700'} transition-colors`}>
                                    <Icon size={18} />
                                </div>
                                {t.isCustom && <span className="text-[10px] font-bold bg-purple-500 text-white px-2 py-0.5 rounded-full">PRO</span>}
                            </div>
                            <div className="relative z-10">
                                <div className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{t.name}</div>
                                <div className="text-[10px] text-gray-500 mt-1 line-clamp-1">{t.desc}</div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};
