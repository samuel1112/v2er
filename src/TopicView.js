
import React, { Component } from 'react';
import { View, Text, NavigatorIOS, FlatList } from 'react-native';
import Color from './Utils/Color';
import Style from './Styles/commons';
import TopicStyle from './Styles/Topics';
import API from './Utils/API';

import TopicsListItem from './TopicListItem';



class TopicsView extends Component {
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

    _renderTopicCell = (data)=>{
        return (
            <TopicsListItem data={data} />
        );
    };


    render(){
        return (
            <FlatList style={TopicStyle.listView} data={this.state.data}
                      onRefresh={this._fetchData}
                      refreshing={this.state.pageLoading}
                      extraData={this.state}
                      keyExtractor={this._keyExtractor}
                      renderItem={this._renderTopicCell}
            />
        );
    }
}

export default class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            netType: 1
        };
    }

    render(){
        return (
            <NavigatorIOS style={Style.container}
                          tintColor={Color.MAIN}
                          initialRoute={{
                              title: 'Latest Topic',
                              component: TopicsView
                          }}
                          itemWrapperStyle={Style.navigator} />
        );
    }

}