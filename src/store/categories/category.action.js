import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

//start fetching
export function fetchCategoriesStart() {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}
//fetching success
export function fetchCategoriesSuccess(categoriesArray) {
	return createAction(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
		categoriesArray
	);
}
//fetching failure
export function fetchCategoriesFailed(error) {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
}
