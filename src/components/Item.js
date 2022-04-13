import React, { useState } from 'react';

const Item = ({ img, name, price, quantity, addToCart }) => {
	const [items, setItems] = useState(1);

	const handleQuantityChange = (e) => {
		setItems(e.target.value);
	};
	return (
		<li>
			<img src={img} alt={name} />
			<div className="item-name">{name}</div>
			<p>${price}</p>
			<p>Quantity per bag: {quantity}</p>
			<label htmlFor="quantity"></label>
			<div className="addToCartWrapper">
				<input
					type="number"
					name="quantity"
					id="quantity"
					min="0"
					max="5"
					defaultValue="1"
					onChange={handleQuantityChange}
				/>
				<button
					type="button"
					className="addToCart"
					onClick={(e) => addToCart(e, name, items, price)}
				>
					Add to Cart
				</button>
			</div>
		</li>
	);
};

export default Item;
