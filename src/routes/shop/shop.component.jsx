import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.compononet';

import './shop.styles.scss';

function Shop() {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<div className='shop-container'>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview
						key={title}
						products={products}
						title={title}
					/>
				);
			})}
		</div>
	);
}

export default Shop;
