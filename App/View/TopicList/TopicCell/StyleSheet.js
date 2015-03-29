'use strict';

var React = require('react-native');

var {
	StyleSheet
} = React;

module.exports = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 8,
		paddingRight: 8,
		borderBottomWidth: 1,
		borderColor: '#E2E2E2'
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'left',
		color: '#666E74'
	},
	titleWrapper: {
		flex: 1,
		marginBottom: 5
	},
	category: {
		color: '#aaaaaa',
		fontSize: 12,
		textAlign: 'left'
	},
	content: {
		fontSize: 12,
		color: '#555555'
	},
	avatar: {
		alignSelf: 'center',
		width: 30,
		height: 30,
		marginLeft: 10,
		borderRadius:15,
		justifyContent: 'center'
	},
	contentWrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	replyNumWrapper: {
		width: 30,
		textAlign: 'right',
		marginLeft: 10,
		justifyContent: 'center',
		alignSelf: 'center',

	},
	replyNum: {
		backgroundColor: '#969cb1',
		// color: '#333333',
		flex: 1,
		alignItems: 'center',
		height: 30,
		width: 30,
		// textAlign: 'center',
		justifyContent: 'center',
		borderRadius: 15
	},
	replyNumText: {
		color: '#ffffff',
		fontWeight: '600'
	}
});