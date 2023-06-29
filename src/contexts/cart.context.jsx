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

function removeCartItem(cartItems, cartItemToRemove) {
	//find if product is in cartItems by id if yes subtract quantity -1
	const existingItem = cartItems.find(
		(item) => item.id === cartItemToRemove.id
	);
	//check if quantity is equal to 1, if it is remove that item from cart
	if (existingItem.quantity === 1) {
		return cartItems.filter((cartItem) => {
			return cartItem.id !== cartItemToRemove.id;
		});
	}
	//return back cartItems with matching cart item with reduced quantity
	return cartItems.map((cartItem) => {
		return cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem;
	});
}

function clearCartItem(cartItems, cartItemToClear) {
	//find product in cartitems
	return cartItems.filter((cartItem) => {
		return cartItem.id !== cartItemToClear.id;
	});
}

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
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
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newCartTotal = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);
		setCartTotal(newCartTotal);
	}, [cartItems]);

	function addItemToCart(productToAdd) {
		setCartItems(addCartItem(cartItems, productToAdd));
	}

	function removeItemFromCart(cartItemToRemove) {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	}

	function clearItemFromCart(cartItemToClear) {
		setCartItems(clearCartItem(cartItems, cartItemToClear));
	}

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart,
		cartItems,
		cartCount,
		cartTotal,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
}
