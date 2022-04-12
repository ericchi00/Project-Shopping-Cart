import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Nav from '../components/Nav';

const RouteSwitch = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<App />} />
				{/* <Route path="/shop" element={<Shop />} />
				<Route path="/cart" element={<Cart />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;
