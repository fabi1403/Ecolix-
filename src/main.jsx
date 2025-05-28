import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Crearemos este archivo después para estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);