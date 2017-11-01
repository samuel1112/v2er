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
		// borderTopWidth: 1,
		// borderLeftWidth: 1,
		// borderRightWidth: 1,
		// borderRadius: 4,
		borderColor: '#efeee4',
		// marginTop: 10,
		// marginBottom: 10,
		// marginLeft: 10,
		// marginRight: 10
	},
	content: {
		flex: 1,
		marginBottom: 5
	},
	replyUserName: {
		fontSize: 12,
		color: '#555555'
	},
	replyContent: {
		marginLeft: 5,
		fontSize: 14,
		color: '#666772'
	},
	avatar: {
		width: 20,
		height: 20,
		marginLeft: 10,
		borderRadius: 10
	},
});