import { combineReducers } from 'redux';
import { SET_STACK, LOAD_STACKS, ADD_STACK } from '../actions';

function stack(state = {}, action) {
	switch(action.type){
		case SET_STACK:
			return action.payload;
		default:
			return state;
	}
}

function stacks(state = [], action) {
	switch(action.type){
		case LOAD_STACKS:
			return action.payload;
		case ADD_STACK:
			return [
				...state,
				{
					...action.payload,
					id: state.length
				}
			];
		default:
			return state;
	}
}

export default combineReducers({ stack, stacks });
