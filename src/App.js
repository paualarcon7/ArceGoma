import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Router,
  Routes,
} from "react-router-dom";

import Header from './components/Header';
import Home from './modules/Home';
import Products from './components/Products'; // Importar el componente Products
import Pagination from './components/Pagination';
import Shop from './modules/Shop';
import Product from './modules/Product';



function App() {
  return (
    <div>
     
        <Header />
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/product" element={<Product/>} />
        </Routes>
      
    </div>
  );
}

export default App;
