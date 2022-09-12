import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import Card from '../components/Card';
import '../styles/Favorite.css';
import { Link } from 'react-router-dom';

//お気に入り画面
const Favorite = () => {
  //データの共有aa
  const { favorites, favoriteHandler } = useContext(MovieContext);

  return (
    <>
      {favorites?.length ? (
        <div className='favorites'>
          {favorites.map((movie:any) => (
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
              isFavorite={movie.isFavorite}
            />
            </Link>
          ))}
        </div>
      ) : (
        //お気に入りない場合
        <div className='favorite_warning'></div>
      )}
    </>
  );
};

export default Favorite;