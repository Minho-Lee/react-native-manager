import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
	const { label, value, onChangeText, placeholder, isPassword } = props;
	const { containerStyle, labelStyle, inputStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				style={inputStyle}
				autoCorrect={false}
				secureTextEntry={isPassword}
			/>
		</View>
	);
};

// NTS: For iOS, TextInput must have size set (width/height) or else it'll default to 0/0
// NTS: In this reusuable component, we are dealing with props, or children passed on from root or parents
// 		'flex' determines how much allocation of space will be used for each part of the component.
//		In our case, flex of 1,2 means the 'View' secion will be divided by 3, and labelStyle will have 1/3
//		and inputStyle will have 2/3rd of the 'View' section
const styles = {
	containerStyle: {
		height: 40,
		flex: 1,
		//justifyContent: 'flex-start',
		flexDirection: 'row',
		alignItems: 'center',

	},
	labelStyle: {
		fontWeight: '500',
		paddingLeft: 20,
		fontSize: 20,
		flex: 1,
	},
	inputStyle: {
		fontSize: 18,
		paddingRight: 5,
		color: '#000',
		lineHeight: 23,
		flex: 2,
	}
};

export { Input };
