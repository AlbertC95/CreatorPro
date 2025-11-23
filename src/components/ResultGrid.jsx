import React, { useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { ResultCard } from './ResultCard';

export const ResultGrid = ({ generatedImages, onDownload, apiKey }) => {
    const resultsRef = useRef(null);

    useEffect(() => {
        if (generatedImages.length > 0) {
            setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }
    }, [generatedImages]);

    return (
        <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8 min-h-[600px] relative overflow-hidden" ref={resultsRef}>
            {/* Empty State */}
            {generatedImages.length === 0 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 opacity-40 pointer-events-none">
                    <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center mb-6 animate-pulse">
                        <Sparkles size={48} />
                    </div>
                    <p className="text-lg font-medium">Listo para crear 6 obras maestras.</p>
                    <p className="text-sm mt-2">Sube una foto y elige un estilo.</p>
                </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {generatedImages.map((img) => (
                    <ResultCard key={img.id} image={img} onDownload={onDownload} apiKey={apiKey} />
                ))}
            </div>
        </div>
    );
};
