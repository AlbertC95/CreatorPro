/**
 * Card Component - Contenedor profesional para secciones
 * Uso: <Card padding="md" hover={true}>Content</Card>
 */

import React from 'react';
import { cn } from '../../utils/cn';

export const Card = ({
    children,
    className = '',
    padding = 'md',
    hover = false,
    ...props
}) => {
    const paddingClasses = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    return (
        <div
            className={cn(
                'bg-bg-elevated rounded-xl border border-border-primary',
                'transition-all duration-200',
                hover && 'hover:border-border-secondary hover:shadow-lg',
                paddingClasses[padding],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
