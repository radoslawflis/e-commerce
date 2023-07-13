import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles';

function CartIcon() {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);
	const { cartCount } = useContext(CartContext);

	function toggleisCartOpen() {
		dispatch(setIsCartOpen(!isCartOpen));
	}

	return (
		<CartIconContainer onClick={toggleisCartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
}

export default CartIcon;
