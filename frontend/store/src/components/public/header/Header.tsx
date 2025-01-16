import style from './Header.module.scss';
import cartImg from '../../../assets/images/cart.svg';
import userImg from '../../../assets/images/user.svg';

const Header = () => {
    return (
        // Start Header/Navigation
        <nav className={style.customNavbar + " navbar navbar navbar-expand-md navbar-dark bg-dark"} arial-label="Furni navigation bar">

            <div className="container">
                <a className={style.navbarBrand + " navbar-brand"} href="/">Furni<span>.</span></a>

                <button className={style.navbarToggler + " navbar-toggler"}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className={style.customNavbarNav + " navbar-brand navbar-nav ms-auto mb-2 mb-md-0"}>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li><a className="nav-link" href="/shop">Shop</a></li>
                        <li><a className="nav-link" href="/about">About us</a></li>
                        <li><a className="nav-link" href="/services">Services</a></li>
                        <li><a className="nav-link" href="/blog">Blog</a></li>
                        <li><a className="nav-link" href="/contact">Contact us</a></li>
                    </ul>

                    <ul className={style.customNavbarCta + "  navbar-nav mb-2 mb-md-0 ms-5"}>
                        <li><a className="nav-link" href="/login"><img src={userImg} /></a></li>
                        <li><a className="nav-link" href="/cart"><img src={cartImg} /></a></li>
                    </ul>
                </div>
            </div>

        </nav>
    // End Header/Navigation
    );
}

export default Header;