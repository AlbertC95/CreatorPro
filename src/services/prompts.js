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

// --- LISTAS DE OPCIONES ---
export const OPTIONS_LISTS = {
    lighting: ['Default', '🎲 Sorpréndeme', 'Suave (Softbox)', 'Dura (Hard Sun)', 'Cinemática (Teal/Orange)', 'Neón (Cyberpunk)', 'Natural (Window)', 'Rembrandt', 'Studio Flash'],
    framing: ['Default', '🎲 Sorpréndeme', 'Primer Plano (85mm)', 'Gran Angular (24mm)', 'Ojo de Pez', 'Desde Abajo (Heroic)', 'Desde Arriba (Drone)', 'Plano Americano'],
    film: ['Default', '🎲 Sorpréndeme', 'Kodak Portra 400', 'Fujifilm Velvia', 'Cinestill 800T', 'B&W Tri-X', 'Polaroid Vintage', 'Digital Clean'],
    wardrobe: ['Default', 'Estilo Polo Ralph Lauren', '🎲 Sorpréndeme', 'Original (Mantener)', 'Casual Chic', 'Traje Ejecutivo', 'Alta Costura', 'Techwear / Futuro', 'Vintage Retro', 'Ropa Deportiva', 'Uniforme Heroico', 'Elegante Noche'],
    pose: ['Default', '🎲 Sorpréndeme', 'Original (Mantener)', 'Brazos Cruzados', 'Manos en Bolsillos', 'Caminando', 'Perfil Artístico', 'Mirada sobre Hombro', 'Sentado Relajado', 'Salto Dinámico'],
    expression: ['Default', '🎲 Sorpréndeme', 'Original (Mantener)', 'Sonrisa Radiante', 'Serio / Intenso', 'Misterioso', 'Sorpresa', 'Risa Cándida', 'Paz / Ojos Cerrados', 'Grito de Batalla'],
    time: ['Default', '🎲 Sorpréndeme', 'Amanecer', 'Mediodía Dura', 'Hora Dorada', 'Hora Azul', 'Noche Neón', 'Día Nublado', 'Medianoche'],
    color: ['Default', '🎲 Sorpréndeme', 'Natural Realista', 'B&W Alto Contraste', 'Teal & Orange (Cine)', 'Kodak Gold (Cálido)', 'Desaturado (Drama)', 'Vibrante Pop', 'Pastel Wes Anderson', 'Matrix Green']
};

// --- PLANTILLAS ---
export const TEMPLATES = {
    professionalPhotoshoot: {
        id: 'professionalPhotoshoot', name: 'Studio Pro', desc: 'Editorial, LinkedIn, Headshots.',
        styles: ['Estudio Minimalista', 'Urbano / Street', 'Bohemio / Nature', 'Editorial Alta Costura', 'Cyberpunk Neon', 'Vintage 90s', 'Old Money Luxury', 'Cinematográfico Noir', 'Surrealista / Dreamy', 'Business Corporate', 'Fitness / Sport', 'Gótico / Dark'],
        prompts: [
            { id: 'Primer Plano', base: 'Extreme close-up portrait, focus on eyes. Shot on 85mm lens, f/1.8.' },
            { id: 'Corporativo', base: 'Professional headshot, business attire, neutral background. Soft lighting.' },
            { id: 'Cuerpo Entero', base: 'Full body fashion pose. Wide angle lens.' },
            { id: 'Cándido', base: 'Caught in motion, subtle candid smile, looking away. Natural moment.' },
            { id: 'Blanco y Negro', base: 'High contrast B&W classic portrait. Dramatic lighting.' },
            { id: 'Marca Personal', base: 'Working on a laptop in a modern cafe, lifestyle shot. Depth of field.' }
        ]
    },
    avatarStudio: {
        id: 'avatarStudio', name: 'Avatar 3D', desc: 'CGI, Videojuegos, Esculturas.',
        styles: ['CGI Hiperrealista', 'Videojuego AAA (Unreal 5)', 'Cyber-Humano (Sci-Fi)', 'Estilo Pixar / Disney', 'Escultura de Mármol', 'Claymation (Arcilla)', 'Dibujo a Lápiz (Sketch)', 'Pintura al Óleo', 'Low Poly Art'],
        prompts: [
            { id: 'ID Biométrica', base: 'Front facing neutral, perfect lighting. High skin texture detail.' },
            { id: 'Héroe RPG', base: 'Dynamic combat pose, magical aura. Fantasy armor.' },
            { id: 'Perfil Cibernético', base: 'Side profile view, neon circuitry on skin. Cyberpunk aesthetics.' },
            { id: 'Estatua Clásica', base: 'Marble bust in a museum. Museum lighting.' },
            { id: 'Primer Plano', base: 'Extreme close up on face textures. Pores and imperfections visible.' },
            { id: 'Cuerpo Entero', base: 'Full body character design sheet. Neutral background.' }
        ]
    },
    anime: {
        id: 'anime', name: 'Anime World', desc: 'Ghibli, Shonen, Retro 90s.',
        styles: ['Studio Ghibli', 'One Piece Style', '90s Retro', 'Modern Shonen', 'Makoto Shinkai (Scenery)', 'Cyberpunk Anime'],
        prompts: [
            { id: 'Scene Replication', base: 'Same composition as original, converted to anime style.' },
            { id: 'Cartel de Se Busca', base: 'Custom Wanted Poster.' },
            { id: 'Capitán en Barco', base: 'Captain on custom ship.' },
            { id: 'Acción Haki', base: 'Preparing a special attack, dynamic speed lines, Haki aura.' },
            { id: 'Cozy Vibes', base: 'Eating ramen in a cozy shop.' },
            { id: 'Epic Stare', base: 'Close up intense stare with wind blowing hair.' }
        ]
    },
    figurine: {
        id: 'figurine', name: 'Miniature Me', desc: 'Juguetes y Coleccionables.',
        styles: ['Plástico Vinilo', 'Porcelana Fina', 'Madera Tallada', 'Muñeco de Peluche', 'Action Figure Retro'],
        prompts: [
            { id: 'Macro Desk', base: 'Standing on a wooden desk, shallow depth of field.' },
            { id: 'Packaging', base: 'Inside a collector box.' },
            { id: 'Diorama', base: 'In a miniature battle scene.' },
            { id: 'Estante de Coleccionista', base: 'Standing on a shelf among other toys.' },
            { id: 'En Mano Gigante', base: 'Being held by a giant human hand.' },
            { id: 'Empaque Vintage', base: 'Inside a vintage blister pack with retro graphics.' }
        ]
    },
    timeTravel: {
        id: 'timeTravel', name: 'Time Traveler', desc: '80s Mall, 1920s, Victorian.',
        styles: ['1980s Mall Portrait', '1990s Grunge', '1950s Diner', '1920s Gatsby', 'Victorian Era', 'Wild West'],
        prompts: [
            { id: 'Classic Portrait', base: 'Standard period-accurate portrait pose.' },
            { id: 'Candid Moment', base: 'Laughing with period-accurate props.' },
            { id: 'Double Exposure', base: 'Artistic double exposure (80s style).' },
            { id: 'Anuario Escolar', base: 'Vintage yearbook photo style.' },
            { id: 'Foto Familiar', base: 'Posing stiffly like an old family photo.' },
            { id: 'Noticiero TV', base: 'On a vintage TV screen broadcast.' }
        ]
    },
    travelPhotoshoot: {
        id: 'travelPhotoshoot', name: 'Global Traveler', desc: 'Teletransporte instantáneo.',
        destinations: Object.keys(DESTINATIONS_DATA),
        prompts: [] // Se generan dinámicamente
    },
    customGen: { id: 'customGen', name: 'Prompt Libre', desc: 'Tú escribes, Gemini crea.', isCustom: true }
};

// --- LÓGICA DE SELECCIÓN INTELIGENTE ---
const resolveOption = (selected, optionsList) => {
    if (!selected || selected === 'Default') return ''; // Gemini decide
    if (selected === '🎲 Sorpréndeme') {
        const validOptions = optionsList.filter(o => o !== 'Default' && o !== '🎲 Sorpréndeme');
        const randomChoice = validOptions[Math.floor(Math.random() * validOptions.length)];
        return randomChoice;
    }
    return selected;
};

// --- INGENIERÍA DE PROMPTS ---
export const getRealInstruction = (template, prompt, options) => {
    const { styleParams, customParams, animeCustoms, travelOptions } = options;

    // Resolver opciones
    const lighting = resolveOption(customParams.lighting, OPTIONS_LISTS.lighting);
    const framing = resolveOption(customParams.framing, OPTIONS_LISTS.framing);
    const film = resolveOption(customParams.film, OPTIONS_LISTS.film);
    let wardrobe = resolveOption(customParams.wardrobe, OPTIONS_LISTS.wardrobe);
    const pose = resolveOption(customParams.pose, OPTIONS_LISTS.pose);
    const expression = resolveOption(customParams.expression, OPTIONS_LISTS.expression);
    const time = resolveOption(customParams.time, OPTIONS_LISTS.time);
    const color = resolveOption(customParams.color, OPTIONS_LISTS.color);

    // Lógica de Vestuario Local en Viajes
    if (template === 'travelPhotoshoot' && travelOptions?.useLocalWardrobe && DESTINATIONS_DATA[styleParams.destination]) {
        wardrobe = DESTINATIONS_DATA[styleParams.destination].localWardrobe;
    }

    // Lógica para Polo Ralph Lauren (Inyección de Estilo Old Money)
    if (wardrobe === 'Estilo Polo Ralph Lauren') {
        wardrobe = "WARDROBE: Polo Ralph Lauren Style (Old Money Aesthetic). Classic polo shirt with small pony logo OR crisp oxford shirt, cable-knit sweater draped over shoulders, chinos or tailored shorts. High-quality fabrics, preppy and sophisticated look. Colors: Navy, White, Beige, Pastel Pink/Green.";
    } else {
        wardrobe = wardrobe ? `WARDROBE: ${wardrobe}` : '';
    }

    const p_light = lighting ? `LIGHTING: ${lighting}` : '';
    const p_frame = framing ? `FRAMING: ${framing}` : '';
    const p_film = film ? `FILM STOCK: ${film}` : '';
    const p_pose = pose ? `POSE: ${pose}` : '';
    const p_expr = expression ? `EXPRESSION: ${expression}` : '';
    const p_time = time ? `TIME OF DAY: ${time}` : '';
    const p_color = color ? `COLOR GRADING: ${color}` : '';

    // SYSTEM CONTEXT MEJORADO: Identidad estricta
    const systemContext = `**SYSTEM:** Gemini 3 Pro Image. **MODE:** Hyper-Realism (unless specified otherwise). **CRITICAL:** PRESERVE SUBJECT IDENTITY. Maintain exact facial structure, eye shape, nose, and key features from input image. Do NOT beautify or alter ethnicity/age. Avoid exaggerated expressions, plastic skin, or uncanny valley effects.`;

    let taskInstruction = "";

    switch (template) {
        case 'professionalPhotoshoot':
            taskInstruction = `**TASK:** Professional Photoshoot. **THEME:** ${styleParams.style}. **SCENE:** ${prompt.base}. ${p_light}. ${p_frame}. ${p_film}. ${wardrobe}. ${p_pose}. ${p_expr}. ${p_time}. ${p_color}. Ensure high-end magazine quality. Skin texture must be realistic (pores, imperfections).`;
            break;

        case 'avatarStudio':
            taskInstruction = `**TASK:** Digital Avatar Creation. **RENDER STYLE:** ${styleParams.avatarStyle}. **SCENE:** ${prompt.base}. ${p_light}. ${p_pose}. ${p_expr}. Focus on perfect CGI/3D topology and textures. Even in stylized modes, keep the subject's key facial proportions.`;
            break;

        case 'anime':
            let animeStyleInstruction = `**ART STYLE:** ${styleParams.animeStyle}.`;
            let sceneDescription = prompt.base;

            if (styleParams.animeStyle === 'One Piece Style') {
                animeStyleInstruction = `**ART STYLE:** One Piece anime style by Eiichiro Oda. **CRITICAL:** Use bold ink lines, vibrant flat colors, exaggerated expressions, and dramatic shading (hatching). **WARDROBE OVERRIDE:** The subject MUST wear Pirate Era clothing (open captain's coat, vest, sash, or kimono). DISCARD modern casual clothes like plaid shirts or t-shirts.`;

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
                    **BACKGROUND:** Below and behind the captain, the FULL PIRATE SHIP is visible sailing on the blue Grand Line ocean. The ship is stylized and curvy (like the Thousand Sunny), painted in bright colors, with a massive "${animeCustoms.shipDesc}" figurehead clearly visible at the front.
                    **DETAILS:** News Coo seagulls flying below, white waves crashing against the hull.`;
                } else if (prompt.id === 'Acción Haki') {
                    sceneDescription = `Epic battle shot. The subject is using **Armament Haki** (arms coated in shiny black metal) and **Conqueror's Haki** (red/black lightning streaks). Intense, furious expression with white eyes. Clothing is torn battle-damaged pirate gear. Background: Floating rocks and purple aura effects (Onigashima style).`;
                } else if (prompt.id === 'Cozy Vibes') {
                    sceneDescription = `A festive pirate banquet scene. The subject is eating greedily with cheeks stuffed. **FOOD:** Huge chunks of Manga Meat on bones and a massive bowl of ramen. Exaggerated food proportions. Subject wears a Wano-style kimono or pirate vest. Vibrant, warm colors, steam rising from food.`;
                } else if (prompt.id === 'Scene Replication') {
                    sceneDescription = `Recreate the composition but transport the subject to the One Piece world. **CHANGE OUTFIT:** Dress the subject in cool pirate gear or marine uniform. Do not keep the original modern clothes. Use the signature Eiichiro Oda art style with bold lines.`;
                }
            }

            taskInstruction = `**TASK:** Anime Transformation. ${animeStyleInstruction} **SCENE:** ${sceneDescription}. Maintain the subject's key facial features (eyes, nose shape) but stylized.`;
            break;

        case 'figurine':
            taskInstruction = `**TASK:** Macro Photography of Miniature Figurine. **MATERIAL:** ${styleParams.material}. **SCENE:** ${prompt.base}. Create a tilt-shift effect with shallow depth of field. The subject looks like a collectible toy.`;
            break;

        case 'timeTravel':
            taskInstruction = `**TASK:** Historical Reenactment. **ERA/THEME:** ${styleParams.era}. **SCENE:** ${prompt.base}. Apply period-accurate film grain, camera imperfections, and vintage color grading. ${wardrobe} must match the era perfectly. Subject MUST wear period-accurate clothing. NO modern clothes.`;
            break;

        case 'travelPhotoshoot':
            taskInstruction = `**TASK:** Travel Photography. **DESTINATION:** ${styleParams.destination}. **LANDMARK/SCENE:** ${prompt.base}. ${p_light}. ${p_frame}. ${wardrobe}. ${p_time}. Integrate subject lighting perfectly with the environment. Ensure the landmark is iconic and recognizable in the background.`;
            break;

        case 'customGen':
            taskInstruction = `**TASK:** Custom Vision. **PROMPT:** ${prompt.base}. ${p_light}. ${p_frame}. ${p_film}. ${wardrobe}. ${p_pose}. ${p_expr}. ${p_time}. ${p_color}.`;
            break;

        default:
            taskInstruction = `**SCENE:** ${prompt.base}.`;
    }
    return `${systemContext} ${taskInstruction} **INPUT:** Use input image for facial biometrics only.`;
};
