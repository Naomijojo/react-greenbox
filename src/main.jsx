import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@/assets/css/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// import { createRoot } from 'react-dom/client'

// createRoot(document.getElementById('root')).render(
//   "Test Render"
// )