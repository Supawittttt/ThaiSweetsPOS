import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { PageRouter } from './router/PageRouter';
import { usePosStore } from './store/usePosStore';
import './styles.css';

function App() {
  const screen = usePosStore((state) => state.screen);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [screen]);

  return <PageRouter screen={screen} />;
}

createRoot(document.getElementById('root')).render(<App />);
