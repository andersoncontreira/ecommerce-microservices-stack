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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth } from "./contexts/AuthContext.tsx";
import Home from "./pages/public/Home.tsx";
import About from "./pages/public/About.tsx";
import Contact from "./pages/public/Contact.tsx";
import Login from "./pages/public/Login.tsx";
import PrivateRoute from "./components/private/route/PrivateRoute.tsx";
import UserArea from "./pages/private/UserArea.tsx";
import NotFound from "./pages/public/NotFound.tsx";
import StoreLayout from "./layouts/StoreLayout.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";


function App() {
    const {isAuthenticated} = useAuth();
    console.log('App.isAuthenticated', isAuthenticated);
    return (
        <ThemeProvider>

                <Router>
                    <Routes>
                        <Route path="/" element={<StoreLayout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            <Route path="login" element={<Login/>}/>

                            {/* <Route path="/register" element={<UserRegister />} /> */}
                            {/* <Route path="/forgot-password" element={<UserForgotPassword />} /> */}
                            {/* Private routes */}
                            <Route element={<PrivateRoute/>}>
                                <Route path="/user-area" element={<UserArea/>}/>
                            </Route>
                            {/* 404 */}
                            <Route path="*"
                                   element={<NotFound/>}/> {/* Rota curinga para capturar todas as rotas não definidas */}
                        </Route>
                    </Routes>
                </Router>

        </ThemeProvider>

    );
}

export default App
