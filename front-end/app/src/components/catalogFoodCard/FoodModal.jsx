import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FoodCardCounter from './FoodCardCounter';
import { CartContext } from '../../context';

function FoodModal({ food, onClose }) {
  const { count } = useContext(CartContext);
  const [parcialValue, setParcialValue] = useState(0.00);

  const calculateParcialValue = () => {
    if (count[food.id]) {
      const result = count[food.id] * food.price;
      setParcialValue(result);
    } else {
      setParcialValue(0.00);
    }
  };

  useEffect(() => {
    calculateParcialValue();
  });

  return (
    <div className="food-modal">
      <div className="food-modal-content">
        <img src={food.src} alt={food.name} />
        <div className="food-modal-info">
          <h2>{food.name}</h2>
          <p>{food.description}</p>
          <div className="parcial-prices">
            <span>
              R$
              {Math.abs(food.price).toFixed(2).toString().replace('.', ',')}
            </span>
            <h3>
              R$
              {Math.abs(parcialValue).toFixed(2).toString().replace('.', ',')}
            </h3>
          </div>
        </div>
        <div className="food-modal-buttons">
          <button type="button" className="close-modal-button" onClick={onClose}>Voltar</button>
          <FoodCardCounter card={food} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

FoodModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  food: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    src: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default FoodModal;
