import React, { useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { toBase64 } from '../services/gemini';

export const ImageUploader = ({ uploadedImage, setUploadedImage, setError }) => {
    const fileInputRef = useRef(null);

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const base64 = await toBase64(file);
                setUploadedImage(base64);
                setError(null);
            } catch (err) {
                setError("Error al subir la imagen.");
            }
        }
    };

    return (
        <section>
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-xs text-gray-400 border border-gray-700">1</span>
                Sujeto
            </h3>
            <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => fileInputRef.current?.click()}
                className={`relative group w-full aspect-[4/3] rounded-2xl border-2 border-dashed transition-all cursor-pointer overflow-hidden flex flex-col items-center justify-center ${uploadedImage ? 'border-yellow-500/50 bg-gray-900' : 'border-gray-700 hover:border-yellow-500/50 hover:bg-gray-900/80 bg-gray-900/40'}`}
            >
                {uploadedImage ? (
                    <>
                        <img src={uploadedImage} alt="Source" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-white flex items-center gap-2 border border-white/10">
                                <Upload size={14} /> Cambiar Foto
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center text-gray-500 group-hover:text-gray-300 transition-colors p-6">
                        <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-700 group-hover:border-yellow-500/30">
                            <ImageIcon className="w-8 h-8 text-gray-600 group-hover:text-yellow-500 transition-colors" />
                        </div>
                        <p className="font-medium text-sm">Sube una foto clara</p>
                        <p className="text-xs mt-1 text-gray-600">JPG o PNG. Rostro visible.</p>
                    </div>
                )}
            </motion.div>
            <input type="file" ref={fileInputRef} onChange={handleUpload} className="hidden" accept="image/*" />
        </section>
    );
};
