
import React from 'react';
import { View, Text, NavigatorIOS } from 'react-native';
import TopicView from './TopicView';
import Color from './Utils/Color';

const TopicDetail = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
    </View>
);

//
// const TopicNavigator = StackNavigator({
//     TopicsView: {
//         screen: TopicView,
//         navigationOptions: {
//             title: 'Latest',
//             headerStyle: TopicsStyle.navigator
//         }
//     },
//     TopicDetail: {
//         screen: TopicDetail,
//         path: 'TopicDetail/:id'
//     },
// });

export default ()=>
    <NavigatorIOS
        initialRoute={{
            component: TopicView,
            title: 'Latest'
        }}
        barTintColor={Color.MAIN}
        titleTextColor={'white'}
        tintColor={'white'}
        style={{flex: 1}}
    />