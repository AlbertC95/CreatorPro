/**
 * EmptyState Component - Estado vacío profesional
 * Uso: <EmptyState icon={ImageIcon} title="No hay imágenes" description="Sube una foto para empezar" />
 */

import React from 'react';
import { cn } from '../../utils/cn';

export const EmptyState = ({
    icon: Icon,
    title,
    description,
    action,
    className = ''
}) => {
    return (
        <div className={cn(
            'flex flex-col items-center justify-center p-12 text-center',
            className
        )}>
            {Icon && (
                <div className="w-16 h-16 rounded-full bg-bg-tertiary flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-text-tertiary" />
                </div>
            )}
            {title && (
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {title}
                </h3>
            )}
            {description && (
                <p className="text-sm text-text-tertiary mb-6 max-w-sm">
                    {description}
                </p>
            )}
            {action}
        </div>
    );
};
