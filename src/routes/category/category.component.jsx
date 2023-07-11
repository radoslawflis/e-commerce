import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import { CategoryContainer, CategoryTitle } from './category.styles';

function Category() {
	const { category } = useParams(); //accessing variable from url
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [categoriesMap, category]); //set products only when CategoriesMap or categories changes, not with every rendering

	return (
		<>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			<CategoryContainer>
				{products &&
					products.map((product) => {
						return (
							<ProductCard key={product.id} product={product} />
						);
					})}
			</CategoryContainer>
		</>
	);
}

export default Category;
