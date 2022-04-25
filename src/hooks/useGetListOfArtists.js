import { useState, useEffect } from 'react';
import { getListOfArtists } from '../services/getListOfArtists';

export const useGetListOfArtists = () => {

  const [artists, setArtist] = useState([]);

  const getData = async () => {
    const data = await getListOfArtists();
    setArtist(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return artists 
}
