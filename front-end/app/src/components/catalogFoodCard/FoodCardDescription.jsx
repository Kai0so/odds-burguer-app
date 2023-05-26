import React from 'react';

function FoodCardDescription({ card }) {
  return (
    <div className='card-description'>
      <h2>{card.name}</h2>
      <span>{card.description}</span>
      <p>R${Math.abs(card.price).toFixed(2).toString().replace(".", ",")}</p>
    </div>
  );
}

export default FoodCardDescription;
