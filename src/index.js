import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // ⚡ Mudança para HashRouter ⚡
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter> {/* Usando HashRouter aqui também */}
      <App />
    </HashRouter>
  </React.StrictMode>
);