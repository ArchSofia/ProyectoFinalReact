import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<header>
				<nav className="main-nav">
					<ul id="main-menu" className="main-menu">
						<Link to="/">
							<h1 className="nav-brand">VIVAS CERAMICAS</h1>
						</Link>
						<li className="main-menu__item">
							<a href="#" className="main-menu__link">
								Home
							</a>
						</li>
						<Link to="/" className="productos-navbar main-menu__link">
							Productos
						</Link>
						<li className="main-menu__item">
							<a href="#" className="main-menu__link">
								Somos
							</a>
						</li>
						<li className="main-menu__item">
							<a href="#" className="main-menu__link">
								Contacto
							</a>
						</li>
						<CartWidget />
					</ul>
				</nav>
				<h3 className="titulos">Productos</h3>
			</header>
			<section>
				<nav className="nav ml-4 ">
					<Link className="nav-link liNav active" to="/category/Macetas">
						Macetas
					</Link>
					<Link className="nav-link liNav" to="/category/Tazas">
						Tazas
					</Link>
					<Link className="nav-link liNav" to="/category/Cuencos">
						Cuencos
					</Link>
					<Link className="nav-link liNav" to="/category/Floreros">
						Floreros
					</Link>
				</nav>
			</section>
		</>
	);
};

export default NavBar;
