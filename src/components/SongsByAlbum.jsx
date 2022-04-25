import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetAlbumsByArtist } from '../hooks/useGetAlbumsByArtist';
import { useGetSongsByAlbums } from '../hooks/useGetSongsByAlbums';

export const SongsByAlbum = () => {

  const { idArtist, idAlbum } = useParams();

  const { albums } = useGetAlbumsByArtist(idAlbum);
  const { songs } = useGetSongsByAlbums(idAlbum);

  const filterArtist = albums.filter(item => {
    return item.artist == idArtist
  })

  const getAlbum = filterArtist[0]?.albums.find(item => {
    return item.id == idAlbum
  })

  const songsByAlbum = songs.find(item => {
    return item.album == idAlbum
  })

  console.log(songsByAlbum)

  return (
    <>
      <div>
        <img src={getAlbum?.image} alt={getAlbum?.name} />
        <p>{getAlbum?.name}</p>
      </div>
      <div>
        <ul>
          {songsByAlbum?.songs?.map(item => 
            <li key={item.id}>{item.name}</li>
          )}
        </ul>
      </div>
    </>
  )
}
