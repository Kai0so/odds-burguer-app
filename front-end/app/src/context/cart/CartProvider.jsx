import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import CartContext from './CartContext';

function CartProvider({ children }) {
  const [totalValue, setTotalValue] = useState(0.00);

  const contextObject = useMemo(() => ({
    totalValue, setTotalValue,
  }), [totalValue, setTotalValue]);

  return (
    <CartContext.Provider value={contextObject}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default CartProvider;
