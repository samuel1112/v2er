import React from 'react';
import { StyleSheet, NavigatorIOS, TabBarIOS, View, Text } from 'react-native';
// import TopicList from 'View/TopicList/TopicList';
// import NodeMap from 'View/NodeMap/NodeMap';

const TabBarItemIOS = TabBarIOS.Item;
const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    navigator: {
        backgroundColor: '#EFEFEF'
    }
});

export default class V2er extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedTab: 'latestTab'
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarItemIOS accessibilityLabel={"Latest"}
                               selected={this.state.selectedTab === 'latestTab'}
                               name="latestTab"
                               renderAsOriginal={true}
                               icon={null}
                               title={'Latest'}
                               onPress={() => {
                                   this.setState({
                                       selectedTab: 'latestTab'
                                   });
                               }}>
                    <View><Text>Topic!</Text></View>
                </TabBarItemIOS>
                <TabBarItemIOS accessibilityLabel={"Nodes"}
                               selected={this.state.selectedTab === 'nodeMap'}
                               name="nodeMap"
                               renderAsOriginal={true}
                               icon={null}
                               title={'NodeMap'}
                               onPress={() => {
                                   this.setState({
                                       selectedTab: 'nodeMap'
                                   });
                               }}>
                    <View ><Text>TEST!</Text></View>
                </TabBarItemIOS>
            </TabBarIOS>
        );
    }
};