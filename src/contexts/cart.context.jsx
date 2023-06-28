import { createContext, useState, useEffect } from 'react';

function addCartItem(cartItems, productToAdd) {
	//find if product is in cartItems by id if yes add quantity +1
	const existingItem = cartItems.find((item) => item.id === productToAdd.id);
	if (existingItem) {
		return cartItems.map((cartItem) => {
			return cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem;
		});
	}

	//if product is not in cartItems add product with quantity 1

	return [...cartItems, { ...productToAdd, quantity: 1 }];
}
export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cardCount: 0,
	setCartCount: () => {},
});

/*
CartItem
{
	id,
	name,
	price,
	imageUrl,
	quantity
}
*/

export function CartProvider({ children }) {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	function addItemToCart(productToAdd) {
		setCartItems(addCartItem(cartItems, productToAdd));
	}

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		cartCount,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
}
