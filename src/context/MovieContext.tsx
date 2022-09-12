import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MovieContext = createContext(1);

//API Key
const API_KEY = 'ee563bd8';

const MovieApp = ({children}) => {

  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  const fetchMovies = async (searchValue: string) => {
    const response = await axios(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`
    );
    const data = response.data;
    setMovies(data.Search);
  };


  //削除処理
  const removeFavoriteMovie = (movie:any) => {
    movie.isFavorite = false;
    //ここの処理をreduxで
    const newFavoriteList = favorites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
  };

  //追加処理
  const addFavoriteMovie = (movie:never) => {
    movie.isFavorite = true;
    //ここの処理をreduxで
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  };

  const favoriteHandler = (movie:never, e:any) => {
    e.preventDefault();
    if (favorites.includes(movie)) {
      removeFavoriteMovie(movie);
    } else {
      addFavoriteMovie(movie);
    }
  };

  const showDetail = async (id:never) => {
    const response = await axios(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    const data = response.data;
    setSelectedMovie(data);
  };

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  return (
    <MovieContext.Provider
    // @ts-ignore
      value={{
        setSearch,
        movies,
        favorites,
        favoriteHandler,
        showDetail,
        selectedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;