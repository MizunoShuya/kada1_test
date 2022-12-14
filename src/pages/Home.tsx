import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import "../styles/Home.css";

const Home = () => {
  //データの共有
  const {
    search,
    setSearch,
    movies,
    favorites,
    favoriteHandler,
  } = useContext(MovieContext);

  //form内の値が変更された時に発火するメソッド
  //stateの値をform内に記述された値に変換
  const handleSearch = (e:any) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home-container">
      <Input handleSearch={handleSearch} />
      {search?.trim() ? (
        <div className="search-warning">
          <p>
            Latest search:{" "}
            {search.length > 13
              ? `${search.slice(0, 13)}...`
              : search}
          </p>
        </div>
      ) : null}

      {/* rendering */}
      {movies?.length > 0 ? (
        <div className="movies">
          {movies?.map((movie:any) => {
            return (
              <Link
                to={`movies/${movie.imdbID}`} 
                className="text-link"
                key={movie.imdbID}
              >
                <Card
                  key={movie.imdbID}
                  image={movie.Poster}
                  title={movie.Title}
                  addFavorite={(e:any) => favoriteHandler(movie, e)}
                  isFavorite={
                    favorites.find((f:any) => f.imdbID === movie.imdbID)
                      ? true
                      : false
                  }
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="search-warning">
          <p>検索欄にキーワードを入力してください。</p>
        </div>
      )}
    </div>
  );
};

export default Home;