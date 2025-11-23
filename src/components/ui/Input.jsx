/**
 * Input Component - Campo de entrada profesional
 * Uso: <Input label="Email" error="Invalid email" helperText="Enter your email" />
 */

import React from 'react';
import { cn } from '../../utils/cn';

export const Input = ({
    label,
    error,
    helperText,
    className = '',
    ...props
}) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-text-secondary mb-2">
                    {label}
                </label>
            )}
            <input
                className={cn(
                    'w-full px-4 py-2 rounded-lg',
                    'bg-bg-tertiary border border-border-primary',
                    'text-text-primary placeholder:text-text-tertiary',
                    'focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary',
                    'transition-all duration-200',
                    error && 'border-error focus:border-error focus:ring-error',
                    className
                )}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-error">{error}</p>
            )}
            {helperText && !error && (
                <p className="mt-1 text-sm text-text-tertiary">{helperText}</p>
            )}
        </div>
    );
};
