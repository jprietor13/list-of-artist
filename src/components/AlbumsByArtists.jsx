import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useGetAlbumsByArtist } from "../hooks/useGetAlbumsByArtist";
import { useGetListOfArtists } from "../hooks/useGetListOfArtists";

export const AlbumsByArtists = () => {
  const { idArtist } = useParams();
  const { albums } = useGetAlbumsByArtist(idArtist);
  const artists = useGetListOfArtists();

  const artist = artists?.find((item) => {
    return item.id == idArtist;
  });

  const album = albums?.find((item) => {
    return item.artist == idArtist;
  });

  return (
    <>
      <NavLink to={"/"} className="return">
        Regresar
      </NavLink>
      <div>
        <img src={artist?.image} alt={artist?.name} />
        <h2>{artist?.name}</h2>
      </div>
      <div>
        <h2>Albumes</h2>
        {album?.albums.map((item) => (
          <NavLink to={`album/${item.id}`} key={item.id}>
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>
                {item.name}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};
