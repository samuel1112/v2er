
import React, { Component } from 'react';
import { FlatList,View,StatusBar } from 'react-native';
import TopicStyle from './Styles/Topics';
import API from './Utils/API';

import TopicsListItem from './TopicListItem';

export default class TopicsView extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loading: true,
            currentPage: 0,
            pageLoading: false
        };
    }
    componentDidMount(){
        this._fetchData();
    }

    _fetchData = ()=>{
        if(this.state.pageLoading){
            return;
        }
        this.setState({
            pageLoading: true
        });
        // console.log(this.state.currentPage);
        API.getLatestTopic(null).then(res=>{
            this.setState({
                data: res.sort((a,b)=>{return b.created - a.created;}),
                loading: false,
                currentPage: this.state.currentPage+1,
                pageLoading: false
            });
        }).done();
    };
    _keyExtractor = (data)=>{
        return data.id;
    };

    handleTopicDetail = (id)=>{
        this.props.navigation.navigate(`TopicDetail`, {id: id});
    };

    _renderTopicCell = (data)=>{
        return (
            <TopicsListItem data={data} onSelect={this.handleTopicDetail}/>
        );
    };

    render(){
        StatusBar.setBarStyle('default', true);
        return (
            <View style={TopicStyle.listView}>
                <FlatList data={this.state.data}
                          onRefresh={this._fetchData}
                          refreshing={this.state.pageLoading}
                          extraData={this.state}
                          keyExtractor={this._keyExtractor}
                          renderItem={this._renderTopicCell}
                />
            </View>
        );
    }
}
