
import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TopicView from './TopicView';

const TopicDetail = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
    </View>
);


const TopicNavigator = StackNavigator({
    TopicsView: {
        screen: TopicView,
        navigationOptions: {
            title: 'Latest'
        }
    },
    TopicDetail: {
        screen: TopicDetail,
        path: 'TopicDetail/:id'
    },
});

export default TopicNavigator;