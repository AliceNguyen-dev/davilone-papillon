import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./Navbar.scss";
import logo from "../assets/img/Davillone.png";

const Navbar = () => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    const handleBurgerMenuToggle = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    };

    const handleMenuItemClick = () => {
        setIsBurgerMenuOpen(false);
    };

    return (
        <header>
            <div className="logo-name">
                <Link to="/"> {/* Lien vers la page d'accueil */}
                    <img src={logo} alt="Logo" className="logo-name" />
                </Link>
            </div>

            <div className="menuVisible">
                <Link to="/" className="NavItems menu-items" onClick={handleMenuItemClick}>
                    Accueil
                </Link>
                {/* <Link to="/listProduct" className="NavItems menu-items" onClick={handleMenuItemClick}>
                    Nos Produits
                </Link> */}
                <Link to="/product" className="NavItems menu-items" onClick={handleMenuItemClick}>
                    Nos Produits
                </Link>
                <Link to="/blog" className="NavItems menu-items" onClick={handleMenuItemClick}>
                    Blog
                </Link>
                <Link to="/contact" className="NavItems menu-items" onClick={handleMenuItemClick}>
                    Contact
                </Link>
                <Link to="/user" className="NavItems menu-items" onClick={handleMenuItemClick}>
                    Mon Compte
                </Link>
            </div>

            <div className="burgerVisible">
                <div className="burger-button" onClick={handleBurgerMenuToggle} aria-label="Toggle Navigation Menu">
                    ☰
                </div>
                <Menu isOpen={isBurgerMenuOpen} onClose={handleBurgerMenuToggle}>
                    <Link to="/" className="menu-items" onClick={handleMenuItemClick}>
                        Accueil
                    </Link>
                    <Link to="/listProduct" className="menu-items" onClick={handleMenuItemClick}>
                        ListProduct
                    </Link>
                    <Link to="/product" className="menu-items" onClick={handleMenuItemClick}>
                        Product
                    </Link>
                    <Link to="/blog" className="menu-items" onClick={handleMenuItemClick}>
                        Blog
                    </Link>
                    <Link to="/contact" className="menu-items" onClick={handleMenuItemClick}>
                        Contact
                    </Link>
                    <Link to="/user" className="menu-items" onClick={handleMenuItemClick}>
                        User
                    </Link>
                </Menu>
            </div>
        </header>
    );
};

export default Navbar;