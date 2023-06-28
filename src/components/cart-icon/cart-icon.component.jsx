import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

function CartIcon() {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

	function toggleisCartOpen() {
		setIsCartOpen(!isCartOpen);
	}

	return (
		<div className='cart-icon-container' onClick={toggleisCartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>10</span>
		</div>
	);
}

export default CartIcon;
