/**
 * ImageModal Component - Premium Design
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Copy } from 'lucide-react';

export const ImageModal = ({ image, onClose, onDownload, onCopyPrompt }) => {
    if (!image) return null;

    const formatDate = (timestamp) => {
        return new Date(timestamp).toLocaleString('es-ES', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    onClick={onClose}
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative max-w-4xl w-full bg-neutral-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
                >
                    {/* Close button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors"
                    >
                        <X size={20} />
                    </motion.button>

                    {/* Image */}
                    <div className="relative">
                        <img
                            src={image.url}
                            alt={image.promptId}
                            className="w-full max-h-[70vh] object-contain bg-black"
                        />
                    </div>

                    {/* Info & Actions */}
                    <div className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <div>
                                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium">
                                    {image.templateName}
                                </span>
                                <span className="ml-3 text-xs text-neutral-500">
                                    {formatDate(image.timestamp)}
                                </span>
                            </div>
                        </div>

                        <p className="text-sm text-neutral-300 mb-6 line-clamp-3">
                            <span className="text-neutral-500">Prompt:</span> {image.promptId}
                        </p>

                        <div className="flex gap-3">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => onDownload(image)}
                                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold flex items-center justify-center gap-2"
                            >
                                <Download size={18} />
                                Descargar
                            </motion.button>
                            {onCopyPrompt && (
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        navigator.clipboard.writeText(image.fullPrompt || image.promptId);
                                    }}
                                    className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium flex items-center gap-2 transition-colors"
                                >
                                    <Copy size={18} />
                                    Copiar Prompt
                                </motion.button>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
