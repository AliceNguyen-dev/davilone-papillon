import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';


// Components
import Navbar from './components/Navbar';
import Home from './components/Home'
import ListProduct from './components/Blog';
import Product from './components/Product';
import User from './components/User/User';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer'

import Login from './components/User/Login'; // Chemin correct vers Login.jsx
import Register from './components/User/Register'; // Chemin correct vers Register.jsx


function App() {

  return (
    <div className="App-header">
      
      <Navbar /> 
      <div className="h-nav">
        <div className="box-app">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Définissez votre page d'accueil */}
            <Route path="/product" element={<Product />} />
            <Route path="/listProduct" element={<ListProduct />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<User />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Routes>
        </div>

        <Footer></Footer>

      </div>

    </div>
  );
}

export default App;
