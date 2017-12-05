import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// NTS: Just a reminder that purpose of using props is so that this component can be made reusuable.
// 	If instead it had some specific functionality for this app, then it would not be applicable,
// 	for another app.
const Button = (props) => {
	const { buttonStyle, textStyle } = styles;
	return (
		<TouchableOpacity 
			style={buttonStyle}
			onPress={props.onPress}
		>
			<Text style={textStyle}>{props.children}</Text>
		</TouchableOpacity>
	);
};

// NTS: 'flex: 1' means I want the component to fill in the width of the device
const styles = {
	buttonStyle: {
		flex: 1,
		// 'alignSelf' is when you want the element to modify the element itself (part of flexbox)
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '700',
		paddingTop: 10,
		paddingBottom: 10,
	},
};

export { Button };
