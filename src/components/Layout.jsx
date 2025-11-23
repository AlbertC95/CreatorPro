/**
 * Layout Component - Versión Profesional
 * Migrado al nuevo sistema de diseño con design tokens
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Key, History } from 'lucide-react';
import { Input } from './ui/Input';
import { APP_CONFIG } from '../config/app.config';

export const Layout = ({ children, apiKey, setApiKey, showSettings, setShowSettings, onHistoryClick }) => {
    return (
        <div className="min-h-screen bg-bg-primary text-text-primary font-sans selection:bg-brand-primary/30 relative overflow-x-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px]" />
            </div>

            <header className="border-b border-border-primary bg-black/50 backdrop-blur-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-orange-600 rounded-lg flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-brand-primary/20">
                            C
                        </div>
                        <h1 className="text-lg font-bold tracking-tight text-text-primary flex items-center gap-2">
                            {APP_CONFIG.name}
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r from-brand-primary to-orange-600 text-black uppercase shadow-lg">
                                Gemini 3 Pro
                            </span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono text-text-tertiary">
                        <button
                            onClick={onHistoryClick}
                            className="p-2 rounded-full transition-all duration-300 bg-bg-tertiary text-text-secondary hover:bg-bg-secondary hover:text-text-primary hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                            title="Historial"
                        >
                            <History size={16} />
                        </button>
                        <button
                            onClick={() => setShowSettings(!showSettings)}
                            className={`p-2 rounded-full transition-all duration-300 ${!apiKey ? 'bg-brand-primary text-black animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'bg-bg-tertiary text-text-secondary hover:bg-bg-secondary hover:text-text-primary'}`}
                            title="API Key"
                        >
                            <Key size={16} />
                        </button>
                    </div>
                </div>
                <motion.div
                    initial={false}
                    animate={{ height: showSettings ? 'auto' : 0, opacity: showSettings ? 1 : 0 }}
                    className="bg-bg-secondary border-b border-border-primary overflow-hidden"
                >
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <Input
                            label={
                                <span className="flex items-center gap-2 text-brand-primary">
                                    <Sparkles size={12} />
                                    Google AI Studio API Key
                                </span>
                            }
                            type="password"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="Pega tu API Key aquí..."
                            helperText="Tu clave se usa localmente para conectar con Gemini 3 Pro. No se guarda en ningún servidor."
                        />
                    </div>
                </motion.div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                {children}
            </main>
        </div>
    );
};
