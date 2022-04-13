import './styles/App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Cart from './components/Cart';

const App = () => {
	const [cart, setCart] = useState([]);

	return (
		<BrowserRouter>
			<Nav cart={cart} />
			<Routes>
				<Route path="/project-shopping-cart/" element={<Home />} />
				<Route path="/shop" element={<Shop setCart={setCart} cart={cart} />} />
				<Route path="/cart" element={<Cart cart={cart} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
