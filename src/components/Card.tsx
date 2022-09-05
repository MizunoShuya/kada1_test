import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import noImage from '../utils/c_1576280077848.png';
import '../styles/Card.css';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { type } from '@testing-library/user-event/dist/type';

// @ts-ignore
const Card = ({ image, title, addFavorite, isFavorite}) => {
  return (
    <div className='card'>
      <div className='icon' onClick={addFavorite}>
        {isFavorite ? (
          <i>
            <FontAwesomeIcon icon={faStarSolid} color='##FFF700' size='2x' />
          </i>
        ) : (
          <i>
            <FontAwesomeIcon icon={faStarRegular} color='##FFF700' size='2x' />
          </i>
        )}
      </div>
      {image === 'N/A' ? (
        <img src={noImage} alt={title} />
      ) : (
        <img src={image} alt={title} />
      )}

      <div className='info'>
        <span className='title'>{title}</span>
      </div>
    </div>
  );
};

export default Card;