import React from 'react';
import PropTypes from 'prop-types';

function FoodCardImage({ card }) {
  return (
    <div className="catalog-card-image">
      <img src={card.src} alt="Hamburger" />
    </div>
  );
}

FoodCardImage.propTypes = {
  card: PropTypes.shape({
    src: PropTypes.string,
  }).isRequired,
};

export default FoodCardImage;
