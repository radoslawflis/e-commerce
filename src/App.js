import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import React from 'react';
import { setCurrentUser } from './store/user/user.action';

import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
	getCurrentUser,
} from './utils/firebase/firebase.utils';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		getCurrentUser().then((user) => console.log(user));
	}, [dispatch]);

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index={true} element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
}
export default App;
