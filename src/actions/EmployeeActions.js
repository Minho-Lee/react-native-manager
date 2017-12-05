//action creators for employee
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEES_FETCH_SUCCESS,
	EMPLOYEE_SAVE_SUCCESS,
} from './types';

// props would be things like 'name', 'phone', 'shift' of an employee
export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	};
};

export const employeeCreate = ({ name, phone, shift }) => {
	// Techincally, creating employee needs to update firebase DB and not dispatch any action (no need to return action)
	// So we will use ReduxThunk, to pretend dispatching an action
	const { currentUser } = firebase.auth();
	// console.log(currentUser);
	// the 'ref()' is a path to our JSON (find key 'users' -> find key 'uid of currentUser' -> find key 'employees')
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			// Return back to employeeList after creating an employee, type: 'reset' resets the entire View Stack
			.then(() => {
				dispatch({ type: EMPLOYEE_CREATE });
				Actions.pop({ type: 'reset' });
			});
	};
};

export const employeesFetch = () => {
	const { currentUser } = firebase.auth();
	// NTS: ReduxThunk is used for Async calls!
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			// this 'on()' is persistent, which means it'll last (like a websocket) and look for changes
			.on('value', snapshot => {
				//snapshot is the object that describes what data is in that ref
				dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};

export const employeeSave = ({ name, phone, shift, uid }) => {
	// Saving an existing record, so 'uid' is crucial
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
			.set({ name, phone, shift })
			// NTS: At this point, Employee Form will hold the currently editing state of an employee
			// So after editing, if you click 'Add', it will show whichever employee was most recently edited.
			// To avoid this, you have to clear out the state in EmployeeFormReducer
			.then(() => {
				dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
				Actions.pop({ type: 'reset' });
			});
	};
};

export const employeeDelete = ({ uid }) => {
	const { currentUser } = firebase.auth();

	return () => {
		firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
			.remove()
			.then(() => {
				Actions.pop({ type: 'reset' });
				console.log('Employee Fired!');
			});
	};
};

export const stopListening = () => {
	const { currentUser } = firebase.auth();

	return () => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.off('value');
	};
};
