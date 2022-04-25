import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { ListOfArtists } from '../components/ListOfArtists'
import { AlbumsByArtists } from '../components/AlbumsByArtists'

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <ListOfArtists /> }/>
          <Route exact path="artist/:id" element={ <AlbumsByArtists /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}
