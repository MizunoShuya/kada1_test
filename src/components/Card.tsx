import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import noImage from '../utils/c_1576280077848.png';
import '../styles/Card.css';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
// @ts-ignore
const Card = ({ image, title, year, addFavorite, isFavorite }) => {
  return (
    <div className='card'>
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
