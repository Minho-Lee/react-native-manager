import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
		/* Sending in an array of styles, one defined below and the other being passed down from its parent */
		/* It'll attempt to use the initial style, unless there is something at the end of an array */
		<View style={[styles.containerStyle, props.style]}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
	}
};

export { CardSection };
