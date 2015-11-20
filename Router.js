'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Navigator
} = React;

var Dashboard = require("./Dashboard.ios");
var LoginPage = require("./LoginPage");


var Router = React.createClass({
	render: function() {


		if (this.props.index == 0) {
			return (<LoginPage onForward={this.props.onForward} />);
		} else if (this.props.index == 1) {
			return (<Dashboard onBack={this.props.onBack} />);
		}
	}
});

module.exports = Router;