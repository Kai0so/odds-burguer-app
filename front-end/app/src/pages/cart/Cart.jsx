import React, { useContext, useState, useEffect } from 'react';
import {
  CatalogNavbar, CatalogTemplate, FoodCard, CatalogSearchbar, FoodModal, CartTable
} from '../../components';
import CatalogTotalValue from '../../components/catalogTotalValue/CatalogTotalValue';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context';

function Cart() {
  const [isEmpty, setIsEmpty] = useState(true)
  const { cart } = useContext(CartContext);

  useEffect(() => {

  });

  useEffect(() => {
    isCartEmpty();
    document.body.classList.add('cart');

    return () => {
      document.body.classList.remove('cart');
    };
  });

  const isCartEmpty = () => {
    if (cart.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }

  return (
    <div className='cart'>
      <div className='cart-container'>
        <CatalogNavbar />
        <h1>Carrinho</h1>
        {!isEmpty ? (
          <div className='cart-table-container'>
            <CartTable
            />
          </div>
        ) : (
          <h2>Não há itens no carrinho!</h2>)
        }
      </div>
    </div>
  );
}

export default Cart;
