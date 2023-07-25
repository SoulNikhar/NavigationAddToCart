import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import File1 from './File1';
import File2 from './File2';
import Navigation from './Navigation';
import { CartProvider } from './CartContext.js';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <h1>Front Page</h1>
          <Navigation />
          <Routes>
            <Route path="/file1" element={<File1 />} />
            <Route path="/file2" element={<File2 />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
