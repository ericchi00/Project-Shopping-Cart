import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../images/keyboardswitches.jpeg';

const Home = () => {
	return (
		<div className="app">
			<div className="hero">
				<div className="hero-text">
					<h2>
						Upgrade your keyboard switches and have the keyboard you've always
						wanted.*
					</h2>
					<small>*Keyboard &amp; RGB sold separately.</small>
					<Link to="/shop">
						<button>SHOP NOW</button>
					</Link>
				</div>
				<img src={hero} alt="Keyboard Switches in Multiple Jar Containers" />
			</div>
		</div>
	);
};

export default Home;
