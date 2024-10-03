import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../component/navbar.css";
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		
		<header>
            <img src="/logo.png" alt="" />
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">AboutUs</a>
				<a href="/#">Academics</a>
				<a href="/#">Admissions</a>
                <a href="/#">Faculty</a>
                <a href="/#">Students</a>
                <a href="/#">Gallery</a>
                <a href="/#">Contact Us</a>
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
             <div className="navbar-icons">
          <a href="https://www.instagram.com/sipnplaynyc/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com/sipnplaynyc/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="mailto:sipnplaynyc@gmail.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
		</header>

		
		
        
	);
}

export default Navbar;