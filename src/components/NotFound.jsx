import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <NavLink to={"/"} className="return return-notFound">
        Regresar
      </NavLink>
      <h3 className="listArtist__title">Lista de Artistas</h3>
      <h1 className='title-notFound'>Page Not Found</h1>
    </>
  )
}

export default NotFound