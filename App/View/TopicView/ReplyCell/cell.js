
var React = require('react-native');

var {
	View,
	Text,
	Image
} = React;

var Style = require('./StyleSheet');


var cell = React.createClass({
	render: function(){
		console.log(this.props.data.member);
		return (
			<View style={Style.container}>
				<View style={Style.content}>
					<Text style={Style.replyUserName}>
						{this.props.data.member.username}
					</Text>
					<Text style={Style.replyContent}>
						{this.props.data.content}
					</Text>
				</View>
				<Image style={Style.avatar}
					source={{
						uri: 'https:'+this.props.data.member.avatar_normal
					}} />
			</View>
		);
	}
});

module.exports = cell;