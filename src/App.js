import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    // CLEAR THE END OF THE URL SO A USER CNAT SEE THE accesstoken
    window.location.hash = "";
    // const token = hash ? hash.access_token : null;
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        // REFACTORING THE setToken
        type: 'SET_TOKEN',
        token: _token,
      })
      // setToken(_token);
      // GIVNG accesstoken TO THE SPOTIFY-WEB-API (heres key to safely talk bsck snf foruth between react and spotifyapi)
      spotify.setAccessToken(_token);
      // GET USERS ACC
      spotify.getMe().then((user) => {
        dispatch({
          // SENDS TO REDUCER
          type: 'SET_USER',
          user: user
        });
        // .catch(err => console.log(err))
      });

      spotify.getPlaylist("1DlOXc0gknwQXlsh12ToNE").then((res) =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: res
        })
        // .catch(err => console.log("We got to the catch in getPlaylists", err))
      );

      // spotify.getSection('0JQ5DAob0KOew1FBAMSmBz').then(res => {
      //   dispatch({
      //     type: 'SET_USER',
      //     user: user
      //   }).catch(err => console.log(err))
      // });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

    }

    console.log("I HAVE A TOKEN", token);
  }, []);

  console.log("person", user);
  console.log(":a", token);

  return (
    // BEM (Block-Element-Modifier)convention
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
