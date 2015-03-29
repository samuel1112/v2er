'use strict';
var React = require('react-native');

var {
	Text,
	View,
	Image,
	ListView
} = React;

var Style = require('./StyleSheet');
var Api = require('../../WebApi/api');

var ReplyCell = require('./ReplyCell/cell');

var textRenderer = require('../../Util/textRenderer');


function beautyTime(date){
	function fixLen(time){
		time = ''+time;
		if(time.length < 2){
			return '0'+time;
		}
		return time;
	}
	return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+fixLen(date.getHours())+':'+fixLen(date.getMinutes());
}


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
		var createTime = new Date(this.props.data.created*1000);
		return (
			<View style={Style.wrapper}>
				<View style={Style.container}>
					<View style={Style.member}>
						<View style={Style.memberInfo}>
							<Image style={Style.memberAvatar} 
								source={{
									uri: 'https:'+this.props.data.member.avatar_mini
								}}/>
							<Text style={Style.memberName}>
								{this.props.data.member.username}
							</Text>
						</View>
						<View style={Style.memberTime}>
							<Text>{beautyTime(createTime)}</Text>
						</View>
					</View>
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
