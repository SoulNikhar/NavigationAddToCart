import React from 'react';
import jsonData from './data.json';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';

const File1 = () => {
  const { addToCart } = useCartContext();

  return (
    <div>
      <h1>File 1</h1>
      <div>
        <h2>Products:</h2>
        <ul>
          {jsonData.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <Link to="/file2">
        <button>Go to File 2</button>
      </Link>
    </div>
  );
};

export default File1;
