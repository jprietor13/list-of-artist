import { BASE_URL } from "./config"

export const getListOfArtists = async () => {
  try {
    const response = await fetch(`${BASE_URL}artists`);
    const data = await response.json();
    return data
  } catch (err) {
    console.log(err)
  }
}
