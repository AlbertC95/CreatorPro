/**
 * API Routes - Rutas principales de la API
 */

const express = require('express');
const router = express.Router();
const geminiController = require('../controllers/gemini.controller');

// Health check
router.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Gemini endpoints
router.post('/generate', (req, res) => geminiController.generateImage(req, res));
router.post('/enhance', (req, res) => geminiController.enhancePrompt(req, res));
router.post('/analyze', (req, res) => geminiController.analyzeImage(req, res));

module.exports = router;
