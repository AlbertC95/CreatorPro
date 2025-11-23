/**
 * LoadingSpinner Component - Spinner de carga profesional
 * Uso: <LoadingSpinner size="md" text="Cargando..." />
 */

import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

const spinnerSizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
};

export const LoadingSpinner = ({
    size = 'md',
    text = '',
    className = ''
}) => {
    return (
        <div className={cn('flex flex-col items-center justify-center gap-3', className)}>
            <Loader2 className={cn(
                'animate-spin text-brand-primary',
                spinnerSizes[size]
            )} />
            {text && (
                <p className="text-sm text-text-secondary animate-pulse">
                    {text}
                </p>
            )}
        </div>
    );
};
