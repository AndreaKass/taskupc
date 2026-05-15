import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TareasProvider } from "./context/TareasContext";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TareasProvider>
      <App />
    </TareasProvider>
  </BrowserRouter>
)
