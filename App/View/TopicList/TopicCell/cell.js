
var React = require('react-native');

var {
	View,
	Text,
	TouchableHighlight,
	Image
} = React;

var Style = require('./StyleSheet');

// <TouchableHighLight onPress={this.props.onSelect}>
			// 	<View style={Style.container}>
			// 		<Text style={Style.title}>
			// 			{this.props.title}
			// 		</Text>
					// <Text style={Style.content}>
					// 	{this.props.data.content}
					// </Text>
			// 	</View>
			// </TouchableHighLight>

var cell = React.createClass({
	render: function(){
		var reply = null,
			data = this.props.data;
		if(data.replies !== 0){
			reply = (
				<View style={Style.replyNumWrapper}>
					<View style={Style.replyNum}>
						<Text style={Style.replyNumText}>{data.replies}</Text>
					</View>
				</View>
			);
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
					
					<Image style={Style.avatar}
						source={{
							uri: 'https:'+data.member.avatar_normal
						}} />
				</View>
			</TouchableHighlight>
		);
	}
});

module.exports = cell;