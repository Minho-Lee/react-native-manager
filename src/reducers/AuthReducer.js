// Responsible for all sorts of authentication
import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	LOGOUT_USER } from '../actions/types';

const INIT_STATE = { 
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false,
	loggedIn: false,
};

export default (state = INIT_STATE, action) => {
	//console.log(action);

	switch (action.type) {
		case EMAIL_CHANGED: {
			// This ES6 Syntax grabs whatever was in 'state', grabs 'email' property, and replaces it
			// with 'action.payload', effectively returning a new object
			return { ...state, email: action.payload };
		}

		case PASSWORD_CHANGED: {
			return { ...state, password: action.payload };
		}

		case LOGIN_USER_SUCCESS: {
			return { ...state, 
								// this is to clear out cached info on Redux app state so it doesn't store info
								...INIT_STATE,
								user: action.payload,
								loggedIn: true,
							};
		}

		case LOGIN_USER_FAIL: {
			return { ...state,
								error: 'Authentication Failed',
								loading: false,
								loggedIn: false,
								password: '' };
		}

		case LOGIN_USER: {
			return { ...state,
								error: '',
								loading: true,
								password: '',
			};
		}

		case LOGOUT_USER: {
			return { ...state, ...INIT_STATE };
		}
		
		default:
			return state;
	}
};

