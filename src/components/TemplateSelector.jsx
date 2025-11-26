/**
 * TemplateSelector Component - Premium Visual Design
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Camera, Box, Sparkles, Gem, Clock, Plane, Wand2,
    Check
} from 'lucide-react';
import { TEMPLATES } from '../services/prompts';

// Template visual config
const TEMPLATE_CONFIG = {
    professionalPhotoshoot: {
        icon: Camera,
        gradient: 'from-amber-400 via-orange-500 to-red-500',
        glow: 'shadow-orange-500/40',
        bg: 'bg-gradient-to-br from-amber-500/10 to-orange-500/5',
    },
    avatarStudio: {
        icon: Box,
        gradient: 'from-violet-400 via-purple-500 to-fuchsia-500',
        glow: 'shadow-purple-500/40',
        bg: 'bg-gradient-to-br from-violet-500/10 to-purple-500/5',
    },
    anime: {
        icon: Sparkles,
        gradient: 'from-pink-400 via-rose-500 to-red-500',
        glow: 'shadow-pink-500/40',
        bg: 'bg-gradient-to-br from-pink-500/10 to-rose-500/5',
    },
    figurine: {
        icon: Gem,
        gradient: 'from-cyan-400 via-teal-500 to-emerald-500',
        glow: 'shadow-cyan-500/40',
        bg: 'bg-gradient-to-br from-cyan-500/10 to-teal-500/5',
    },
    timeTravel: {
        icon: Clock,
        gradient: 'from-orange-400 via-amber-500 to-yellow-500',
        glow: 'shadow-amber-500/40',
        bg: 'bg-gradient-to-br from-orange-500/10 to-amber-500/5',
    },
    travelPhotoshoot: {
        icon: Plane,
        gradient: 'from-emerald-400 via-green-500 to-teal-500',
        glow: 'shadow-emerald-500/40',
        bg: 'bg-gradient-to-br from-emerald-500/10 to-green-500/5',
    },
    customGen: {
        icon: Wand2,
        gradient: 'from-indigo-400 via-blue-500 to-cyan-500',
        glow: 'shadow-indigo-500/40',
        bg: 'bg-gradient-to-br from-indigo-500/10 to-blue-500/5',
    },
};

export const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
    return (
        <div className="card-premium p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Sparkles size={20} className="text-white" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Plantilla Creativa
                    </h3>
                    <p className="text-xs text-neutral-500">Elige tu estilo de transformación</p>
                </div>
            </div>

            {/* Template Grid */}
            <div className="grid grid-cols-2 gap-3">
                {Object.entries(TEMPLATES).map(([id, template], index) => {
                    const config = TEMPLATE_CONFIG[id] || TEMPLATE_CONFIG.customGen;
                    const Icon = config.icon;
                    const isSelected = selectedTemplate === id;

                    return (
                        <motion.button
                            key={id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedTemplate(id)}
                            className={`relative p-4 rounded-2xl text-left transition-all duration-300 overflow-hidden group ${
                                isSelected 
                                    ? `${config.bg} border-2 border-white/20 shadow-xl ${config.glow}`
                                    : 'bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                            }`}
                        >
                            {/* Selected indicator */}
                            {isSelected && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white flex items-center justify-center"
                                >
                                    <Check size={12} className="text-black" />
                                </motion.div>
                            )}

                            {/* Icon */}
                            <div className={`w-11 h-11 rounded-xl mb-3 flex items-center justify-center transition-all duration-300 ${
                                isSelected 
                                    ? `bg-gradient-to-br ${config.gradient} shadow-lg ${config.glow}`
                                    : 'bg-white/5 group-hover:bg-white/10'
                            }`}>
                                <Icon size={20} className={isSelected ? 'text-white' : 'text-neutral-400 group-hover:text-white'} />
                            </div>

                            {/* Text */}
                            <h4 className={`font-semibold text-sm mb-1 transition-colors ${
                                isSelected ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                            }`}>
                                {template.name}
                            </h4>
                            <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                                {template.desc}
                            </p>

                            {/* Hover gradient overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${config.gradient}`} style={{ opacity: isSelected ? 0 : undefined, mixBlendMode: 'overlay' }} />
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};
