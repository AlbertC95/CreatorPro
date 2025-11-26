import { useState, useCallback } from 'react';
import { generateImageReal, generateTextReal, toBase64 } from '../services/geminiWrapper';
import { getRealInstruction, TEMPLATES, DESTINATIONS_DATA, getStudioPoses, getAvatarPoses, getFigurinePoses, getTimeTravelPoses } from '../services/prompts';

/**
 * Hook principal para generación con Gemini
 * Maneja la lógica de selección de prompts según plantilla y estilo
 */
export const useGemini = (apiKey) => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [isEnhancing, setIsEnhancing] = useState(false);
    const [error, setError] = useState(null);
    const [generatedImages, setGeneratedImages] = useState([]);

    const generateSet = useCallback(async (uploadedImage, templateId, options, freePrompt, selectedLandmarks) => {
        if (!uploadedImage) return;
        if (!apiKey) { setError("⚠️ Falta API Key!"); return; }

        setIsGenerating(true);
        setGeneratedImages([]);
        setError(null);

        try {
            let promptsToRun = [];
            const imageWithoutPrefix = uploadedImage.split(',')[1];

            // ═══════════════════════════════════════════════════════════════════
            // LÓGICA DE SELECCIÓN DE PROMPTS POR PLANTILLA Y ESTILO
            // ═══════════════════════════════════════════════════════════════════

            if (templateId === 'customGen') {
                // Custom: usar el prompt libre del usuario
                promptsToRun = Array(6).fill(0).map((_, i) => ({ 
                    id: `Versión ${i + 1}`, 
                    base: freePrompt 
                }));
            } 
            else if (templateId === 'travelPhotoshoot') {
                // ═══════════════════════════════════════════════════════════════
                // GLOBAL TRAVELER: Usar poses ESPECÍFICAS del destino seleccionado
                // Cada destino tiene sus propias composiciones y escenas únicas
                // ═══════════════════════════════════════════════════════════════
                const currentDest = DESTINATIONS_DATA[options.styleParams.destination];
                
                if (currentDest && currentDest.poses) {
                    // Usar las poses predefinidas del destino
                    promptsToRun = currentDest.poses.map(pose => ({
                        id: pose.id,
                        base: pose.desc
                    }));
                } else {
                    // Fallback: generar basado en landmarks si no hay poses
                    const landmarksToUse = selectedLandmarks.length > 0 ? selectedLandmarks : currentDest.landmarks;
                    promptsToRun = Array(6).fill(0).map((_, i) => {
                        const landmark = landmarksToUse[i % landmarksToUse.length];
                        return { id: landmark, base: `Photo taken at ${landmark}, iconic view.` };
                    });
                }
            }
            else if (templateId === 'anime') {
                // ═══════════════════════════════════════════════════════════════
                // ANIME: Prompts ÚNICOS y VARIADOS según el estilo seleccionado
                // Incluye variantes de encuadre: close-up, medio, cuerpo completo
                // ═══════════════════════════════════════════════════════════════
                const animeStyle = options.styleParams.animeStyle;
                
                if (animeStyle === 'One Piece Style') {
                    // Obtener opciones personalizadas del usuario
                    const customs = options.animeCustoms || {};
                    const pirateName = customs.pirateName || 'WANTED';
                    const bounty = customs.bounty || '???';
                    const epithet = customs.epithet || '';
                    const shipName = customs.shipName || 'pirate ship';
                    const figurehead = customs.figurehead || 'leon';
                    const customFigurehead = customs.customFigurehead || '';
                    const shipColor = customs.shipColor || 'marron';
                    const sailColor = customs.sailColor || 'blanco';
                    const jollyRoger = customs.jollyRoger || 'skull and crossbones';
                    const flagStyle = customs.flagStyle || 'clasico';

                    // Mapeo de mascarones
                    const figureheadMap = {
                        'leon': 'majestic golden lion head with flowing mane (like Thousand Sunny)',
                        'oveja': 'cute sheep/ram head with spiral horns (like Going Merry)',
                        'dragon': 'fierce dragon head with fangs breathing fire',
                        'calavera': 'intimidating skull with glowing eyes',
                        'serpiente': 'sea serpent with open mouth and fangs',
                        'aguila': 'proud eagle with spread wings',
                        'lobo': 'howling wolf head',
                        'tiburon': 'aggressive shark head',
                        'fenix': 'phoenix bird engulfed in flames',
                        'custom': customFigurehead || 'unique custom figurehead'
                    };

                    // Mapeo de colores
                    const shipColorMap = {
                        'marron': 'natural brown wood',
                        'negro': 'black painted wood',
                        'rojo': 'red painted wood',
                        'azul': 'blue painted wood',
                        'dorado': 'golden gilded wood',
                        'blanco': 'white painted wood'
                    };

                    const sailColorMap = {
                        'blanco': 'white sails',
                        'negro': 'black sails',
                        'rojo': 'red sails',
                        'azul': 'blue sails',
                        'rayas': 'striped sails'
                    };

                    // Mapeo de banderas
                    const flagMap = {
                        'clasico': 'classic skull and crossbones Jolly Roger',
                        'sombrero': 'skull wearing a distinctive hat',
                        'espadas': 'skull with crossed swords behind',
                        'fuego': 'flaming skull design',
                        'corazon': 'skull with heart symbol',
                        'custom': jollyRoger || 'unique custom Jolly Roger design'
                    };

                    const shipDescription = `${shipColorMap[shipColor]} pirate ship with ${figureheadMap[figurehead]} as figurehead, ${sailColorMap[sailColor]} with ${flagMap[flagStyle]} flag flying. Ship named "${shipName}".`;

                    promptsToRun = [
                        { 
                            id: 'Retrato Pirata', 
                            base: `CLOSE-UP portrait in EIICHIRO ODA's One Piece manga/anime style. Bold BLACK INK OUTLINES with thick confident strokes. VIBRANT saturated flat colors. Character wearing open pirate vest, confident grin showing teeth. Background: simple gradient or speed lines. Style EXACTLY like One Piece anime frames.` 
                        },
                        { 
                            id: 'Pose Heroica', 
                            base: `FULL BODY heroic pose in EIICHIRO ODA's One Piece style. Character standing on rocky shore with ${shipDescription} ANCHORED in the background harbor. Captain's coat draped on shoulders, arms crossed confidently. SHOW COMPLETE SHIP from bow to stern. Bold ink lines, dramatic composition. Sunny sky, ocean waves.` 
                        },
                        { 
                            id: 'Nakama', 
                            base: `MEDIUM SHOT in One Piece style. Character in pirate tavern celebrating, holding large mug of drink, BIG CHEERFUL GRIN (Oda's signature wide smile). Wearing casual pirate clothes. Warm tavern lighting, wooden interior. Bold ink outlines, vibrant colors.` 
                        },
                        { 
                            id: 'Batalla', 
                            base: `FULL BODY dynamic ACTION POSE in Eiichiro Oda's One Piece style. Character mid-attack, dramatic low angle from below. Speed lines radiating from impact. Intense determined expression. Wearing battle-ready pirate outfit with coat flowing. THICK BOLD INK LINES, hatching shadows, manga panel style.` 
                        },
                        { 
                            id: 'Cartel de Se Busca', 
                            base: `EXACT One Piece WANTED POSTER format: AGED YELLOWED PARCHMENT with torn/worn edges. Top text "WANTED" in bold Western font. Below: "DEAD OR ALIVE". Character portrait in ROUGH SKETCH INK STYLE (not clean anime - like Marine photos). Name "${pirateName}"${epithet ? ` "${epithet}"` : ''} below portrait. Bounty amount "฿${bounty}" at bottom in bold. Authentic One Piece Marine bounty poster style. Weathered paper texture, coffee stains, crinkles.` 
                        },
                        { 
                            id: 'Capitán en Barco', 
                            base: `WIDE SHOT showing FULL PIRATE SHIP in One Piece style. ${shipDescription} Character as captain standing at the helm/ship wheel. ENTIRE SHIP VISIBLE from water to mast tops. ${flagMap[flagStyle]} flag waving on main mast. Ocean waves, dramatic sky with clouds. Epic adventure composition. Bold Oda-style ink lines, vibrant colors. Ship design inspired by One Piece vessels.` 
                        }
                    ];
                }
                else if (animeStyle === 'Studio Ghibli') {
                    promptsToRun = [
                        { id: 'Retrato Sereno', base: 'CLOSE-UP gentle portrait, soft smile, wind slightly moving hair. Wearing simple European-style clothing in earth tones. Blue sky with fluffy clouds behind.' },
                        { id: 'Pradera', base: 'FULL BODY standing in lush green meadow with wildflowers, arms slightly spread feeling the breeze. Wearing simple dress or shirt with vest. Show complete figure, rolling hills in background.' },
                        { id: 'Bosque Mágico', base: 'FULL BODY walking through enchanted forest path, dappled sunlight through leaves. Wearing practical adventure clothes. Sense of wonder on face.' },
                        { id: 'Interior Acogedor', base: 'MEDIUM SHOT in cozy cottage kitchen, warm lighting from window. Wearing apron or casual home clothes. Domestic peaceful moment.' },
                        { id: 'Junto al Mar', base: 'FULL BODY sitting on grassy cliff overlooking ocean, wind in hair. Wearing flowing skirt or casual pants. Contemplative, watching horizon.' },
                        { id: 'Ciudad Europea', base: 'FULL BODY walking through charming European-style town street, cobblestones, colorful buildings. Wearing vintage-style outfit. Carrying basket or bag.' }
                    ];
                }
                else if (animeStyle === '90s Retro') {
                    promptsToRun = [
                        { id: 'Retrato Cool', base: 'CLOSE-UP portrait with confident smirk, wearing leather jacket collar visible. Classic 90s anime face style, slight VHS grain effect.' },
                        { id: 'Ciudad Nocturna', base: 'FULL BODY leaning against wall in neon-lit city alley at night. Wearing long coat or stylish 90s outfit. Cigarette smoke or steam optional. Cowboy Bebop vibe.' },
                        { id: 'Moto/Vehículo', base: 'FULL BODY sitting on motorcycle or leaning on car, urban night setting. Wearing biker jacket. Cool, detached expression.' },
                        { id: 'Bar/Café', base: 'MEDIUM SHOT sitting at bar counter, drink in hand, moody lighting. Wearing casual 90s style. Thoughtful or melancholic expression.' },
                        { id: 'Acción', base: 'FULL BODY dynamic action pose, running or fighting stance. Wearing tactical or stylish combat outfit. Dramatic shadows and motion.' },
                        { id: 'Atardecer Urbano', base: 'FULL BODY silhouette against orange sunset sky, standing on rooftop. City skyline behind. Wearing flowing coat. Nostalgic atmosphere.' }
                    ];
                }
                else if (animeStyle === 'Modern Shonen') {
                    promptsToRun = [
                        { id: 'Retrato Intenso', base: 'CLOSE-UP intense portrait, determined eyes with dramatic lighting. Wearing dark uniform with colored accents. Energy particles around.' },
                        { id: 'Pose de Batalla', base: 'FULL BODY battle stance, feet planted firmly, ready to fight. Wearing battle uniform or school uniform with dramatic flair. Show complete figure, aura effect.' },
                        { id: 'Poder Desatado', base: 'FULL BODY unleashing special power, energy swirling around entire body. Dynamic pose, clothes and hair flowing with power. Dramatic background effects.' },
                        { id: 'Entrenamiento', base: 'FULL BODY training scene, athletic pose showing effort. Wearing training clothes, sweat visible. Determined expression. Outdoor or dojo setting.' },
                        { id: 'Caminando Épico', base: 'FULL BODY walking forward with purpose, coat or jacket flowing. Wearing stylized uniform. Dramatic low angle, show complete figure from feet up.' },
                        { id: 'Victoria', base: 'FULL BODY triumphant pose after battle, standing tall. Battle-worn clothes, confident smile. Sunrise or dramatic sky behind.' }
                    ];
                }
                else if (animeStyle === 'Makoto Shinkai (Scenery)') {
                    promptsToRun = [
                        { id: 'Cielo Dramático', base: 'MEDIUM SHOT portrait with HYPER-DETAILED dramatic sunset sky behind. Wearing school uniform or casual clothes. Emotional expression, lens flare.' },
                        { id: 'Estación de Tren', base: 'FULL BODY waiting on train platform, golden hour light. Wearing school uniform with bag. Train tracks extending into distance, beautiful clouds.' },
                        { id: 'Lluvia Urbana', base: 'FULL BODY walking in rain on city street at night, neon reflections on wet pavement. Wearing coat, holding umbrella. Melancholic beauty.' },
                        { id: 'Escaleras', base: 'FULL BODY standing on long stairway, city panorama behind. Wearing casual clothes. Dramatic sky with clouds, lens flares.' },
                        { id: 'Cielo Estrellado', base: 'FULL BODY lying on grass looking up at incredibly detailed starry sky. Wearing summer clothes. Meteor shower, Milky Way visible.' },
                        { id: 'Sakura', base: 'FULL BODY standing under cherry blossom tree, petals floating everywhere. Wearing spring clothes. Soft golden light, emotional moment.' }
                    ];
                }
                else if (animeStyle === 'Cyberpunk Anime') {
                    promptsToRun = [
                        { id: 'Retrato Neon', base: 'CLOSE-UP portrait with neon pink/cyan split lighting. Wearing tech goggles on head, cybernetic ear piece. Intense expression, rain drops.' },
                        { id: 'Calle Nocturna', base: 'FULL BODY standing in rain-soaked neon street, holographic ads towering above. Wearing full techwear outfit with glowing elements. Show complete figure.' },
                        { id: 'Hacker', base: 'MEDIUM SHOT surrounded by floating holographic screens, data streams. Wearing tech jacket, cybernetic hand visible. Focused expression.' },
                        { id: 'Moto Futurista', base: 'FULL BODY on futuristic motorcycle, neon city behind. Wearing full cyber suit with helmet nearby. Akira-inspired composition.' },
                        { id: 'Club Nocturno', base: 'FULL BODY in futuristic nightclub, laser lights, neon everywhere. Wearing stylish cyberpunk fashion. Dancing or posing confidently.' },
                        { id: 'Azotea', base: 'FULL BODY standing on skyscraper edge, massive dystopian city below. Wearing long cyber-coat flowing in wind. Dramatic silhouette against neon skyline.' }
                    ];
                }
                else {
                    // Fallback genérico con variedad
                    promptsToRun = [
                        { id: 'Retrato', base: 'CLOSE-UP anime portrait, expressive eyes, stylized features.' },
                        { id: 'Medio Cuerpo', base: 'MEDIUM SHOT showing upper body, interesting pose, detailed background.' },
                        { id: 'Cuerpo Completo', base: 'FULL BODY shot showing complete figure from head to feet, standing pose.' },
                        { id: 'Acción', base: 'FULL BODY dynamic action pose with movement and energy.' },
                        { id: 'Escena', base: 'FULL BODY character in detailed environment, storytelling composition.' },
                        { id: 'Dramático', base: 'Dramatic moment with intense lighting and atmosphere.' }
                    ];
                }
            }
            else if (templateId === 'professionalPhotoshoot') {
                // ═══════════════════════════════════════════════════════════════
                // STUDIO PRO: Usar poses ESPECÍFICAS según el estilo seleccionado
                // Cada estilo tiene sus propias poses profesionales únicas
                // ═══════════════════════════════════════════════════════════════
                const studioStyle = options.styleParams.style || 'Estudio Minimalista';
                const poses = getStudioPoses(studioStyle);
                
                promptsToRun = poses.map(pose => ({
                    id: pose.id,
                    base: pose.desc
                }));
            }
            else if (templateId === 'avatarStudio') {
                // ═══════════════════════════════════════════════════════════════
                // AVATAR 3D: Usar poses ESPECÍFICAS según el estilo seleccionado
                // CGI, Videojuego, Escultura, etc. - cada uno tiene poses únicas
                // ═══════════════════════════════════════════════════════════════
                const avatarStyle = options.styleParams.avatarStyle || 'CGI Hiperrealista';
                const poses = getAvatarPoses(avatarStyle);
                
                promptsToRun = poses.map(pose => ({
                    id: pose.id,
                    base: pose.desc
                }));
            }
            else if (templateId === 'figurine') {
                // ═══════════════════════════════════════════════════════════════
                // MINIATURE ME: Usar poses ESPECÍFICAS según el material
                // Vinyl, Porcelana, Madera, Peluche, Action Figure
                // ═══════════════════════════════════════════════════════════════
                const figurineStyle = options.styleParams.material || 'Plástico Vinilo';
                const poses = getFigurinePoses(figurineStyle);
                
                promptsToRun = poses.map(pose => ({
                    id: pose.id,
                    base: pose.desc
                }));
            }
            else if (templateId === 'timeTravel') {
                // ═══════════════════════════════════════════════════════════════
                // TIME TRAVELER: Usar poses ESPECÍFICAS según la era
                // 80s, 90s, 50s, 20s, Victorian, Wild West
                // ═══════════════════════════════════════════════════════════════
                const era = options.styleParams.era || '1980s Mall Portrait';
                const poses = getTimeTravelPoses(era);
                
                promptsToRun = poses.map(pose => ({
                    id: pose.id,
                    base: pose.desc
                }));
            }
            else {
                // Otras plantillas: usar los prompts definidos en TEMPLATES
                promptsToRun = TEMPLATES[templateId]?.prompts || [];
            }

            // Limitar a 6 prompts máximo
            promptsToRun = promptsToRun.slice(0, 6);

            // ═══════════════════════════════════════════════════════════════════
            // EJECUTAR GENERACIÓN EN PARALELO
            // ═══════════════════════════════════════════════════════════════════
            const promises = promptsToRun.map(async (prompt) => {
                const instruction = getRealInstruction(templateId, prompt, options);
                const payload = { 
                    contents: [{ 
                        parts: [
                            { text: instruction }, 
                            { inlineData: { mimeType: "image/png", data: imageWithoutPrefix } }
                        ] 
                    }] 
                };

                try {
                    const imageUrl = await generateImageReal(payload, apiKey);
                    const imageData = {
                        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                        promptId: prompt.id,
                        url: imageUrl,
                        template: templateId,
                        templateName: TEMPLATES[templateId]?.name || 'Custom',
                        style: options.styleParams.animeStyle || options.styleParams.style || '',
                        fullPrompt: instruction,
                        timestamp: Date.now(),
                    };
                    setGeneratedImages(prev => [...prev, imageData]);
                } catch (err) {
                    console.error(`Error generating ${prompt.id}:`, err);
                }
            });

            await Promise.all(promises);

        } catch (err) {
            setError(err.message || "Error desconocido en la generación.");
        } finally {
            setIsGenerating(false);
        }
    }, [apiKey]);

    const enhancePrompt = useCallback(async (currentPrompt) => {
        if (!apiKey) { setError("Falta API Key"); return null; }
        setIsEnhancing(true);
        try {
            const systemPrompt = `Genera 6 prompts visuales (inglés) basados en: "${currentPrompt}". Devuelve JSON array strings.`;
            const response = await generateTextReal(systemPrompt, null, apiKey, true);
            const variations = JSON.parse(response.replace(/```json|```/g, '').trim());
            return variations;
        } catch (err) {
            setError("Error al potenciar prompt.");
            return null;
        } finally {
            setIsEnhancing(false);
        }
    }, [apiKey]);

    const getVisualMuse = useCallback(async (image) => {
        if (!apiKey) { setError("Falta API Key"); return null; }
        setIsEnhancing(true);
        try {
            const prompt = `Analiza esta persona. Sugiere un concepto artístico único. Responde 1 frase en español.`;
            const text = await generateTextReal(prompt, image, apiKey);
            return text;
        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setIsEnhancing(false);
        }
    }, [apiKey]);

    return {
        isGenerating,
        isEnhancing,
        error,
        generatedImages,
        generateSet,
        enhancePrompt,
        getVisualMuse
    };
};
