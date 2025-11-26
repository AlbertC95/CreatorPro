/**
 * ResultGrid Component - Premium Design
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Grid3x3, Columns2, Sparkles, Wand2 } from 'lucide-react';
import { ResultCard } from './ResultCard';
import { ImageComparator } from './ImageComparator';

export const ResultGrid = ({ generatedImages, onDownload, apiKey }) => {
    const [viewMode, setViewMode] = useState('grid');
    const [selectedForCompare, setSelectedForCompare] = useState([]);

    const toggleImageSelection = (image) => {
        setSelectedForCompare(prev => {
            const isSelected = prev.find(img => img.id === image.id);
            if (isSelected) return prev.filter(img => img.id !== image.id);
            if (prev.length >= 4) return [...prev.slice(1), image];
            return [...prev, image];
        });
    };

    if (generatedImages.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[500px] text-center">
                {/* Empty State */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative"
                >
                    {/* Glow effect */}
                    <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-full" />
                    
                    <div className="relative">
                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center mx-auto mb-6">
                            <Wand2 size={40} className="text-neutral-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Crea algo increíble
                        </h3>
                        <p className="text-neutral-500 max-w-sm mx-auto mb-6">
                            Sube una foto y selecciona una plantilla para generar imágenes únicas con IA
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-amber-500/80">
                            <Sparkles size={16} />
                            <span>Powered by Gemini 3 Pro</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Resultados
                    </h2>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 text-xs font-medium">
                        {generatedImages.length} {generatedImages.length === 1 ? 'imagen' : 'imágenes'}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setViewMode('grid')}
                        className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white text-black' : 'bg-white/5 text-neutral-400 hover:bg-white/10'}`}
                    >
                        <Grid3x3 size={18} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setViewMode(viewMode === 'compare' ? 'grid' : 'compare')}
                        className={`p-2.5 rounded-xl transition-all ${viewMode === 'compare' ? 'bg-white text-black' : 'bg-white/5 text-neutral-400 hover:bg-white/10'}`}
                    >
                        <Columns2 size={18} />
                    </motion.button>
                </div>
            </div>

            {/* Compare Mode */}
            {viewMode === 'compare' && selectedForCompare.length > 0 && (
                <ImageComparator
                    images={selectedForCompare}
                    onClose={() => {
                        setViewMode('grid');
                        setSelectedForCompare([]);
                    }}
                />
            )}

            {viewMode === 'compare' && selectedForCompare.length === 0 && (
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                    <p className="text-neutral-400 mb-4">Selecciona 2-4 imágenes para comparar</p>
                    <button
                        onClick={() => setViewMode('grid')}
                        className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm transition-colors"
                    >
                        Volver
                    </button>
                </div>
            )}

            {/* Grid */}
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
            >
                {generatedImages.map((image, index) => (
                    <motion.div
                        key={image.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                        className={`relative ${viewMode === 'compare' ? 'cursor-pointer' : ''} ${
                            selectedForCompare.find(img => img.id === image.id) ? 'ring-2 ring-amber-500 rounded-2xl' : ''
                        }`}
                        onClick={() => viewMode === 'compare' && toggleImageSelection(image)}
                    >
                        <ResultCard image={image} onDownload={onDownload} apiKey={apiKey} />
                        
                        {viewMode === 'compare' && selectedForCompare.find(img => img.id === image.id) && (
                            <div className="absolute top-2 left-2 z-20 w-6 h-6 rounded-full bg-amber-500 text-black text-xs font-bold flex items-center justify-center">
                                {selectedForCompare.findIndex(img => img.id === image.id) + 1}
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
