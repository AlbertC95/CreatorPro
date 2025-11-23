/**
 * Badge Component - Etiquetas y estados
 * Uso: <Badge variant="success">Active</Badge>
 */

import React from 'react';
import { cn } from '../../utils/cn';

const badgeVariants = {
    default: 'bg-bg-tertiary text-text-primary',
    primary: 'bg-brand-primary/20 text-brand-primary border border-brand-primary/30',
    success: 'bg-success/20 text-success border border-success/30',
    error: 'bg-error/20 text-error border border-error/30',
    warning: 'bg-warning/20 text-warning border border-warning/30',
};

export const Badge = ({
    children,
    variant = 'default',
    className = '',
    ...props
}) => {
    return (
        <span
            className={cn(
                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                badgeVariants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};
