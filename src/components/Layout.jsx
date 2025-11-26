/**
 * Layout Component - Premium Design
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Key, History, Zap, X } from 'lucide-react';
import { APP_CONFIG } from '../config/app.config';

export const Layout = ({ children, apiKey, setApiKey, showSettings, setShowSettings, onHistoryClick }) => {
    return (
        <div className="min-h-screen relative overflow-x-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {/* Main gradient orbs */}
                <div className="absolute top-[-30%] left-[-20%] w-[70%] h-[70%] bg-purple-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-30%] right-[-20%] w-[60%] h-[60%] bg-amber-500/15 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s' }} />
                <div className="absolute top-[40%] left-[60%] w-[40%] h-[40%] bg-pink-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
                
                {/* Grid pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-white/5">
                <div className="glass">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="h-16 sm:h-18 flex items-center justify-between">
                            {/* Logo */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <motion.div 
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30"
                                >
                                    <span className="text-black font-extrabold text-xl sm:text-2xl">C</span>
                                </motion.div>
                                <div className="hidden sm:block">
                                    <h1 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        {APP_CONFIG.name}
                                    </h1>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <Zap size={10} className="text-amber-400" />
                                        <span className="text-[10px] text-amber-400/80 font-medium uppercase tracking-widest">
                                            Gemini 3 Pro
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2 sm:gap-3">
                                {/* History Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onHistoryClick}
                                    className="p-2.5 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/10"
                                >
                                    <History size={18} />
                                </motion.button>

                                {/* API Key Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowSettings(!showSettings)}
                                    className={`p-2.5 sm:p-3 rounded-xl transition-all duration-300 border ${
                                        !apiKey 
                                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black border-transparent shadow-lg shadow-orange-500/30 pulse-glow' 
                                            : 'bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border-white/5 hover:border-white/10'
                                    }`}
                                >
                                    <Key size={18} />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Settings Panel */}
                <AnimatePresence>
                    {showSettings && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden border-b border-white/5"
                        >
                            <div className="glass py-6">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1 max-w-xl">
                                            <label className="flex items-center gap-2 text-sm font-medium text-amber-400 mb-3">
                                                <Sparkles size={14} />
                                                Google AI Studio API Key
                                            </label>
                                            <input
                                                type="password"
                                                value={apiKey}
                                                onChange={(e) => setApiKey(e.target.value)}
                                                placeholder="Pega tu API Key aquí..."
                                                className="input-premium w-full"
                                            />
                                            <p className="text-xs text-neutral-500 mt-2">
                                                Tu clave se usa localmente. No se guarda en ningún servidor.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setShowSettings(false)}
                                            className="p-2 rounded-lg hover:bg-white/5 text-neutral-500 hover:text-white transition-colors"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {children}
            </main>
        </div>
    );
};
