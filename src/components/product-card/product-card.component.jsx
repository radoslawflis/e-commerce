import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.reducer';

import {
	ProductCardContainer,
	Footer,
	Name,
	Price,
} from './product-card.styles';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

function ProductCard({ product }) {
	const dispatch = useDispatch();
	const { name, price, imageUrl } = product;

	function addProductToCart() {
		dispatch(addItemToCart(product));
	}
	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />

			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
				onClick={addProductToCart}
				buttonType={BUTTON_TYPE_CLASSES.inverted}
			>
				Add to card
			</Button>
		</ProductCardContainer>
	);
}
export default ProductCard;
