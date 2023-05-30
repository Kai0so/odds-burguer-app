import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FoodCardImage from './FoodCardImage';
import FoodCardDescription from './FoodCardDescription';
import { CartContext } from '../../context';

function FoodCard({ card }) {
  const { cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const findQuantity = () => {
    const finder = cart.find((e) => e.id === card.id);
    if (finder) {
      setQuantity(finder.quantity);
    } else {
      setQuantity(0);
    }
  };

  useEffect(() => {
    findQuantity();
  });

  const displayClass = quantity === 0 && 'hidden';

  return (
    <>
      <FoodCardImage card={card} />
      <div className="catalog-card-description">
        <FoodCardDescription card={card} />
      </div>
      <div className={`counter ${displayClass}`}>
        <span hidden={quantity === 0 || quantity === undefined}>{quantity}</span>
      </div>
    </>
  );
}

FoodCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default FoodCard;
