import { useDispatch, useSelector } from 'react-redux';

import {
	selectIsCartOpen,
	selectCartCount,
} from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.reducer';

import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles';

function CartIcon() {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);

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
