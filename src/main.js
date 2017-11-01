
import React, { Component } from 'react';
import { View, Text, TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Color from './Utils/Color';
import TopicView from './TopicView';


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: "default",
        };
    }

    render() {
        return (
            <TabBarIOS tintColor={Color.MAIN} translucent={true}>
                <Icon.TabBarItem
                    title="List"
                    iconName="home"
                    selectedIconName="home"
                    selected={this.state.selectedTab === "default"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "default",
                        });
                    }}>
                    <TopicView />
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title="Nodes"
                    iconName="grid"
                    selectedIconName="grid"
                    selected={this.state.selectedTab === "nodes"}
                    onPress={() => {
                        this.setState({
                            selectedTab: "nodes",
                        });
                    }}>
                    <View><Text>Test!</Text></View>
                </Icon.TabBarItem>
            </TabBarIOS>
        );
    }
}
