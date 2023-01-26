import React from 'react';

function FoodCard({ cardImage }) {
  return (
    <div>
      <img src={cardImage} alt="Hamburger" />
    </div>
  );
}

export default FoodCard;
