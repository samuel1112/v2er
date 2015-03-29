/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var TopicList = require('./App/View/TopicList/TopicList');

var v2er = React.createClass({
  render: function() {
    return (
      <NavigatorIOS style={Style.container}
        tintColor={'#333344'}
        initialRoute={{
          title: 'Latest Topic - V2EX',
          component: TopicList
        }}
        itemWrapperStyle={Style.navigator} />
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
