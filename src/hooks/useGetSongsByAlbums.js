import { useState, useEffect } from "react"
import { getSongsByAlbum } from "../services/getSongsByAlbum"

export const useGetSongsByAlbums = (id) => {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongsByAlbum(id)
    .then(data => {
      setSongs(data)
    })
  }, [id])

  return { songs }
}
