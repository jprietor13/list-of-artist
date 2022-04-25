import { BASE_URL } from "./config"

export const getAlbumsByArtist = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}artists/${id}/albums`)
    const data = await response.json()
    return data 
  } catch(err) {
    console.log(err)
  }
}
