'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} = React;



var SettingsPage = React.createClass({
	render: function() {


		return(
			<ScrollView
				style={styles.scrollView}>
				<Button text="Edit Profile" />
				<Button text="Logout" action={this.props.onBack} />
			</ScrollView>
		);
	}
});

var Button = React.createClass({
	_onPressButton: function() {
		this.props.action();
	},
	render: function() {
		return(
			<TouchableHighlight onPress={this._onPressButton}>
				<View style={styles.button}>
					<Text>{this.props.text}</Text>
				</View>
			</TouchableHighlight>
		);
	}
});


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
