
import React, { Component } from 'react';
import { FlatList, View, StatusBar, Platform } from 'react-native';
import { connect } from 'react-redux'
import API from './Utils/API';
import Color from './Utils/Color';
import {getLatest, getNodeList, setTopicDetial} from "./actions";

import TopicsListItem from './TopicListItem';
import TopicDetail from './TopicDetail';

class TopicsView extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loading: true,
            pageLoading: false
        };
    }
    componentDidMount(){
        this._fetchData();
    }

    _fetchData = ()=>{
        const {topicType, dispatch} = this.props;
        if(this.state.pageLoading){
            return;
        }
        this.setState({
            pageLoading: true
        });
        // console.log(this.state.currentPage);
        let getter = topicType.type === 'latest'?API.getLatestTopic:API.getNodeInfo;
        let action = topicType.type === 'latest'?getLatest:getNodeList;

        getter(null).then(res=>{
            this.setState({
                loading: false,
                pageLoading: false
            });
            console.log(res);
            dispatch(action(res));
        }).done();
    };
    _keyExtractor = (data)=>{
        return data.id;
    };

    handleTopicDetail = (id)=>{
        const {dispatch} = this.props;
        dispatch(setTopicDetial(id));
        this.props.navigator.push({
            component: TopicDetail,
            title: '',

        });
        // this.props.navigation.navigate(`TopicDetail`, {id: id});
    };

    _renderTopicCell = (data)=>{
        return (
            <TopicsListItem data={data} onSelect={this.handleTopicDetail}/>
        );
    };

    render(){
        StatusBar.setBarStyle('light-content', true);
        Platform.OS==='android' ? StatusBar.setBackgroundColor(Color.SUB) : null;
        return (
            <FlatList data={this.props.topics}
                      onRefresh={this._fetchData}
                      refreshing={this.state.pageLoading}
                      extraData={this.state}
                      keyExtractor={this._keyExtractor}
                      renderItem={this._renderTopicCell} />
        );
    }
}

function select(state) {
    return {
        topicType: state.topicType,
        topics: state.topics
    };
}

export default connect(select)(TopicsView);

