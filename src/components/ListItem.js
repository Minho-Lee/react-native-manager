import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

class ListItem extends Component {
	onRowPress = () => {
		// You can send down props within Actions.key() which the component then can use it via this.props
		Actions.employeeEdit({
			employee: this.props.employee
		});
	};

	render() {
		const { name } = this.props.employee;

		return (
			<TouchableWithoutFeedback onPress={this.onRowPress}>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>{name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15,
		color: 'black',
	},
};

export default ListItem;
