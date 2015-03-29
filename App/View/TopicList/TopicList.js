'use strict';
var React = require('react-native');

var {
	Text,
	View,
	ListView
} = React;

var Style = require('./StyleSheet');
var Api = require('../../WebApi/api');

var TopicCell = require('./TopicCell/cell');

var TopicView = require('../TopicView/TopicView');

var TopicList = React.createClass({
	getInitialState: function(){
		return {
			dataSource: new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			}),
			loaded: false
		};
	},
	componentDidMount: function(){
		this.fetchData();
	},
	fetchData: function(){
		fetch(Api.getLatestTopic())
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((responseData) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData),
					loaded: true
				});
			})
			.done();
	},
	render: function(){
		if(!this.state.loaded){
			return this.renderLoading();
		}
		return this.renderTopicList();
	},
	renderLoading: function(){
		return (
			<View style={Style.container}>
				<Text style={Style.loadingText}>
					Loading...
				</Text>
			</View>
		);
	},
	renderTopicList: function(){
		// console.log(this.props);
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderTopicCell}
				style={Style.listView} />
		);
	},
	renderTopicCell: function(data){
		return (
			<TopicCell onSelect={
					() => this.selectTopic(data)
				}
				data={data} />
		); 
	},
	selectTopic: function(data){
		console.log(data);
		this.props.navigator.push({
			title: data.title,
			component: TopicView,
			passProps: {
				data: data
			}
		});
	}
});

module.exports = TopicList;