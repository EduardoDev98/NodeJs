import { StrictMode } from 'react'
import { GlobalStyles } from './styles/GlobalStyles.js';
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <Home />
  </StrictMode>,
)
