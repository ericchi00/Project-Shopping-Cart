import './styles/App.css';
import Home from './images/keyboardswitches.jpeg';
import { Link } from 'react-router-dom';

const App = () => {
	return (
		<div className="app">
			<div className="hero">
				<div class="hero-text">
					<h2>
						Upgrade your keyboard switches and have the keyboard you've always
						wanted.*
					</h2>
					<small>*Keyboard &amp; RGB sold separately.</small>
					<Link to="/shop">
						<button>SHOP NOW</button>
					</Link>
				</div>
				<img src={Home} alt="Keyboard Switches in Multiple Jar Containers" />
			</div>
		</div>
	);
};

export default App;
