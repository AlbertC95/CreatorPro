/**
 * Server.js - Servidor principal de Creator Pro API
 * Backend para proteger API key de Gemini
 */

require('dotenv').config();
const express = require('express');
const corsMiddleware = require('./middleware/cors');
const rateLimiter = require('./middleware/rateLimit');
const errorHandler = require('./middleware/errorHandler');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(corsMiddleware);
app.use(express.json({ limit: '50mb' })); // Para imágenes base64
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Rate limiting
app.use('/api', rateLimiter);

// Logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Routes
app.use('/api', apiRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        name: 'Creator Pro API',
        version: '1.0.0',
        status: 'running',
        endpoints: {
            health: 'GET /api/health',
            generate: 'POST /api/generate',
            enhance: 'POST /api/enhance',
            analyze: 'POST /api/analyze'
        }
    });
});

// Error handler (debe ser el último middleware)
app.use(errorHandler);

// Start server only if run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`\n🚀 Creator Pro API running on port ${PORT}`);
        console.log(`📍 Environment: ${process.env.NODE_ENV}`);
        console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL}`);
        console.log(`✅ Server ready!\n`);
    });
}

module.exports = app;
