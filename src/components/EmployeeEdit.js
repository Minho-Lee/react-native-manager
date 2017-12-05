import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';

import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, ConfirmModal } from './common';

class EmployeeEdit extends Component {
	state = {
		visible: false,
	}

	componentWillMount() {
		// NTS: this.props.employee is an object
		// We are iterating every property in employee and prepopulating the reducer so that
		// the name, phone, shift is already there
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onSaveButtonPress = () => {
		const { name, phone, shift } = this.props;
		// console.log(name, phone, shift);
		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
	};

	onTextButtonPress = () => {
		const { phone, shift } = this.props;

		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	};

	onFireButtonPress = () => {
		this.setState({ visible: true });
	};

	onAccept = () => {
		this.props.employeeDelete({ uid: this.props.employee.uid });
		this.setState({ visible: false });
	};

	onDecline = () => {
		this.setState({ visible: false });
	};

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onSaveButtonPress}>
						Save Changes
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.onTextButtonPress}>
						Text Schedule
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={this.onFireButtonPress}>
						Fire Employee
					</Button>
				</CardSection>

				{/* NTS: This modal is not visible until you send down the prop 'visible' to be true */}
				{/* NTS: You can mix in redux for application state, and also component level state, so that
							when there are states that are minor and concern only the component, it makes it easy */}
				<ConfirmModal 
					visible={this.state.visible}
					onAccept={this.onAccept}
					onDecline={this.onDecline}
				>
					Are you sure you want to delete this?
				</ConfirmModal>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { 
	employeeUpdate,
	employeeSave,
	employeeDelete })(EmployeeEdit);
