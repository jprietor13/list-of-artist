import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetAlbumsByArtist } from "../hooks/useGetAlbumsByArtist";
import { useGetSongsByAlbums } from "../hooks/useGetSongsByAlbums";
import { convertMiliSeconds, filterByReference } from "../utils/utils";
import { MediaPlayer } from "./MediaPlayer";

export const SongsByAlbum = () => {
  const { idArtist, idAlbum } = useParams();
  const { albums } = useGetAlbumsByArtist(idAlbum);
  const { songs } = useGetSongsByAlbums(idAlbum);
  const [song, setSong] = useState({});
  const [suggestion, setSuggestion] = useState([]);
  const [showMediaPlay, setShowMediaPlay] = useState(false);
  const [allDuration, setAllDuration] = useState(0);
  const navigate = useNavigate();

  const filterArtist = albums.filter((item) => {
    return item.artist == idArtist;
  });

  const getAlbum = filterArtist[0]?.albums.find((item) => {
    return item.id == idAlbum;
  });

  const songsByAlbum = songs?.find((item) => {
    return item.album == idAlbum;
  });

  const albumsOfArtist = filterArtist.map((item) => {
    return item.albums;
  });

  const suggestions = filterByReference(songs, albumsOfArtist);

  const getSongInfo = (id) => {
    setShowMediaPlay(true);
    const dataSong = songsByAlbum?.songs?.find((item) => {
      return item.id === id;
    });
    setSong(dataSong);
  };

  const infoSuggestionSelected = (arr) => {
    setShowMediaPlay(false);
    return arr.map((item) => {
      return setSuggestion(item);
    });
  };

  const handleReturn = () => {
    navigate(`/artist/${idArtist}`, { replace: false });
  };

  useEffect(() => {
    const duration = songsByAlbum?.songs?.map((item) => {
      return parseInt(item.duration_ms);
    });

    const sumDuration = (accumulator, curr) => accumulator + curr;
    setAllDuration(duration?.reduce(sumDuration));
  }, [songsByAlbum?.songs, suggestions]);

  return (
    <>
      <span onClick={handleReturn} className="return">
        Regresar
      </span>
      <h3 className="listArtist__title">Lista de Artistas</h3>
      <div className="album-info">
        <img
          src={getAlbum?.image}
          alt={getAlbum?.name}
          className="album-info__image"
        />
        <div className="album-info--description">
          <h3>{getAlbum?.name}</h3>
          <p>Album - {getAlbum?.name}</p>
          <p>
            {getAlbum?.total_tracks} Canciones -{" "}
            {allDuration && convertMiliSeconds(allDuration)}
          </p>
        </div>
      </div>
      <div>
        <div className="songsByAlbum--container">
          <div className="songByAlbum--list">
            <h4>Canciones</h4>
            {songsByAlbum?.songs?.map((item, index) => (
              <div
                key={item.id}
                onClick={() => getSongInfo(item.id)}
                className="songByAlbum--list--item"
              >
                <p className="songByAlbum--list--itemindex">{index + 1}</p>
                <p className="songByAlbum--list--itemname">{item.name}</p>
                <p className="songByAlbum--list--itemduration">
                  {convertMiliSeconds(item.duration_ms)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="songsByAlbum--container">
          <div className="songByAlbum--list">
            <h4>Sugerencias</h4>
            {suggestions?.map((item, index) => (
              <div key={index}>
                {item.map((subitem) => (
                  <div
                    key={subitem.id}
                    onClick={() => infoSuggestionSelected(item, subitem.id)}
                    className="songByAlbum--list--item"
                  >
                    <p className="songByAlbum--list--itemindex">{index + 1}</p>
                    <p className="songByAlbum--list--itemname">
                      {subitem.name}
                    </p>
                    <p className="songByAlbum--list--itemduration">
                      {convertMiliSeconds(subitem.duration_ms)}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {showMediaPlay ? (
          <MediaPlayer image={getAlbum?.image} {...song} />
        ) : (
          <MediaPlayer image={getAlbum?.image} {...suggestion} />
        )}
      </div>
    </>
  );
};
