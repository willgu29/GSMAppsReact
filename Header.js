
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;


var Header = React.createClass({
	render: function() {
		return(
			<View style={styles.header}>
				<Text style={styles.switchButton}>-</Text>
				<Text style={styles.headerTitle}>App Name</Text>
				<AddLocationButton />
			</View>
		);
	}
});

var AddLocationButton = React.createClass({
	_onPressButton: function() {
		//Switch to add location mode (mapview)
	},
	render: function() {
		return(
			<TouchableHighlight onPress={this._onPressButton}>
      			<Text style={styles.addButton}>+</Text>
    		</TouchableHighlight>
		);
	}
});

module.exports = Header;

var styles = StyleSheet.create({

  header: {
  	justifyContent: "space-between",
  	alignItems: "center",
  	flexDirection: "row",
  	height: 60,
  	backgroundColor: "purple"
  },
  switchButton: {
  	fontSize: 30,
  	margin: 10
  },
  headerTitle: {
  	fontSize: 30,
  },
  addButton: {
  	fontSize: 30,
  	margin: 10
  }

});