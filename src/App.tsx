import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MainPage from 'pages/MainPage'
import FavoritesPage from 'pages/FavoritesPage'
import Navigation from 'components/Navigation'

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
      </Routes>
    </>
  )
}

export default App
