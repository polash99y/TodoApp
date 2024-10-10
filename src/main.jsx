import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'font-awesome/css/font-awesome.css'
import App from './App.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
