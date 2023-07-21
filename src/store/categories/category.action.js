import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

//start fetching
export function setCategories(categoriesArray) {
	return createAction(
		CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
		categoriesArray
	);
}
