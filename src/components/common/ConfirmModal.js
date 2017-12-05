import React from 'react';
import { Text, View, Modal } from 'react-native';

import { CardSection } from './CardSection';
import { Button } from './Button';

const ConfirmModal = ({ children, onAccept, onDecline, visible }) => {
	const { containerStyle, cardSectionStyle, textStyle } = styles;

	return (
		<Modal
			animationType="slide"
			onRequestClose={() => {}}
			transparent
			visible={visible}
		>
			<View style={containerStyle}>
				<CardSection style={cardSectionStyle}>
					<Text style={textStyle}>{children}</Text>
				</CardSection>

				<CardSection>
					{/* NTS: By not putting the '()' at the end of a function, it's a reference and not execution*/}
					<Button onPress={onAccept}>Yes</Button>
					<Button onPress={onDecline}>No</Button>
				</CardSection>
			</View>
		</Modal>
	);
};

const styles = {
	cardSectionStyle: {
		// Remeber by default, CardSection has justifyContent: flex-start
		justifyContent: 'center',
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40,
		color: 'black',
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center',
	}
};

export { ConfirmModal };
