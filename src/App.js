import React, { Component } from 'react';
// import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
// ReduxThunk is a middleware
import ReduxThunk from 'redux-thunk';
// import Router from './Navigation';
import Router from './Router';

// import { Header } from './components/common';
// import LoginForm from './components/LoginForm';

import reducers from './reducers';

class App extends Component {
	componentWillMount() {
		// Initialize Firebase
		const config = {
			apiKey: 'AIzaSyBSIrlOq32wYsJs4C52Ycc3MThlD5mE28c',
			authDomain: 'manager-862f3.firebaseapp.com',
			databaseURL: 'https://manager-862f3.firebaseio.com',
			projectId: 'manager-862f3',
			storageBucket: 'manager-862f3.appspot.com',
			messagingSenderId: '52175238481'
		};
		firebase.initializeApp(config);
	}

	render() {
		// 2nd arg is for any initial state, you can prepopulate.
		// 3rd arg is store enhancer, optional.
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
