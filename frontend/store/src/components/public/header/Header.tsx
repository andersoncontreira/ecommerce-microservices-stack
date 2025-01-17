import style from './Header.module.scss';
import cartImg from '/images/cart.svg';
import userImg from '/images/user.svg';
import { Link } from "react-router-dom";
import React from 'react';
import { useAuth } from "../../../contexts/AuthContext.tsx";



const Header: React.FC = () => {
    const {isAuthenticated} = useAuth();
    const navLinks = [
        { path: "/", active: true, label: "Home" },
        { path: "/shop", active: true, label: "Shop" },
        { path: "/about", active: true, label: "About us" },
        { path: "/services", active: true, label: "Services" },
        { path: "/blog", active: true, label: "Blog" },
        { path: "/contact", active: true, label: "Contact us" }
    ];

    let ctaLinks = [];
    if (isAuthenticated) {
        ctaLinks = [
            { path: "/user-area", active: true, imgSrc: userImg, imgAlt: "User Area" },
            { path: "/cart", active: true, imgSrc: cartImg, imgAlt: "Cart" }
        ];
    } else {
        ctaLinks = [
            { path: "/login", imgSrc: userImg, imgAlt: "Login" },
            { path: "/cart", imgSrc: cartImg, imgAlt: "Cart" }
        ];
    }


    return (
        // Start Header/Navigation
        <nav className={style.customNavbar + " navbar navbar-expand-md navbar-dark bg-dark"} arial-label="Furni navigation bar">
            <div className="container">
                <Link className={style.navbarBrand + " navbar-brand"} to="/">Furni<span>.</span></Link>

                <button className={style.navbarToggler + " navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className={style.customNavbarNav + " navbar-brand navbar-nav ms-auto mb-2 mb-md-0"}>
                        {navLinks.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <Link to={link.path} className="nav-link">{link.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <ul className={style.customNavbarCta + " navbar-nav mb-2 mb-md-0 ms-5"}>
                        {ctaLinks.map((link, index) => (
                            <li key={index}>
                                <Link className="nav-link" to={link.path}>
                                    <img src={link.imgSrc} alt={link.imgAlt} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
        // End Header/Navigation
    );
}

export default Header;