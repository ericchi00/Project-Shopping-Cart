import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

const Nav = () => {
	return (
		<header>
			<nav>
				<Link to="/">
					<h1>Keyboard Switches</h1>
				</Link>
				<ul>
					<Link to="/shop">
						<li>Shop</li>
					</Link>
					<Link to="/cart">
						<li>Cart</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
