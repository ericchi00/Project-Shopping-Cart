import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = ({ cart }) => {
	return (
		<header>
			<nav>
				<Link to="/project-shopping-cart/">
					<h1>Keyboard Switches</h1>
				</Link>
				<ul>
					<Link to="/shop">
						<li>Shop</li>
					</Link>
					<Link to="/cart">
						<li>Cart({cart.length})</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
