import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { ImageUploader } from './components/ImageUploader';
import { TemplateSelector } from './components/TemplateSelector';
import { ControlPanel } from './components/ControlPanel';
import { ResultGrid } from './components/ResultGrid';
import { HistoryPanel } from './components/HistoryPanel';
import { useGemini } from './hooks/useGemini';
import { useHistory } from './hooks/useHistory';
import { TEMPLATES } from './services/prompts';

function App() {
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_GEMINI_API_KEY || '');
  const [showSettings, setShowSettings] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('professionalPhotoshoot');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const [styleParams, setStyleParams] = useState({
    style: 'Retrato Ejecutivo',
    destination: 'París, Francia',
    avatarStyle: 'CGI Hiperrealista',
    animeStyle: 'Studio Ghibli',
    material: 'Plástico Vinilo',
    era: '1980s Mall Portrait'
  });

  useEffect(() => {
    const template = TEMPLATES[selectedTemplate];
    if (!template) return;

    const newStyleParams = { ...styleParams };

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
    setCustomParams({});
  }, [selectedTemplate]);

  const [customParams, setCustomParams] = useState({
    lighting: 'Default', framing: 'Default', film: 'Default',
    wardrobe: 'Default', pose: 'Default', expression: 'Default',
    time: 'Default', color: 'Default'
  });

  const [animeCustoms, setAnimeCustoms] = useState({
    // Cartel de Se Busca
    pirateName: '',
    bounty: '',
    epithet: '',
    // Barco Pirata
    shipName: '',
    figurehead: 'leon',
    customFigurehead: '',
    shipColor: 'marron',
    sailColor: 'blanco',
    // Jolly Roger
    jollyRoger: '',
    flagStyle: 'clasico'
  });

  const [travelOptions, setTravelOptions] = useState({ useLocalWardrobe: false });
  const [selectedLandmarks, setSelectedLandmarks] = useState([]);
  const [freePrompt, setFreePrompt] = useState('');

  const {
    isGenerating, isEnhancing, error, generatedImages,
    generateSet, enhancePrompt, getVisualMuse
  } = useGemini(apiKey);

  const { addToHistory } = useHistory();

  useEffect(() => {
    if (generatedImages.length > 0) {
      generatedImages.forEach(img => {
        if (img.timestamp && Date.now() - img.timestamp < 5000) {
          addToHistory(img);
        }
      });
    }
  }, [generatedImages, addToHistory]);

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
      setFreePrompt(variations[0]);
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
    <>
      <Layout
        apiKey={apiKey}
        setApiKey={setApiKey}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        onHistoryClick={() => setIsHistoryOpen(true)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Panel */}
          <div className="lg:col-span-4 space-y-6 lg:max-h-[calc(100vh-10rem)] lg:overflow-y-auto lg:pr-2 custom-scrollbar">
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

          {/* Right Panel */}
          <div className="lg:col-span-8">
            <ResultGrid
              generatedImages={generatedImages}
              onDownload={handleDownload}
              apiKey={apiKey}
            />
          </div>
        </div>
      </Layout>

      <HistoryPanel
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
      />
    </>
  );
}

export default App;
