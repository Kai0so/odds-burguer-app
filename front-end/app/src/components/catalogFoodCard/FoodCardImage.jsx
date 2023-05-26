import React from 'react';

function FoodCardImage({ card }) {
  return (
    <div className='catalog-card-image'>
      <img src={card.src} alt="Hamburger" />
    </div>
  );
}

export default FoodCardImage;
