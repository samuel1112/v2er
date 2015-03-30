'use strict';
var React = require('react-native');

var {
	Text,
	View
} = React;

var Style = require('./StyleSheet');
var Api = require('../../WebApi/api');

var NodeMap = React.createClass({
	getInitialState: function(){
		return {
			nodeDataSource: [],
			loaded: false
		};
	},
	componentDidMount: function(){
		this.fetchData();
	},
	fetchData: function(){
		fetch(Api.getAllNode())
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((responseData) => {
				console.log(responseData[0]);
				this.setState({
					nodeDataSource: responseData,
					loaded: true
				});
			})
			.done();
	},
	render: function(){
		if(!this.state.loaded){
			return this.renderLoading();
		}

		return (
			<View style={Style.container}>
				{
					this.state.nodeDataSource.forEach(function(v,i){
						return (
							<View style={Style.nodeView}>
								<Text style={Style.nodeText}>
								{i}
								</Text>
							</View>
						);
					})
				}
			</View>
		);
	},
	renderLoading: function(){
		return (
			<View style={Style.container}>
				<Text style={Style.loadingText}>
					{'Loading...'}
				</Text>
			</View>
		);
	}
});


module.exports = NodeMap;