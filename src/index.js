import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import App from './App';
import { UserProvider } from './contexts/user.context'
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';

// Styles
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
