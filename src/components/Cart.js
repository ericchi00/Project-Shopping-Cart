import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';

const Cart = ({ cart }) => {
	const [total, setTotal] = useState();

	useEffect(() => {
		setTotal(() => {
			let total = 0;
			cart.map((item) => {
				total += item.quantity * item.price;
			});
			return total;
		});
	}, [cart]);

	return (
		<>
			{cart.length > 0 ? (
				<div className="cart">
					<ul>
						{cart.map((item, i) => {
							return (
								<CartItem
									key={i}
									name={item.name}
									quantity={item.quantity}
									price={item.price}
								/>
							);
						})}
					</ul>
					<div className="cart-total">Total: ${total}</div>
				</div>
			) : (
				<div className="cart-empty">
					<h2>Your cart is empty!</h2>
				</div>
			)}
		</>
	);
};

export default Cart;
