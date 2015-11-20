
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

var Dashboard = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'mapView',
      notifCount: 0,
      presses: 0,
    };
  },
  render: function() {
    return(
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
          {<SettingsPage onBack={this.props.onBack} />}
        </TabBarIOS.Item>


      </TabBarIOS>
    );
  }
});

module.exports = Dashboard;