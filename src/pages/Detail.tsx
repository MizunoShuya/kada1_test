import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';
// @ts-ignore
import noImage from '../utils/no-image-available.png';
import '../styles/Detail.css';

const Detail = () => {
// React Router'daki dinamik URL kısmını almalıyız (useParams)
// @ts-ignore
  const { showDetail, selectedMovie } = useContext(MovieContext);

  let dynamicUrl = useParams();

  useEffect(() => {
    showDetail(dynamicUrl.id);
  }, []);

  return (
    <div className='detail-container'>
      <div className='poster'>
        {selectedMovie.Poster === 'N/A' ? (
          <img src={noImage} alt={selectedMovie.Title} />
        ) : (
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        )}
      </div>
      <div className='info'>
        <div className='field'>
          <div className='label'>タイトル</div>
          <div>{selectedMovie.Title}</div>
        </div>
        <div className='field'>
          <div className='label'>公開日</div>
          <div>{selectedMovie.Released}</div>
        </div>
        <div className='field'>
          <div className='label'>あらすじ</div>
          <div>{selectedMovie.Plot}</div>
        </div>
        <div className='field'>
          <div className='label'>ジャンル</div>
          <div>{selectedMovie.Genre}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;