import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Key } from 'lucide-react';

export const Layout = ({ children, apiKey, setApiKey, showSettings, setShowSettings }) => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-yellow-500/30 relative overflow-x-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-600/10 rounded-full blur-[120px]" />
            </div>

            <header className="border-b border-gray-800 bg-black/50 backdrop-blur-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center text-black font-bold text-xl font-caveat shadow-lg shadow-orange-500/20">
                            C
                        </div>
                        <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                            CREATOR <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r from-yellow-500 to-orange-600 text-black uppercase shadow-lg">Gemini 3 Pro</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                        <button
                            onClick={() => setShowSettings(!showSettings)}
                            className={`p-2 rounded-full transition-all duration-300 ${!apiKey ? 'bg-yellow-400 text-black animate-pulse shadow-[0_0_15px_rgba(250,204,21,0.5)]' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'}`}
                            title="API Key"
                        >
                            <Key size={16} />
                        </button>
                    </div>
                </div>
                <motion.div
                    initial={false}
                    animate={{ height: showSettings ? 'auto' : 0, opacity: showSettings ? 1 : 0 }}
                    className="bg-gray-900 border-b border-gray-800 overflow-hidden"
                >
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <label className="block text-xs text-gray-500 uppercase mb-1 font-bold text-yellow-500 flex items-center gap-2">
                            <Sparkles size={12} /> Google AI Studio API Key
                        </label>
                        <input
                            type="password"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="Pega tu API Key aquí..."
                            className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 text-sm focus:border-yellow-500 outline-none transition-colors placeholder:text-gray-700"
                        />
                        <p className="text-[10px] text-gray-600 mt-2">
                            Tu clave se usa localmente para conectar con Gemini 3 Pro. No se guarda en ningún servidor.
                        </p>
                    </div>
                </motion.div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                {children}
            </main>
        </div>
    );
};
