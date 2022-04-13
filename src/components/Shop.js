import React from 'react';
import Item from './Item';
import items from '../shop-items';
import '../styles/Shop.css';

const Shop = ({ cart, setCart }) => {
	const addToCart = (e, name, quantity, price) => {
		e.preventDefault();
		if (quantity === 0) return;

		for (const item of cart) {
			if (item.name === name) {
				item.quantity = Number(item.quantity) + Number(quantity);
				break;
			}
		}

		if (quantity > 0 && !cart.some((item) => item.name === name)) {
			setCart((prevState) => {
				return [
					...prevState,
					{
						name: name,
						quantity: quantity,
						price: price,
					},
				];
			});
		}
	};
	return (
		<div className="shop">
			<ul>
				{items.map((item, i) => {
					return (
						<Item
							key={i}
							name={item.name}
							img={item.img}
							price={item.price}
							quantity={item.quantity}
							addToCart={addToCart}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default Shop;
