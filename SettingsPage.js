'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} = React;

var SettingsPage = React.createClass({
	render: function() {
		return(
			<ScrollView
				style={styles.scrollView}>
				{ROWS.map(createRow)}
			</ScrollView>
		);
	}
});

var SettingsRow = React.createClass({
	render: function() {
		return(
			<View style={styles.button}>
				<Text>{this.props.text}</Text>
			</View>
		);
	}

});

var ROWS = ["Edit Profile", "Logout"];
var createRow = (text, i) => <SettingsRow key={i} text={text} />;


var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
});

module.exports = SettingsPage;
