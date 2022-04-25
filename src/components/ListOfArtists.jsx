import React from "react";
import { NavLink } from "react-router-dom";
import { useGetListOfArtists } from "../hooks/useGetListOfArtists";

export const ListOfArtists = () => {
  const artists = useGetListOfArtists();

  return (
    <div>
      {artists.map((artist, index) => (
        <div key={index}>
          <NavLink to={`/artist/${artist.id}`}>
            <div>
              <img src={artist.image} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
