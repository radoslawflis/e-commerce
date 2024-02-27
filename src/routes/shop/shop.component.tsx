import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { fetchCategoriesStart } from '../../store/categories/category.action';

function Shop() {
	const dispatch = useDispatch();

	//if component mounts fire fetching
	useEffect(() => {
		dispatch(fetchCategoriesStart());
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />}></Route>
			<Route path=':category' element={<Category />}></Route>
		</Routes>
	);
}

export default Shop;