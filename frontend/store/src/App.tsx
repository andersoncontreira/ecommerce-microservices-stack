// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/fonts/bootstrap-icons.woff';

// Font Awesome
import 'font-awesome/css/font-awesome.min.css'
import 'font-awesome/fonts/fontawesome-webfont.woff';

// CSS
import '../src/assets/css/style.scss';


// Components
import Header from "./components/public/header/Header.tsx";
import Hero from "./components/public/sections/hero/Hero.tsx";
import Product from "./components/public/sections/product/Product.tsx";


const productData = [
  { id: 1, title: 'Nordic Chair', price: 50.00, active: true, image: 'images/product-1.png' },
  { id: 2, title: 'Kruzo Aero Chair', price: 78.00, active: true, image: 'images/product-2.png' },
  { id: 3, title: 'Ergonomic Chair', price: 43.00, active: true, image: 'images/product-3.png' },
  { id: 4, title: 'Classic Chair', price: 60.00, active: false, image: 'images/product-4.png' }
];

function App() {

  return (
    <>
        <Header />
        <Hero />
        <Product products={productData} />
    </>
  )
}

export default App
