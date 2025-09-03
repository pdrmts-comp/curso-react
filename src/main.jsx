import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Lista from './routes/lista.jsx';
import Cadastro from './routes/cadastro.jsx';

const root = document.getElementById("root");

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/lista' element={<Lista />}></Route>
      <Route path='/cadastro' element={<Cadastro/>}></Route>
    </Routes>
  </BrowserRouter>,
)
