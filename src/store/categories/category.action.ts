import { CATEGORIES_ACTION_TYPES, Category } from './category.types';

import { createAction, Action, ActionWithPayload } from '../../utils/reducer/reducer.utils';

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed;

//start fetching
export function fetchCategoriesStart(): FetchCategoriesStart {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}
//fetching success
export function fetchCategoriesSuccess(categoriesArray: Category[]): FetchCategoriesSuccess {
	return createAction(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
		categoriesArray
	);
}
//fetching failure
export function fetchCategoriesFailed(error: Error) {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
}
