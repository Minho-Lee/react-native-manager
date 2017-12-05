// Purpose of this file is to place reusable code that will populate EmployeeEdit and EmployeeCreate files
import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
	render() {
		return (
			<View>
				<CardSection>
					<Input
						label='Name'
						placeholder='John'
						value={this.props.name}
						onChangeText={(text) => this.props.employeeUpdate({ prop: 'name', value: text })}
					/>
				</CardSection>

				<CardSection>
					<Input
						label='Phone'
						placeholder='647-173-2981'
						value={this.props.phone}
						onChangeText={(text) => this.props.employeeUpdate({ prop: 'phone', value: text })}
					/>
				</CardSection>

				{/* NTS: 'CardSection' is a reusuable component we created, so default 'style' props does not
						get applied automatically as it does for 'react-native' tags. 
						We have to go into the 'CardSection' component and use the 'style' prop being sent down */}
				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={styles.pickerLabelStyle}>Select Shift</Text>
					{/* NTS: By Default, Picker renders with 0 dimensions, must set it */}
					<Picker
						mode='dropdown'
						selectedValue={this.props.shift}
						onValueChange={(day) => this.props.employeeUpdate({ prop: 'shift', value: day })}
					>
						<Picker.Item label='Monday' value='Monday' />
						<Picker.Item label='Tuesday' value='Tuesday' />
						<Picker.Item label='Wednesday' value='Wednesday' />
						<Picker.Item label='Thursday' value='Thursday' />
						<Picker.Item label='Friday' value='Friday' />
						<Picker.Item label='Saturday' value='Saturday' />
						<Picker.Item label='Sunday' value='Sunday' />
					</Picker>
				</CardSection>
			</View>
		);
	}
}

const styles = {
	pickerLabelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		color: 'black',
	}
};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
