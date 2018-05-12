import { SET_CATEGORIES } from '../actions';

function categories(state = [], action) {
	switch(action.type) {
		case SET_CATEGORIES:
			return action.payload.categories;
		default:
			return state;
	}
}

export default categories;
