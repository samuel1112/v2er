'use strict';

var React = require('react-native');

var {
	StyleSheet
} = React;

module.exports = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#eeeeee'
	},
	container: {
		flex:1,
		backgroundColor: '#ffffff',
		marginBottom: 30,
		shadowColor: '#000000',
		borderColor: '#ededed',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		shadowOffset: {h: -5, w: 0}
	},
	header: {
		margin: 0
	},
	TopicList: {
		backgroundColor: '#eeeeee',
	},
	contentWrapper: {
		padding: 10,
		paddingTop: 18,
		borderColor: '#aaaaaa'
	},
	title: {
		fontSize: 16,
		textAlign: 'left'
	},
	content: {
		fontSize: 14,
		color: '#444444'
	},

	member: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#eeeeee',
		padding: 8,
		borderBottomWidth: 1,
		borderColor: '#e2e2e2'
	},
	memberInfo: {
		flex: 1,
		flexDirection: 'row'
	},
	memberAvatar: {
		width: 16,
		height: 16,
		borderRadius: 8
	},
	memberName: {
		flex: 1,
		marginLeft: 4,
		color: '#656666'
	},
	memberTime: {
		flex: 1,
		height: 16,
		lineHeight: 16,
		alignItems: 'flex-end',
		color: '#666666'
	}
});
