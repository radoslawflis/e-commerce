import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import { Spinner } from '../../components/spinner/spinner.component';
import {
	selectCategoriesMap,
	selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

import { CategoryContainer, CategoryTitle } from './category.styles';

function Category() {
	const { category } = useParams(); //accessing variable from url
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]); //set products only when CategoriesMap or categories changes, not with every rendering

	return (
		<>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products &&
						products.map((product) => {
							return (
								<ProductCard
									key={product.id}
									product={product}
								/>
							);
						})}
				</CategoryContainer>
			)}
		</>
	);
}

export default Category;
