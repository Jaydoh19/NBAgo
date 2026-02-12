import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GamesProvider } from './components/GamesContext'
import { FavoriteTeamProvider } from './components/FavoriteTeamContext'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GamesProvider>
        <FavoriteTeamProvider>
          <App />
        </FavoriteTeamProvider>
      </GamesProvider>
    </BrowserRouter>
  </React.StrictMode>
)
