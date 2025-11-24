console.log('Loading API entry point...');
import app from '../backend/src/server.js';

// Vercel Serverless handler
export default function handler(req, res) {
    return app(req, res);
}

// Disable Vercel's default body parser to allow large payloads
export const config = {
    api: {
        bodyParser: false,
    },
};
