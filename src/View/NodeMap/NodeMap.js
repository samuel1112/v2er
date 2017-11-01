'use strict';
var React = require('react-native');

var {
	Text,
	View,
	ListView
} = React;

var Style = require('./StyleSheet');
var Api = require('../../WebApi/api');

var NodeMap = React.createClass({
	getInitialState: function(){
		return {
			nodeDataSource: new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			}),
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
					nodeDataSource: this.state.nodeDataSource.cloneWithRows(responseData),
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

			<ListView
				dataSource={this.state.nodeDataSource}
				renderRow={this.renderNodeCell}
				onEndReachedThreshold={20}
				style={Style.nodeContainer} />

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
	},
	renderNodeCell: function(data){
		return (
			<View style={Style.nodeViewContainer}>
				<View style={Style.nodeView}>
					<Text style={Style.nodeText}>
						{data.title}
					</Text>
					<Text style={Style.nodeHeader}>
						{data.header}
					</Text>
					<Text style={Style.nodeFooter}>
						{data.footer}
					</Text>
					
				</View>
				<View style={Style.nodeNumContainer}>
					<Text style={Style.nodeNum}>{data.topics}</Text>
				</View>
			</View>
		);			
	}
});


module.exports = NodeMap;