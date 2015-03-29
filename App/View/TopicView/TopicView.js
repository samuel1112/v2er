'use strict';
var React = require('react-native');

var {
	Text,
	View,
	ListView
} = React;

var Style = require('./StyleSheet');
var Api = require('../../WebApi/api');

var ReplyCell = require('./ReplyCell/cell');

var textRenderer = require('../../Util/textRenderer');


var TopicView = React.createClass({
	getInitialState: function(){
		return {
			repliesDataSource: new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			}),
			loaded: false
		};
	},
	componentDidMount: function(){
		this.fetchData();
	},
	fetchData: function(){
		fetch(Api.getReplies({
			topic_id: this.props.data.id
		}))
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((responseData) => {
				// console.log(responseData[0]);
				this.setState({
					repliesDataSource: this.state.repliesDataSource.cloneWithRows(responseData),
					loaded: true
				});
			})
			.done();
	},
	render: function(){
		return (
			<ListView renderHeader={this.renderTopicDetail}
				dataSource={this.state.repliesDataSource}
				renderRow={this.renderReplies}
				style={Style.TopicList} />
		);
	},
	renderTopicDetail: function(){
		// console.log(textRenderer(this.props.data.content));
		//	<View style={Style.titleWrapper}>
					// 	<Text style={Style.title}>
					// 		{this.props.data.title}
					// 	</Text>
					// </View>
		return (
			<View style={Style.wrapper}>
				<View style={Style.container}>
					<View style={Style.header}>
						<View style={Style.contentWrapper}>
							<Text style={Style.content}>
								{this.props.data.content}
							</Text>
						</View>
					</View>
				</View>
			</View>
		);
	},
	renderReplies: function(data){
		return (
			<ReplyCell data={data} />
		);
	}
});

module.exports = TopicView;
