
import React, { Component } from 'react';
import { ScrollView, View, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import HTML from 'react-native-render-html';

import TopicStyle from './Styles/Topics';
import API from './Utils/API';
import HTMLRenderers from './Utils/HTMLRenderers';
import ReplyItem from "./ReplyItem";

class TopicsDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            replies: []
        };
    }

    componentDidMount(){
        this._fetchData();
    }

    _fetchData = ()=>{
        API.getReplies({topic_id: this.props.topicId}).then(res=>{
            this.setState({
                replies: res
            });
        });
    };

    _renderReplyCell = (data, idx)=>{
        return (
            <ReplyItem key={idx} data={data} idx={idx}/>
        );
    };

    render(){
        const {topicInfo} = this.props;
        console.log(topicInfo);
        return (
            <ScrollView contentContainerStyle={TopicStyle.detailContainer}>
                <View style={TopicStyle.detailTopic}>
                    <Text style={TopicStyle.detailTopicTitle}>
                        {topicInfo.title}
                    </Text>
                    <HTML html={topicInfo.content_rendered||' '}
                          containerStyle={TopicStyle.HTMLContainer}
                          imagesMaxWidth={Dimensions.get('window').width}
                          renderers={HTMLRenderers}/>
                </View>
                {this.state.replies.map(this._renderReplyCell)}
            </ScrollView>

        );
    }
}

function getTopicInfo(topics, id){
    let _res = {};
    topics.forEach(topic=>{
        if(topic.id === id){
            _res = topic;
            return false;
        }
    });
    return _res;
}

function select(state) {
    return {
        topicId: state.topicDetail,
        topicInfo: getTopicInfo(state.topics, state.topicDetail)
    };
}

export default connect(select)(TopicsDetail);

