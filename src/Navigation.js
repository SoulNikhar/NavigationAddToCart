import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to="/file1">
        <button>Go to File 1</button>
      </Link>
      <Link to="/file2">
        <button>Go to File 2</button>
      </Link>
    </div>
  );
};

export default Navigation;
