/**
 * Utility function to merge Tailwind classes with proper precedence
 * Prevents class conflicts and ensures correct styling
 */

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
