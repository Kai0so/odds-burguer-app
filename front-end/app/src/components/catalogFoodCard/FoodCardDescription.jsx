import React from 'react';
import PropTypes from 'prop-types';

function FoodCardDescription({ card }) {
  return (
    <div className="card-description">
      <h2>{card.name}</h2>
      <span>{card.description}</span>
      <p>
        R$
        {Math.abs(card.price).toFixed(2).toString().replace('.', ',')}
      </p>
    </div>
  );
}

FoodCardDescription.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default FoodCardDescription;
