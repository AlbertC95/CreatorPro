/**
 * ImageUploader Component - Versión Profesional
 * Migrado al nuevo sistema de diseño sin hardcoding
 */

import React, { useCallback } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { cn } from '../utils/cn';
import { APP_CONFIG } from '../config/app.config';

const { maxFileSize, acceptedTypes } = APP_CONFIG.upload;

export const ImageUploader = ({ uploadedImage, setUploadedImage, setError }) => {
    const handleFileChange = useCallback((e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validaciones usando configuración centralizada
        if (!acceptedTypes.includes(file.type)) {
            setError('Formato no soportado. Usa JPG, PNG o WebP.');
            return;
        }

        if (file.size > maxFileSize) {
            const maxSizeMB = maxFileSize / (1024 * 1024);
            setError(`Imagen muy grande. Máximo ${maxSizeMB}MB.`);
            return;
        }

        // Convertir a base64
        const reader = new FileReader();
        reader.onload = (event) => {
            setUploadedImage(event.target.result);
            setError(null);
        };
        reader.onerror = () => {
            setError('Error al cargar la imagen.');
        };
        reader.readAsDataURL(file);
    }, [setUploadedImage, setError]);

    const handleRemove = useCallback(() => {
        setUploadedImage(null);
    }, [setUploadedImage]);

    return (
        <Card padding="md" className="relative">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-text-primary">
                <ImageIcon className="w-5 h-5 text-brand-primary" />
                Tu Foto
            </h3>

            {!uploadedImage ? (
                <label className={cn(
                    'flex flex-col items-center justify-center',
                    'border-2 border-dashed border-border-primary rounded-lg',
                    'p-12 cursor-pointer transition-all duration-200',
                    'hover:border-brand-primary hover:bg-bg-tertiary/50'
                )}>
                    <Upload className="w-12 h-12 text-text-tertiary mb-4" />
                    <p className="text-text-secondary text-sm mb-2">
                        Click para subir o arrastra aquí
                    </p>
                    <p className="text-text-tertiary text-xs">
                        JPG, PNG o WebP (máx. {maxFileSize / (1024 * 1024)}MB)
                    </p>
                    <input
                        type="file"
                        accept={acceptedTypes.join(',')}
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </label>
            ) : (
                <div className="relative group">
                    <img
                        src={uploadedImage}
                        alt="Imagen subida"
                        className="w-full h-64 object-cover rounded-lg"
                    />
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={handleRemove}
                        icon={X}
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        Eliminar
                    </Button>
                </div>
            )}
        </Card>
    );
};
