import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

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

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart());

	try {
		const categoriesArray = await getCategoriesAndDocuments();
		dispatch(fetchCategoriesSuccess(categoriesArray));
	} catch (error) {
		dispatch(fetchCategoriesFailed(error));
	}
};
