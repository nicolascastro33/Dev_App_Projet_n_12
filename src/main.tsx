import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.tsx'
import Header from './components/Header/index.tsx'
import './index.css'
import VerticalNav from './components/VerticalNav/index.tsx'
import { StoreProvider } from './provider/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <Header />
      <Home />
      <VerticalNav />
    </StoreProvider>
  </React.StrictMode>
)
