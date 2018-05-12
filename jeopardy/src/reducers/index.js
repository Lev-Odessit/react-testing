import { SET_CATEGORIES, PICK_CATEGORY } from '../actions';
import { combineReducers } from 'redux';

function categories(state = [], action) {
	switch(action.type) {
		case SET_CATEGORIES:
			return action.payload;
		default:
			return state;
	}
}

function category(state = {}, action) {
	switch(action.type) {
		case PICK_CATEGORY:
			return action.payload;
		default:
			return state;
	}
}

export default combineReducers({
	categories,
	category
});
