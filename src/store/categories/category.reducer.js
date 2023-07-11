import { CATEGORIES_ACTION_TYPES } from './category.types';

export const CATEGORIES_INITAL_STATE = {
	categoriesMap: {},
};

export function categoriesReducer(
	state = CATEGORIES_INITAL_STATE,
	action = {}
) {
	const { type, payload } = action;
	switch (type) {
		case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
			return { ...state, categoriesMap: payload };
		default:
			return state;
	}
}
