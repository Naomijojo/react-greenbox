import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@/assets/css/index.css'

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// import { createRoot } from 'react-dom/client'

// createRoot(document.getElementById('root')).render(
//   "Test Render"
// )