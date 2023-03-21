import React from 'react';

function FoodCardDescription({ cardName, cardDescription, cardPrice }) {
  return (
    <div>
      <h3>{cardName}</h3>
      <h4>R${cardPrice}</h4>
      <span>{cardDescription}</span>
    </div>
  );
}

export default FoodCardDescription;
