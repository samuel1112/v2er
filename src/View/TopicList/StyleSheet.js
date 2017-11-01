'use strict';

var React = require('react-native');

var {
	StyleSheet
} = React;

module.exports = StyleSheet.create({
	container: {
		backgroundColor: '#efefef',
		flex:1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	loadingText: {
		fontSize: 25,
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 10,
		marginRight: 10,
		color: '#666E74',
		flex:1
	},
	listView: {
		backgroundColor: '#efefef'
	},
	loading: {
		backgroundColor:'#efefef',
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	loadingInfo: {
		fontSize: 14,
		color: '#888888'
	}
});
