import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MovieContext = createContext(1);

const API_KEY = 'ee563bd8'; // OMDb API Key
// @ts-ignore
const MovieApp = ({ children }) => {
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

  const removeFavoriteMovie = (movie: { isFavorite: boolean; imdbID: any; }) => {
    movie.isFavorite = false;
    const newFavoriteList = favorites.filter(
      // @ts-ignore
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
  };

  const addFavoriteMovie = (movie: { isFavorite: boolean; }) => {
    movie.isFavorite = true;
    const newFavoriteList = [...favorites, movie];
    // @ts-ignore
    setFavorites(newFavoriteList);
  };

  const favoriteHandler = (movie:any, e:any) => {
    e.preventDefault();
    // @ts-ignore
    if (favorites.includes(movie)) {
      removeFavoriteMovie(movie);
    } else {
      addFavoriteMovie(movie);
    }
  };

  const showDetail = async (id: any) => {
    const response = await axios(
      `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
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