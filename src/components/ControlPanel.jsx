import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEMPLATES, DESTINATIONS_DATA } from '../services/prompts';
import { Settings2, MapPin, Sparkles, Wand2, BrainCircuit, User, Zap, Box, Clock, Sliders } from 'lucide-react';

const Dropdown = ({ label, value, options, onChange, icon: Icon }) => (
    <div className="group">
        <label className="text-[10px] font-bold text-gray-500 uppercase mb-1.5 flex items-center gap-1.5 group-hover:text-gray-300 transition-colors">
            {Icon && <Icon size={10} />} {label}
        </label>
        <div className="relative">
            <select
                className="w-full bg-black/50 border border-gray-700 rounded-lg p-2.5 text-xs text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none appearance-none transition-all hover:border-gray-600 cursor-pointer"
                value={value || 'Default'}
                onChange={e => onChange(e.target.value)}
            >
                {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
        </div>
    </div>
);

const OPTION_LABELS = {
    lighting: 'Iluminación',
    framing: 'Encuadre / Cámara',
    wardrobe: 'Vestuario',
    film: 'Tipo de Película',
    effect: 'Efectos Especiales',
    material: 'Material',
    environment: 'Entorno',
    pose: 'Pose / Postura',
    expression: 'Expresión Facial'
};

export const ControlPanel = ({
    selectedTemplate,
    styleParams, setStyleParams,
    customParams, setCustomParams,
    animeCustoms, setAnimeCustoms,
    travelOptions, setTravelOptions,
    selectedLandmarks, setSelectedLandmarks,
    freePrompt, setFreePrompt,
    handleVisualMuse, handleEnhanceFreePrompt, isEnhancing, handleGenerate, isGenerating, uploadedImage, error
}) => {

    const currentTemplate = TEMPLATES[selectedTemplate];

    const toggleLandmark = (landmark) => {
        setSelectedLandmarks(prev => {
            if (prev.includes(landmark)) return prev.filter(l => l !== landmark);
            return [...prev, landmark];
        });
    };

    // Helper para actualizar customParams
    const updateCustomParam = (key, value) => {
        setCustomParams(prev => ({ ...prev, [key]: value }));
    };

    return (
        <section className="space-y-4 bg-gray-900/60 backdrop-blur-sm p-5 rounded-2xl border border-gray-800 shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-3">
                <h3 className="text-xs font-bold text-yellow-500 uppercase tracking-wider flex items-center gap-2">
                    <Settings2 size={14} /> Configuración Pro
                </h3>
                <span className="text-[10px] text-gray-500 font-mono">GEMINI-3-PRO</span>
            </div>

            <div className="space-y-5">
                {/* --- CONTROLES ESPECÍFICOS POR PLANTILLA (ESTILO PRINCIPAL) --- */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={selectedTemplate}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4"
                    >
                        {/* 1. SELECTOR DE ESTILO PRINCIPAL (Si la plantilla tiene styles) */}
                        {currentTemplate.styles && (
                            <Dropdown
                                label="Estilo Visual"
                                value={styleParams.style || styleParams.avatarStyle || styleParams.animeStyle || styleParams.material || styleParams.era} // Fallback logic
                                options={currentTemplate.styles}
                                onChange={v => {
                                    // Actualizar el param correcto según la plantilla (manteniendo compatibilidad con App.jsx)
                                    if (selectedTemplate === 'professionalPhotoshoot') setStyleParams({ ...styleParams, style: v });
                                    else if (selectedTemplate === 'avatarStudio') setStyleParams({ ...styleParams, avatarStyle: v });
                                    else if (selectedTemplate === 'anime') setStyleParams({ ...styleParams, animeStyle: v });
                                    else if (selectedTemplate === 'figurine') setStyleParams({ ...styleParams, material: v });
                                    else if (selectedTemplate === 'timeTravel') setStyleParams({ ...styleParams, era: v });
                                }}
                                icon={Sparkles}
                            />
                        )}

                        {/* 2. LOGICA ESPECIFICA DE TRAVEL (DESTINOS) */}
                        {selectedTemplate === 'travelPhotoshoot' && (
                            <div className="space-y-4">
                                <Dropdown
                                    label="Destino Internacional"
                                    value={styleParams.destination}
                                    options={TEMPLATES.travelPhotoshoot.destinations}
                                    onChange={v => {
                                        setStyleParams({ ...styleParams, destination: v });
                                        setSelectedLandmarks([]);
                                    }}
                                    icon={MapPin}
                                />

                                <div className="bg-black/40 p-3 rounded-xl border border-gray-700/50">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block">Lugares Icónicos (Auto o Selección)</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {DESTINATIONS_DATA[styleParams.destination]?.landmarks.map(landmark => (
                                            <button
                                                key={landmark}
                                                onClick={() => toggleLandmark(landmark)}
                                                className={`text-[10px] px-2 py-2 rounded-lg border transition-all text-left truncate ${selectedLandmarks.includes(landmark) ? 'bg-yellow-500/20 border-yellow-500 text-yellow-200 font-medium' : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:bg-gray-800'}`}
                                            >
                                                {selectedLandmarks.includes(landmark) ? '✓ ' : ''}{landmark}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700/50">
                                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${travelOptions.useLocalWardrobe ? 'bg-yellow-500 border-yellow-500' : 'border-gray-600'}`}>
                                        {travelOptions.useLocalWardrobe && <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={travelOptions.useLocalWardrobe}
                                        onChange={() => setTravelOptions({ ...travelOptions, useLocalWardrobe: !travelOptions.useLocalWardrobe })}
                                        className="hidden"
                                    />
                                    <div>
                                        <span className="text-xs font-bold text-gray-200 block">Moda Local Auténtica</span>
                                        <span className="text-[10px] text-gray-500 block">Adapta la ropa al destino (ej: Kimono en Tokio)</span>
                                    </div>
                                </label>
                            </div>
                        )}

                        {/* 3. LOGICA ESPECIFICA DE ANIME (ONE PIECE) */}
                        {selectedTemplate === 'anime' && styleParams.animeStyle === 'One Piece Style' && (
                            <div className="p-4 bg-blue-900/10 border border-blue-500/30 rounded-xl space-y-3 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 opacity-10"><span className="text-4xl">🏴‍☠️</span></div>
                                <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Opciones Pirata</h4>
                                <div className="space-y-2">
                                    <input type="text" value={animeCustoms.pirateName} onChange={e => setAnimeCustoms({ ...animeCustoms, pirateName: e.target.value })} className="w-full bg-black/50 border border-blue-500/30 rounded-lg p-2 text-xs text-white placeholder-blue-500/50 focus:border-blue-400 outline-none" placeholder="NOMBRE PIRATA (Ej: LUFFY)" />
                                    <input type="text" value={animeCustoms.bounty} onChange={e => setAnimeCustoms({ ...animeCustoms, bounty: e.target.value })} className="w-full bg-black/50 border border-blue-500/30 rounded-lg p-2 text-xs text-white placeholder-blue-500/50 focus:border-blue-400 outline-none" placeholder="RECOMPENSA (Ej: 3,000,000)" />
                                    <input type="text" value={animeCustoms.shipDesc} onChange={e => setAnimeCustoms({ ...animeCustoms, shipDesc: e.target.value })} className="w-full bg-black/50 border border-blue-500/30 rounded-lg p-2 text-xs text-white placeholder-blue-500/50 focus:border-blue-400 outline-none" placeholder="DETALLE BARCO (Ej: Cabeza de Dragón)" />
                                </div>
                            </div>
                        )}

                        {/* 4. CUSTOM GEN INPUT */}
                        {selectedTemplate === 'customGen' && (
                            <div className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase">Tu Visión</label>
                                    <div className="flex gap-1">
                                        <button onClick={handleVisualMuse} disabled={isEnhancing} className="p-1.5 bg-gray-800 hover:bg-purple-500 hover:text-white rounded-md text-gray-400 transition-colors border border-gray-700" title="Inspirarme en mi foto"><BrainCircuit size={12} /></button>
                                        <button onClick={handleEnhanceFreePrompt} disabled={isEnhancing || !freePrompt} className="p-1.5 bg-gray-800 hover:bg-yellow-500 hover:text-black rounded-md text-gray-400 transition-colors border border-gray-700" title="Mejorar con IA"><Wand2 size={12} /></button>
                                    </div>
                                </div>
                                <textarea
                                    value={freePrompt}
                                    onChange={e => setFreePrompt(e.target.value)}
                                    placeholder="Describe tu idea... (Ej: Un astronauta samurai en Marte)"
                                    className="w-full bg-black/50 border border-gray-700 rounded-xl p-3 text-sm h-24 resize-none focus:border-yellow-500 outline-none transition-colors placeholder:text-gray-700"
                                />
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* --- CONTROLES DINÁMICOS (AJUSTES FINOS) --- */}
                {/* Renderiza solo las opciones disponibles para la plantilla actual */}
                {currentTemplate.options && (
                    <div className="pt-4 border-t border-gray-800">
                        <h4 className="text-[10px] font-bold text-gray-600 uppercase mb-3 flex items-center gap-2">
                            <Sliders size={12} /> Ajustes Finos
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            {Object.entries(currentTemplate.options).map(([key, optionsList]) => (
                                <Dropdown
                                    key={key}
                                    label={OPTION_LABELS[key] || key}
                                    value={customParams[key]}
                                    options={optionsList}
                                    onChange={v => updateCustomParam(key, v)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* --- BOTÓN GENERAR --- */}
                <button
                    onClick={handleGenerate}
                    disabled={!uploadedImage || isGenerating}
                    className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold rounded-xl shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98]"
                >
                    {isGenerating ? (
                        <>
                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            Generando Magia...
                        </>
                    ) : (
                        <>
                            <Sparkles size={18} className="fill-black/20" />
                            GENERAR SET (x6)
                        </>
                    )}
                </button>
                {error && <div className="text-red-400 text-xs text-center bg-red-500/10 border border-red-500/20 p-2 rounded-lg">{error}</div>}
            </div>
        </section>
    );
};
