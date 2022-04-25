import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { ListOfArtists } from '../components/ListOfArtists'

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <ListOfArtists /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
