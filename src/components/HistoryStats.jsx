/**
 * HistoryStats Component - Estadísticas del historial
 * Muestra total de generaciones y template más usado
 */

import React, { useMemo } from 'react';
import { Card } from './ui/Card';
import { Sparkles, TrendingUp } from 'lucide-react';

export const HistoryStats = ({ history }) => {
    const stats = useMemo(() => {
        const total = history.length;

        // Contar por template
        const byTemplate = history.reduce((acc, img) => {
            const templateName = img.templateName || 'Unknown';
            acc[templateName] = (acc[templateName] || 0) + 1;
            return acc;
        }, {});

        // Encontrar el más usado
        const mostUsedEntry = Object.entries(byTemplate)
            .sort((a, b) => b[1] - a[1])[0];

        const mostUsed = mostUsedEntry ? {
            name: mostUsedEntry[0],
            count: mostUsedEntry[1]
        } : null;

        return { total, mostUsed };
    }, [history]);

    return (
        <div className="grid grid-cols-2 gap-3 mb-4">
            <Card padding="sm" className="bg-bg-secondary">
                <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-brand-primary" />
                    <p className="text-xs text-text-tertiary">Total</p>
                </div>
                <p className="text-2xl font-bold text-brand-primary">{stats.total}</p>
            </Card>

            <Card padding="sm" className="bg-bg-secondary">
                <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-brand-primary" />
                    <p className="text-xs text-text-tertiary">Más Usado</p>
                </div>
                <p className="text-sm font-semibold text-text-primary line-clamp-1">
                    {stats.mostUsed?.name || 'N/A'}
                </p>
                {stats.mostUsed && (
                    <p className="text-xs text-text-tertiary">
                        {stats.mostUsed.count} {stats.mostUsed.count === 1 ? 'vez' : 'veces'}
                    </p>
                )}
            </Card>
        </div>
    );
};
