'use strict';
var React = require('react-native');

var {
	Text,
	View,
	ListView,
	NetInfo
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
			loaded: false,
			pageLoaded: false,
			currentPage: 0,
			showImg: false
		};
	},
	componentDidMount: function(){
		this.fetchData();
		NetInfo.reachabilityIOS.fetch().done((reach) => {
			console.log('Initial: ' + reach);
			if(reach !== 'cell' ){
				this.setState({
					showImg: true
				});
			}
		});
		function handleFirstReachabilityChange(reach) {
			console.log('First change: ' + reach);
			if(reach !== 'cell'){
				this.setState({
					showImg: true
				});
			} else {
				this.setState({
					showImg: false
				});
			}
			NetInfo.reachabilityIOS.removeEventListener('change',handleFirstReachabilityChange);
		}
		NetInfo.reachabilityIOS.addEventListener('change',handleFirstReachabilityChange.bind(this));
	},
	fetchData: function(){
		this.setState({
			pageLoaded: false
		});
		fetch(Api.getLatestTopic({
			p: this.state.currentPage+1
		}))
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((responseData) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData),
					loaded: true,
					currentPage: this.state.currentPage+1,
					pageLoaded: true
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
					{'Loading...'}
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
				renderFooter={this.renderFooterLoading}
				onEndReached={this.fetchData}
				onEndReachedThreshold={20}
				style={Style.listView} />
		);
	},
	renderTopicCell: function(data){
		return (
			<TopicCell onSelect={
					() => this.selectTopic(data)
				}
				showImg={this.state.showImg}
				data={data} />
		); 
	},
	renderFooterLoading: function(){
		if(this.state.pageLoaded){
			return null;
		}
		return (
			<View style={Style.loading}>
				<Text style={Style.loadingInfo}>{'loading...'}</Text>
			</View>
		);
	},
	selectTopic: function(data){
		// console.log(data);
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