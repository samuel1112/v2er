
var React = require('react-native');

var {
	View,
	Text,
	TouchableHighlight,
	Image
} = React;

var Style = require('./StyleSheet');


var cell = React.createClass({
	render: function(){
		var reply = null,
			data = this.props.data,
			img = null;

		console.log(this.props.showImg);
		if(data.replies !== 0){
			reply = (
				<View style={Style.replyNumWrapper}>
					<View style={Style.replyNum}>
						<Text style={Style.replyNumText}>{data.replies}</Text>
					</View>
				</View>
			);
		}

		if(this.props.showImg){
			img = <Image style={Style.avatar}
				source={{
					uri: 'https:'+data.member.avatar_normal
				}} />
		}
		return (
			<TouchableHighlight onPress={this.props.onSelect} underlayColor={'#d2f5ff'}>
				<View style={Style.container}>
					<View style={Style.contentWrapper}>
						<View style={Style.titleWrapper}>
							<Text style={Style.category}>
								{data.node.title}
							</Text>
							<Text style={Style.title}>
								{data.title}
							</Text>
						</View>
						{reply}
					</View>
					{img}
				</View>
			</TouchableHighlight>
		);
	}
});

module.exports = cell;