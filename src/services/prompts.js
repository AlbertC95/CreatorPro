// --- BASE DE DATOS DE VIAJES ---
export const DESTINATIONS_DATA = {
    'París, Francia': {
        landmarks: ['Torre Eiffel', 'Museo del Louvre', 'Arco del Triunfo', 'Catedral de Notre Dame', 'Café en Montmartre', 'Río Sena al Atardecer'],
        localWardrobe: 'Parisian Chic: Trench coat beige, boina (opcional), bufanda elegante, ropa entallada y sofisticada.'
    },
    'Tokio, Japón': {
        landmarks: ['Cruce de Shibuya', 'Templo Senso-ji', 'Torre de Tokio', 'Barrio de Akihabara (Neón)', 'Monte Fuji (Fondo)', 'Callejón de Shinjuku'],
        localWardrobe: 'Tokyo Modern: Ropa urbana japonesa de capas, o Kimono tradicional moderno.'
    },
    'Nueva York, USA': {
        landmarks: ['Times Square', 'Puente de Brooklyn', 'Central Park', 'Estatua de la Libertad', 'Empire State (Mirador)', 'SoHo Calles Adoquinadas'],
        localWardrobe: 'NYC Street: Abrigo largo de lana, bufanda, botas de cuero o estilo ejecutivo moderno.'
    },
    'Santorini, Grecia': {
        landmarks: ['Cúpulas Azules de Oia', 'Atardecer en la Caldera', 'Calles Blancas', 'Playa Roja', 'Piscina Infinita', 'Iglesia Ortodoxa'],
        localWardrobe: 'Aegean Resort: Ropa de lino blanca o azul claro, ligera, gafas de sol, estilo veraniego elegante.'
    },
    'Roma, Italia': {
        landmarks: ['El Coliseo', 'Fontana de Trevi', 'El Vaticano', 'Panteón', 'Plaza de España', 'Callejón del Trastevere'],
        localWardrobe: 'Italian Sprezzatura: Traje de lino relajado, camisa desabotonada, mocasines, gafas de sol clásicas.'
    },
    'Machu Picchu, Perú': {
        landmarks: ['Vista Clásica de la Ciudadela', 'Puerta del Sol', 'Templo del Sol', 'Terrazas Agrícolas', 'Con una Llama', 'Huayna Picchu'],
        localWardrobe: 'Explorer Chic: Ropa técnica de montaña estilizada, poncho andino moderno, botas de trekking.'
    },
    'El Salvador (Tropical)': {
        landmarks: ['Playa El Tunco (Roca)', 'Lago de Coatepeque', 'Volcán de Santa Ana', 'Ruinas de Tazumal', 'Centro Histórico SS', 'Surf City Atardecer'],
        localWardrobe: 'Tropical Casual: Camisa de lino fresca, shorts chinos, estilo relajado de playa pero elegante.'
    }
};

// --- PRESETS DE ESTILO (SMART DEFAULTS) ---
// Define la dirección de arte automática cuando el usuario deja opciones en 'Default'
const STYLE_PRESETS = {
    professionalPhotoshoot: {
        'Estudio Minimalista': { lighting: 'Soft Bright Lighting', wardrobe: 'Minimalist Solid Colors', film: 'Digital Clean', background: 'Solid Light Grey' },
        'Cinematográfico Noir': { lighting: 'High Contrast Shadows', wardrobe: 'Vintage Formal', film: 'B&W Tri-X 400', background: 'Dark Black Void' },
        'Old Money Luxury': { lighting: 'Golden Hour Natural', wardrobe: 'Old Money Aesthetic (Polo/Sweater)', film: 'Kodak Portra 400', background: 'Luxury Interior Blur' },
        'Cyberpunk Neon': { lighting: 'Neon Split (Blue/Red)', wardrobe: 'Techwear / Futuristic', film: 'Digital Sharp', background: 'Dark Neon Abstract' },
        'Editorial Alta Costura': { lighting: 'Butterfly Lighting', wardrobe: 'Avant-Garde Fashion', film: 'Digital Clean', background: 'Solid White Infinite' },
        'Urbano / Street': { lighting: 'Natural Overcast', wardrobe: 'Streetwear (Hoodie/Layered)', film: 'Fujifilm Velvia', background: 'City Street Blur' },
        'Bohemio / Nature': { lighting: 'Natural Sunlight', wardrobe: 'Linen & Earth Tones', film: 'Kodak Gold', background: 'Nature Blur' },
        'Vintage 90s': { lighting: 'Direct Flash', wardrobe: '90s Grunge/Denim', film: 'Disposable Camera', background: 'Textured Canvas' },
        'Business Corporate': { lighting: 'Studio Multi-Point', wardrobe: 'Business Suit', film: 'Digital Clean', background: 'Modern Office Blur' },
        'Fitness / Sport': { lighting: 'Hard Rim Light', wardrobe: 'Athletic Gear', film: 'High Contrast', background: 'Dark Gym Texture' },
        'Gótico / Dark': { lighting: 'Low Key', wardrobe: 'Gothic Black', film: 'Desaturated', background: 'Dark Textured' },
        'Surrealista / Dreamy': { lighting: 'Soft Haze', wardrobe: 'Flowing Fabric', film: 'Pastel', background: 'Abstract Clouds' }
    },
    anime: {
        'One Piece Style': { lighting: 'Dramatic Shading', framing: 'Dynamic Angle', effect: 'Speed Lines' },
        'Studio Ghibli': { lighting: 'Soft Natural Pictorial', framing: 'Wide Scenery', effect: 'None' },
        'Retro 90s': { lighting: 'Flat Anime Lighting', framing: 'Standard', effect: 'VHS Glitch' },
        'Cyberpunk Anime': { lighting: 'Neon Glow', framing: 'Dutch Angle', effect: 'Holograms' }
    },
    avatarStudio: {
        'CGI Hiperrealista': { lighting: 'Studio 3-Point', material: 'Skin SSS (Subsurface)', framing: 'Portrait' },
        'Videojuego AAA (Unreal 5)': { lighting: 'HDR Map', material: 'Detailed Texture', framing: 'Hero Pose' },
        'Escultura de Mármol': { lighting: 'Museum Spot', material: 'White Marble', framing: 'Bust' }
    },
    timeTravel: {
        '1920s Gatsby': { film: 'Sepia / B&W Soft', framing: 'Static Portrait' },
        '1980s Mall': { film: 'Vintage Polaroid', framing: 'Medium Shot' }
    }
};

// --- PLANTILLAS Y OPCIONES ÚNICAS ---
export const TEMPLATES = {
    professionalPhotoshoot: {
        id: 'professionalPhotoshoot', name: 'Studio Pro', desc: 'Editorial, LinkedIn, Headshots.',
        styles: ['Estudio Minimalista', 'Urbano / Street', 'Bohemio / Nature', 'Editorial Alta Costura', 'Cyberpunk Neon', 'Vintage 90s', 'Old Money Luxury', 'Cinematográfico Noir', 'Surrealista / Dreamy', 'Business Corporate', 'Fitness / Sport', 'Gótico / Dark'],
        options: {
            lighting: ['Default', 'Softbox Studio', 'Rembrandt (High Contrast)', 'Butterfly Lighting', 'Natural Window', 'Neon Split (Blue/Red)', 'Golden Hour Natural', 'Ring Light', 'Direct Flash'],
            framing: ['Default', 'Headshot (85mm)', 'Waist Up (50mm)', 'Full Body (35mm)', 'Environmental (24mm)', 'Extreme Close-up', 'Low Angle'],
            wardrobe: ['Default', 'Casual Chic', 'Business Formal', 'Old Money Aesthetic', 'Streetwear', 'Techwear', 'Avant-Garde', 'Minimalist', 'Bohemian', 'Gothic', 'Athletic'],
            film: ['Default', 'Digital Clean', 'Kodak Portra 400', 'B&W Tri-X 400', 'Fujifilm Velvia', 'Cinestill 800T', 'Polaroid Vintage'],
            pose: ['Default', 'Standing Power Pose', 'Arms Crossed', 'Hands in Pockets', 'Leaning on Wall', 'Walking Confident', 'Sitting on Cube (Full Body)', 'Profile Thoughtful', 'Dynamic Action', 'High Fashion'],
            expression: ['Default', 'Neutral Serious', 'Soft Smile', 'Confident Smirk', 'Intense Gaze', 'Relaxed', 'Laughing (Natural)', 'Dreamy', 'Focused'],
            background: ['Default', 'Solid White', 'Solid Light Grey', 'Studio Dark Grey', 'Black Void', 'Modern Office Blur', 'Luxury Interior', 'City Bokeh', 'Abstract Texture']
        },
        prompts: [
            { id: 'LinkedIn Headshot', base: 'FRAMING: Close-up Headshot (Shoulders up). Professional business portrait, confident but natural expression. Slight smile or neutral. Business attire. Clean background.' },
            { id: 'Power Full Body', base: 'FRAMING: Wide Full Body Shot. Standing confidently, strong posture (Power Pose). Camera zoomed out to show shoes and entire outfit. High-end editorial vibe.' },
            { id: 'Fashion 3/4 Shot', base: 'FRAMING: American Shot (Knees up). Stylish pose, hands in pockets or adjusting jacket. Dynamic angle. Fashion magazine style.' },
            { id: 'Sitting Full Body', base: 'FRAMING: Wide Full Body Shot, Sitting. Subject is sitting on a white cube or stool. Legs crossed or relaxed. SHOW ENTIRE BODY including shoes. Hands resting on knees or chin.' },
            { id: 'Walking Motion', base: 'FRAMING: Full Body, Walking towards camera. Dynamic movement, coat flowing. Street style or runway vibe. Camera tracking shot.' },
            { id: 'Modern Portrait', base: 'FRAMING: Waist Up (Medium Shot). Arms crossed or leaning forward. Intense connection with camera. Modern professional look.' }
        ]
    },
    avatarStudio: {
        id: 'avatarStudio', name: 'Avatar 3D', desc: 'CGI, Videojuegos, Esculturas.',
        styles: ['CGI Hiperrealista', 'Videojuego AAA (Unreal 5)', 'Cyber-Humano (Sci-Fi)', 'Estilo Pixar / Disney', 'Escultura de Mármol', 'Claymation (Arcilla)', 'Dibujo a Lápiz (Sketch)', 'Pintura al Óleo', 'Low Poly Art'],
        options: {
            lighting: ['Default', 'Studio 3-Point', 'HDR Map', 'Neon Rim', 'Soft Area', 'Museum Spot'],
            framing: ['Default', 'Portrait', 'Full Character', 'T-Pose', 'Action Angle', 'Bust'],
            material: ['Default', 'Skin SSS (Subsurface)', 'Plastic Toy', 'Clay', 'White Marble', 'Gold', 'Hologram']
        },
        prompts: [
            { id: 'ID Biométrica', base: 'Front facing neutral, perfect lighting. High skin texture detail.' },
            { id: 'Héroe RPG', base: 'Dynamic combat pose, magical aura. Fantasy armor.' },
            { id: 'Perfil Cibernético', base: 'Side profile view, neon circuitry on skin. Cyberpunk aesthetics.' },
            { id: 'Estatua Clásica', base: 'Marble bust in a museum. Museum lighting.' },
            { id: 'Concept Art', base: 'Character design sheet, neutral background, multiple angles.' }
        ]
    },
    anime: {
        id: 'anime', name: 'Anime World', desc: 'Ghibli, Shonen, Retro 90s.',
        styles: ['Studio Ghibli', 'One Piece Style', '90s Retro', 'Modern Shonen', 'Makoto Shinkai (Scenery)', 'Cyberpunk Anime'],
        options: {
            lighting: ['Default', 'Flat Anime Lighting', 'Dramatic Shading', 'Sunset', 'Moonlight', 'Neon Glow'],
            framing: ['Default', 'Standard', 'Close-up Intense', 'Dutch Angle', 'Wide Scenery'],
            effect: ['Default', 'None', 'Speed Lines', 'Magical Aura', 'Sakura Petals', 'Glitch', 'VHS Glitch']
        },
        prompts: [
            { id: 'Scene Replication', base: 'Same composition as original, converted to anime style.' },
            { id: 'Ultimate Attack', base: 'Unleashing a powerful special move with aura effects. Dynamic action.' },
            { id: 'Nakama Moment', base: 'Celebrating with friends/crew, holding a drink/food. Cheerful.' },
            { id: 'Villain Stare', base: 'Menacing expression, shadows covering eyes, intense pressure.' },
            { id: 'Cozy Vibes', base: 'Eating ramen in a cozy shop. Warm atmosphere.' },
            { id: 'Cartel de Se Busca', base: 'Custom Wanted Poster.' },
            { id: 'Capitán en Barco', base: 'Captain on custom ship.' }
        ]
    },
    figurine: {
        id: 'figurine', name: 'Miniature Me', desc: 'Juguetes y Coleccionables.',
        styles: ['Plástico Vinilo', 'Porcelana Fina', 'Madera Tallada', 'Muñeco de Peluche', 'Action Figure Retro'],
        options: {
            material: ['Default', 'Vinyl', 'Resin', 'Wood', 'Plush', 'Gold'],
            environment: ['Default', 'Wooden Desk', 'Collector Box', 'Diorama Battle', 'Plain White', 'Shelf']
        },
        prompts: [
            { id: 'Macro Desk', base: 'Standing on a wooden desk, shallow depth of field.' },
            { id: 'Packaging', base: 'Inside a collector box.' },
            { id: 'Diorama', base: 'In a miniature battle scene.' },
            { id: 'Estante', base: 'Standing on a shelf among other toys.' }
        ]
    },
    timeTravel: {
        id: 'timeTravel', name: 'Time Traveler', desc: '80s Mall, 1920s, Victorian.',
        styles: ['1980s Mall Portrait', '1990s Grunge', '1950s Diner', '1920s Gatsby', 'Victorian Era', 'Wild West'],
        options: {
            film: ['Default', 'Vintage Polaroid', 'Sepia / B&W Soft', 'Kodachrome', 'VHS Tape', 'Daguerreotype'],
            framing: ['Default', 'Static Portrait', 'Candid Snapshot', 'Family Photo Pose']
        },
        prompts: [
            { id: 'Classic Portrait', base: 'Standard period-accurate portrait pose.' },
            { id: 'Candid Moment', base: 'Laughing with period-accurate props.' },
            { id: 'Anuario Escolar', base: 'Vintage yearbook photo style.' },
            { id: 'Noticiero TV', base: 'On a vintage TV screen broadcast.' }
        ]
    },
    travelPhotoshoot: {
        id: 'travelPhotoshoot', name: 'Global Traveler', desc: 'Teletransporte instantáneo.',
        destinations: Object.keys(DESTINATIONS_DATA),
        options: {
            lighting: ['Default', 'Golden Hour', 'Blue Hour', 'Midday Sun', 'Night City Lights'],
            framing: ['Default', 'Full Body Tourist', 'Selfie Angle', 'Wide Landscape'],
            wardrobe: ['Default', 'Tourist Casual', 'Local Traditional', 'Elegant Traveler']
        },
        prompts: [] // Se generan dinámicamente
    },
    customGen: {
        id: 'customGen', name: 'Prompt Libre', desc: 'Tú escribes, Gemini crea.', isCustom: true,
        options: {
            lighting: ['Default', 'Cinematic', 'Natural', 'Studio', 'Neon'],
            framing: ['Default', 'Wide', 'Medium', 'Close-up'],
            film: ['Default', 'Digital', 'Film Grain', 'B&W'],
            color: ['Default', 'Vibrant', 'Muted', 'Pastel', 'Dark']
        }
    }
};

// --- LÓGICA DE RESOLUCIÓN INTELIGENTE ---
const resolveSmartOption = (templateId, style, category, userValue) => {
    // 1. Si el usuario eligió algo específico (no Default), usar eso.
    if (userValue && userValue !== 'Default') return userValue;

    // 2. Si es Default, buscar en los PRESETS
    const preset = STYLE_PRESETS[templateId]?.[style];
    if (preset && preset[category]) {
        return preset[category]; // Retorna el valor del preset (ej: 'Rembrandt')
    }

    // 3. Si no hay preset, retornar vacío (Gemini decide)
    return '';
};

// --- INGENIERÍA DE PROMPTS ---
export const getRealInstruction = (template, prompt, options) => {
    const { styleParams, customParams, animeCustoms, travelOptions } = options;
    const tConfig = TEMPLATES[template];

    // Determinar el estilo activo
    let activeStyle = styleParams.style;
    if (template === 'avatarStudio') activeStyle = styleParams.avatarStyle;
    if (template === 'anime') activeStyle = styleParams.animeStyle;
    if (template === 'figurine') activeStyle = styleParams.material; // En figurine el estilo es el material principal
    if (template === 'timeTravel') activeStyle = styleParams.era;

    // Resolver opciones inteligentes
    const lighting = resolveSmartOption(template, activeStyle, 'lighting', customParams.lighting);
    const framing = resolveSmartOption(template, activeStyle, 'framing', customParams.framing);
    const wardrobe = resolveSmartOption(template, activeStyle, 'wardrobe', customParams.wardrobe);
    const film = resolveSmartOption(template, activeStyle, 'film', customParams.film);
    const effect = resolveSmartOption(template, activeStyle, 'effect', customParams.effect);
    const material = resolveSmartOption(template, activeStyle, 'material', customParams.material);
    const environment = resolveSmartOption(template, activeStyle, 'environment', customParams.environment);
    const pose = resolveSmartOption(template, activeStyle, 'pose', customParams.pose);
    const expression = resolveSmartOption(template, activeStyle, 'expression', customParams.expression);
    const background = resolveSmartOption(template, activeStyle, 'background', customParams.background);

    // Construir partes del prompt
    const p_light = lighting ? `LIGHTING: ${lighting}` : '';
    const p_frame = framing ? `FRAMING: ${framing}` : '';
    const p_wardrobe = wardrobe ? `WARDROBE: ${wardrobe}` : '';
    const p_film = film ? `FILM STOCK: ${film}` : '';
    const p_effect = effect ? `EFFECT: ${effect}` : '';
    const p_mat = material ? `MATERIAL: ${material}` : '';
    const p_env = environment ? `ENVIRONMENT: ${environment}` : '';
    const p_pose = pose ? `POSE: ${pose}` : '';
    const p_expr = expression ? `EXPRESSION: ${expression}` : '';
    const p_bg = background ? `BACKGROUND: ${background}` : '';

    // SYSTEM CONTEXT
    const systemContext = `**SYSTEM:** Gemini 3 Pro Image. **MODE:** High-Fidelity Portrait. **CRITICAL:** PRESERVE SUBJECT IDENTITY. Maintain exact facial structure, eye shape, nose, and key features from input image. **SKIN:** Match the subject's original skin texture. Do NOT add acne, moles, or blemishes if not present in source. Do NOT beautify excessively, but keep skin clean and natural. Avoid plastic skin or uncanny valley effects.`;

    let taskInstruction = "";

    switch (template) {
        case 'professionalPhotoshoot':
            taskInstruction = `**TASK:** Professional Photoshoot. **STYLE:** ${activeStyle}. **SCENE:** ${prompt.base}. ${p_light}. ${p_frame}. ${p_wardrobe}. ${p_film}. ${p_pose}. ${p_expr}. ${p_bg}. Ensure high-end magazine quality. Skin must look natural and clear. **CRITICAL:** DO NOT CROP THE HEAD. Leave ample headroom. **NEGATIVE PROMPT:** Do NOT show studio lighting equipment, softboxes, umbrellas, or stands in the frame. Clean background.`;
            break;

        case 'avatarStudio':
            taskInstruction = `**TASK:** Digital Avatar Creation. **STYLE:** ${activeStyle}. **SCENE:** ${prompt.base}. ${p_light}. ${p_frame}. ${p_mat}. Focus on perfect CGI/3D topology and textures. Even in stylized modes, keep the subject's key facial proportions.`;
            break;

        case 'anime':
            let animeStyleInstruction = `**ART STYLE:** ${activeStyle}.`;
            let sceneDescription = prompt.base;

            if (activeStyle === 'One Piece Style') {
                animeStyleInstruction = `**ART STYLE:** One Piece anime style by Eiichiro Oda. **CRITICAL:** Use bold ink lines, vibrant flat colors, exaggerated expressions, and dramatic shading (hatching). **WARDROBE OVERRIDE:** The subject MUST wear Pirate Era clothing (open captain's coat, vest, sash, or kimono). DISCARD modern casual clothes like plaid shirts or t-shirts.`;

                // Lógica específica de One Piece (Carteles, etc) se mantiene igual...
                if (prompt.id === 'Cartel de Se Busca') {
                    sceneDescription = `A specific One Piece WANTED Poster. 
                    **LAYOUT:** Vertical vintage parchment paper with torn edges.
                    **TOP:** Text "WANTED" in bold, serif Western font.
                    **IMAGE:** The central image is NOT realistic. It is a rough, monochromatic INK SKETCH of the subject laughing or shouting, stylized like Oda's manga art.
                    **BOTTOM:** Text "DEAD OR ALIVE".
                    **NAME:** Text "${animeCustoms.pirateName.toUpperCase()}" below the portrait.
                    **BOUNTY:** Text "B ${animeCustoms.bounty}" with the Berry symbol (looks like a B with a strike).
                    **BACKGROUND:** Wooden wall texture behind the poster.`;
                } else if (prompt.id === 'Capitán en Barco') {
                    sceneDescription = `A dramatic **TOP-DOWN HIGH-ANGLE SHOT**.
                    **FOREGROUND:** The Captain (subject) is seen from the chest up in the immediate foreground, looking out towards the adventure with a confident smirk. They are wearing a grand Captain's Coat draped over their shoulders like a cape.
                    **BACKGROUND:** Below and behind the captain, the FULL PIRATE SHIP is visible sailing on the blue Grand Line ocean. The ship is stylized and curvy (like the Thousand Sunny), painted in bright colors, with a massive "${animeCustoms.shipDesc}" figurehead clearly visible at the front.`;
                }
            }

            taskInstruction = `**TASK:** Anime Transformation. ${animeStyleInstruction} **SCENE:** ${sceneDescription}. ${p_light}. ${p_frame}. ${p_effect}. Maintain the subject's key facial features (eyes, nose shape) but stylized.`;
            break;

        case 'figurine':
            taskInstruction = `**TASK:** Macro Photography of Miniature Figurine. **STYLE:** ${activeStyle}. **SCENE:** ${prompt.base}. ${p_mat}. ${p_env}. Create a tilt-shift effect with shallow depth of field. The subject looks like a collectible toy.`;
            break;

        case 'timeTravel':
            taskInstruction = `**TASK:** Historical Reenactment. **ERA:** ${activeStyle}. **SCENE:** ${prompt.base}. ${p_film}. ${p_frame}. Subject MUST wear period-accurate clothing. NO modern clothes.`;
            break;

        case 'travelPhotoshoot':
            // Lógica de Vestuario Local
            let travelWardrobe = p_wardrobe;
            if (travelOptions?.useLocalWardrobe && DESTINATIONS_DATA[styleParams.destination]) {
                travelWardrobe = `WARDROBE: ${DESTINATIONS_DATA[styleParams.destination].localWardrobe}`;
            }
            taskInstruction = `**TASK:** Travel Photography. **DESTINATION:** ${styleParams.destination}. **LANDMARK/SCENE:** ${prompt.base}. ${p_light}. ${p_frame}. ${travelWardrobe}. Integrate subject lighting perfectly with the environment. Ensure the landmark is iconic and recognizable in the background.`;
            break;

        case 'customGen':
            taskInstruction = `**TASK:** Custom Vision. **PROMPT:** ${prompt.base}. ${p_light}. ${p_frame}. ${p_film}. ${p_wardrobe}.`;
            break;

        default:
            taskInstruction = `**SCENE:** ${prompt.base}.`;
    }

    return `${systemContext} ${taskInstruction} **INPUT:** Use input image for facial biometrics only.`;
};
