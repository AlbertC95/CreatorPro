/**
 * Rate Limit Middleware - Limitar requests por IP
 */

const rateLimit = require('express-rate-limit');

// Configuración de rate limiting
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutos
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // 100 requests
    message: {
        success: false,
        error: 'Demasiadas solicitudes, por favor intenta más tarde.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = limiter;
