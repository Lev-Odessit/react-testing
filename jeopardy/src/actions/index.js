export const SET_CATEGORIES = 'SET_CATEGORIES';
export const PICK_CATEGORY = 'PICK_CATEGORY';

export function setCategories(categories) {
	return {
		type: SET_CATEGORIES,
		payload: categories
	}
}

export function pickCategory(category) {
	return {
		type: PICK_CATEGORY,
		payload: category
	}
}
