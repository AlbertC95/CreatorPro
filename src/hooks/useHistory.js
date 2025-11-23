/**
 * useHistory Hook - Gestión de historial de generaciones
 * Uso: const { history, addToHistory, clearHistory, removeFromHistory } = useHistory();
 */

import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

const MAX_HISTORY_ITEMS = 100; // Límite de items en historial

export const useHistory = () => {
    const [history, setHistory] = useLocalStorage('creator-pro-history', []);

    const addToHistory = useCallback((image) => {
        setHistory((prev) => {
            // Agregar timestamp si no existe
            const imageWithTimestamp = {
                ...image,
                timestamp: image.timestamp || Date.now(),
            };

            // Agregar al inicio del array
            const newHistory = [imageWithTimestamp, ...prev];

            // Limitar a MAX_HISTORY_ITEMS
            return newHistory.slice(0, MAX_HISTORY_ITEMS);
        });
    }, [setHistory]);

    const removeFromHistory = useCallback((imageId) => {
        setHistory((prev) => prev.filter((img) => img.id !== imageId));
    }, [setHistory]);

    const clearHistory = useCallback(() => {
        if (window.confirm('¿Estás seguro de que quieres borrar todo el historial?')) {
            setHistory([]);
        }
    }, [setHistory]);

    const getHistoryByTemplate = useCallback((templateId) => {
        return history.filter((img) => img.template === templateId);
    }, [history]);

    return {
        history,
        addToHistory,
        removeFromHistory,
        clearHistory,
        getHistoryByTemplate,
    };
};
