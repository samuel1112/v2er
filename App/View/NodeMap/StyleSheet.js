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
	nodeContainer: {
		backgroundColor: '#efefef'
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
	nodeViewContainer: {
		backgroundColor: '#ffffff',
		flex:1,
		height: 50,
		marginBottom: 20,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#dedede',
		justifyContent: 'center'
	},
	nodeView: {
		flex: 1,
		padding: 10
	},
	nodeNumContainer: {
		width: 40,
		backgroundColor: '#ffffff'
	},
	nodeText: {
		fontSize: 16,
		color: '#000000'
	}
});