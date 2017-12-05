import React from 'react';
import { StackNavigator } from 'react-navigation';

import LoginForm from './components/LoginForm';

const Router = StackNavigator({
	login: {
		screen: LoginForm,
		navigationOptions: {
			headerTitle: 'Please Login',
		}
	}
},
{
	initialRouteName: 'login',
});

export default Router;
