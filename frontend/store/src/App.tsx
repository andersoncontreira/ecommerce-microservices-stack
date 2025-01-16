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
import { Outlet } from 'react-router-dom';
import Footer from './components/public/footer/Footer.tsx';



function App() {

  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
