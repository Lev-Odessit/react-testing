import rootReducer from './index';
import * as actions from '../actions'
import { stack, stacks } from "../data/fixtures";

describe('root reducer', () => {

	it('returns the initial state', () => {
		expect(rootReducer({},{})).toEqual({
			stack: {},
			stacks: []
		});
	});

	it('sets the main stack', () => {
		expect(rootReducer({}, {
			type: actions.SET_STACK,
			payload: stack
		})).toEqual({ stack, stacks: [] });
	});

	it('load stacks', () => {
		expect(rootReducer({}, {
			type: actions.LOAD_STACKS,
			payload: stacks
		})).toEqual({ stack:{}, stacks });
	});

	it('add a stack', () => {
		expect(rootReducer({}, {
			type: actions.ADD_STACK,
			payload: stack
		})).toEqual({ stack:{}, stacks:[stack] });
	});

});
