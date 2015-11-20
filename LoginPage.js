'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var LoginPage = React.createClass({
	_onPress: function() {
		this.props.onForward();
	},
	render: function() {
		return(
			<View style={styles.container}>
				<TouchableHighlight onPress={this._onPress}>
					<View style={styles.button}>
						<Text style={styles.welcome}>HELLO</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
});


var styles = StyleSheet.create({
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
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 1,
  },
});

module.exports = LoginPage;