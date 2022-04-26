import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useGetAlbumsByArtist } from "../hooks/useGetAlbumsByArtist";
import { useGetListOfArtists } from "../hooks/useGetListOfArtists";
import star from "../assets/images/star.png";
import arrowRight from '../assets/images/arrow_right.png'

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
      <h3 className="listArtist__title">Lista de Artistas</h3>
      <div className="albumsByArtist__artist">
        <img src={artist?.image} alt={artist?.name} />
        <span className="albumsByArtist__artist--info">
          <h3>{artist?.name}</h3>
          <img
            src={star}
            alt="qualification"
            className="albumsByArtist__artist--qualification"
          />
          <span className="albumsByArtist__artist--popularity">
            {artist?.popularity}
          </span>
        </span>
      </div>
      <div className="albumsByArtist__album">
        <div className="albumsByArtist__album--info">
          <h4 className="albumes-title">Albumes</h4>
          {album?.albums.map((item) => (
            <NavLink to={`album/${item.id}`} key={item.id}>
              <div key={item.id} className="albumsByArtist__album--list">
                <img src={item.image} alt={item.name} />
                <div className="albumsByArtist__album--tracks">
                  <p>{item.name}</p>
                  <p>Canciones: {item.total_tracks}</p>
                </div>
                <img src={arrowRight} alt="arrow-right" className="albumsByArtist__album--arrow-right"/>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
