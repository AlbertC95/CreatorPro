/**
 * Error Handler Middleware - Manejo centralizado de errores
 */

const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    // Error de CORS
    if (err.message === 'Not allowed by CORS') {
        return res.status(403).json({
            success: false,
            error: 'CORS no permitido'
        });
    }

    // Error de validación
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            error: err.message
        });
    }

    // Error genérico
    res.status(err.status || 500).json({
        success: false,
        error: err.message || 'Error interno del servidor'
    });
};

module.exports = errorHandler;
