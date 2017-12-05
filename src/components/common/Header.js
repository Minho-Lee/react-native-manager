// Import libraries for making the component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>
				{props.headerText}
			</Text>
		</View>
	);
};

// In React-Native, there is no nice default Bootstrap like component for styling
// NTS: JSX Uses CamelCase, NOT '-' casing
const styles = {
	textStyle: {
		fontSize: 30,
	},
	viewStyle: {
		paddingTop: 15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f8f8f8',
		height: 60,
		// NTS: shadow property is for iOS, use 'elevation' for android
		// shadowColor: '#000',
		// shadowOffset: {	width: 0,	height: 2	},
		// shadowOpacity: 1,
		elevation: 10,
		position: 'relative',

	}
};

// Make component available to other parts of the app
export { Header };
