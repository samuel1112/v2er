/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');


var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  TabBarIOS
} = React;

var TabBarItemIOS = TabBarIOS.Item;

var TopicList = require('./App/View/TopicList/TopicList');
var NodeMap = require('./App/View/NodeMap/NodeMap');

/*
  dispatch_once(&onceToken, ^{
    systemIcons = @{
      @"more": @(UITabBarSystemItemMore),
      @"favorites": @(UITabBarSystemItemFavorites),
      @"featured": @(UITabBarSystemItemFeatured),
      @"topRated": @(UITabBarSystemItemTopRated),
      @"recents": @(UITabBarSystemItemRecents),
      @"contacts": @(UITabBarSystemItemContacts),
      @"history": @(UITabBarSystemItemHistory),
      @"bookmarks": @(UITabBarSystemItemBookmarks),
      @"search": @(UITabBarSystemItemSearch),
      @"downloads": @(UITabBarSystemItemDownloads),
      @"mostRecent": @(UITabBarSystemItemMostRecent),
      @"mostViewed": @(UITabBarSystemItemMostViewed),
    };
  });
*/

function _icon(imageUri) {
    return {
        uri: imageUri,
        isStatic: true
    };
}

var v2er = React.createClass({
    getInitialState: function() {
        return {
            selectedTab: 'latestTab'
        };
    },
    render: function() {
        // console.log('12123123');
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarItemIOS accessibilityLabel={"Latest"}
                    selected={this.state.selectedTab === 'latestTab'}
                    title="latest"
                    name="latestTab"
                    icon={_icon('recents')}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'latestTab'
                        });
                    }}>
                    <NavigatorIOS style={Style.container}
                        tintColor={'#333344'}
                        initialRoute={{
                          title: 'Latest Topic - V2EX',
                          component: TopicList
                        }}
                        itemWrapperStyle={Style.navigator} />
                </TabBarItemIOS>
                <TabBarItemIOS accessibilityLabel={"Nodes"}
                    selected={this.state.selectedTab === 'nodeMap'}
                    title="NodeMap"
                    name="nodeMap"
                    icon={_icon('bookmarks')}
                    onPress={() => {
                        this.setState({
                          selectedTab: 'nodeMap'
                        });
                    }}>
                    <NodeMap />
                </TabBarItemIOS>
            </TabBarIOS>
        );
    }
});

var Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  navigator: {
    backgroundColor: '#EFEFEF'
  }
});

AppRegistry.registerComponent('v2er', () => v2er);
