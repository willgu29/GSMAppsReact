'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView
} = React;

var Header = require("./Header");

var BASE_URL = "localhost:3000";
var	GET_LOCATIONS_URL = "/api/locations";

var annotationsJSON = [{latitude:31,longitude:-98,title:"HELLO"},{latitude:101,longitude:100,title:"HELL"}];

var MapViewiOS = React.createClass({

	getInitialState: function() {
		return {
			mapRegion: null,
			mapRegionInput: null,
			annotations: null,
			isFirstLoad: true
		};
	},
	componentDidMount: function() {
		//this.fetchLocations();
		this.setState({annotations: annotationsJSON});
	},
	fetchLocations: function() {
		fetch(BASE_URL + GET_LOCATIONS_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movies: responseData.movies,
        });
      })
      .done();
	},

	render: function() {
		return(
			<View>
				<Header />
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