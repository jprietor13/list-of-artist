import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetAlbumsByArtist } from '../hooks/useGetAlbumsByArtist'
import { useGetListOfArtists } from '../hooks/useGetListOfArtists'

export const AlbumsByArtists = () => {

  const { id } = useParams()
  const { albums } = useGetAlbumsByArtist(id);
  const artists  = useGetListOfArtists();

  const artist = artists.find(item => {
    return item.id == id
  })

  const album = albums.find(item => {
    return item.artist == id
  })

  return (
    <>
    <div>
      <img src={artist?.image} alt={artist?.name} />
      <h2>{artist?.name}</h2>  
    </div>
    <div>
      {album?.albums.map(item => 
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      )}
    </div>
    </>
  )
}
