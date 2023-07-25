import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';

const File2 = () => {
  const { cartItems } = useCartContext();

  return (
    <div>
      <h1>File 2</h1>
      <div>
        <h2>Cart Items:</h2>
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - ${cartItem.price} - Quantity: {cartItem.quantity}
            </li>
          ))}
        </ul>
      </div>
      <br />
      <Link to="/file1">
        <button>Go to File 1</button>
      </Link>
    </div>
  );
};

export default File2;
