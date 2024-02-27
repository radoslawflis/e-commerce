import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CategoryItem } from '../../store/categories/category.types';

import {
	ProductCardContainer,
	Footer,
	Name,
	Price,
} from './product-card.styles';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

type ProductCardProps = {
	product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const { name, price, imageUrl } = product;

	function addProductToCart() {
		dispatch(addItemToCart(cartItems, product));
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
