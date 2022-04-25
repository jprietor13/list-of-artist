import React from 'react'
import { useGetListOfArtists } from '../hooks/useGetListOfArtists'

export const ListOfArtists = () => {

  const artists  = useGetListOfArtists();
  
  return (
    <div>
      {artists.map(artist => 
        <div>
          <img src={artist.image} alt={artist.name} />
          <p>{artist.name}</p>
        </div>
      )}
    </div>
  )
}
