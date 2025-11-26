/**
 * ControlPanel Component - Premium Design
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Settings2, MapPin, Sparkles, Wand2, BrainCircuit, 
    Sliders, Anchor, Loader2, Zap
} from 'lucide-react';
import { TEMPLATES, DESTINATIONS_DATA, getStyleSpecificOptions } from '../services/prompts';

const OPTION_LABELS = {
    // Studio Pro - Retrato Ejecutivo
    purpose: '🎯 Propósito',
    expression: '😊 Expresión',
    framing: '📐 Encuadre',
    
    // Studio Pro - General
    lighting: '💡 Iluminación',
    wardrobe: '👔 Vestuario',
    backdrop: '🎨 Fondo',
    background: '🎨 Fondo',
    contrast: '⚡ Contraste',
    style: '🎨 Estilo',
    
    // Studio Pro - Old Money
    location: '📍 Ubicación',
    season: '🍂 Temporada',
    activity: '🎭 Actividad',
    
    // Studio Pro - Urbano
    urbanStyle: '🏙️ Estilo Urbano',
    mood: '🎭 Mood',
    
    // Studio Pro - Business
    industry: '🏢 Industria',
    setting: '🏛️ Escenario',
    level: '📊 Nivel',
    
    // Studio Pro - Cyberpunk
    neonColor: '💜 Color Neón',
    techLevel: '🤖 Nivel Tech',
    
    // Studio Pro - Vintage 90s
    era: '📅 Era',
    vibe: '🎸 Vibe',
    
    // Studio Pro - Cinematográfico Noir
    colorTreatment: '🎬 Tratamiento Color',
    shadowStyle: '🌑 Estilo Sombras',
    atmosphere: '🌫️ Atmósfera',
    
    // Studio Pro - Surrealista
    dreamscape: '☁️ Dreamscape',
    colorPalette: '🎨 Paleta',
    effect: '✨ Efecto',
    
    // Studio Pro - Bohemio
    nature: '🌿 Naturaleza',
    
    // Studio Pro - Editorial
    fashionStyle: '👗 Estilo Fashion',
    
    // Anime
    scene: '🎬 Escena',
    animeExpression: '😤 Expresión Anime',
    effectLevel: '✨ Nivel Efectos',
    
    // Avatar
    material: '🎨 Material',
    renderQuality: '🖥️ Calidad Render',
    background3D: '🌐 Fondo 3D',
    
    // Figurine
    display: '🏪 Display',
    angle: '📷 Ángulo',
    scale: '📏 Escala',
    finish: '✨ Acabado',
    
    // Time Travel
    photoType: '📸 Tipo de Foto',
    photoTreatment: '🎞️ Tratamiento',
    wardrobeAccuracy: '👗 Precisión Vestuario',
    
    // Travel
    timeOfDay: '🌅 Momento del Día',
    composition: '🖼️ Composición',
    weather: '🌤️ Clima',
    travelStyle: '🎒 Estilo Viaje',
    
    // Custom
    color: 'Color',
    environment: 'Entorno'
};

const PremiumSelect = ({ label, value, options, onChange, icon: Icon }) => (
    <div className="space-y-2">
        <label className="flex items-center gap-2 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
            {Icon && <Icon size={12} className="text-amber-500" />}
            {label}
        </label>
        <select
            value={value || 'Default'}
            onChange={(e) => onChange(e.target.value)}
            className="select-premium w-full"
        >
            {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

export const ControlPanel = ({
    selectedTemplate,
    styleParams, setStyleParams,
    customParams, setCustomParams,
    animeCustoms, setAnimeCustoms,
    travelOptions, setTravelOptions,
    selectedLandmarks, setSelectedLandmarks,
    freePrompt, setFreePrompt,
    handleVisualMuse, handleEnhanceFreePrompt, isEnhancing, 
    handleGenerate, isGenerating, uploadedImage, error
}) => {
    const currentTemplate = TEMPLATES[selectedTemplate];

    const toggleLandmark = (landmark) => {
        setSelectedLandmarks(prev => 
            prev.includes(landmark) 
                ? prev.filter(l => l !== landmark) 
                : [...prev, landmark]
        );
    };

    const updateCustomParam = (key, value) => {
        setCustomParams(prev => ({ ...prev, [key]: value }));
    };

    const getStyleValue = () => {
        switch (selectedTemplate) {
            case 'professionalPhotoshoot': return styleParams.style;
            case 'avatarStudio': return styleParams.avatarStyle;
            case 'anime': return styleParams.animeStyle;
            case 'figurine': return styleParams.material;
            case 'timeTravel': return styleParams.era;
            default: return '';
        }
    };

    const setStyleValue = (value) => {
        const updates = {
            professionalPhotoshoot: { style: value },
            avatarStudio: { avatarStyle: value },
            anime: { animeStyle: value },
            figurine: { material: value },
            timeTravel: { era: value },
        };
        if (updates[selectedTemplate]) {
            setStyleParams({ ...styleParams, ...updates[selectedTemplate] });
        }
    };

    return (
        <div className="card-premium p-5 sm:p-6">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                        <Settings2 size={20} className="text-black" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Configuración
                        </h3>
                        <p className="text-xs text-neutral-500">Ajusta los parámetros</p>
                    </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono text-amber-400 border border-amber-500/20">
                    GEMINI 3
                </span>
            </div>

            <div className="space-y-5">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTemplate}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-4"
                    >
                        {currentTemplate.styles && (
                            <PremiumSelect
                                label="Estilo Visual"
                                value={getStyleValue()}
                                options={currentTemplate.styles}
                                onChange={setStyleValue}
                                icon={Sparkles}
                            />
                        )}

                        {selectedTemplate === 'travelPhotoshoot' && (
                            <div className="space-y-4">
                                <PremiumSelect
                                    label="Destino"
                                    value={styleParams.destination}
                                    options={TEMPLATES.travelPhotoshoot.destinations}
                                    onChange={(v) => {
                                        setStyleParams({ ...styleParams, destination: v });
                                        setSelectedLandmarks([]);
                                    }}
                                    icon={MapPin}
                                />
                                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <label className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-3 block">
                                        Lugares Icónicos
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {DESTINATIONS_DATA[styleParams.destination]?.landmarks.map(landmark => (
                                            <button
                                                key={landmark}
                                                onClick={() => toggleLandmark(landmark)}
                                                className={`text-[11px] px-3 py-2 rounded-xl border text-left truncate transition-all ${
                                                    selectedLandmarks.includes(landmark) 
                                                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300' 
                                                        : 'border-white/10 text-neutral-400 hover:border-white/20'
                                                }`}
                                            >
                                                {selectedLandmarks.includes(landmark) ? '✓ ' : ''}{landmark}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <label className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 cursor-pointer hover:bg-white/[0.04]">
                                    <div className={`w-12 h-7 rounded-full p-1 transition-colors ${travelOptions.useLocalWardrobe ? 'bg-emerald-500' : 'bg-white/10'}`}>
                                        <motion.div animate={{ x: travelOptions.useLocalWardrobe ? 20 : 0 }} className="w-5 h-5 rounded-full bg-white shadow-lg" />
                                    </div>
                                    <input type="checkbox" checked={travelOptions.useLocalWardrobe} onChange={() => setTravelOptions({ ...travelOptions, useLocalWardrobe: !travelOptions.useLocalWardrobe })} className="hidden" />
                                    <div>
                                        <span className="text-sm font-semibold text-white block">Moda Local</span>
                                        <span className="text-xs text-neutral-500">Kimono en Tokio, etc.</span>
                                    </div>
                                </label>
                            </div>
                        )}

                        {selectedTemplate === 'anime' && styleParams.animeStyle === 'One Piece Style' && (
                            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-red-500/10 border border-blue-500/20 space-y-4">
                                <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                                    <Anchor size={16} className="text-blue-400" />
                                    <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 uppercase">
                                        ⚓ Personalización Pirata
                                    </span>
                                </div>
                                
                                {/* Cartel de Se Busca */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">📜 Cartel de Se Busca</label>
                                    <input 
                                        type="text" 
                                        value={animeCustoms.pirateName || ''} 
                                        onChange={(e) => setAnimeCustoms({ ...animeCustoms, pirateName: e.target.value })} 
                                        placeholder="Nombre pirata (ej: MONKEY D. LUFFY)" 
                                        className="input-premium w-full text-sm" 
                                    />
                                    <input 
                                        type="text" 
                                        value={animeCustoms.bounty || ''} 
                                        onChange={(e) => setAnimeCustoms({ ...animeCustoms, bounty: e.target.value })} 
                                        placeholder="Recompensa (ej: 3,000,000,000)" 
                                        className="input-premium w-full text-sm" 
                                    />
                                    <input 
                                        type="text" 
                                        value={animeCustoms.epithet || ''} 
                                        onChange={(e) => setAnimeCustoms({ ...animeCustoms, epithet: e.target.value })} 
                                        placeholder="Epíteto (ej: Sombrero de Paja)" 
                                        className="input-premium w-full text-sm" 
                                    />
                                </div>

                                {/* Barco Pirata */}
                                <div className="space-y-2 pt-3 border-t border-white/10">
                                    <label className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">🚢 Tu Barco Pirata</label>
                                    <input 
                                        type="text" 
                                        value={animeCustoms.shipName || ''} 
                                        onChange={(e) => setAnimeCustoms({ ...animeCustoms, shipName: e.target.value })} 
                                        placeholder="Nombre del barco (ej: Thousand Sunny)" 
                                        className="input-premium w-full text-sm" 
                                    />
                                    <select
                                        value={animeCustoms.figurehead || 'leon'}
                                        onChange={(e) => setAnimeCustoms({ ...animeCustoms, figurehead: e.target.value })}
                                        className="select-premium w-full text-sm"
                                    >
                                        <option value="">-- Mascarón de Proa --</option>
                                        <option value="leon">🦁 León (como Sunny)</option>
                                        <option value="oveja">🐑 Oveja/Carnero (como Merry)</option>
                                        <option value="dragon">🐉 Dragón</option>
                                        <option value="calavera">💀 Calavera</option>
                                        <option value="serpiente">🐍 Serpiente Marina</option>
                                        <option value="aguila">🦅 Águila</option>
                                        <option value="lobo">🐺 Lobo</option>
                                        <option value="tiburon">🦈 Tiburón</option>
                                        <option value="fenix">🔥 Fénix</option>
                                        <option value="custom">✨ Personalizado...</option>
                                    </select>
                                    {animeCustoms.figurehead === 'custom' && (
                                        <input 
                                            type="text" 
                                            value={animeCustoms.customFigurehead || ''} 
                                            onChange={(e) => setAnimeCustoms({ ...animeCustoms, customFigurehead: e.target.value })} 
                                            placeholder="Describe tu mascarón personalizado" 
                                            className="input-premium w-full text-sm" 
                                        />
                                    )}
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <label className="text-[9px] text-neutral-500 block mb-1">Color Principal</label>
                                            <select
                                                value={animeCustoms.shipColor || 'marron'}
                                                onChange={(e) => setAnimeCustoms({ ...animeCustoms, shipColor: e.target.value })}
                                                className="select-premium w-full text-xs"
                                            >
                                                <option value="marron">🟤 Madera Natural</option>
                                                <option value="negro">⚫ Negro</option>
                                                <option value="rojo">🔴 Rojo</option>
                                                <option value="azul">🔵 Azul</option>
                                                <option value="dorado">🟡 Dorado</option>
                                                <option value="blanco">⚪ Blanco</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-[9px] text-neutral-500 block mb-1">Color Velas</label>
                                            <select
                                                value={animeCustoms.sailColor || 'blanco'}
                                                onChange={(e) => setAnimeCustoms({ ...animeCustoms, sailColor: e.target.value })}
                                                className="select-premium w-full text-xs"
                                            >
                                                <option value="blanco">⚪ Blanco</option>
                                                <option value="negro">⚫ Negro</option>
                                                <option value="rojo">🔴 Rojo</option>
                                                <option value="azul">🔵 Azul</option>
                                                <option value="rayas">🏴‍☠️ Rayas</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Jolly Roger */}
                                <div className="space-y-2 pt-3 border-t border-white/10">
                                    <label className="text-[10px] font-bold text-red-400 uppercase tracking-wider">🏴‍☠️ Jolly Roger (Bandera)</label>
                                    <input 
                                        type="text" 
                                        value={animeCustoms.jollyRoger || ''} 
                                        onChange={(e) => setAnimeCustoms({ ...animeCustoms, jollyRoger: e.target.value })} 
                                        placeholder="Describe tu Jolly Roger (ej: calavera con sombrero de paja)" 
                                        className="input-premium w-full text-sm" 
                                    />
                                    <select
                                        value={animeCustoms.flagStyle || 'clasico'}
                                        onChange={(e) => setAnimeCustoms({ ...animeCustoms, flagStyle: e.target.value })}
                                        className="select-premium w-full text-sm"
                                    >
                                        <option value="clasico">💀 Clásico (Calavera + Huesos)</option>
                                        <option value="sombrero">🎩 Con Sombrero</option>
                                        <option value="espadas">⚔️ Con Espadas Cruzadas</option>
                                        <option value="fuego">🔥 Con Llamas</option>
                                        <option value="corazon">❤️ Con Corazón</option>
                                        <option value="custom">✨ Totalmente Personalizado</option>
                                    </select>
                                </div>

                                <p className="text-[9px] text-neutral-500 text-center pt-2 border-t border-white/5">
                                    💡 Deja campos vacíos para valores por defecto estilo One Piece
                                </p>
                            </div>
                        )}

                        {selectedTemplate === 'customGen' && (
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <label className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">Tu Visión</label>
                                    <div className="flex gap-2">
                                        <button onClick={handleVisualMuse} disabled={isEnhancing || !uploadedImage} className="p-2 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 disabled:opacity-50"><BrainCircuit size={14} /></button>
                                        <button onClick={handleEnhanceFreePrompt} disabled={isEnhancing || !freePrompt} className="p-2 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 disabled:opacity-50"><Wand2 size={14} /></button>
                                    </div>
                                </div>
                                <textarea value={freePrompt} onChange={(e) => setFreePrompt(e.target.value)} placeholder="Describe tu idea..." className="input-premium w-full h-28 resize-none" />
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {(() => {
                    // Obtener opciones dinámicas según el estilo seleccionado
                    let dynamicOptions = currentTemplate.options || {};
                    
                    if (selectedTemplate === 'professionalPhotoshoot') {
                        dynamicOptions = getStyleSpecificOptions('professionalPhotoshoot', styleParams.style);
                    }
                    
                    return Object.keys(dynamicOptions).length > 0 && (
                        <div className="pt-5 border-t border-white/5">
                            <div className="flex items-center gap-2 mb-4">
                                <Sliders size={14} className="text-neutral-500" />
                                <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                                    Ajustes Finos - {styleParams.style || 'Estilo'}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {Object.entries(dynamicOptions).map(([key, optionsList]) => (
                                    <PremiumSelect 
                                        key={`${styleParams.style}-${key}`} 
                                        label={OPTION_LABELS[key] || key} 
                                        value={customParams[key]} 
                                        options={optionsList} 
                                        onChange={(v) => updateCustomParam(key, v)} 
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })()}

                <motion.button
                    whileHover={{ scale: uploadedImage && !isGenerating ? 1.02 : 1 }}
                    whileTap={{ scale: uploadedImage && !isGenerating ? 0.98 : 1 }}
                    onClick={handleGenerate}
                    disabled={!uploadedImage || isGenerating}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all ${
                        !uploadedImage || isGenerating ? 'bg-white/5 text-neutral-500 cursor-not-allowed' : 'btn-glow text-black shadow-xl shadow-orange-500/30'
                    }`}
                >
                    {isGenerating ? (
                        <><Loader2 size={20} className="animate-spin" /><span className="relative z-10">Generando...</span></>
                    ) : (
                        <><Zap size={20} className="relative z-10" /><span className="relative z-10">GENERAR SET (x6)</span></>
                    )}
                </motion.button>

                {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">{error}</div>
                )}
            </div>
        </div>
    );
};
