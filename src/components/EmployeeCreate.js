import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

import { Card, CardSection, Button } from './common';

class EmployeeCreate extends Component {
	onEmployeeFormSubmit = () => {
		const { name, phone, shift } = this.props;

		console.log('Form Submitted!');
		// if shift is not empty, then default it to 'Monday'
		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}

	render() {
		// console.log(this.props.employee);

		return (
			<Card>
				{/* ...this.props sends down any props created from this component */}
				<EmployeeForm {...this.props} />

				<CardSection>
					<Button
						onPress={this.onEmployeeFormSubmit}
					>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return {
		name,
		phone,
		shift,
	};
};

export default connect(mapStateToProps, { 
	employeeUpdate, employeeCreate,
})(EmployeeCreate);
