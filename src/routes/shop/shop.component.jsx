import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/category.action';

function Shop() {
	const dispatch = useDispatch();

	useEffect(() => {
		async function getCategoriesMap() {
			const categoryMap = await getCategoriesAndDocuments();
			dispatch(setCategoriesMap(categoryMap));
		}
		getCategoriesMap();
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />}></Route>
			<Route path=':category' element={<Category />}></Route>
		</Routes>
	);
}

export default Shop;
