import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import CartContext from './CartContext';

function CartProvider({ children }) {
  const [totalValue, setTotalValue] = useState(0.00);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState([]);

  const removeItemIfZeroQuantity = (cartItems) => cartItems.filter((item) => item.quantity > 0);

  const addToCart = (product) => {
    const updatedItems = cart.map((item) => {
      if (item.id === product.id && item.quantity !== product.quantity) {
        return { ...item, quantity: product.quantity };
      }
      return item;
    });

    const productInCart = updatedItems.find((e) => e.id === product.id);

    if (!productInCart && product.quantity > 0) {
      setCart([...removeItemIfZeroQuantity(updatedItems), product]);
    } else {
      setCart(removeItemIfZeroQuantity(updatedItems));
    }
  };

  const calculateTotalValue = () => {
    let totalResult = 0.00;
    if (cart.length >= 1) {
      cart.forEach((item) => {
        totalResult += item.quantity * item.price;
      });
    }
    setTotalValue(totalResult);
  };

  const contextObject = useMemo(() => ({
    totalValue, setTotalValue, cart, setCart, addToCart, count, setCount, calculateTotalValue,
  }), [totalValue, setTotalValue, cart, setCart, count, setCount, calculateTotalValue]);

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
