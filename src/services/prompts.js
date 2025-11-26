/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * SISTEMA DE PLANTILLAS PROFESIONAL v2.0
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * PRINCIPIOS:
 * 1. Cada estilo tiene instrucciones ÚNICAS y ESPECÍFICAS
 * 2. El vestuario se PRESERVA de la imagen original a menos que el estilo lo requiera
 * 3. NO hay mezcla entre estilos - cada uno es completamente independiente
 * 4. Instrucciones claras para evitar recortes y poses artificiales
 */

// ═══════════════════════════════════════════════════════════════════════════════
// DATOS DE DESTINOS DE VIAJE
// Cada destino tiene landmarks, vestuario local y poses ÚNICAS
// ═══════════════════════════════════════════════════════════════════════════════
export const DESTINATIONS_DATA = {
    'París, Francia': {
        landmarks: ['Torre Eiffel', 'Museo del Louvre', 'Arco del Triunfo', 'Catedral de Notre Dame', 'Café en Montmartre', 'Río Sena al Atardecer'],
        localWardrobe: 'MUST CHANGE to Parisian Chic: Trench coat beige, boina elegante, bufanda de seda, ropa entallada y sofisticada en tonos neutros.',
        poses: [
            { id: 'Torre Eiffel', desc: 'FULL BODY at Eiffel Tower, elegant Parisian outfit, golden hour, iconic tourist pose.' },
            { id: 'Café Parisino', desc: 'SEATED at charming Parisian café terrace, coffee, croissant, Montmartre cobblestones.' },
            { id: 'Louvre', desc: 'THREE-QUARTER at Louvre pyramid, sophisticated pose, museum backdrop.' },
            { id: 'Sena Sunset', desc: 'THREE-QUARTER walking along Seine at sunset, romantic Paris atmosphere.' },
            { id: 'Montmartre', desc: 'FULL BODY on Montmartre steps, Sacré-Cœur behind, artistic vibe.' },
            { id: 'Champs-Élysées', desc: 'FULL BODY strolling Champs-Élysées, Arc de Triomphe visible, Parisian style.' }
        ]
    },
    'Tokio, Japón': {
        landmarks: ['Cruce de Shibuya', 'Templo Senso-ji', 'Torre de Tokio', 'Barrio de Akihabara (Neón)', 'Monte Fuji (Fondo)', 'Callejón de Shinjuku'],
        localWardrobe: 'MUST CHANGE to Tokyo Style: Modern Japanese fashion - layered streetwear, OR traditional Kimono with obi.',
        poses: [
            { id: 'Shibuya Crossing', desc: 'FULL BODY at iconic Shibuya crossing, neon signs, crowds, Tokyo energy.' },
            { id: 'Templo Senso-ji', desc: 'FULL BODY at Senso-ji temple gate, traditional setting, respectful pose.' },
            { id: 'Shinjuku Neon', desc: 'THREE-QUARTER in neon-lit Shinjuku alley, night Tokyo atmosphere.' },
            { id: 'Monte Fuji', desc: 'FULL BODY with Mount Fuji in background, scenic viewpoint.' },
            { id: 'Akihabara', desc: 'THREE-QUARTER in Akihabara district, anime/tech shops, colorful.' },
            { id: 'Jardín Zen', desc: 'SEATED or standing in traditional Japanese garden, peaceful, zen.' }
        ]
    },
    'Nueva York, USA': {
        landmarks: ['Times Square', 'Puente de Brooklyn', 'Central Park', 'Estatua de la Libertad', 'Empire State (Mirador)', 'SoHo Calles Adoquinadas'],
        localWardrobe: 'MUST CHANGE to NYC Style: Long wool coat in black or camel, cashmere scarf, leather boots, sophisticated urban look.',
        poses: [
            { id: 'Times Square', desc: 'FULL BODY in Times Square, bright billboards, NYC energy, confident walk.' },
            { id: 'Brooklyn Bridge', desc: 'FULL BODY walking Brooklyn Bridge, Manhattan skyline behind.' },
            { id: 'Central Park', desc: 'THREE-QUARTER in Central Park, fall colors or spring blooms, relaxed.' },
            { id: 'Empire State', desc: 'THREE-QUARTER at Empire State observation deck, city view behind.' },
            { id: 'SoHo', desc: 'FULL BODY on SoHo cobblestone street, cast-iron buildings, trendy.' },
            { id: 'Yellow Cab', desc: 'THREE-QUARTER hailing or exiting yellow taxi, NYC street scene.' }
        ]
    },
    'Santorini, Grecia': {
        landmarks: ['Cúpulas Azules de Oia', 'Atardecer en la Caldera', 'Calles Blancas', 'Playa Roja', 'Piscina Infinita', 'Iglesia Ortodoxa'],
        localWardrobe: 'MUST CHANGE to Aegean Resort: Flowing white linen dress or shirt, leather sandals, gold jewelry, Mediterranean elegance.',
        poses: [
            { id: 'Oia Sunset', desc: 'FULL BODY watching sunset in Oia, blue domes behind, golden light.' },
            { id: 'Cúpulas Azules', desc: 'THREE-QUARTER with iconic blue dome churches, white walls, postcard shot.' },
            { id: 'Calles Blancas', desc: 'FULL BODY walking narrow white streets, bougainvillea, Greek charm.' },
            { id: 'Infinity Pool', desc: 'THREE-QUARTER at infinity pool edge, caldera view, luxury resort.' },
            { id: 'Escaleras', desc: 'FULL BODY on white stairs, flowing dress in wind, Mediterranean.' },
            { id: 'Terraza', desc: 'SEATED at terrace with sea view, wine glass, relaxed Greek moment.' }
        ]
    },
    'Roma, Italia': {
        landmarks: ['El Coliseo', 'Fontana de Trevi', 'El Vaticano', 'Panteón', 'Plaza de España', 'Callejón del Trastevere'],
        localWardrobe: 'MUST CHANGE to Italian Sprezzatura: Relaxed linen suit in earth tones, unbuttoned shirt, leather loafers, effortless Italian style.',
        poses: [
            { id: 'Coliseo', desc: 'FULL BODY at Colosseum, ancient Rome backdrop, elegant Italian outfit.' },
            { id: 'Fontana di Trevi', desc: 'THREE-QUARTER at Trevi Fountain, throwing coin pose, romantic Rome.' },
            { id: 'Vaticano', desc: 'FULL BODY at St. Peter\'s Square, Vatican dome behind, elegant attire.' },
            { id: 'Vespa', desc: 'THREE-QUARTER on or near classic Vespa, Roman street, dolce vita.' },
            { id: 'Trastevere', desc: 'THREE-QUARTER in charming Trastevere alley, ivy walls, evening light.' },
            { id: 'Gelato', desc: 'THREE-QUARTER enjoying gelato, Roman piazza, casual Italian moment.' }
        ]
    },
    'Machu Picchu, Perú': {
        landmarks: ['Vista Clásica de la Ciudadela', 'Puerta del Sol', 'Templo del Sol', 'Terrazas Agrícolas', 'Con una Llama', 'Huayna Picchu'],
        localWardrobe: 'MUST CHANGE to Explorer Chic: Technical mountain wear in earth tones, artisan Andean poncho or accessories, hiking boots.',
        poses: [
            { id: 'Vista Clásica', desc: 'FULL BODY at classic Machu Picchu viewpoint, ancient ruins, misty mountains.' },
            { id: 'Con Llama', desc: 'THREE-QUARTER with friendly llama, Machu Picchu background, authentic.' },
            { id: 'Terrazas', desc: 'FULL BODY on ancient terraces, dramatic Andes backdrop, explorer.' },
            { id: 'Puerta del Sol', desc: 'FULL BODY at Sun Gate entrance, morning mist, arriving moment.' },
            { id: 'Huayna Picchu', desc: 'THREE-QUARTER with Huayna Picchu peak behind, accomplished hiker.' },
            { id: 'Templo', desc: 'THREE-QUARTER at Temple of the Sun, ancient stonework, respectful.' }
        ]
    },
    'El Salvador (Tropical)': {
        landmarks: ['Playa El Tunco (Roca)', 'Lago de Coatepeque', 'Volcán de Santa Ana', 'Ruinas de Tazumal', 'Centro Histórico SS', 'Surf City Atardecer'],
        localWardrobe: 'MUST CHANGE to Tropical Elegance: White or cream linen shirt, linen pants or shorts, leather sandals, beach-elegant style.',
        poses: [
            { id: 'El Tunco', desc: 'FULL BODY at El Tunco beach, iconic rock formation, sunset, surf vibes.' },
            { id: 'Coatepeque', desc: 'THREE-QUARTER at Lake Coatepeque, volcanic crater lake, stunning blue water.' },
            { id: 'Volcán', desc: 'FULL BODY hiking Santa Ana volcano, crater view, adventure moment.' },
            { id: 'Tazumal', desc: 'THREE-QUARTER at Tazumal Mayan ruins, ancient pyramid, cultural site.' },
            { id: 'Surf Sunset', desc: 'FULL BODY on beach at sunset, surfboard optional, golden hour, Surf City.' },
            { id: 'Colonial', desc: 'THREE-QUARTER in colonial center, colorful buildings, Latin American charm.' }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════════
// INSTRUCCIONES ESPECÍFICAS POR ESTILO DE ANIME
// Cada estilo tiene su propia dirección artística COMPLETA
// ═══════════════════════════════════════════════════════════════════════════════
const ANIME_STYLE_INSTRUCTIONS = {
    'Studio Ghibli': {
        artDirection: `
**ART STYLE: Studio Ghibli (Hayao Miyazaki) - AUTHENTIC STYLE**
- TECHNIQUE: Traditional hand-drawn animation look, NOT watercolor painting
- LINES: Clean, smooth black outlines with consistent weight. Organic but defined
- COLORS: Rich, saturated but natural colors. Vibrant greens, warm earth tones, clear blue skies
- SHADING: Soft cel-shading with gentle gradients. Natural lighting, not harsh
- BACKGROUNDS: Highly detailed, lush environments. European countryside, Japanese rural, magical forests
- FACES: Round, soft features. Large expressive eyes but NOT huge. Natural proportions
- EXPRESSIONS: Warm, genuine emotions. Wonder, curiosity, gentle joy. NOT exaggerated anime expressions

**WARDROBE: ADAPT to Ghibli aesthetic:**
- Simple, practical clothing in natural colors
- European vintage style (like Howl's Moving Castle, Kiki)
- OR Japanese casual/traditional
- Earth tones: browns, greens, blues, cream, burgundy
- Natural fabrics look: cotton, wool, linen

**REFERENCE: Spirited Away, Howl's Moving Castle, Princess Mononoke, Kiki's Delivery Service**
`,
        negativePrompt: 'Do NOT use: watercolor splashes, paint drips, bold manga lines, speed lines, neon colors, exaggerated expressions, One Piece style, modern shonen effects'
    },
    
    'One Piece Style': {
        artDirection: `
**ART STYLE: One Piece (Eiichiro Oda) - MANGA/ANIME STYLE**
- TECHNIQUE: Bold ink outlines, dynamic manga compositions
- LINES: THICK black outlines with dramatic weight variation
- COLORS: VIBRANT, highly saturated, flat color areas with bold shadows
- SHADING: Dramatic hatching for shadows, high contrast
- FACES: Oda's distinctive style - expressive, can be exaggerated
- EXPRESSIONS: BIG emotions - wide grins, intense stares, dramatic reactions
- PROPORTIONS: Stylized, can have elongated limbs, dynamic poses

**WARDROBE: MUST CHANGE to PIRATE ERA clothing:**
- Open vest, captain's coat, or pirate shirt
- Sash, belt, or bandana
- Boots, sandals
- NO modern clothes (no t-shirts, jeans, hoodies)

**REFERENCE: One Piece anime/manga by Eiichiro Oda**
`,
        negativePrompt: 'Do NOT use: soft watercolors, gentle expressions, muted colors, realistic proportions, Ghibli style, modern casual clothing'
    },
    
    '90s Retro': {
        artDirection: `
**ART STYLE: 90s Anime (Evangelion, Cowboy Bebop, Trigun, Sailor Moon)**
- TECHNIQUE: Classic cel animation look, hand-painted feel
- LINES: Clean, consistent black outlines
- COLORS: Rich but slightly muted, limited palette feel, occasional bold accents
- SHADING: Classic 2-tone cel shading with hard shadow edges
- EFFECTS: Optional VHS grain, slight color bleeding at edges
- FACES: Classic 90s anime proportions - pointed chins, defined features
- EXPRESSIONS: Cool, stylish, occasionally intense or comedic

**WARDROBE: ADAPT to 90s anime fashion:**
- Stylish casual: leather jackets, denim, band tees
- OR sleek futuristic suits (Cowboy Bebop style)
- OR school uniforms (Evangelion style)
- 90s color palette: earth tones, navy, burgundy, olive

**REFERENCE: Cowboy Bebop, Neon Genesis Evangelion, Trigun, Ghost in the Shell (1995)**
`,
        negativePrompt: 'Do NOT use: modern digital effects, lens flares, photorealistic backgrounds, watercolor effects, chibi style'
    },
    
    'Modern Shonen': {
        artDirection: `
**ART STYLE: Modern Shonen (Demon Slayer, Jujutsu Kaisen, My Hero Academia)**
- TECHNIQUE: High-quality digital anime, polished and dynamic
- LINES: Clean, precise linework with dynamic thickness
- COLORS: Vibrant, high contrast, dramatic color palettes
- SHADING: Dynamic gradient shading with dramatic highlights
- EFFECTS: Energy auras, particle effects, dramatic lighting rays
- FACES: Modern anime style - expressive, detailed eyes
- EXPRESSIONS: Intense determination, fierce resolve, powerful emotions

**WARDROBE: ADAPT to action anime style:**
- School uniforms with unique touches
- OR battle/training outfits
- OR stylized casual with dramatic flair
- Dark colors with accent colors (like JJK: black with blue/purple)
- Can add subtle battle damage or dramatic flowing elements

**REFERENCE: Demon Slayer, Jujutsu Kaisen, My Hero Academia, Chainsaw Man**
`,
        negativePrompt: 'Do NOT use: soft watercolors, VHS effects, muted colors, gentle slice-of-life expressions, retro style'
    },
    
    'Makoto Shinkai (Scenery)': {
        artDirection: `
**ART STYLE: Makoto Shinkai (Your Name, Weathering With You, 5cm Per Second)**
- TECHNIQUE: Photorealistic backgrounds with anime characters
- LINES: Clean, delicate linework for characters
- COLORS: VIVID and emotional - dramatic oranges, deep blues, golden light
- SHADING: Soft realistic gradients, natural lighting on characters
- BACKGROUNDS: HYPER-DETAILED photorealistic environments, dramatic skies
- LIGHTING: Golden hour, dramatic sunsets, rain with city lights, lens flares
- EFFECTS: Light particles, lens flares, atmospheric haze, rain drops

**WARDROBE: Modern Japanese casual - PRESERVE original or adapt:**
- School uniforms (blazer, sailor)
- OR casual modern Japanese fashion
- Clean, relatable everyday clothing
- Seasonal appropriate (summer uniforms, winter coats)

**REFERENCE: Your Name, Weathering With You, Garden of Words, 5 Centimeters Per Second**
`,
        negativePrompt: 'Do NOT use: bold manga lines, flat colors, action effects, exaggerated expressions, VHS effects, fantasy costumes'
    },
    
    'Cyberpunk Anime': {
        artDirection: `
**ART STYLE: Cyberpunk Anime (Akira, Ghost in the Shell, Cyberpunk Edgerunners)**
- TECHNIQUE: Detailed sci-fi anime, gritty urban aesthetic
- LINES: Clean to slightly gritty linework
- COLORS: Dark base with NEON accents (pink, cyan, purple, yellow)
- SHADING: High contrast, dramatic neon rim lighting
- BACKGROUNDS: Dystopian megacity, rain-soaked streets, holographic ads, tech
- EFFECTS: Neon glow, rain reflections, digital glitches, holograms
- ATMOSPHERE: Dark, moody, high-tech low-life

**WARDROBE: MUST CHANGE to CYBERPUNK/TECHWEAR:**
- Tactical/tech jackets with glowing elements
- Cybernetic implants or accessories
- Futuristic goggles, masks, or headgear
- Neon accent pieces, LED strips
- Dark base colors with neon highlights

**REFERENCE: Akira, Ghost in the Shell, Cyberpunk Edgerunners, Blade Runner anime**
`,
        negativePrompt: 'Do NOT use: soft watercolors, natural settings, warm pastoral colors, gentle expressions, traditional/historical clothing, Ghibli style'
    }
};

// ═══════════════════════════════════════════════════════════════════════════════
// INSTRUCCIONES ESPECÍFICAS POR ESTILO DE STUDIO PRO
// Cada estilo tiene vestuario, poses y dirección artística ÚNICOS
// ═══════════════════════════════════════════════════════════════════════════════
const STUDIO_STYLE_INSTRUCTIONS = {
    // ═══════════════════════════════════════════════════════════════════════════════
    // NUEVO: RETRATO EJECUTIVO - Para CV, LinkedIn, Pasaporte, Diploma
    // ═══════════════════════════════════════════════════════════════════════════════
    'Retrato Ejecutivo': {
        lighting: 'Classic 3-point lighting: Key light at 45° (soft), fill light opposite (subtle), hair light from behind. Catchlights in eyes. Soft, flattering, NO harsh shadows on face.',
        backdrop: 'SOLID NEUTRAL BACKGROUND: Medium gray (#6B7280) or soft blue-gray (#64748B). SEAMLESS, no texture, no gradient visible. Professional corporate standard.',
        wardrobe: 'FORMAL BUSINESS ATTIRE: Dark navy or charcoal suit, crisp white or light blue dress shirt, conservative tie (optional). Women: professional blazer, simple elegant blouse. NO patterns, NO bright colors.',
        mood: 'Professional, approachable, confident, trustworthy, competent',
        colorGrade: 'Natural skin tones, neutral whites, no color cast, professional and clean',
        negativePrompt: 'NO casual clothing, NO visible studio equipment, NO harsh shadows on face, NO red-eye, NO double chin angle, NO cropped head, NO busy background',
        fineOptions: {
            purpose: ['LinkedIn/CV', 'Pasaporte/ID', 'Diploma/Título', 'Tarjeta Corporativa', 'Web Empresa'],
            expression: ['Sonrisa Profesional', 'Neutral Serio', 'Confiado', 'Amigable Accesible'],
            framing: ['Headshot (Hombros)', 'Busto (Pecho)', 'Pasaporte (Solo Cara)']
        },
        poses: [
            { id: 'LinkedIn Perfecto', desc: 'HEADSHOT shoulders up, body angled 15° to camera, face straight to camera, slight natural smile showing confidence, direct eye contact. Gray seamless background.' },
            { id: 'CV Profesional', desc: 'HEADSHOT clean and centered, neutral to slight smile, professional and approachable, shoulders squared, perfect for resumes.' },
            { id: 'Pasaporte/ID', desc: 'FACE ONLY straight-on, neutral expression, no smile, ears visible, white or light gray background, passport photo standards.' },
            { id: 'Ejecutivo Confiado', desc: 'THREE-QUARTER bust shot, arms crossed confidently, slight smile, authoritative but approachable, corporate background.' },
            { id: 'Diploma/Título', desc: 'FORMAL portrait, dignified pose, subtle proud smile, suitable for graduation or professional certification.' },
            { id: 'Tarjeta Corporativa', desc: 'HEADSHOT with slight head tilt, warm professional smile, perfect for business cards and company profiles.' }
        ]
    },
    'Estudio Minimalista': {
        lighting: 'INVISIBLE soft wrap-around lighting. Large softbox or beauty dish from front-top. NO visible shadows on background. Even illumination on face.',
        backdrop: 'SEAMLESS INFINITE pure white (#FFFFFF) or neutral gray (#808080). NO visible floor line, NO seams, NO wrinkles. Background fades to infinity.',
        wardrobe: 'NEUTRAL MINIMALIST: Solid colors only - white, black, gray, beige, navy. Simple cuts, no logos, no patterns. Clean elegant basics.',
        mood: 'Clean, modern, timeless, artistic, sophisticated',
        colorGrade: 'High key for white BG, neutral for gray. Natural skin, clean whites, minimal processing',
        negativePrompt: 'NO visible studio lights, NO softboxes, NO floor line, NO wrinkled backdrop, NO busy patterns, NO distracting elements',
        fineOptions: {
            background: ['Blanco Infinito', 'Gris Neutro', 'Gris Oscuro'],
            contrast: ['Alto Contraste', 'Suave', 'Medio'],
            style: ['Editorial', 'Artístico', 'Comercial']
        },
        poses: [
            { id: 'Headshot Limpio', desc: 'CLOSE-UP shoulders up, slight head tilt, soft expression, seamless white/gray background fading to infinity.' },
            { id: 'Retrato 3/4', desc: 'THREE-QUARTER view, body angled 45°, face toward camera, elegant hand placement, infinite backdrop.' },
            { id: 'Medio Cuerpo', desc: 'WAIST UP, arms naturally at sides, straight posture, clean minimal aesthetic.' },
            { id: 'Cuerpo Completo', desc: 'FULL BODY standing centered, weight balanced, hands relaxed, background fades to pure color at edges.' },
            { id: 'Perfil Artístico', desc: 'PROFILE view, clean silhouette, chin slightly raised, artistic composition.' },
            { id: 'Sentado Elegante', desc: 'SEATED on white/gray cube matching background, good posture, composed expression.' }
        ]
    },
    'Urbano / Street': {
        lighting: 'Natural overcast for soft shadows OR golden hour backlight with lens flare. Urban ambient light from storefronts. Face always well-lit.',
        backdrop: 'City street with character - graffiti wall, industrial warehouse, basketball court, subway entrance, rooftop with skyline, fire escape',
        wardrobe: 'STREET STYLE: Oversized hoodie, denim jacket, bomber jacket, graphic tees, cargo pants, fresh sneakers (Jordan, Nike, Adidas), baseball cap, chains. Layered streetwear.',
        mood: 'Cool, authentic, confident, street credibility, urban edge',
        colorGrade: 'Teal and orange color grade, slight film grain, crushed blacks, desaturated midtones',
        negativePrompt: 'NO formal clothing, NO clean studio backgrounds, NO stiff poses',
        fineOptions: {
            urbanStyle: ['Hip-Hop', 'Skater', 'Hypebeast', 'Vintage Street', 'Athleisure'],
            backdrop: ['Graffiti Wall', 'Rooftop', 'Subway', 'Basketball Court', 'Fire Escape'],
            mood: ['Relajado', 'Intenso', 'En Movimiento', 'Editorial']
        },
        poses: [
            { id: 'Street Portrait', desc: 'CLOSE-UP against textured graffiti wall, confident expression, slight head tilt, urban cool.' },
            { id: 'Apoyado Cool', desc: 'FULL BODY leaning against wall, one foot up, hands in pockets, relaxed street confidence.' },
            { id: 'Caminando Urbano', desc: 'FULL BODY mid-stride walking toward camera, dynamic movement, street in background.' },
            { id: 'Rooftop Skyline', desc: 'FULL BODY on rooftop, city skyline behind, golden hour, urban king/queen pose.' },
            { id: 'Basketball Court', desc: 'FULL BODY on basketball court, athletic streetwear, confident stance, urban sports.' },
            { id: 'Editorial Urbano', desc: 'THREE-QUARTER dramatic urban backdrop, fashion editorial with street edge, magazine quality.' }
        ]
    },
    'Bohemio / Nature': {
        lighting: 'Natural golden sunlight, dappled light through leaves, warm backlight with lens flare. Face beautifully lit by golden hour light.',
        backdrop: 'Nature setting - wildflower field, forest clearing, beach at golden hour, tall grass meadow, lavender field, sunflower field',
        wardrobe: 'BOHEMIAN STYLE: Flowing maxi dresses, linen pants, crochet tops, earth tones (cream, tan, olive, rust), natural textures, layered jewelry, flower crowns optional.',
        mood: 'Free-spirited, natural, dreamy, connected to nature, peaceful',
        colorGrade: 'Warm golden tones, soft highlights, lifted blacks, dreamy film look',
        negativePrompt: 'NO urban backgrounds, NO formal clothing, NO harsh lighting',
        fineOptions: {
            nature: ['Campo de Flores', 'Bosque', 'Playa', 'Pradera', 'Lavanda', 'Girasoles'],
            timeOfDay: ['Golden Hour', 'Atardecer', 'Mediodía Suave', 'Amanecer'],
            mood: ['Sereno', 'Alegre', 'Contemplativo', 'Libre']
        },
        poses: [
            { id: 'Golden Hour Portrait', desc: 'CLOSE-UP with golden backlight, hair catching light, serene expression, natural beauty.' },
            { id: 'Entre Flores', desc: 'FULL BODY in flower field, arms slightly spread, feeling the breeze, joyful or peaceful.' },
            { id: 'Sentado Natural', desc: 'SEATED on ground in nature, relaxed cross-legged or knees up, contemplative.' },
            { id: 'Caminando Descalzo', desc: 'FULL BODY walking through nature, barefoot optional, flowing movement, carefree.' },
            { id: 'Mirando al Horizonte', desc: 'THREE-QUARTER shot looking into distance, profile or 3/4, contemplative, wind in hair.' },
            { id: 'Acostado en Pasto', desc: 'LYING in grass or flowers, looking up at camera, dreamy relaxed expression.' }
        ]
    },
    'Editorial Alta Costura': {
        lighting: 'Beauty dish or butterfly lighting, dramatic shadows, high contrast, fashion editorial setup',
        backdrop: 'Clean infinite studio - pure white or pure black, seamless, high fashion look',
        wardrobe: 'HIGH FASHION: Structured designer pieces, bold silhouettes, statement pieces, avant-garde looks. Runway-ready couture.',
        mood: 'High fashion, editorial, dramatic, avant-garde, powerful',
        colorGrade: 'High contrast, bold colors or elegant desaturated, sharp details, magazine quality',
        negativePrompt: 'NO casual clothing, NO messy hair, NO soft lighting, NO natural poses',
        fineOptions: {
            fashionStyle: ['Haute Couture', 'Avant-Garde', 'Minimalist Chic', 'Power Dressing', 'Dramatic'],
            backdrop: ['Estudio Blanco', 'Estudio Negro', 'Arquitectura', 'Abstracto'],
            mood: ['Intenso', 'Misterioso', 'Poderoso', 'Elegante']
        },
        poses: [
            { id: 'Power Pose', desc: 'FULL BODY strong stance, hands on hips, chin up, commanding presence, fashion editorial.' },
            { id: 'Haute Couture', desc: 'FULL BODY dramatic pose, exaggerated angles, high fashion magazine cover worthy.' },
            { id: 'Beauty Close-Up', desc: 'EXTREME CLOSE-UP face, perfect lighting, editorial beauty shot, intense gaze.' },
            { id: 'Movement Shot', desc: 'FULL BODY mid-movement, fabric flowing, dynamic fashion moment captured.' },
            { id: 'Architectural Pose', desc: 'FULL BODY geometric pose, body creating interesting shapes, avant-garde.' },
            { id: 'Seated Editorial', desc: 'SEATED dramatically, legs extended or crossed elegantly, high fashion attitude.' }
        ]
    },
    'Cyberpunk Neon': {
        lighting: 'NEON SPLIT LIGHTING: Magenta/pink from one side, cyan/blue from other. Strong rim lights, deep shadows. Face lit by neon glow.',
        backdrop: 'Dark urban night - neon signs, rain-wet streets with reflections, futuristic city, holographic ads',
        wardrobe: 'TECHWEAR/CYBERPUNK: Black tactical jacket, reflective materials, LED accents, cyber goggles, dark base with neon highlights, futuristic accessories.',
        mood: 'Futuristic, edgy, high-tech, rebellious, dangerous',
        colorGrade: 'Deep shadows, neon pink/cyan/purple highlights, crushed blacks, cyberpunk color palette',
        negativePrompt: 'NO natural lighting, NO daytime, NO traditional clothing, NO soft colors',
        fineOptions: {
            neonColor: ['Rosa/Cyan', 'Púrpura/Verde', 'Rojo/Azul', 'Naranja/Azul'],
            weather: ['Lluvia', 'Seco', 'Niebla', 'Humo'],
            techLevel: ['Street Level', 'High Tech', 'Dystopian', 'Blade Runner']
        },
        poses: [
            { id: 'Neon Portrait', desc: 'CLOSE-UP with dramatic neon split lighting, intense expression, futuristic mood.' },
            { id: 'Tech Stance', desc: 'FULL BODY standing with attitude, hands in jacket or adjusting tech gear, urban night.' },
            { id: 'Rain Reflection', desc: 'FULL BODY on wet street, neon reflections below, atmospheric cyberpunk scene.' },
            { id: 'Crouched Tech', desc: 'CROUCHED or low angle, looking up at camera, dramatic neon rim light, intense.' },
            { id: 'Neon Alley', desc: 'THREE-QUARTER in neon-lit alley, surrounded by signs and lights, cinematic.' },
            { id: 'Cyber Close-Up', desc: 'CLOSE-UP with neon light strips reflecting on face, futuristic beauty shot.' }
        ]
    },
    'Vintage 90s': {
        lighting: 'Direct on-camera flash (authentic 90s), OR natural daylight with warm cast. Slightly harsh flash shadows acceptable.',
        backdrop: 'Textured colored backdrop, bedroom poster wall, retro interior, mall, arcade, candid location',
        wardrobe: '90s FASHION: Baggy jeans, crop tops, denim jacket, band tees, chokers, platform shoes, scrunchies, butterfly clips, velvet.',
        mood: 'Nostalgic, candid, authentic, fun, carefree',
        colorGrade: 'Film grain, slightly faded colors, warm cast, vintage processing, soft focus edges',
        negativePrompt: 'NO modern technology visible, NO current fashion, NO professional studio look',
        fineOptions: {
            era: ['Early 90s Grunge', 'Mid 90s Pop', 'Late 90s Y2K'],
            setting: ['Bedroom', 'Mall', 'Arcade', 'Outdoor', 'Photo Booth'],
            vibe: ['Grunge', 'Pop', 'Hip-Hop', 'Preppy']
        },
        poses: [
            { id: 'Flash Snapshot', desc: 'CLOSE-UP candid with direct flash, authentic 90s photo booth vibe, fun expression.' },
            { id: 'Bedroom Mirror', desc: 'THREE-QUARTER mirror selfie aesthetic, casual pose, 90s backdrop.' },
            { id: 'Sitting Casual', desc: 'SEATED casually on bed or floor, relaxed 90s teen magazine style.' },
            { id: 'Standing Retro', desc: 'FULL BODY standing with 90s attitude, peace sign or casual hand gesture.' },
            { id: 'Friends Pose', desc: 'CLOSE-UP or THREE-QUARTER, fun expression, could be from a photo strip.' },
            { id: 'Candid Laugh', desc: 'CANDID laughing moment, natural joy, authentic 90s snapshot feel.' }
        ]
    },
    'Old Money Luxury': {
        lighting: 'NATURAL WINDOW LIGHT from large windows, supplemented with warm fill. Golden hour quality. Light falls beautifully on face - NO dark shadows obscuring features. Rembrandt triangle on cheek acceptable. Rich, warm, flattering.',
        backdrop: 'VARIED LUXURY LOCATIONS: Library with leather books, yacht deck, polo grounds, ivy-covered university, Hampton estate garden, vintage Mercedes, horse stable, country club terrace. NOT just dark interiors.',
        wardrobe: 'OLD MONEY CLASSIC: Navy blazer with gold buttons, cable-knit sweater, Oxford shirt, chinos/slacks, loafers without socks. Women: cashmere cardigan, pearl necklace, silk scarf, riding boots. Colors: cream, navy, camel, forest green, burgundy. NO logos, NO flashy jewelry.',
        mood: 'Effortlessly elegant, understated wealth, intellectual, cultured, timeless class',
        colorGrade: 'Warm golden tones, rich shadows, film-like quality, slightly desaturated but warm, Ralph Lauren advertisement aesthetic',
        negativePrompt: 'NO dark rooms where face is not visible, NO nouveau riche flashy items, NO visible brand logos, NO modern tech, NO harsh artificial lighting',
        fineOptions: {
            location: ['Biblioteca Clásica', 'Jardín de Mansión', 'Club de Campo', 'Yate/Marina', 'Universidad Ivy League', 'Establo de Caballos'],
            season: ['Otoño Dorado', 'Verano Hamptons', 'Invierno Esquí', 'Primavera Country'],
            activity: ['Contemplativo', 'Leyendo', 'Con Caballo', 'En Terraza', 'Caminando Jardines']
        },
        poses: [
            { id: 'Biblioteca Iluminada', desc: 'THREE-QUARTER in library BY LARGE WINDOW, natural light on face, leather armchair, book in hand, intellectual refined expression. Face clearly lit.' },
            { id: 'Jardín Mansión', desc: 'FULL BODY in manicured garden, golden afternoon light, walking or standing by hedge maze, effortless elegance.' },
            { id: 'Terraza Country Club', desc: 'SEATED on country club terrace, wicker furniture, iced tea or champagne nearby, relaxed sophistication, beautiful natural light.' },
            { id: 'Con Caballo', desc: 'THREE-QUARTER with horse, equestrian setting, riding attire optional, connection with animal, golden light.' },
            { id: 'Yate/Marina', desc: 'FULL BODY on yacht deck or marina, nautical prep style, ocean backdrop, windswept but elegant.' },
            { id: 'Universidad Ivy', desc: 'FULL BODY on ivy-covered university grounds, academic elegance, carrying books, collegiate old money.' }
        ]
    },
    'Cinematográfico Noir': {
        lighting: 'SINGLE HARD LIGHT: Dramatic Rembrandt or split lighting. Deep shadows, one side of face lit. Venetian blind shadows optional. Film noir classic.',
        backdrop: 'Dark moody environment - shadows, venetian blind patterns, smoke/fog, mysterious atmosphere, 1940s setting',
        wardrobe: 'FILM NOIR: Fedora hat, trench coat, dark suits, dramatic collars, classic 40s/50s detective aesthetic. Women: elegant dress, fur stole, red lips.',
        mood: 'Mysterious, dramatic, cinematic, dangerous, secretive',
        colorGrade: 'High contrast black and white OR very desaturated with single color accent (red lips, cigarette glow)',
        negativePrompt: 'NO bright lighting, NO colorful clothing, NO modern elements, NO happy expressions',
        fineOptions: {
            colorTreatment: ['Blanco y Negro', 'Desaturado', 'Sepia', 'Color con Acento'],
            shadowStyle: ['Venetian Blinds', 'Split Light', 'Rembrandt', 'Silhouette'],
            atmosphere: ['Humo', 'Lluvia', 'Niebla', 'Limpio']
        },
        poses: [
            { id: 'Noir Portrait', desc: 'CLOSE-UP with dramatic shadow across face, mysterious expression, film noir lighting.' },
            { id: 'Venetian Shadows', desc: 'THREE-QUARTER with venetian blind shadow pattern, classic noir composition.' },
            { id: 'Smoking Silhouette', desc: 'SILHOUETTE or backlit figure, mysterious atmosphere, dramatic outline.' },
            { id: 'Detective Pose', desc: 'THREE-QUARTER in trench coat, collar up, looking over shoulder, suspicious.' },
            { id: 'Low Key Full', desc: 'FULL BODY emerging from shadows, dramatic rim light, cinematic.' },
            { id: 'Mirror Noir', desc: 'REFLECTION in mirror or window, film noir mystery, multiple angles.' }
        ]
    },
    'Surrealista / Dreamy': {
        lighting: 'Soft ethereal glow, backlight haze, otherworldly illumination, soft focus, light rays and particles',
        backdrop: 'Abstract environment - clouds, floating elements, surreal landscape, dreamscape, water reflections, impossible architecture',
        wardrobe: 'ETHEREAL: Flowing fabrics, whites and pastels, translucent materials, fairy-tale aesthetic, flower crowns, delicate jewelry.',
        mood: 'Ethereal, magical, surreal, otherworldly, peaceful',
        colorGrade: 'Pastel tones, soft contrast, dreamy processing, lifted shadows, gentle haze, bloom effect',
        negativePrompt: 'NO harsh lighting, NO dark colors, NO urban settings, NO realistic environments',
        fineOptions: {
            dreamscape: ['Nubes', 'Agua/Reflejo', 'Flores Flotantes', 'Espacio', 'Bosque Mágico'],
            colorPalette: ['Pasteles', 'Blancos Etéreos', 'Rosa Suave', 'Azul Cielo'],
            effect: ['Flotando', 'Partículas de Luz', 'Doble Exposición', 'Soft Focus']
        },
        poses: [
            { id: 'Floating Dream', desc: 'FULL BODY appearing to float, ethereal pose, weightless feeling, surreal.' },
            { id: 'Cloud Portrait', desc: 'CLOSE-UP surrounded by clouds or mist, dreamy expression, soft focus.' },
            { id: 'Reaching Up', desc: 'FULL BODY reaching toward sky or light, aspirational, magical moment.' },
            { id: 'Curled Ethereal', desc: 'CURLED or fetal position, floating in dreamscape, peaceful, surreal.' },
            { id: 'Veil of Light', desc: 'THREE-QUARTER with light rays or particles, magical atmosphere.' },
            { id: 'Mirror World', desc: 'REFLECTION creating surreal double image, dreamlike distortion.' }
        ]
    },
    'Business Corporate': {
        lighting: 'Professional 3-point lighting setup. Key light at 45°, fill light for shadow reduction, rim light for separation. Clean, even, flattering on face.',
        backdrop: 'MODERN CORPORATE: Glass office building, conference room, modern lobby, city view from office window, clean gray studio backdrop',
        wardrobe: 'BUSINESS PROFESSIONAL: Tailored dark suit (navy, charcoal, black), crisp white/blue dress shirt, silk tie, polished shoes. Women: tailored blazer, professional dress, minimal elegant jewelry.',
        mood: 'Professional, confident, trustworthy, competent, leadership',
        colorGrade: 'Clean, neutral, professional processing, natural skin tones, sharp details',
        negativePrompt: 'NO casual clothing, NO messy backgrounds, NO harsh shadows on face, NO unflattering angles',
        fineOptions: {
            industry: ['Finanzas/Banca', 'Tecnología', 'Legal', 'Consultoría', 'Medicina', 'General'],
            setting: ['Estudio Neutro', 'Oficina Moderna', 'Sala de Juntas', 'Ventana con Vista'],
            level: ['Entry Level', 'Manager', 'Director', 'C-Suite/CEO']
        },
        poses: [
            { id: 'LinkedIn Headshot', desc: 'CLOSE-UP professional headshot, shoulders visible, confident approachable smile, neutral gray background.' },
            { id: 'Executive Portrait', desc: 'THREE-QUARTER in office setting, arms crossed confidently, slight smile, authoritative but approachable.' },
            { id: 'Standing Professional', desc: 'FULL BODY standing in office, good posture, hands clasped in front, approachable.' },
            { id: 'Seated Executive', desc: 'SEATED at desk or in office chair, professional pose, engaged expression.' },
            { id: 'Team Leader', desc: 'THREE-QUARTER confident pose, ready to present, professional but dynamic.' },
            { id: 'Window Office', desc: 'THREE-QUARTER by office window, city view behind, successful executive look.' }
        ]
    },
    'Fitness / Sport': {
        lighting: 'Hard directional light to define muscles, dramatic rim light, high contrast, athletic',
        backdrop: 'Gym environment, dark textured background, athletic facility, dramatic dark setting',
        wardrobe: 'ADAPT TO: Athletic wear - compression gear, tank tops, sports bra (if appropriate), athletic shorts, training shoes. Performance aesthetic.',
        mood: 'Powerful, energetic, athletic, determined',
        colorGrade: 'High contrast, desaturated or bold accent colors, dramatic shadows',
        poses: [
            { id: 'Power Portrait', desc: 'CLOSE-UP intense expression, sweat detail, athletic determination, dramatic light.' },
            { id: 'Flex Pose', desc: 'THREE-QUARTER showing physique, confident athletic pose, gym background.' },
            { id: 'Action Ready', desc: 'FULL BODY athletic stance, ready position, dynamic energy, sports context.' },
            { id: 'Training Shot', desc: 'FULL BODY mid-exercise or training pose, authentic athletic moment.' },
            { id: 'Victory Pose', desc: 'FULL BODY triumphant pose, arms up or fist pump, achievement moment.' },
            { id: 'Focused Athlete', desc: 'THREE-QUARTER focused pre-competition moment, mental preparation, intense.' }
        ]
    },
    'Gótico / Dark': {
        lighting: 'Low key dramatic lighting, deep shadows, moody, single light source with falloff',
        backdrop: 'Gothic architecture, dark forest, cemetery aesthetic, Victorian dark romance',
        wardrobe: 'ADAPT TO: Gothic style - black clothing, lace, velvet, corsets, dark romantic aesthetic, Victorian gothic elements.',
        mood: 'Dark, romantic, mysterious, melancholic',
        colorGrade: 'Desaturated with deep blacks, occasional red or purple accents, moody',
        poses: [
            { id: 'Dark Portrait', desc: 'CLOSE-UP emerging from shadows, mysterious expression, gothic beauty.' },
            { id: 'Gothic Elegance', desc: 'FULL BODY in gothic setting, dramatic pose, dark romantic atmosphere.' },
            { id: 'Cemetery Angel', desc: 'THREE-QUARTER among gothic architecture or statues, contemplative, dark.' },
            { id: 'Velvet Shadows', desc: 'SEATED or reclining dramatically, gothic interior, romantic darkness.' },
            { id: 'Dark Forest', desc: 'FULL BODY in dark forest setting, mysterious figure, gothic fairy tale.' },
            { id: 'Candlelight', desc: 'CLOSE-UP lit by candle or single light, intimate dark portrait.' }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════════
// INSTRUCCIONES ESPECÍFICAS POR ESTILO DE AVATAR 3D
// Cada estilo tiene renders, materiales y poses ÚNICOS
// ═══════════════════════════════════════════════════════════════════════════════
const AVATAR_STYLE_INSTRUCTIONS = {
    'CGI Hiperrealista': {
        render: 'Photorealistic CGI render, indistinguishable from real photo, Octane/Arnold quality',
        material: 'Subsurface scattering skin, individual hair strands, realistic eyes with catchlights, pore detail',
        lighting: 'Professional studio 3-point lighting setup with soft key, fill, and rim light',
        detail: 'Pores, fine wrinkles, realistic textures, micro-details visible',
        wardrobe: 'PRESERVE original clothing - render with photorealistic fabric textures',
        poses: [
            { id: 'Retrato Hiperrealista', desc: 'CLOSE-UP photorealistic portrait, neutral expression, studio lighting, indistinguishable from photo.' },
            { id: 'Busto CGI', desc: 'BUST shot, chest up, 3/4 angle, professional CGI render, detailed skin and hair.' },
            { id: 'Cuerpo Completo Render', desc: 'FULL BODY standing, neutral pose, complete CGI character render, studio backdrop.' },
            { id: 'Expresión Emotiva', desc: 'CLOSE-UP with subtle emotional expression, photorealistic detail in eyes and skin.' },
            { id: 'Perfil Detallado', desc: 'PROFILE view, showing skin detail, ear, hair texture, clean studio background.' },
            { id: 'Pose Dinámica', desc: 'THREE-QUARTER dynamic pose, slight movement, photorealistic quality.' }
        ]
    },
    'Videojuego AAA (Unreal 5)': {
        render: 'Unreal Engine 5 quality, Nanite geometry, real-time rendering aesthetic',
        material: 'PBR materials, detailed normal maps, game-ready textures, Lumen GI',
        lighting: 'HDR environment lighting, dynamic global illumination, cinematic',
        detail: 'High polygon, optimized for real-time, game character quality',
        wardrobe: 'ADAPT TO: Video game hero outfit - tactical gear, armor elements, or stylized game attire',
        poses: [
            { id: 'Character Select', desc: 'FULL BODY character selection screen pose, ready stance, game UI aesthetic.' },
            { id: 'Hero Portrait', desc: 'CLOSE-UP game hero portrait, determined expression, cinematic lighting.' },
            { id: 'Action Ready', desc: 'FULL BODY action-ready stance, like about to enter combat, game character.' },
            { id: 'Idle Animation', desc: 'FULL BODY idle pose, natural weight shift, like in-game idle state.' },
            { id: 'Victory Pose', desc: 'FULL BODY triumphant pose, achievement unlocked moment, game aesthetic.' },
            { id: 'Cutscene Frame', desc: 'THREE-QUARTER cinematic cutscene framing, dramatic game moment.' }
        ]
    },
    'Cyber-Humano (Sci-Fi)': {
        render: 'Sci-fi android/cyborg aesthetic, Blade Runner meets Ghost in the Shell',
        material: 'Mix of synthetic skin and metallic/chrome components, glowing circuit lines',
        lighting: 'Neon rim lights (cyan/magenta), dark tech environment, dramatic',
        detail: 'Visible cybernetic implants, glowing elements, circuit patterns under skin, tech ports',
        wardrobe: 'MUST CHANGE TO: Cybernetic body - partial mechanical limbs, tech implants, futuristic bodysuit with circuits',
        poses: [
            { id: 'Cyborg Portrait', desc: 'CLOSE-UP showing cybernetic face details, glowing eye implants, tech elements.' },
            { id: 'Cuerpo Mecánico', desc: 'FULL BODY showing full cybernetic transformation, mechanical limbs, tech suit.' },
            { id: 'Interfaz Neural', desc: 'THREE-QUARTER with visible neural interface, cables connecting, tech pose.' },
            { id: 'Sistema Activo', desc: 'FULL BODY with glowing systems active, energy flowing through circuits.' },
            { id: 'Diagnóstico', desc: 'CLOSE-UP diagnostic mode, holographic overlays, scanning effect.' },
            { id: 'Combate Cyber', desc: 'FULL BODY combat-ready cyborg pose, weapons systems visible, aggressive stance.' }
        ]
    },
    'Estilo Pixar / Disney': {
        render: 'Stylized 3D animation, Pixar/Disney quality, appealing proportions',
        material: 'Smooth plastic-like skin, simplified features, cartoon textures',
        lighting: 'Soft ambient with warm character rim lights, movie-quality',
        detail: 'Big expressive eyes, appealing character design, exaggerated features',
        wardrobe: 'ADAPT TO: Colorful animated movie outfit - bright colors, simple clean designs, Disney character aesthetic',
        poses: [
            { id: 'Movie Poster', desc: 'CLOSE-UP Pixar movie poster style, big expressive eyes, warm lighting, charming smile.' },
            { id: 'Personaje Animado', desc: 'FULL BODY Disney/Pixar character pose, appealing stance, animated movie quality.' },
            { id: 'Expresión Exagerada', desc: 'CLOSE-UP with exaggerated animated expression, big emotions, Pixar style.' },
            { id: 'Aventura', desc: 'FULL BODY adventure pose, dynamic and fun, Disney movie moment.' },
            { id: 'Retrato Encantador', desc: 'THREE-QUARTER charming portrait, warm colors, lovable character design.' },
            { id: 'Momento Emotivo', desc: 'CLOSE-UP emotional Pixar moment, touching expression, movie scene quality.' }
        ]
    },
    'Escultura de Mármol': {
        render: 'Classical marble sculpture, museum quality, Michelangelo/Bernini style',
        material: 'White Carrara marble with subtle veining, polished surface',
        lighting: 'Museum spotlight from above, dramatic shadows, gallery setting',
        detail: 'Classical sculpture proportions, smooth polish, fine anatomical detail',
        wardrobe: 'REMOVE modern clothes - classical nude or draped toga/cloth like Greek/Roman statues',
        poses: [
            { id: 'Busto Clásico', desc: 'BUST classical sculpture, chest up, dignified expression, museum pedestal.' },
            { id: 'Estatua Griega', desc: 'FULL BODY standing sculpture, contrapposto pose, classical proportions, marble texture.' },
            { id: 'Pensador', desc: 'SEATED contemplative pose like Rodin\'s Thinker, dramatic shadows, museum setting.' },
            { id: 'Perfil Romano', desc: 'PROFILE view, noble expression, coin or cameo style, classical beauty.' },
            { id: 'David Pose', desc: 'FULL BODY heroic stance, Michelangelo\'s David inspired, marble detail.' },
            { id: 'Venus de Milo', desc: 'THREE-QUARTER classical beauty pose, elegant, museum quality sculpture.' }
        ]
    },
    'Claymation (Arcilla)': {
        render: 'Stop-motion clay animation style, Wallace & Gromit / Coraline quality',
        material: 'Matte clay/plasticine with visible fingerprints and texture',
        lighting: 'Soft studio lighting for miniatures, practical set lighting',
        detail: 'Handcrafted imperfections, charming aesthetic, visible clay texture',
        wardrobe: 'ADAPT TO: Simple clay-friendly outfit - solid colors, simple shapes, stop-motion character design',
        poses: [
            { id: 'Clay Portrait', desc: 'CLOSE-UP clay character portrait, charming expression, visible clay texture.' },
            { id: 'Stop Motion', desc: 'FULL BODY mid-animation pose, like between frames, clay character.' },
            { id: 'Miniature Set', desc: 'FULL BODY on miniature stop-motion set, practical props, handmade feel.' },
            { id: 'Expresión Clay', desc: 'CLOSE-UP exaggerated clay expression, moldable features, charming.' },
            { id: 'Walking Clay', desc: 'FULL BODY walking pose, stop-motion animation frame, clay figure.' },
            { id: 'Diorama', desc: 'FULL BODY in clay diorama scene, miniature world, stop-motion aesthetic.' }
        ]
    },
    'Dibujo a Lápiz (Sketch)': {
        render: 'Hand-drawn pencil sketch on paper, artist study quality',
        material: 'Graphite on textured paper, visible paper grain',
        lighting: 'Implied through shading techniques, dramatic light/shadow',
        detail: 'Cross-hatching, sketch lines, artistic rendering, visible strokes',
        wardrobe: 'PRESERVE original - rendered in pencil sketch style',
        poses: [
            { id: 'Retrato Sketch', desc: 'CLOSE-UP pencil portrait, detailed shading, artist study quality.' },
            { id: 'Estudio Anatómico', desc: 'FULL BODY anatomical study, classical drawing proportions, sketch style.' },
            { id: 'Boceto Rápido', desc: 'LOOSE gestural sketch, quick lines, artistic energy, expressive.' },
            { id: 'Detalle Realista', desc: 'CLOSE-UP hyperrealistic pencil detail, photorealistic graphite work.' },
            { id: 'Composición', desc: 'THREE-QUARTER composed sketch, balanced shading, art school quality.' },
            { id: 'Expresivo', desc: 'CLOSE-UP expressive sketch, emotional, artistic interpretation.' }
        ]
    },
    'Pintura al Óleo': {
        render: 'Classical oil painting on canvas, Old Masters quality',
        material: 'Visible brushstrokes, oil paint texture, canvas weave',
        lighting: 'Dramatic chiaroscuro, Rembrandt/Caravaggio style',
        detail: 'Painterly rendering, artistic interpretation, rich colors',
        wardrobe: 'ADAPT TO: Classical portrait attire - Renaissance/Baroque style clothing, rich fabrics, period appropriate',
        poses: [
            { id: 'Retrato Clásico', desc: 'CLOSE-UP classical oil portrait, Rembrandt lighting, rich colors, visible brushstrokes.' },
            { id: 'Aristocrata', desc: 'THREE-QUARTER noble portrait, elegant pose, Old Masters style, dramatic lighting.' },
            { id: 'Chiaroscuro', desc: 'CLOSE-UP dramatic light and shadow, Caravaggio style, intense mood.' },
            { id: 'Retrato Real', desc: 'FULL BODY royal portrait style, regal pose, rich background, classical.' },
            { id: 'Íntimo', desc: 'CLOSE-UP intimate portrait, soft brushwork, emotional depth, painterly.' },
            { id: 'Escena Barroca', desc: 'THREE-QUARTER baroque scene, dramatic composition, rich oil colors.' }
        ]
    },
    'Low Poly Art': {
        render: 'Geometric low polygon 3D art, modern digital aesthetic',
        material: 'Flat colors per polygon face, no textures, clean edges',
        lighting: 'Simple flat or gradient shading, stylized',
        detail: 'Minimal polygons, artistic simplification, geometric beauty',
        wardrobe: 'SIMPLIFY to geometric shapes - low poly clothing that matches the aesthetic',
        poses: [
            { id: 'Low Poly Portrait', desc: 'CLOSE-UP low poly face, geometric facets, stylized colors, modern.' },
            { id: 'Geometric Full', desc: 'FULL BODY low poly character, complete geometric figure, clean design.' },
            { id: 'Perfil Angular', desc: 'PROFILE view showing geometric angles, artistic low poly style.' },
            { id: 'Busto Poligonal', desc: 'BUST low poly, chess up, geometric interpretation, modern art.' },
            { id: 'Pose Minimalista', desc: 'FULL BODY minimal pose, clean low poly aesthetic, gradient background.' },
            { id: 'Arte Digital', desc: 'THREE-QUARTER modern digital art composition, low poly with style.' }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════════
// INSTRUCCIONES ESPECÍFICAS POR ERA DE TIME TRAVEL
// Cada era tiene vestuario, escenarios y poses ESPECÍFICOS de la época
// ═══════════════════════════════════════════════════════════════════════════════
const TIME_TRAVEL_INSTRUCTIONS = {
    '1980s Mall Portrait': {
        era: '1980s America',
        clothing: 'MUST CHANGE to 80s style: neon colors, shoulder pads, big permed hair, leg warmers, Members Only jacket, acid wash denim',
        setting: 'Mall photo studio with laser background, arcade, or 80s interior',
        photoStyle: 'Glamour Shots aesthetic, soft focus, colorful laser/cloud backdrop',
        treatment: 'Slightly overexposed, warm tones, period-accurate processing',
        poses: [
            { id: 'Glamour Shots', desc: 'CLOSE-UP classic Glamour Shots portrait, soft focus, laser background, big 80s hair, dreamy expression.' },
            { id: 'Mall Photo', desc: 'THREE-QUARTER mall photo studio pose, colorful backdrop, 80s fashion, confident.' },
            { id: 'Arcade', desc: 'THREE-QUARTER at arcade machine, neon lights, 80s teen magazine vibe.' },
            { id: 'Yearbook 80s', desc: 'CLOSE-UP 80s yearbook photo, gradient backdrop, period-accurate hair and fashion.' },
            { id: 'Full 80s Look', desc: 'FULL BODY showing complete 80s outfit, mall interior, period fashion showcase.' },
            { id: 'Candid 80s', desc: 'THREE-QUARTER candid 80s moment, authentic period snapshot aesthetic.' }
        ]
    },
    '1990s Grunge': {
        era: '1990s Alternative',
        clothing: 'MUST CHANGE to 90s grunge: flannel shirt tied at waist, band tee (Nirvana, Pearl Jam), ripped jeans, Doc Martens, choker',
        setting: 'Record store, garage band practice, coffee shop, Seattle street',
        photoStyle: 'Candid snapshot, disposable camera aesthetic, raw',
        treatment: 'Flash photography, slight grain, authentic 90s processing',
        poses: [
            { id: 'Grunge Portrait', desc: 'CLOSE-UP grunge portrait, messy hair, apathetic expression, disposable camera flash.' },
            { id: 'Record Store', desc: 'THREE-QUARTER browsing records, flannel shirt, 90s alternative vibe.' },
            { id: 'Band Tee', desc: 'THREE-QUARTER showing band tee, casual grunge pose, authentic 90s.' },
            { id: 'Garage', desc: 'FULL BODY in garage setting, grunge aesthetic, raw candid feel.' },
            { id: 'Coffee Shop', desc: 'SEATED in 90s coffee shop, reading, grunge fashion, period atmosphere.' },
            { id: 'Polaroid', desc: 'CLOSE-UP polaroid-style snapshot, instant film aesthetic, 90s grunge.' }
        ]
    },
    '1950s Diner': {
        era: '1950s Americana',
        clothing: 'MUST CHANGE to 50s style: poodle skirt with petticoat, saddle shoes, cardigan OR leather jacket, white tee, cuffed jeans, pompadour hair',
        setting: 'Chrome diner with red booths, classic car, soda fountain, jukebox',
        photoStyle: 'Posed portrait, classic composition, wholesome',
        treatment: 'Kodachrome colors, slightly faded, warm period look',
        poses: [
            { id: 'Diner Booth', desc: 'SEATED in red diner booth, milkshake, 50s fashion, wholesome smile.' },
            { id: 'Jukebox', desc: 'THREE-QUARTER leaning on jukebox, 50s pose, classic Americana.' },
            { id: 'Classic Car', desc: 'THREE-QUARTER leaning on classic 50s car, leather jacket or poodle skirt, cool pose.' },
            { id: 'Soda Fountain', desc: 'SEATED at soda fountain counter, 50s diner, period-accurate styling.' },
            { id: 'Greaser', desc: 'THREE-QUARTER greaser pose, leather jacket, pompadour, rebel cool.' },
            { id: '50s Portrait', desc: 'CLOSE-UP classic 50s portrait, perfect hair, period makeup, Kodachrome colors.' }
        ]
    },
    '1920s Gatsby': {
        era: '1920s Jazz Age',
        clothing: 'MUST CHANGE to 20s style: flapper dress with fringe and beads, headband with feather, pearls, T-strap heels OR pinstripe suit, suspenders, fedora',
        setting: 'Art Deco interior, speakeasy with jazz band, Gatsby mansion ballroom',
        photoStyle: 'Formal portrait, static elegant pose, glamorous',
        treatment: 'Sepia or soft black and white, vintage vignette, film grain',
        poses: [
            { id: 'Flapper', desc: 'THREE-QUARTER flapper pose, fringe dress, headband, Charleston-ready, Art Deco background.' },
            { id: 'Speakeasy', desc: 'THREE-QUARTER at speakeasy bar, cocktail, mysterious 20s atmosphere.' },
            { id: 'Gatsby Party', desc: 'FULL BODY at lavish party, champagne, 1920s glamour, mansion setting.' },
            { id: 'Art Deco Portrait', desc: 'CLOSE-UP formal 1920s portrait, Art Deco styling, sepia tones.' },
            { id: 'Jazz Age', desc: 'THREE-QUARTER with jazz band behind, 20s nightclub, period fashion.' },
            { id: 'Formal 20s', desc: 'FULL BODY formal 1920s pose, elegant setting, period-accurate attire.' }
        ]
    },
    'Victorian Era': {
        era: 'Victorian England (1837-1901)',
        clothing: 'MUST CHANGE to Victorian: corset, bustle dress, high collar, cameo brooch OR top hat, waistcoat, pocket watch, cravat',
        setting: 'Victorian parlor with heavy drapes, formal portrait studio, ornate interior',
        photoStyle: 'Rigid formal pose, serious expression, long exposure aesthetic',
        treatment: 'Daguerreotype or early photography look, sepia, vignette',
        poses: [
            { id: 'Victorian Portrait', desc: 'CLOSE-UP formal Victorian portrait, serious expression, high collar, daguerreotype style.' },
            { id: 'Parlor', desc: 'SEATED in Victorian parlor, formal pose, heavy drapes, ornate furniture.' },
            { id: 'Standing Formal', desc: 'FULL BODY standing formal Victorian pose, hand on chair, rigid posture.' },
            { id: 'Carte de Visite', desc: 'FULL BODY carte de visite style, Victorian studio backdrop, period costume.' },
            { id: 'Aristocrat', desc: 'THREE-QUARTER aristocratic pose, Victorian wealth, formal attire.' },
            { id: 'Mourning', desc: 'CLOSE-UP Victorian mourning portrait, black attire, solemn, period accurate.' }
        ]
    },
    'Wild West': {
        era: 'American Old West (1800s)',
        clothing: 'MUST CHANGE to Western: cowboy hat, duster coat or vest, bandana, leather boots, gun belt (empty), period-accurate frontier wear',
        setting: 'Saloon interior, desert town main street, wooden frontier buildings',
        photoStyle: 'Tintype portrait aesthetic, serious frontier expression',
        treatment: 'Sepia, weathered, dusty atmosphere, old photograph look',
        poses: [
            { id: 'Wanted Poster', desc: 'CLOSE-UP Old West wanted poster style portrait, serious expression, tintype aesthetic.' },
            { id: 'Saloon', desc: 'THREE-QUARTER in saloon, leaning on bar, cowboy attire, Western atmosphere.' },
            { id: 'Main Street', desc: 'FULL BODY standing on dusty main street, frontier town, cowboy pose.' },
            { id: 'Sheriff', desc: 'THREE-QUARTER sheriff/lawman pose, badge, stern expression, Western justice.' },
            { id: 'Frontier', desc: 'FULL BODY frontier settler pose, period clothing, Old West setting.' },
            { id: 'Tintype', desc: 'CLOSE-UP authentic tintype portrait, weathered look, 1800s photography style.' }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════════
// INSTRUCCIONES ESPECÍFICAS POR ESTILO DE FIGURINE
// Cada tipo de figurine tiene materiales, escalas y poses ÚNICOS
// ═══════════════════════════════════════════════════════════════════════════════
const FIGURINE_STYLE_INSTRUCTIONS = {
    'Plástico Vinilo': {
        material: 'Glossy vinyl plastic, smooth surface, clean seams',
        style: 'Designer toy aesthetic (Funko Pop, Kidrobot, Bearbrick style)',
        scale: '6-8 inch collectible figure',
        finish: 'Shiny, clean, factory-made appearance, uniform color',
        wardrobe: 'SIMPLIFY to vinyl toy style - solid colors, simplified outfit shapes, toy-friendly design',
        poses: [
            { id: 'Funko Style', desc: 'FULL BODY Funko Pop style figure, big head, small body, standing on round base, vinyl finish.' },
            { id: 'Designer Toy', desc: 'FULL BODY Kidrobot/Bearbrick style, stylized proportions, vinyl collectible.' },
            { id: 'Product Shot', desc: 'FULL BODY clean product photography, white background, vinyl figure.' },
            { id: 'In Box', desc: 'FULL BODY inside clear collector box/packaging, retail display ready.' },
            { id: 'Collection Display', desc: 'FULL BODY on collector shelf with other figures, display context.' },
            { id: 'Detail Close-Up', desc: 'CLOSE-UP showing vinyl material detail, paint application, quality.' }
        ]
    },
    'Porcelana Fina': {
        material: 'Delicate porcelain, translucent edges, fine glazing',
        style: 'Lladró or fine decorative figurine, elegant collectible',
        scale: 'Elegant decorative piece, 8-12 inches',
        finish: 'Smooth, pristine, museum quality, subtle hand-painted details',
        wardrobe: 'ADAPT TO: Elegant flowing dress or formal attire in soft pastel colors, classical porcelain aesthetic',
        poses: [
            { id: 'Lladró Elegante', desc: 'FULL BODY elegant Lladró-style porcelain figurine, graceful pose, flowing dress, soft colors.' },
            { id: 'Bailarina', desc: 'FULL BODY ballet dancer pose, delicate porcelain, tutu, graceful movement frozen.' },
            { id: 'Porcelana Clásica', desc: 'FULL BODY classical porcelain figurine, dignified pose, fine detail, museum quality.' },
            { id: 'Detalle Fino', desc: 'CLOSE-UP showing porcelain translucency, hand-painted details, fine craftsmanship.' },
            { id: 'Display Elegante', desc: 'FULL BODY on elegant display stand, soft lighting, collector piece.' },
            { id: 'Par de Figuras', desc: 'FULL BODY romantic porcelain scene, elegant pair composition, classical.' }
        ]
    },
    'Madera Tallada': {
        material: 'Carved wood with visible grain, natural texture',
        style: 'Artisan woodcarving, folk art, handcrafted',
        scale: 'Hand-carved decorative piece, 4-10 inches',
        finish: 'Natural wood polish or painted folk style, visible tool marks',
        wardrobe: 'ADAPT TO: Simple folk clothing or natural form - rustic aesthetic, earth tones',
        poses: [
            { id: 'Folk Art', desc: 'FULL BODY folk art wood carving, simple charming pose, visible wood grain, painted details.' },
            { id: 'Nutcracker', desc: 'FULL BODY nutcracker-style carved figure, soldier pose, painted wood, Christmas aesthetic.' },
            { id: 'Natural Wood', desc: 'FULL BODY natural unpainted wood carving, artistic sculpture, visible grain and tool marks.' },
            { id: 'Talla Artesanal', desc: 'FULL BODY artisan carving, traditional style, handcrafted quality visible.' },
            { id: 'Detalle Grano', desc: 'CLOSE-UP showing wood grain detail, carving marks, craftsmanship.' },
            { id: 'Escena Tallada', desc: 'FULL BODY carved wooden scene, folk art diorama, rustic charm.' }
        ]
    },
    'Muñeco de Peluche': {
        material: 'Soft plush fabric, embroidered details, cotton stuffing visible',
        style: 'Kawaii plush toy, huggable, Squishmallow/Jellycat quality',
        scale: 'Cuddly stuffed toy size, 8-16 inches',
        finish: 'Soft, fuzzy, adorable, squishy appearance',
        wardrobe: 'SIMPLIFY to plush style - soft rounded shapes, simple cute outfit or just plush body',
        poses: [
            { id: 'Kawaii Plush', desc: 'FULL BODY adorable kawaii plush toy, sitting pose, big embroidered eyes, soft and huggable.' },
            { id: 'Squishmallow', desc: 'FULL BODY Squishmallow-style round plush, ultra soft, simple cute design, pillow-like.' },
            { id: 'Jellycat Style', desc: 'FULL BODY Jellycat-quality plush, floppy limbs, premium soft toy, huggable.' },
            { id: 'Abrazo', desc: 'FULL BODY plush in hugging pose, arms open, inviting, adorable expression.' },
            { id: 'Detalle Peluche', desc: 'CLOSE-UP showing plush texture, embroidered details, soft fabric quality.' },
            { id: 'Cama Display', desc: 'FULL BODY plush on bed or soft surface, cozy setting, lifestyle product shot.' }
        ]
    },
    'Action Figure Retro': {
        material: 'Hard plastic with visible joints, articulated',
        style: '80s action figure (Kenner, Hasbro vintage, Star Wars original)',
        scale: '3.75 inch vintage style figure',
        finish: 'Slightly worn, nostalgic toy appearance, vintage paint',
        wardrobe: 'ADAPT TO: Retro action hero outfit - sci-fi armor, adventure gear, 80s toy aesthetic',
        poses: [
            { id: 'Vintage Figure', desc: 'FULL BODY vintage 80s action figure, standing pose, visible joints, retro toy aesthetic.' },
            { id: 'Blister Pack', desc: 'FULL BODY in vintage blister card packaging, retro graphics, collector item.' },
            { id: 'Action Pose', desc: 'FULL BODY dynamic action pose, 80s toy articulation visible, adventure stance.' },
            { id: 'Loose Figure', desc: 'FULL BODY loose vintage figure, slightly worn paint, nostalgic quality.' },
            { id: 'Playset', desc: 'FULL BODY with vintage playset/vehicle, 80s toy commercial aesthetic.' },
            { id: 'Collection', desc: 'FULL BODY among other vintage figures, collector display, retro toys.' }
        ]
    }
};

// ═══════════════════════════════════════════════════════════════════════════════
// PLANTILLAS PRINCIPALES
// ═══════════════════════════════════════════════════════════════════════════════
export const TEMPLATES = {
    professionalPhotoshoot: {
        id: 'professionalPhotoshoot',
        name: 'Studio Pro',
        desc: 'Editorial, LinkedIn, Headshots.',
        styles: [
            'Retrato Ejecutivo',
            'Estudio Minimalista',
            'Business Corporate',
            'Old Money Luxury',
            'Urbano / Street',
            'Bohemio / Nature',
            'Editorial Alta Costura',
            'Cyberpunk Neon',
            'Vintage 90s',
            'Cinematográfico Noir',
            'Surrealista / Dreamy',
            'Fitness / Sport',
            'Gótico / Dark'
        ],
        // Las opciones se cargan dinámicamente según el estilo seleccionado
        options: {},
        prompts: [
            { id: 'LinkedIn Headshot', base: 'Professional headshot portrait, shoulders up, confident expression, clean background.' },
            { id: 'Power Full Body', base: 'Full body shot showing complete figure from head to feet, confident standing pose.' },
            { id: 'Fashion 3/4 Shot', base: 'Three-quarter shot from knees up, stylish pose, fashion magazine quality.' },
            { id: 'Sitting Portrait', base: 'Seated portrait showing full body, elegant pose, relaxed but professional.' },
            { id: 'Walking Motion', base: 'Dynamic walking shot, full body in motion, confident stride.' },
            { id: 'Environmental', base: 'Environmental portrait with context, subject in their element.' }
        ]
    },

    avatarStudio: {
        id: 'avatarStudio',
        name: 'Avatar 3D',
        desc: 'CGI, Videojuegos, Esculturas.',
        styles: [
            'CGI Hiperrealista',
            'Videojuego AAA (Unreal 5)',
            'Cyber-Humano (Sci-Fi)',
            'Estilo Pixar / Disney',
            'Escultura de Mármol',
            'Claymation (Arcilla)',
            'Dibujo a Lápiz (Sketch)',
            'Pintura al Óleo',
            'Low Poly Art'
        ],
        options: {
            framing: ['Default', 'Portrait', 'Full Character', 'Bust', 'Action Pose'],
            lighting: ['Default', 'Studio 3-Point', 'HDR Environment', 'Dramatic', 'Soft', 'Neon Rim'],
            renderQuality: ['Default', 'Ultra HD 8K', 'Stylized', 'Game Ready', 'Cinematic'],
            background3D: ['Default', 'Studio Void', 'Environment', 'Abstract', 'Gradient']
        },
        prompts: [
            { id: 'Portrait', base: 'Character portrait, head and shoulders, neutral expression.' },
            { id: 'Full Character', base: 'Full character view, complete body visible, neutral pose.' },
            { id: 'Hero Pose', base: 'Dynamic hero pose, confident stance, dramatic angle.' },
            { id: 'Bust', base: 'Classical bust composition, chest up, dignified pose.' },
            { id: 'Action', base: 'Dynamic action pose, movement and energy.' }
        ]
    },

    anime: {
        id: 'anime',
        name: 'Anime World',
        desc: 'Ghibli, Shonen, Retro 90s.',
        styles: [
            'Studio Ghibli',
            'One Piece Style',
            '90s Retro',
            'Modern Shonen',
            'Makoto Shinkai (Scenery)',
            'Cyberpunk Anime'
        ],
        options: {
            scene: ['Default', 'Portrait', 'Full Scene', 'Action', 'Peaceful'],
            background: ['Default', 'Detailed Environment', 'Simple/Abstract', 'Nature', 'Urban', 'Fantasy'],
            animeExpression: ['Default', 'Sereno', 'Determinado', 'Alegre', 'Misterioso', 'Épico'],
            effectLevel: ['Default', 'Sin Efectos', 'Sutiles', 'Dramáticos', 'Máximos']
        },
        prompts: [
            { id: 'Portrait', base: 'Anime portrait, character focus, expressive.' },
            { id: 'Scene', base: 'Full scene with character in environment.' },
            { id: 'Action', base: 'Dynamic action scene with movement.' },
            { id: 'Peaceful', base: 'Peaceful slice of life moment.' },
            { id: 'Dramatic', base: 'Dramatic moment with intense atmosphere.' },
            { id: 'Cartel de Se Busca', base: 'WANTED poster style (One Piece specific).' },
            { id: 'Capitán en Barco', base: 'Captain on ship scene (One Piece specific).' }
        ]
    },

    figurine: {
        id: 'figurine',
        name: 'Miniature Me',
        desc: 'Juguetes y Coleccionables.',
        styles: [
            'Plástico Vinilo',
            'Porcelana Fina',
            'Madera Tallada',
            'Muñeco de Peluche',
            'Action Figure Retro'
        ],
        options: {
            display: ['Default', 'Product Shot', 'On Shelf', 'In Box', 'Diorama'],
            angle: ['Default', 'Front', 'Three-Quarter', 'Side', 'Macro Detail'],
            scale: ['Default', 'Mini (3-4")', 'Standard (6-8")', 'Large (10-12")', 'Life-Size Head'],
            finish: ['Default', 'Glossy', 'Matte', 'Metallic', 'Weathered']
        },
        prompts: [
            { id: 'Product', base: 'Clean product photography, white background.' },
            { id: 'Display', base: 'On collector shelf with other items.' },
            { id: 'Boxed', base: 'Inside collector packaging/box.' },
            { id: 'Diorama', base: 'In miniature scene/diorama.' }
        ]
    },

    timeTravel: {
        id: 'timeTravel',
        name: 'Time Traveler',
        desc: '80s Mall, 1920s, Victorian.',
        styles: [
            '1980s Mall Portrait',
            '1990s Grunge',
            '1950s Diner',
            '1920s Gatsby',
            'Victorian Era',
            'Wild West'
        ],
        options: {
            photoType: ['Default', 'Formal Portrait', 'Candid', 'Yearbook', 'Magazine'],
            setting: ['Default', 'Studio', 'Location', 'Interior', 'Exterior'],
            photoTreatment: ['Default', 'Auténtico de Época', 'Restaurado', 'Colorizado', 'Muy Envejecido'],
            wardrobeAccuracy: ['Default', 'Auténtico 100%', 'Inspirado', 'Mezclado Moderno']
        },
        prompts: [
            { id: 'Portrait', base: 'Period-accurate portrait photograph.' },
            { id: 'Candid', base: 'Candid moment in period setting.' },
            { id: 'Yearbook', base: 'Yearbook/school photo style.' },
            { id: 'Scene', base: 'Full scene in period environment.' }
        ]
    },

    travelPhotoshoot: {
        id: 'travelPhotoshoot',
        name: 'Global Traveler',
        desc: 'Teletransporte instantáneo.',
        destinations: Object.keys(DESTINATIONS_DATA),
        options: {
            timeOfDay: ['Default', 'Golden Hour', 'Blue Hour', 'Midday', 'Night', 'Amanecer'],
            composition: ['Default', 'Subject Focus', 'Landmark Focus', 'Wide Scene', 'Selfie Style'],
            weather: ['Default', 'Soleado', 'Nublado', 'Lluvia Ligera', 'Nieve', 'Atardecer Dramático'],
            travelStyle: ['Default', 'Turista', 'Local', 'Aventurero', 'Luxury', 'Mochilero']
        },
        prompts: []
    },

    customGen: {
        id: 'customGen',
        name: 'Prompt Libre',
        desc: 'Tú escribes, Gemini crea.',
        isCustom: true,
        options: {
            style: ['Default', 'Photorealistic', 'Artistic', 'Cinematic', 'Anime'],
            mood: ['Default', 'Dramatic', 'Peaceful', 'Energetic', 'Mysterious']
        }
    }
};

// ═══════════════════════════════════════════════════════════════════════════════
// FUNCIÓN PARA OBTENER OPCIONES DINÁMICAS POR ESTILO
// ═══════════════════════════════════════════════════════════════════════════════
export const getStyleSpecificOptions = (template, styleName) => {
    // Opciones base que siempre están disponibles
    const baseOptions = {
        expression: ['Default', 'Natural', 'Sonrisa Sutil', 'Confiado', 'Serio', 'Pensativo']
    };
    
    if (template === 'professionalPhotoshoot') {
        const style = STUDIO_STYLE_INSTRUCTIONS[styleName];
        if (style && style.fineOptions) {
            return { ...baseOptions, ...style.fineOptions };
        }
        // Opciones por defecto si el estilo no tiene opciones específicas
        return {
            ...baseOptions,
            framing: ['Default', 'Headshot', 'Medio Cuerpo', 'Cuerpo Completo'],
            lighting: ['Default', 'Natural', 'Dramática', 'Suave']
        };
    }
    
    return baseOptions;
};

// ═══════════════════════════════════════════════════════════════════════════════
// FUNCIONES PARA OBTENER POSES ESPECÍFICAS POR ESTILO
// ═══════════════════════════════════════════════════════════════════════════════
export const getStudioPoses = (styleName) => {
    const style = STUDIO_STYLE_INSTRUCTIONS[styleName];
    if (style && style.poses) {
        return style.poses;
    }
    return STUDIO_STYLE_INSTRUCTIONS['Retrato Ejecutivo'].poses;
};

export const getAvatarPoses = (styleName) => {
    const style = AVATAR_STYLE_INSTRUCTIONS[styleName];
    if (style && style.poses) {
        return style.poses;
    }
    return AVATAR_STYLE_INSTRUCTIONS['CGI Hiperrealista'].poses;
};

export const getFigurinePoses = (styleName) => {
    const style = FIGURINE_STYLE_INSTRUCTIONS[styleName];
    if (style && style.poses) {
        return style.poses;
    }
    return FIGURINE_STYLE_INSTRUCTIONS['Plástico Vinilo'].poses;
};

export const getTimeTravelPoses = (eraName) => {
    const era = TIME_TRAVEL_INSTRUCTIONS[eraName];
    if (era && era.poses) {
        return era.poses;
    }
    return TIME_TRAVEL_INSTRUCTIONS['1980s Mall Portrait'].poses;
};

// ═══════════════════════════════════════════════════════════════════════════════
// GENERADOR DE INSTRUCCIONES PRINCIPAL
// ═══════════════════════════════════════════════════════════════════════════════
export const getRealInstruction = (template, prompt, options) => {
    const { styleParams, customParams, animeCustoms, travelOptions, selectedLandmarks } = options;
    
    // ═══════════════════════════════════════════════════════════════════════
    // CONTEXTO BASE DEL SISTEMA
    // ═══════════════════════════════════════════════════════════════════════
    const systemContext = `
**GEMINI 3 PRO - IMAGE GENERATION SYSTEM**

**IDENTITY PRESERVATION (CRITICAL):**
- PRESERVE exact facial structure from input image
- Maintain eye shape, nose, lips, facial proportions
- Keep original skin tone and characteristics
- Hair color/style should match unless style requires change

**QUALITY STANDARDS:**
- Professional quality output
- Sharp focus on subject
- No artifacts or distortions

**ANTI-CROP RULES:**
- NEVER crop the head - leave headroom
- For full body: show complete figure including feet
- Frame with margins on all sides

**POSE RULES:**
- Natural, believable poses only
- Proper weight distribution
- No floating limbs or awkward positions
`.trim();

    let taskInstruction = '';
    
    // ═══════════════════════════════════════════════════════════════════════
    // ANIME WORLD
    // ═══════════════════════════════════════════════════════════════════════
    if (template === 'anime') {
        const animeStyle = styleParams.animeStyle || 'Studio Ghibli';
        const styleInstructions = ANIME_STYLE_INSTRUCTIONS[animeStyle];
        
        if (!styleInstructions) {
            taskInstruction = `Transform to anime style: ${animeStyle}. ${prompt.base}`;
        } else {
            // Manejo especial de One Piece para carteles y barcos
            let sceneDescription = prompt.base;
            
            if (animeStyle === 'One Piece Style') {
                if (prompt.id === 'Cartel de Se Busca' && animeCustoms) {
                    sceneDescription = `
**ONE PIECE WANTED POSTER**
- Layout: Vertical aged parchment with torn edges
- Top text: "WANTED" in bold Western font
- Center: Rough INK SKETCH portrait (NOT realistic photo)
- Portrait style: Oda's manga art - bold lines, dramatic expression
- Below portrait: "DEAD OR ALIVE"
- Name: "${animeCustoms.pirateName?.toUpperCase() || 'PIRATE'}"
- Bounty: "฿ ${animeCustoms.bounty || '???'}"
- Background: Wooden wall behind poster
`;
                } else if (prompt.id === 'Capitán en Barco' && animeCustoms) {
                    sceneDescription = `
**PIRATE CAPTAIN SCENE**
- Dramatic angle showing captain in foreground
- Captain wearing grand coat draped on shoulders
- Confident expression, wind in hair
- Ship visible in background sailing on blue sea
- Ship figurehead: "${animeCustoms.shipDesc || 'unique design'}"
- One Piece adventure atmosphere
`;
                }
            }
            
            taskInstruction = `
**TASK: ANIME TRANSFORMATION**
**SELECTED STYLE: ${animeStyle}**

${styleInstructions.artDirection}

**SCENE:**
${sceneDescription}

**NEGATIVE INSTRUCTIONS:**
${styleInstructions.negativePrompt}
`.trim();
        }
    }
    
    // ═══════════════════════════════════════════════════════════════════════
    // STUDIO PRO
    // ═══════════════════════════════════════════════════════════════════════
    else if (template === 'professionalPhotoshoot') {
        const studioStyle = styleParams.style || 'Estudio Minimalista';
        const styleInstructions = STUDIO_STYLE_INSTRUCTIONS[studioStyle] || STUDIO_STYLE_INSTRUCTIONS['Estudio Minimalista'];
        
        const framing = customParams.framing !== 'Default' ? customParams.framing : '';
        const expression = customParams.expression !== 'Default' ? customParams.expression : '';
        
        // Procesar opción de vestuario
        let wardrobeInstruction = styleInstructions.wardrobe;
        if (customParams.wardrobe && customParams.wardrobe !== 'Default (Casual)') {
            const wardrobeMap = {
                'Preservar Original': 'PRESERVE the exact original clothing from the input image - do not change outfit',
                'Formal / Traje': 'CHANGE to formal attire: tailored suit, dress shirt, tie optional, professional business wear',
                'Smart Casual': 'CHANGE to smart casual: blazer over t-shirt or sweater, chinos or dark jeans, clean sneakers or loafers',
                'Streetwear': 'CHANGE to streetwear: hoodie, graphic tee, joggers or cargo pants, sneakers, urban style',
                'Deportivo': 'CHANGE to athletic wear: performance shirt, athletic shorts or leggings, training shoes',
                'Elegante / Gala': 'CHANGE to elegant evening wear: formal gown or tuxedo, sophisticated accessories'
            };
            wardrobeInstruction = wardrobeMap[customParams.wardrobe] || wardrobeInstruction;
        }
        
        // Procesar opción de fondo
        let backdropInstruction = styleInstructions.backdrop;
        if (customParams.backdrop && customParams.backdrop !== 'Default') {
            const backdropMap = {
                'Gris Neutro': 'SEAMLESS INFINITE neutral gray background (#808080), no visible floor line, gradient to infinity',
                'Blanco Puro': 'SEAMLESS INFINITE pure white background, high-key lighting, no shadows on backdrop',
                'Negro': 'SEAMLESS INFINITE pure black background, low-key dramatic, subject isolated',
                'Degradado': 'Smooth gradient backdrop transitioning from light to dark, professional studio look',
                'Textura Sutil': 'Subtle textured backdrop with fine canvas or paper texture, adds depth without distraction'
            };
            backdropInstruction = backdropMap[customParams.backdrop] || backdropInstruction;
        }
        
        // Negative prompt para evitar luces visibles
        const negativePrompt = styleInstructions.negativePrompt || 'NO visible studio lights, NO softboxes, NO equipment in frame';
        
        taskInstruction = `
**TASK: PROFESSIONAL PHOTOGRAPHY**
**STYLE: ${studioStyle}**

**LIGHTING:** ${styleInstructions.lighting}
**BACKDROP:** ${backdropInstruction}
**WARDROBE:** ${wardrobeInstruction}
**MOOD:** ${styleInstructions.mood}
**COLOR GRADE:** ${styleInstructions.colorGrade}

**SCENE:** ${prompt.base}
${framing ? `**FRAMING:** ${framing}` : ''}
${expression ? `**EXPRESSION:** ${expression}` : ''}

**CRITICAL RULES:**
- ${negativePrompt}
- NO visible floor/backdrop seam
- NO wrinkled or dirty backdrop
- Professional invisible lighting that wraps around subject
- Background should fade to infinity seamlessly
`.trim();
    }
    
    // ═══════════════════════════════════════════════════════════════════════
    // AVATAR 3D
    // ═══════════════════════════════════════════════════════════════════════
    else if (template === 'avatarStudio') {
        const avatarStyle = styleParams.avatarStyle || 'CGI Hiperrealista';
        const styleInstructions = AVATAR_STYLE_INSTRUCTIONS[avatarStyle] || AVATAR_STYLE_INSTRUCTIONS['CGI Hiperrealista'];
        
        taskInstruction = `
**TASK: 3D AVATAR/ART CREATION**
**STYLE: ${avatarStyle}**

**RENDER STYLE:** ${styleInstructions.render}
**MATERIAL/SURFACE:** ${styleInstructions.material}
**LIGHTING:** ${styleInstructions.lighting}
**DETAIL LEVEL:** ${styleInstructions.detail}

**SCENE:** ${prompt.base}

**NOTE:** Preserve subject's facial identity while applying the artistic style.
`.trim();
    }
    
    // ═══════════════════════════════════════════════════════════════════════
    // TIME TRAVEL
    // ═══════════════════════════════════════════════════════════════════════
    else if (template === 'timeTravel') {
        const era = styleParams.era || '1980s Mall Portrait';
        const eraInstructions = TIME_TRAVEL_INSTRUCTIONS[era] || TIME_TRAVEL_INSTRUCTIONS['1980s Mall Portrait'];
        
        taskInstruction = `
**TASK: HISTORICAL TIME TRAVEL**
**ERA: ${era}**

**PERIOD:** ${eraInstructions.era}
**CLOTHING:** ${eraInstructions.clothing}
**SETTING:** ${eraInstructions.setting}
**PHOTO STYLE:** ${eraInstructions.photoStyle}
**TREATMENT:** ${eraInstructions.treatment}

**SCENE:** ${prompt.base}

**CRITICAL:** Subject MUST wear period-accurate clothing. NO modern items.
`.trim();
    }
    
    // ═══════════════════════════════════════════════════════════════════════
    // FIGURINE
    // ═══════════════════════════════════════════════════════════════════════
    else if (template === 'figurine') {
        const figStyle = styleParams.material || 'Plástico Vinilo';
        const styleInstructions = FIGURINE_STYLE_INSTRUCTIONS[figStyle] || FIGURINE_STYLE_INSTRUCTIONS['Plástico Vinilo'];
        
        taskInstruction = `
**TASK: COLLECTIBLE FIGURINE**
**STYLE: ${figStyle}**

**MATERIAL:** ${styleInstructions.material}
**DESIGN STYLE:** ${styleInstructions.style}
**SCALE:** ${styleInstructions.scale}
**FINISH:** ${styleInstructions.finish}

**SCENE:** ${prompt.base}

**PHOTOGRAPHY:** Macro/product photography, shallow depth of field, professional lighting.
Subject transformed into miniature collectible figure.
`.trim();
    }
    
    // ═══════════════════════════════════════════════════════════════════════
    // TRAVEL PHOTOSHOOT
    // ═══════════════════════════════════════════════════════════════════════
    else if (template === 'travelPhotoshoot') {
        const destination = styleParams.destination || 'París, Francia';
        const destData = DESTINATIONS_DATA[destination] || {};
        
        const landmarks = selectedLandmarks?.length > 0 
            ? selectedLandmarks.join(', ')
            : destData.landmarks?.[0] || 'iconic landmark';
        
        let wardrobeInstruction = 'PRESERVE original clothing from input image';
        if (travelOptions?.useLocalWardrobe && destData.localWardrobe) {
            wardrobeInstruction = `CHANGE to local style: ${destData.localWardrobe}`;
        }
        
        taskInstruction = `
**TASK: TRAVEL PHOTOGRAPHY**
**DESTINATION: ${destination}**

**LANDMARK/LOCATION:** ${landmarks}
**WARDROBE:** ${wardrobeInstruction}
**TIME OF DAY:** ${customParams.timeOfDay !== 'Default' ? customParams.timeOfDay : 'Golden hour for best lighting'}

**REQUIREMENTS:**
- Landmark must be clearly visible and recognizable
- Subject naturally integrated into scene
- Professional travel photography quality
- Realistic lighting matching environment
`.trim();
    }
    
    // ═══════════════════════════════════════════════════════════════════════
    // CUSTOM GENERATION
    // ═══════════════════════════════════════════════════════════════════════
    else if (template === 'customGen') {
        taskInstruction = `
**TASK: CUSTOM GENERATION**

**USER'S VISION:**
${prompt.base}

**STYLE:** ${customParams.style !== 'Default' ? customParams.style : 'As described'}
**MOOD:** ${customParams.mood !== 'Default' ? customParams.mood : 'As described'}

Follow the user's creative direction precisely while maintaining subject identity.
`.trim();
    }
    
    // Default fallback
    else {
        taskInstruction = `**SCENE:** ${prompt.base}`;
    }
    
    return `${systemContext}\n\n${taskInstruction}\n\n**INPUT IMAGE:** Use for facial identity reference. Transform according to instructions above.`;
};
