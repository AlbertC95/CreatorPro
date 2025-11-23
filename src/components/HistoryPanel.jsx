/**
 * HistoryPanel Component - Panel lateral de historial
 * Muestra timeline de generaciones con filtros y acciones
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Filter, Trash2, History as HistoryIcon } from 'lucide-react';
import { useHistory } from '../hooks/useHistory';
import { HistoryStats } from './HistoryStats';
import { HistoryItem } from './HistoryItem';
import { ImageModal } from './ImageModal';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { EmptyState } from './ui/EmptyState';
import { TEMPLATES } from '../services/prompts';

export const HistoryPanel = ({ isOpen, onClose }) => {
    const { history, removeFromHistory, clearHistory } = useHistory();
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [viewingImage, setViewingImage] = useState(null);

    // Filtrar historial
    const filteredHistory = useMemo(() => {
        let filtered = [...history];

        // Filtrar por template
        if (filter !== 'all') {
            filtered = filtered.filter(img => img.template === filter);
        }

        // Filtrar por búsqueda
        if (search.trim()) {
            const searchLower = search.toLowerCase();
            filtered = filtered.filter(img =>
                img.promptId?.toLowerCase().includes(searchLower) ||
                img.templateName?.toLowerCase().includes(searchLower)
            );
        }

        // Ordenar por más reciente primero
        filtered.sort((a, b) => b.timestamp - a.timestamp);

        return filtered;
    }, [history, filter, search]);

    // Acciones
    const handleDownload = (image) => {
        const link = document.createElement('a');
        link.href = image.url;
        link.download = `creator-pro-${image.id}.png`;
        link.click();
    };

    const handleCopyPrompt = (image) => {
        navigator.clipboard.writeText(image.fullPrompt || image.promptId);
        // TODO: Mostrar toast "Prompt copiado"
    };

    const handleDelete = (imageId) => {
        if (window.confirm('¿Eliminar esta imagen del historial?')) {
            removeFromHistory(imageId);
        }
    };

    const handleClearAll = () => {
        if (window.confirm('¿Estás seguro de que quieres borrar todo el historial? Esta acción no se puede deshacer.')) {
            clearHistory();
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop - visible en todas las pantallas */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
                            onClick={onClose}
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-bg-primary border-l border-border-primary z-[9999] flex flex-col shadow-2xl"
                        >
                            {/* Header */}
                            <div className="p-4 border-b border-border-primary bg-bg-secondary">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                                        <HistoryIcon className="w-5 h-5 text-brand-primary" />
                                        Historial
                                    </h2>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        icon={X}
                                        onClick={onClose}
                                    />
                                </div>

                                {/* Stats */}
                                {history.length > 0 && <HistoryStats history={history} />}

                                {/* Filtros */}
                                <div className="space-y-2">
                                    {/* Búsqueda */}
                                    <Input
                                        placeholder="Buscar por prompt..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        icon={Search}
                                    />

                                    {/* Filtro por template */}
                                    <div className="flex items-center gap-2">
                                        <Filter className="w-4 h-4 text-text-tertiary" />
                                        <select
                                            value={filter}
                                            onChange={(e) => setFilter(e.target.value)}
                                            className="flex-1 bg-bg-elevated border border-border-primary rounded-lg px-3 py-2 text-sm text-text-primary focus:border-brand-primary outline-none transition-colors cursor-pointer hover:border-brand-primary/50"
                                            style={{
                                                colorScheme: 'dark'
                                            }}
                                        >
                                            <option value="all" className="bg-bg-elevated text-text-primary">Todos los templates</option>
                                            {Object.values(TEMPLATES).map(template => (
                                                <option key={template.id} value={template.id} className="bg-bg-elevated text-text-primary">
                                                    {template.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                                {filteredHistory.length === 0 ? (
                                    <EmptyState
                                        icon={HistoryIcon}
                                        title={history.length === 0 ? "No hay historial" : "No se encontraron resultados"}
                                        description={history.length === 0
                                            ? "Genera algunas imágenes para verlas aquí"
                                            : "Intenta con otros filtros o búsqueda"
                                        }
                                    />
                                ) : (
                                    <>
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="text-xs text-text-tertiary">
                                                {filteredHistory.length} {filteredHistory.length === 1 ? 'imagen' : 'imágenes'}
                                            </p>
                                            {history.length > 0 && (
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    icon={Trash2}
                                                    onClick={handleClearAll}
                                                    className="text-red-500 hover:text-red-400"
                                                >
                                                    Borrar todo
                                                </Button>
                                            )}
                                        </div>

                                        {filteredHistory.map(image => (
                                            <HistoryItem
                                                key={image.id}
                                                image={image}
                                                onView={setViewingImage}
                                                onDownload={handleDownload}
                                                onCopyPrompt={handleCopyPrompt}
                                                onDelete={handleDelete}
                                            />
                                        ))}
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Image Modal */}
            {viewingImage && (
                <ImageModal
                    image={viewingImage}
                    onClose={() => setViewingImage(null)}
                    onDownload={handleDownload}
                    onCopyPrompt={handleCopyPrompt}
                />
            )}
        </>
    );
};
