/**
 * TemplateSelector Component - Versión Profesional
 * Migrado al nuevo sistema de diseño sin hardcoding
 */

import React from 'react';
import { Sparkles } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { cn } from '../utils/cn';
import { TEMPLATES } from '../services/prompts';

export const TemplateSelector = ({ selectedTemplate, setSelectedTemplate }) => {
    return (
        <Card padding="md">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-text-primary">
                <Sparkles className="w-5 h-5 text-brand-primary" />
                Plantilla Creativa
            </h3>

            <div className="grid grid-cols-2 gap-3">
                {Object.values(TEMPLATES).map((template) => (
                    <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={cn(
                            'relative p-4 rounded-lg border-2 transition-all duration-200',
                            'hover:scale-[1.02] active:scale-[0.98]',
                            'text-left',
                            selectedTemplate === template.id
                                ? 'border-brand-primary bg-brand-primary/10 shadow-glow'
                                : 'border-border-primary bg-bg-tertiary hover:border-border-secondary'
                        )}
                    >
                        {/* Badge de selección */}
                        {selectedTemplate === template.id && (
                            <div className="absolute top-2 right-2">
                                <Badge variant="primary">Activo</Badge>
                            </div>
                        )}

                        {/* Contenido */}
                        <div className="space-y-2">
                            <h4 className={cn(
                                'font-semibold text-sm',
                                selectedTemplate === template.id
                                    ? 'text-brand-primary'
                                    : 'text-text-primary'
                            )}>
                                {template.name}
                            </h4>
                            <p className="text-xs text-text-tertiary line-clamp-2">
                                {template.desc}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </Card>
    );
};
