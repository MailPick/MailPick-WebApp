import React from 'react'
// import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import GlobalStyles from './styles/GlobalStyles.tsx'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    {/* <GlobalStyles/> */}
    <App />
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
