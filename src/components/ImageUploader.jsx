/**
 * ImageUploader Component - Premium Design
 */

import React, { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../config/app.config';

const { maxFileSize, acceptedTypes } = APP_CONFIG.upload;

export const ImageUploader = ({ uploadedImage, setUploadedImage, setError }) => {
    const handleFileChange = useCallback((e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!acceptedTypes.includes(file.type)) {
            setError('Formato no soportado. Usa JPG, PNG o WebP.');
            return;
        }

        if (file.size > maxFileSize) {
            setError(`Imagen muy grande. Máximo ${maxFileSize / (1024 * 1024)}MB.`);
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            setUploadedImage(event.target.result);
            setError(null);
        };
        reader.onerror = () => setError('Error al cargar la imagen.');
        reader.readAsDataURL(file);
    }, [setUploadedImage, setError]);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) handleFileChange({ target: { files: [file] } });
    }, [handleFileChange]);

    return (
        <div className="card-premium p-5 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <ImageIcon size={20} className="text-white" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Tu Foto
                        </h3>
                        <p className="text-xs text-neutral-500">Base para la transformación</p>
                    </div>
                </div>
                {uploadedImage && (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                        <CheckCircle2 size={14} className="text-emerald-400" />
                        <span className="text-xs font-medium text-emerald-400">Lista</span>
                    </div>
                )}
            </div>

            {/* Upload Area */}
            <AnimatePresence mode="wait">
                {!uploadedImage ? (
                    <motion.label
                        key="upload"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                        className="flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl border-2 border-dashed border-white/10 hover:border-amber-500/50 bg-white/[0.01] hover:bg-amber-500/5 cursor-pointer transition-all duration-300 group"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-16 h-16 rounded-2xl bg-white/5 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500 flex items-center justify-center mb-4 transition-all duration-300"
                        >
                            <Upload size={28} className="text-neutral-500 group-hover:text-white transition-colors" />
                        </motion.div>
                        <p className="text-neutral-300 text-sm font-medium mb-2">
                            Click para subir o arrastra aquí
                        </p>
                        <p className="text-neutral-500 text-xs">
                            JPG, PNG o WebP (máx. {maxFileSize / (1024 * 1024)}MB)
                        </p>
                        <input
                            type="file"
                            accept={acceptedTypes.join(',')}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </motion.label>
                ) : (
                    <motion.div
                        key="preview"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative group rounded-2xl overflow-hidden"
                    >
                        <img
                            src={uploadedImage}
                            alt="Preview"
                            className="w-full h-48 sm:h-56 object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Remove button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setUploadedImage(null)}
                            className="absolute top-3 right-3 p-2 rounded-xl bg-black/50 hover:bg-red-500 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                        >
                            <X size={18} />
                        </motion.button>

                        {/* Change photo button */}
                        <label className="absolute bottom-3 left-3 right-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm font-medium text-center cursor-pointer transition-all opacity-0 group-hover:opacity-100">
                            Cambiar foto
                            <input
                                type="file"
                                accept={acceptedTypes.join(',')}
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
