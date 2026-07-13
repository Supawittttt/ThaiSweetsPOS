import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { PageRouter } from './router/PageRouter';
import { readScreenFromPath, usePosStore } from './store/usePosStore';
import './styles/base.css';
import './features/AdminBackend/styles/adminBackend.css';
import './features/StoreFrontend/styles/storeFrontend.css';

function App() {
  const screen = usePosStore((state) => state.screen);

  useEffect(() => {
    const syncScreenFromUrl = () => {
      const nextScreen = readScreenFromPath() ?? 'login';
      usePosStore.getState().setScreen(nextScreen, { syncUrl: false });
    };

    window.addEventListener('popstate', syncScreenFromUrl);
    return () => window.removeEventListener('popstate', syncScreenFromUrl);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [screen]);

  return <PageRouter screen={screen} />;
}

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
