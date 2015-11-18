'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView
} = React;

var MapViewiOS = React.createClass({

	getInitialState: function() {
		return {
			mapRegion: null,
			mapRegionInput: null,
			annotations: null,
			isFirstLoad: true
		};
	},

	render: function() {
		return(
			<View>
				<MapView
					style={styles.map}
					region={this.state.mapRegion || undefined}
          			annotations={this.state.annotations || undefined} />


			</View>

		);
	}
})


var styles = StyleSheet.create({
  map: {
    height: 400,
    margin: 20,
    borderWidth: 1,
    borderColor: '#000000',
  }
});


module.exports = MapViewiOS;