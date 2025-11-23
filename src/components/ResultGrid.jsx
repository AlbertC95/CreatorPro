/**
 * ResultGrid Component - Versión Profesional con Comparador
 * Grid de resultados con modo comparación y historial
 */

import React, { useState } from 'react';
import { Image as ImageIcon, Grid3x3, Columns2 } from 'lucide-react';
import { ResultCard } from './ResultCard';
import { ImageComparator } from './ImageComparator';
import { EmptyState } from './ui/EmptyState';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Tooltip } from './ui/Tooltip';
import { cn } from '../utils/cn';

export const ResultGrid = ({ generatedImages, onDownload, apiKey }) => {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'compare'
    const [selectedForCompare, setSelectedForCompare] = useState([]);

    const toggleImageSelection = (image) => {
        setSelectedForCompare(prev => {
            const isSelected = prev.find(img => img.id === image.id);
            if (isSelected) {
                return prev.filter(img => img.id !== image.id);
            } else {
                // Máximo 4 imágenes para comparar
                if (prev.length >= 4) {
                    return [...prev.slice(1), image];
                }
                return [...prev, image];
            }
        });
    };

    const handleCompareMode = () => {
        if (viewMode === 'compare') {
            setViewMode('grid');
            setSelectedForCompare([]);
        } else {
            setViewMode('compare');
        }
    };

    if (generatedImages.length === 0) {
        return (
            <EmptyState
                icon={ImageIcon}
                title="No hay imágenes generadas"
                description="Sube una foto y selecciona una plantilla para empezar a generar imágenes increíbles con IA."
            />
        );
    }

    return (
        <div className="space-y-4">
            {/* Header con controles */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <h2 className="text-lg font-semibold text-text-primary">
                        Resultados
                    </h2>
                    <Badge variant="primary">
                        {generatedImages.length} {generatedImages.length === 1 ? 'imagen' : 'imágenes'}
                    </Badge>
                </div>

                <div className="flex items-center gap-2">
                    <Tooltip content="Vista en cuadrícula">
                        <Button
                            variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                            size="sm"
                            icon={Grid3x3}
                            onClick={() => setViewMode('grid')}
                        />
                    </Tooltip>
                    <Tooltip content="Modo comparación">
                        <Button
                            variant={viewMode === 'compare' ? 'primary' : 'ghost'}
                            size="sm"
                            icon={Columns2}
                            onClick={handleCompareMode}
                        />
                    </Tooltip>
                </div>
            </div>

            {/* Modo Comparación */}
            {viewMode === 'compare' && (
                <div className="space-y-4">
                    {selectedForCompare.length > 0 ? (
                        <ImageComparator
                            images={selectedForCompare}
                            onClose={() => {
                                setViewMode('grid');
                                setSelectedForCompare([]);
                            }}
                        />
                    ) : (
                        <div className="bg-bg-elevated border border-border-primary rounded-xl p-8 text-center">
                            <p className="text-text-secondary mb-4">
                                Selecciona 2-4 imágenes para comparar
                            </p>
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={() => setViewMode('grid')}
                            >
                                Volver a la cuadrícula
                            </Button>
                        </div>
                    )}
                </div>
            )}

            {/* Grid de imágenes */}
            <div className={cn(
                'grid gap-6',
                viewMode === 'grid' && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            )}>
                {generatedImages.map((image) => (
                    <div
                        key={image.id}
                        className={cn(
                            'relative',
                            viewMode === 'compare' && 'cursor-pointer',
                            selectedForCompare.find(img => img.id === image.id) && 'ring-2 ring-brand-primary rounded-2xl'
                        )}
                        onClick={() => viewMode === 'compare' && toggleImageSelection(image)}
                    >
                        <ResultCard
                            image={image}
                            onDownload={onDownload}
                            apiKey={apiKey}
                        />
                        {viewMode === 'compare' && selectedForCompare.find(img => img.id === image.id) && (
                            <div className="absolute top-2 left-2 z-20">
                                <Badge variant="primary">
                                    {selectedForCompare.findIndex(img => img.id === image.id) + 1}
                                </Badge>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
