import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context';
import cartIcon from '../../assets/cart.png';

function CatalogTotalValue() {
  const { totalValue, calculateTotalValue } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    calculateTotalValue();
  });

  return (
    <button type="button" onClick={() => navigate('/cart')} className="catalog-footer">
      <img className="cart-icon" src={cartIcon} alt="cart icon" />
      <span>
        R$
        {Math.abs(totalValue).toFixed(2).toString().replace('.', ',')}
      </span>
    </button>
  );
}

export default CatalogTotalValue;
