/**
 * Button Component - Sistema de diseño profesional
 * Uso: <Button variant="primary" size="md" isLoading={false}>Click me</Button>
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

const buttonVariants = {
    primary: 'bg-brand-primary hover:bg-brand-primary-dark text-text-inverse font-semibold shadow-md hover:shadow-lg',
    secondary: 'bg-bg-tertiary hover:bg-bg-secondary text-text-primary border border-border-primary',
    ghost: 'hover:bg-bg-tertiary text-text-primary',
    danger: 'bg-error hover:bg-red-600 text-white font-semibold shadow-md',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-text-inverse',
};

const buttonSizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl',
};

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled = false,
    className = '',
    onClick,
    type = 'button',
    icon: Icon,
    ...props
}) => {
    return (
        <motion.button
            whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
            whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
            type={type}
            disabled={disabled || isLoading}
            onClick={onClick}
            className={cn(
                'font-medium transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-bg-primary',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'inline-flex items-center justify-center gap-2',
                buttonVariants[variant],
                buttonSizes[size],
                className
            )}
            {...props}
        >
            {isLoading ? (
                <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Cargando...</span>
                </>
            ) : (
                <>
                    {Icon && <Icon className="w-4 h-4" />}
                    {children}
                </>
            )}
        </motion.button>
    );
};
