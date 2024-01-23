import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss"

import logo from "../assets/img/Davillone.png"

const Navbar = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  console.log(logo);

  return (
    <header>
      
			<div className="logo-name">
        {/* logo name */}
        <img src={logo} alt="Logo" className="logo-name" />
      </div>
			<nav ref={navRef}>
				<a href="/#">Accueil</a>
				<a href="/#">Nos Produits</a>
				<a href="/#">Blog</a>
				<a href="/#">Contact</a>
				<a href="/#">Compte</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
  );
};

export default Navbar;