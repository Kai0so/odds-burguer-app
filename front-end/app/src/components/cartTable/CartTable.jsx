import React, { useContext } from 'react';
import { CartContext } from '../../context';

function CartTable() {
  const { cart, totalValue } = useContext(CartContext);

  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Valor</th>
          <th>Quantidade</th>
          <th>Observações</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{Math.abs(item.price).toFixed(2).toString().replace('.', ',')}</td>
            <td>{item.quantity}</td>
            <td><textarea rows="2" cols="20" /></td>
            <td>{Math.abs(item.price * item.quantity).toFixed(2).toString().replace('.', ',')}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="last-row">
          <td className="hidden-cols" colSpan={4} />
          <td>
            Total: R$
            {Math.abs(totalValue).toFixed(2).toString().replace('.', ',')}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default CartTable;
