import { BASE_URL } from "./config"

export const getSongsByAlbum = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}albums/${id}/songs`)
    const data = await response.json()
    return data
  } catch(err) {
    console.log(err)
  }
}
