import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context";
import cartIcon from '../../assets/cart.png';

function FoodCardCounter({ card, onClose }) {
  const [isAdd, setIsAdd] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const { addToCart, count, setCount, cart } = useContext(CartContext);

  useEffect(() => {
    addOrRemoveButton();
    isDisabledButton();
  });

  const handleIncrement = () => {
    if (!count[card.id]) {
      setCount((prevCount) => ({ ...prevCount, [card.id]: 0 }));
      setCount((prevCount) => ({ ...prevCount, [card.id]: prevCount[card.id] + 1 }));
    } else {
      setCount((prevCount) => ({ ...prevCount, [card.id]: prevCount[card.id] + 1 }));
    }
  };

  const handleDecrement = () => {
    if (count[card.id] > 0) {
      setCount((prevCount) => ({ ...prevCount, [card.id]: prevCount[card.id] - 1 }));
    }
  };

  const addAndClose = () => {
    addToCart({
      id: card.id,
      name: card.name,
      price: card.price,
      quantity: count[card.id] || 0,
    });
    onClose();
  }

  const addOrRemoveButton = () => {
    if (cart.length > 0) {
      const findItem = cart.find((item) => item.id === card.id);
      if (findItem != undefined) {
        if (findItem.quantity > count[card.id]) {
          setIsAdd(false);
        } else {
          setIsAdd(true);
        }
      }
    }
  }

  const isDisabledButton = () => {
    if (cart.length > 0) {
      const findItem = cart.find((item) => item.id === card.id);
      if (findItem != undefined) {
        if (findItem.quantity === count[card.id]) {
          setIsDisabled(true);
        } else
          setIsDisabled(false);
      } else {
        setIsDisabled(false);
      }
    }
  }

  return (
    <div className="food-card-counter-buttons">
      <button className="food-decrement-button" onClick={handleDecrement} disabled={!count[card.id] || count[card.id] === 0}>-</button>
      <span>{!count[card.id] ? 0 : count[card.id]}</span>
      <button className="counter-increment-button" onClick={handleIncrement}>+</button>
      <button disabled={isDisabled} className="add-button" onClick={addAndClose} type='button'><img className="cart-icon" src={cartIcon} alt="cart icon" />{isAdd === true ? "Adicionar ao Carrinho" : "Remover do carrinho"}</button>
    </div >
  );
}

export default FoodCardCounter;