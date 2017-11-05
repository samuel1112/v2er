
import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

import TopicStyle from './Styles/Topics';
import HTMLRenderers from './Utils/HTMLRenderers';

export default class ReplyItem extends Component {
    render(){
        const { data, idx } = this.props;
        return (
            <View style={TopicStyle.detailReplyItem} key={data.id}>
                <View style={TopicStyle.detailReplyInfo}>
                    <View style={TopicStyle.replyNum}>
                        <Text style={TopicStyle.replyNumText}>{idx+1}</Text>
                    </View>
                    <Image style={TopicStyle.replyAvatar}
                           source={{uri: `https:${data.member.avatar_mini}`}} />
                    <View style={TopicStyle.replyName}>
                        <Text style={TopicStyle.replyNameText}>
                            {data.member.username}
                        </Text>
                    </View>
                </View>
                <View style={TopicStyle.replyContent}>
                    <HTML html={data.content_rendered||' '}
                          containerStyle={TopicStyle.HTMLContainer}
                          imagesMaxWidth={Dimensions.get('window').width*0.6}
                          renderers={HTMLRenderers}/>
                </View>
            </View>
        );
    }
}