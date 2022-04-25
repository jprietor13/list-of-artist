import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetAlbumsByArtist } from '../hooks/useGetAlbumsByArtist';
import { useGetSongsByAlbums } from '../hooks/useGetSongsByAlbums';
import { convertMiliSeconds, filterByReference } from '../utils/utils';

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

  const albumsOfArtist = filterArtist.map(item => {
    return item.albums
  })

  const suggestions = filterByReference(songs, albumsOfArtist);

  return (
    <>
      <div>
        <img src={getAlbum?.image} alt={getAlbum?.name} />
        <p>{getAlbum?.name}</p>
      </div>
      <div>
        <h1>Canciones</h1>
        <ul>
          {songsByAlbum?.songs?.map(item => 
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{ convertMiliSeconds(item.duration_ms) }</p>
            </li>
          )}
        </ul>
        <h1>Sugerencias</h1>
        <ul>
          {suggestions.map((item, index) => 
            <li key={index}>
              {item.map(subitem =>
                <div key={subitem.id}>
                  <p>{subitem.name}</p>
                  <p>{convertMiliSeconds(subitem.duration_ms)}</p>
                </div> 
              )}
            </li>  
          )}
        </ul>
      </div>
    </>
  )
}
