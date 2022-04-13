import React from 'react';
import '../styles//Cart.css';

const CartItem = ({ name, quantity, price }) => {
	return (
		<li>
			<div className="cart-item-name">{name}</div>
			<div className="cart-rightside">
				<div className="cart-item-quantity">{quantity}</div>
				<div className="cart-item-price"></div>$
				{(Math.round(quantity * price * 100) / 100).toFixed(2)}
			</div>
		</li>
	);
};

export default CartItem;
