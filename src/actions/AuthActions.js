import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	LOGOUT_USER } from './types';

// Use Redux-Thunk for async calls, it allows us to bend 'action creator' rules
// It must return a 'function', not 'object.' <- this f'n will be called with dispatch.

// These are 'action creators' that return 'actions', action creators are f'ns
// Action is an object with a 'type' property.
export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text,
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text,
	};
};

export const loginUser = ({ email, password }) => {
	// This is returning a f'n via ReduxThunk, and redux calls it.
	// Only after the user is logged in (callback) then the 'dispatch' is triggered which will
	// send the action to all the reducers
	// Using ReduxThunk, you can dispatch multiple actions
	return (dispatch) => {
		dispatch({
			type: LOGIN_USER,
		});
		// Only if user is authenticated, it will go into 'then()' which will trigger the dispatch
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((user) => {
				// console.log(user);
				loginUserSuccess(dispatch, user);
			})
			.catch((error) => {
				console.log(error);
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then((user) =>	loginUserSuccess(dispatch, user))
					.catch(() => loginUserFail(dispatch));
			});
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		firebase.auth().signOut()
			.then(msg => {
				console.log(msg);
				dispatch({
					type: LOGOUT_USER,
				});
			})
			.catch(error => console.log(error));
	};
};

// Helper method to execute dispatch function since ReduxThunk gets clunky, bound for typos
const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user,
	});

	Actions.main();
};

const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL,
	});
};
