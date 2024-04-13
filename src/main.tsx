import React from 'react'
// import ReactDOM from 'react-dom/client'
import Main from './pages/Main/Main.tsx'
import './index.css'
import GlobalStyles from './styles/GlobalStyles.tsx'
import { createRoot } from 'react-dom/client'
import GlobalSVGProvider from './assets/SVGIconProvider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SendMailBox from './components/Organism/SendMailBox/SendMailBox.tsx'
import Login from './pages/Login/Login.tsx'
const container = document.getElementById('root')
const root = createRoot(container!)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/main',
    element: <Main/>,
  },
  {
    path: '/mailbox',
    element: <SendMailBox/>
  }
])
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles/>
      <RouterProvider router={router}/>
      <GlobalSVGProvider/>
    </QueryClientProvider>
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
