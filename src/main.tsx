// This file is the client entry point
import { createRoot } from 'react-dom/client';
import App from './App';
import './tailwind.css';

// This code only runs in the browser
function mountApp() {
  const container = document.getElementById('root');
  if (!container) return;
  
  const root = createRoot(container);
  root.render(<App />);
}

// Mount the app when running in the browser
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountApp);
  } else {
    mountApp();
  }
}

export default App;
