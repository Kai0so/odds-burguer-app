import React from 'react';

function FoodCardImage({ cardImage }) {
  return (
    <div>
      <img src={cardImage} alt="Hamburger" />
    </div>
  );
}

export default FoodCardImage;
