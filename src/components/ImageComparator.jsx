/**
 * ImageComparator Component - Comparador visual de imágenes
 * Permite comparar 2-4 imágenes lado a lado con zoom sincronizado
 */

import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { cn } from '../utils/cn';

export const ImageComparator = ({ images, onClose }) => {
    const [zoom, setZoom] = useState(1);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
    const handleResetZoom = () => setZoom(1);

    const gridCols = {
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-2',
    };

    return (
        <Card padding="none" className={cn(
            'relative',
            isFullscreen && 'fixed inset-4 z-50'
        )}>
            {/* Header */}
            <div className="p-4 border-b border-border-primary flex items-center justify-between bg-bg-primary">
                <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-text-primary">
                        Comparador Visual
                    </h3>
                    <Badge variant="primary">
                        {images.length} {images.length === 1 ? 'imagen' : 'imágenes'}
                    </Badge>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        icon={ZoomOut}
                        onClick={handleZoomOut}
                        disabled={zoom <= 0.5}
                    />
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleResetZoom}
                    >
                        {Math.round(zoom * 100)}%
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        icon={ZoomIn}
                        onClick={handleZoomIn}
                        disabled={zoom >= 3}
                    />
                    <Button
                        variant="ghost"
                        size="sm"
                        icon={Maximize2}
                        onClick={() => setIsFullscreen(!isFullscreen)}
                    />
                    <Button
                        variant="ghost"
                        size="sm"
                        icon={X}
                        onClick={onClose}
                    />
                </div>
            </div>

            {/* Grid de comparación */}
            <div className={cn(
                'grid gap-4 p-4 overflow-auto',
                gridCols[images.length] || 'grid-cols-2',
                isFullscreen ? 'max-h-[calc(100vh-8rem)]' : 'max-h-[600px]'
            )}>
                {images.map((image, index) => (
                    <div key={image.id} className="relative group">
                        {/* Label */}
                        <div className="absolute top-2 left-2 z-10">
                            <Badge variant="primary">
                                {index + 1}
                            </Badge>
                        </div>

                        {/* Imagen */}
                        <div className="relative overflow-hidden rounded-lg border border-border-primary bg-bg-secondary">
                            <img
                                src={image.url}
                                alt={image.promptId}
                                className="w-full h-auto transition-transform duration-200"
                                style={{ transform: `scale(${zoom})` }}
                            />
                        </div>

                        {/* Info */}
                        <div className="mt-2 px-2">
                            <p className="text-xs text-text-tertiary line-clamp-1">
                                {image.promptId}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer con instrucciones */}
            <div className="p-4 border-t border-border-primary bg-bg-primary">
                <p className="text-xs text-text-tertiary text-center">
                    Usa los controles de zoom para ver detalles. Click en pantalla completa para mejor visualización.
                </p>
            </div>
        </Card>
    );
};
