import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';

function Category() {
	const { category } = useParams(); //accessing variable from url
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [categoriesMap, category]); //set products only when CategoriesMap or categories changes, not with every rendering
	console.log('products', products);
	return (
		<div className='category-container'>
			{products &&
				products.map((product) => {
					return <ProductCard key={product.id} product={product} />;
				})}
		</div>
	);
}

export default Category;
