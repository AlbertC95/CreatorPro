/**
 * HistoryPanel Component - Premium Design
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Trash2, History as HistoryIcon, Download, Eye, Clock } from 'lucide-react';
import { useHistory } from '../hooks/useHistory';
import { ImageModal } from './ImageModal';
import { TEMPLATES } from '../services/prompts';

export const HistoryPanel = ({ isOpen, onClose }) => {
    const { history, removeFromHistory, clearHistory } = useHistory();
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [viewingImage, setViewingImage] = useState(null);

    const filteredHistory = useMemo(() => {
        let filtered = [...history];
        if (filter !== 'all') {
            filtered = filtered.filter(img => img.template === filter);
        }
        if (search.trim()) {
            const searchLower = search.toLowerCase();
            filtered = filtered.filter(img =>
                img.promptId?.toLowerCase().includes(searchLower) ||
                img.templateName?.toLowerCase().includes(searchLower)
            );
        }
        filtered.sort((a, b) => b.timestamp - a.timestamp);
        return filtered;
    }, [history, filter, search]);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 60) return `${diffMins}m`;
        if (diffHours < 24) return `${diffHours}h`;
        if (diffDays < 7) return `${diffDays}d`;
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
    };

    const handleDownload = (image) => {
        const link = document.createElement('a');
        link.href = image.url;
        link.download = `creator-pro-${image.id}.png`;
        link.click();
    };

    const handleClearAll = () => {
        if (window.confirm('¿Borrar todo el historial?')) {
            clearHistory();
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
                            onClick={onClose}
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-neutral-950 border-l border-white/5 z-[9999] flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-5 border-b border-white/5">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                            <HistoryIcon size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                Historial
                                            </h2>
                                            <p className="text-xs text-neutral-500">{history.length} generaciones</p>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={onClose}
                                        className="p-2 rounded-xl hover:bg-white/5 text-neutral-500 hover:text-white transition-colors"
                                    >
                                        <X size={20} />
                                    </motion.button>
                                </div>

                                {/* Search & Filter */}
                                <div className="space-y-3">
                                    <div className="relative">
                                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                                        <input
                                            type="text"
                                            placeholder="Buscar..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="input-premium w-full pl-10"
                                        />
                                    </div>
                                    <select
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                        className="select-premium w-full"
                                    >
                                        <option value="all">Todos los templates</option>
                                        {Object.values(TEMPLATES).map(template => (
                                            <option key={template.id} value={template.id}>
                                                {template.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
                                {filteredHistory.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-64 text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                                            <HistoryIcon size={28} className="text-neutral-600" />
                                        </div>
                                        <p className="text-neutral-400 text-sm">
                                            {history.length === 0 ? 'No hay historial' : 'Sin resultados'}
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        {/* Clear All */}
                                        {history.length > 0 && (
                                            <div className="flex justify-end mb-4">
                                                <button
                                                    onClick={handleClearAll}
                                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-red-400 hover:bg-red-500/10 transition-colors"
                                                >
                                                    <Trash2 size={12} />
                                                    Borrar todo
                                                </button>
                                            </div>
                                        )}

                                        {/* Items */}
                                        <div className="space-y-3">
                                            {filteredHistory.map((image, index) => (
                                                <motion.div
                                                    key={image.id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className="group p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
                                                >
                                                    <div className="flex gap-3">
                                                        {/* Thumbnail */}
                                                        <div 
                                                            className="w-20 h-20 rounded-xl overflow-hidden cursor-pointer relative group/thumb"
                                                            onClick={() => setViewingImage(image)}
                                                        >
                                                            <img src={image.url} alt="" className="w-full h-full object-cover" />
                                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                                                                <Eye size={18} className="text-white" />
                                                            </div>
                                                        </div>

                                                        {/* Info */}
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-medium">
                                                                    {image.templateName}
                                                                </span>
                                                                <span className="flex items-center gap-1 text-[10px] text-neutral-500">
                                                                    <Clock size={10} />
                                                                    {formatDate(image.timestamp)}
                                                                </span>
                                                            </div>
                                                            <p className="text-xs text-neutral-400 line-clamp-2">
                                                                {image.promptId}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Actions */}
                                                    <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button
                                                            onClick={() => handleDownload(image)}
                                                            className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                                                        >
                                                            <Download size={12} />
                                                            Descargar
                                                        </button>
                                                        <button
                                                            onClick={() => removeFromHistory(image.id)}
                                                            className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-neutral-400 hover:text-red-400 transition-colors"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {viewingImage && (
                <ImageModal
                    image={viewingImage}
                    onClose={() => setViewingImage(null)}
                    onDownload={handleDownload}
                />
            )}
        </>
    );
};
