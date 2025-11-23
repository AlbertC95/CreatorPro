# Creator Pro Backend API

Backend Node.js + Express para proteger la API key de Gemini y actuar como proxy.

## 🚀 Características

- ✅ Proxy seguro para Gemini API
- ✅ API key protegida (no expuesta en frontend)
- ✅ Rate limiting (100 requests/15 min)
- ✅ CORS configurado
- ✅ Manejo de errores centralizado
- ✅ Logs de requests

## 📦 Tecnologías

- Node.js
- Express.js
- Axios
- CORS
- Express Rate Limit
- Dotenv

## 🔧 Instalación

```bash
cd backend
npm install
```

## ⚙️ Configuración

Copia `.env.example` a `.env` y configura:

```env
PORT=3000
NODE_ENV=development
GEMINI_API_KEY=tu_api_key_aqui
FRONTEND_URL=http://localhost:5173
```

## 🏃 Ejecución

**Desarrollo:**
```bash
npm run dev
```

**Producción:**
```bash
npm start
```

## 📡 Endpoints

### Health Check
```
GET /api/health
```

### Generar Imagen
```
POST /api/generate
Body: { payload: {...} }
Response: { success: true, imageUrl: "data:image/png;base64,..." }
```

### Mejorar Prompt
```
POST /api/enhance
Body: { prompt: "texto original" }
Response: { success: true, variations: ["var1", "var2", "var3"] }
```

### Analizar Imagen
```
POST /api/analyze
Body: { imageData: "base64..." }
Response: { success: true, analysis: "descripción..." }
```

## 📁 Estructura

```
backend/
├── src/
│   ├── controllers/
│   │   └── gemini.controller.js
│   ├── middleware/
│   │   ├── cors.js
│   │   ├── rateLimit.js
│   │   └── errorHandler.js
│   ├── routes/
│   │   └── api.js
│   ├── services/
│   │   └── gemini.service.js
│   └── server.js
├── .env
├── .env.example
├── .gitignore
└── package.json
```

## 🚀 Deployment

### Render.com (Gratis)

1. Crear cuenta en Render.com
2. Conectar repositorio GitHub
3. Configurar:
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`
   - Variables de entorno: `GEMINI_API_KEY`
4. Deploy

### Railway.dev (Gratis)

1. Crear cuenta en Railway.dev
2. Conectar repositorio
3. Railway detecta Node.js automáticamente
4. Configurar variables de entorno
5. Deploy

## 📊 Rate Limiting

- **Window:** 15 minutos
- **Max Requests:** 100 por IP
- **Respuesta:** 429 Too Many Requests

## 🔒 Seguridad

- API key nunca expuesta al frontend
- CORS configurado para solo permitir frontend
- Rate limiting por IP
- Validación de requests
- Logs de todas las peticiones

## 📝 Licencia

ISC
