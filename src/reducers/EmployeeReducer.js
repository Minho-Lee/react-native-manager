import {
	EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

// Notice how we are setting our initial state to be an 'object' instead of an array.
// Firebase by default returns 'objects' containing different keys
// This helps with Redux, since redux always require a new object to be returned. 
// If it was an array, we have to go into the array and splice it and return specific one
const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
	switch (action.type) {

		case EMPLOYEES_FETCH_SUCCESS: {
			return action.payload;
		}

		default:
			return state;
	}
};
