import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { Card, CardSection, Input, Button, Spinner } from './common';
import * as actions from '../actions';

class LoginForm extends Component {
	onEmailChange = (text) => {
		this.props.emailChanged(text);
	};

	onPasswordChange = (text) => {
		this.props.passwordChanged(text);
	};

	onLoginButtonPress = () => {
		//const { email, password } = this.props;
		this.props.loginUser(this.props);
	};

	onLogoutButtonPress = () => {
		this.props.logoutUser();
	};
	
	renderError = () => {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}

	renderSpinner = () => {
		if (this.props.loading) {
			return (
				<Spinner size='large' />
			);
		}
		return (
			<Button onPress={this.onLoginButtonPress}>
				Login
			</Button>
		);
	};

	// renderButton = () => {
	// 	if (!this.props.loggedIn) {
	// 		return (
	// 			<Button	onPress={this.onLoginButtonPress}>
	// 				Login
	// 			</Button>
	// 		);
	// 	}

	// 	return (
	// 		<Button onPress={this.onLogoutButtonPress}>
	// 			Logout
	// 		</Button>
	// 	);
	// }

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label='Email'
						placeholder='user@gmail.com'
						onChangeText={this.onEmailChange}
						value={this.props.email}
					/>
				</CardSection>
					
				<CardSection>
					<Input 
						isPassword
						label='Password'
						placeholder='password'
						onChangeText={this.onPasswordChange}
						value={this.props.password}
					/>
				</CardSection>

				{this.renderError()}
				

				<CardSection>
					{this.renderSpinner()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
	},
};

const mapStateToProps = (state) => {
	// In here, it access the reducer to grab the app state and passes through state.keyword
	return { 
		email: state.auth.email, 
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading,
		loggedIn: state.auth.loggedIn,
	};
};

// NTS: the 2nd arg is the action creator which we are passing to this component, and
//			this enables the component to access that action via 'this.props.XXXX';
export default connect(mapStateToProps, actions)(LoginForm);
