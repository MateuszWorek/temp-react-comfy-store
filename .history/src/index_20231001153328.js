import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// dev-qpp4g2szzqz5frht.eu.auth0.com
// ulGyoxzaYgSMoNorhv4MOyXZ6gwPwFFc
// FaW5W-wES3yMU3NuicJcCfpkU2XQpRP4vBANIy1wuZim1vsmNkkLfu3WT4has5SV

root.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>
);
