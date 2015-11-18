/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} = React;

var MapViewiOS = require('./MapView.ios');
var SettingsPage = require("./SettingsPage");

var iGrouply = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'mapView',
      notifCount: 0,
      presses: 0,
    };
  },
  render: function() {
    return (
      <TabBarIOS tintColor="white" barTintColor="purple">

        <TabBarIOS.Item
          title="mapView" 
          selected={this.state.selectedTab === 'mapView'}
          onPress={() => {
            this.setState({
              selectedTab: 'mapView',
            });
          }}>
          {<MapViewiOS />}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="settings"
          selected={this.state.selectedTab === 'settings'}
          onPress={() => {
            this.setState({
              selectedTab: 'settings',
            });
          }}>
          {<SettingsPage />}
        </TabBarIOS.Item>


      </TabBarIOS>

    );
  }
});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('iGrouply', () => iGrouply);
