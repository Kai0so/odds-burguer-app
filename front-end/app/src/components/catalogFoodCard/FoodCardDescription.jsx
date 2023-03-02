import React from 'react';

function FoodCardDescription({ cardName, cardDescription }) {
  return (
    <div>
      <h3>{cardName}</h3>
      <span>{cardDescription}</span>
    </div>
  );
}

export default FoodCardDescription;
