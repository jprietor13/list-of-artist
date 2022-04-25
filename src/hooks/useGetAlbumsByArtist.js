import { useEffect, useState } from 'react'
import { getAlbumsByArtist } from '../services/getAlbumsByArtist'

export const useGetAlbumsByArtist = (id) => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getAlbumsByArtist(id)
    .then((data) => {
      setAlbums(data)
    })
  }, [id])

  return { albums }
}
