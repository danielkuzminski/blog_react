import React from 'react';
import './style.css';

/**
 * @author
 * @function Card
 **/

// naszą utworzoną card wyeksportujemy do komponentu Hero

const Card = (props) => {
  return <div className='card'>{props.children}</div>;
};

export default Card;
