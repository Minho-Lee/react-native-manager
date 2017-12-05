import { 
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEE_SAVE_SUCCESS,
} from '../actions/types';

const INIT_STATE = {
	name: '',
	phone: '',
	shift: '',
};

export default (state = INIT_STATE, action) => {
	// console.log(action);
	switch (action.type) {
		// example -> action.payload === {prop: 'name', value: 'jane'}
		case EMPLOYEE_UPDATE: {
			// the '[]' is not making it into an array! It's an ES6 syntax to execute 'key interpolation'
			// so if prop is 'name', it'll pull out 'name' from the original 'state' like state[name].
			return {
				...state,
				[action.payload.prop]: action.payload.value,
			};
		}
		case EMPLOYEE_CREATE: {
			return INIT_STATE;
		}
		case EMPLOYEE_SAVE_SUCCESS: {
			return INIT_STATE;
		}
		
		default:
			return state;
	}
};
