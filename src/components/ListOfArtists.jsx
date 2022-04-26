import React from "react";
import { NavLink } from "react-router-dom";
import { useGetListOfArtists } from "../hooks/useGetListOfArtists";

export const ListOfArtists = () => {
  const artists = useGetListOfArtists();

  return (
    <div className="listArtist__container">
      <h3 className="listArtist__title">Lista de Artistas</h3>
      {artists.map((artist, index) => (
        <div key={index} className="albumsByArtist__album--list">
          <NavLink to={`/artist/${artist.id}`}>
            <div className="listArtist__info">
              <img src={artist.image} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
