/**
 * HistoryItem Component - Item individual del historial
 * Muestra thumbnail, info y acciones para cada imagen
 */

import React from 'react';
import { Eye, Download, Copy, RefreshCw, Trash2 } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Tooltip } from './ui/Tooltip';

export const HistoryItem = ({
    image,
    onView,
    onDownload,
    onCopyPrompt,
    onRegenerate,
    onDelete
}) => {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 60) {
            return `Hace ${diffMins} min`;
        } else if (diffHours < 24) {
            return `Hace ${diffHours}h`;
        } else if (diffDays < 7) {
            return `Hace ${diffDays}d`;
        } else {
            return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
        }
    };

    return (
        <Card padding="sm" className="mb-3 hover:border-border-secondary transition-colors">
            {/* Thumbnail */}
            <div
                className="relative cursor-pointer group"
                onClick={() => onView(image)}
            >
                <img
                    src={image.url}
                    alt={image.promptId}
                    className="w-full h-32 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                </div>
            </div>

            {/* Info */}
            <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                    <Badge variant="primary" className="text-xs">
                        {image.templateName}
                    </Badge>
                    <span className="text-xs text-text-tertiary">
                        {formatDate(image.timestamp)}
                    </span>
                </div>
                <p className="text-xs text-text-secondary line-clamp-2 mt-1">
                    {image.promptId}
                </p>
            </div>

            {/* Actions */}
            <div className="flex gap-1 mt-2">
                <Tooltip content="Descargar">
                    <Button
                        variant="ghost"
                        size="sm"
                        icon={Download}
                        onClick={() => onDownload(image)}
                        className="flex-1"
                    />
                </Tooltip>
                <Tooltip content="Copiar prompt">
                    <Button
                        variant="ghost"
                        size="sm"
                        icon={Copy}
                        onClick={() => onCopyPrompt(image)}
                        className="flex-1"
                    />
                </Tooltip>
                {onRegenerate && (
                    <Tooltip content="Regenerar">
                        <Button
                            variant="ghost"
                            size="sm"
                            icon={RefreshCw}
                            onClick={() => onRegenerate(image)}
                            className="flex-1"
                        />
                    </Tooltip>
                )}
                <Tooltip content="Eliminar">
                    <Button
                        variant="ghost"
                        size="sm"
                        icon={Trash2}
                        onClick={() => onDelete(image.id)}
                        className="flex-1 text-red-500 hover:text-red-400"
                    />
                </Tooltip>
            </div>
        </Card>
    );
};
