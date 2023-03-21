import React, { useContext } from 'react';
import { CartContext } from '../../context';

function CatalogTotalValue() {
  const { totalValue, setTotalValue } = useContext(CartContext);

  return (
    <div>
      <h1>
        R${Math.abs(totalValue).toFixed(2)}
      </h1>
    </div>
  );
}

export default CatalogTotalValue;
