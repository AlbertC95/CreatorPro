import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { ImageUploader } from './components/ImageUploader';
import { TemplateSelector } from './components/TemplateSelector';
import { ControlPanel } from './components/ControlPanel';
import { ResultGrid } from './components/ResultGrid';
import { useGemini } from './hooks/useGemini';
import { TEMPLATES } from './services/prompts';

function App() {
  // Estado Global
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_GEMINI_API_KEY || ''); // Load from .env
  const [showSettings, setShowSettings] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('professionalPhotoshoot');

  // Estados de Parámetros
  const [styleParams, setStyleParams] = useState({
    style: 'Estudio Minimalista',
    destination: 'París, Francia',
    avatarStyle: 'CGI Hiperrealista',
    animeStyle: 'Studio Ghibli',
    material: 'Plástico Vinilo',
    era: '1980s Mall'
  });

  // Sincronizar styleParams cuando cambia la plantilla
  useEffect(() => {
    const template = TEMPLATES[selectedTemplate];
    if (!template) return;

    const newStyleParams = { ...styleParams };

    // Resetear el valor correcto según la plantilla
    if (selectedTemplate === 'professionalPhotoshoot' && template.styles) {
      newStyleParams.style = template.styles[0];
    } else if (selectedTemplate === 'avatarStudio' && template.styles) {
      newStyleParams.avatarStyle = template.styles[0];
    } else if (selectedTemplate === 'anime' && template.styles) {
      newStyleParams.animeStyle = template.styles[0];
    } else if (selectedTemplate === 'figurine' && template.styles) {
      newStyleParams.material = template.styles[0];
    } else if (selectedTemplate === 'timeTravel' && template.styles) {
      newStyleParams.era = template.styles[0];
    } else if (selectedTemplate === 'travelPhotoshoot' && template.destinations) {
      newStyleParams.destination = template.destinations[0];
    }

    setStyleParams(newStyleParams);
  }, [selectedTemplate]);
  const [customParams, setCustomParams] = useState({
    lighting: 'Default', framing: 'Default', film: 'Default',
    wardrobe: 'Default', pose: 'Default', expression: 'Default',
    time: 'Default', color: 'Default'
  });
  const [animeCustoms, setAnimeCustoms] = useState({
    pirateName: 'CAPTAIN',
    bounty: '3,000,000,000',
    shipDesc: 'Dragon Head Figurehead'
  });
  const [travelOptions, setTravelOptions] = useState({ useLocalWardrobe: false });
  const [selectedLandmarks, setSelectedLandmarks] = useState([]);
  const [freePrompt, setFreePrompt] = useState('');

  // Hook de Lógica Gemini
  const {
    isGenerating, isEnhancing, error, generatedImages,
    generateSet, enhancePrompt, getVisualMuse
  } = useGemini(apiKey);

  // Handlers
  const handleGenerate = () => {
    generateSet(uploadedImage, selectedTemplate, { styleParams, customParams, animeCustoms, travelOptions }, freePrompt, selectedLandmarks);
  };

  const handleVisualMuse = async () => {
    if (!uploadedImage) return;
    const muse = await getVisualMuse(uploadedImage);
    if (muse) setFreePrompt(muse);
  };

  const handleEnhanceFreePrompt = async () => {
    if (!freePrompt) return;
    const variations = await enhancePrompt(freePrompt);
    if (variations && variations.length > 0) {
      setFreePrompt(variations[0] + " (+ variaciones ocultas...)");
      // Nota: En una impl real, pasaríamos las variaciones al hook, 
      // pero por ahora el hook maneja la lógica de "customGen" simple o compleja.
      // Para simplificar, dejamos que el hook use el freePrompt tal cual o lo mejoremos allí.
    }
  };

  const handleDownload = (image) => {
    const link = document.createElement('a');
    link.href = image.url;
    link.download = `creator-pro-${image.promptId}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout apiKey={apiKey} setApiKey={setApiKey} showSettings={showSettings} setShowSettings={setShowSettings}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT PANEL: CONTROLS */}
        <div className="lg:col-span-4 space-y-8 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4 pl-1 custom-scrollbar">
          <ImageUploader
            uploadedImage={uploadedImage}
            setUploadedImage={setUploadedImage}
            setError={(msg) => console.error(msg)}
          />

          <TemplateSelector
            selectedTemplate={selectedTemplate}
            setSelectedTemplate={setSelectedTemplate}
          />

          <ControlPanel
            selectedTemplate={selectedTemplate}
            styleParams={styleParams} setStyleParams={setStyleParams}
            customParams={customParams} setCustomParams={setCustomParams}
            animeCustoms={animeCustoms} setAnimeCustoms={setAnimeCustoms}
            travelOptions={travelOptions} setTravelOptions={setTravelOptions}
            selectedLandmarks={selectedLandmarks} setSelectedLandmarks={setSelectedLandmarks}
            freePrompt={freePrompt} setFreePrompt={setFreePrompt}
            handleVisualMuse={handleVisualMuse}
            handleEnhanceFreePrompt={handleEnhanceFreePrompt}
            isEnhancing={isEnhancing}
            handleGenerate={handleGenerate}
            isGenerating={isGenerating}
            uploadedImage={uploadedImage}
            error={error}
          />
        </div>

        {/* RIGHT PANEL: RESULTS */}
        <div className="lg:col-span-8">
          <ResultGrid
            generatedImages={generatedImages}
            onDownload={handleDownload}
            apiKey={apiKey}
          />
        </div>
      </div>
    </Layout>
  );
}

export default App;
