
import React, { Component } from 'react';
import { ScrollView, FlatList, View, Text, StatusBar, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import HTML from 'react-native-render-html';

import TopicStyle from './Styles/Topics';
import API from './Utils/API';

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
    _keyExtractor = (data)=>{
        return data.id;
    };

    _renderReplyCell = (data)=>{
        return (
            <View style={{backgroundColor:'white', flex: 1, padding: 10}}>
                <HTML html={data.content_rendered||' '}
                      imagesMaxWidth={Dimensions.get('window').width*0.6}
                      ignoredTags={['image','img']}
                      style={TopicStyle.detailTopicHTML}/>
            </View>
        );
    };

    render(){
        const {topicInfo} = this.props;
        console.log(topicInfo);
        return (
            <ScrollView contentContainerStyle={TopicStyle.detailContainer}>
                <View style={TopicStyle.detailTopic}>
                    <View>
                        <Text style={TopicStyle.detailTopicTitle}>
                            {topicInfo.title}
                        </Text>
                    </View>
                    <View>
                        <HTML html={topicInfo.content_rendered||' '}
                              imagesMaxWidth={Dimensions.get('window').width}
                              ignoredTags={['image','img']}
                              style={TopicStyle.detailTopicHTML}/>
                    </View>
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

