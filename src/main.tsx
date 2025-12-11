import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from "./ErrorBoundary"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<h1>Something went wrong...</h1>}>
        <App />
    </ErrorBoundary>
  </StrictMode>,
)
