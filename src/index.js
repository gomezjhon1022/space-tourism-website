import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import { SpaceWebsiteProvider } from './components/SpaceWebsiteContext';
import './styles/main.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpaceWebsiteProvider>
      <App />
    </SpaceWebsiteProvider>
  </React.StrictMode>
);

