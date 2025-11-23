/**
 * ImageModal Component - Modal para ver imagen en grande
 * Muestra imagen completa con información y acciones
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Copy, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { cn } from '../utils/cn';

export const ImageModal = ({ image, onClose, onDownload, onCopyPrompt, onRegenerate }) => {
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative max-w-4xl w-full bg-bg-elevated rounded-2xl border border-border-primary shadow-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="p-4 border-b border-border-primary flex items-center justify-between bg-bg-primary">
                        <div className="flex items-center gap-3">
                            <Badge variant="primary">{image.templateName}</Badge>
                            <span className="text-xs text-text-tertiary">
                                {formatDate(image.timestamp)}
                            </span>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            icon={X}
                            onClick={onClose}
                        />
                    </div>

                    {/* Image */}
                    <div className="p-6 bg-bg-secondary">
                        <img
                            src={image.url}
                            alt={image.promptId}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    {/* Info & Actions */}
                    <div className="p-4 bg-bg-primary">
                        <p className="text-sm text-text-secondary mb-4">
                            <span className="font-semibold text-text-primary">Prompt:</span> {image.promptId}
                        </p>

                        <div className="flex gap-2">
                            <Button
                                variant="primary"
                                size="md"
                                icon={Download}
                                onClick={() => onDownload(image)}
                            >
                                Descargar
                            </Button>
                            <Button
                                variant="secondary"
                                size="md"
                                icon={Copy}
                                onClick={() => onCopyPrompt(image)}
                            >
                                Copiar Prompt
                            </Button>
                            {onRegenerate && (
                                <Button
                                    variant="secondary"
                                    size="md"
                                    icon={RefreshCw}
                                    onClick={() => onRegenerate(image)}
                                >
                                    Regenerar
                                </Button>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
