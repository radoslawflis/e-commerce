import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.compononet';
import { Spinner } from '../../components/spinner/spinner.component';

import {
	selectCategoriesMap,
	selectCategoriesIsLoading,
} from '../../store/categories/category.selector';

function CategoriesPreview() {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	return (
		<Fragment>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
					return (
						<CategoryPreview
							key={title}
							products={products}
							title={title}
						/>
					);
				})
			)}
		</Fragment>
	);
}

export default CategoriesPreview;
