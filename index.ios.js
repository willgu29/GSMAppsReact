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
  TabBarIOS,
  Navigator
} = React;

var Router = require("./Router");


var iGrouply = React.createClass({

  
  render: function() {
    return (

      <Navigator
        initialRoute={{name: "Login", index: 0}}
        renderScene={(route, navigator) => 
            <Router
              name={route.name}
              index={route.index}
              onForward={() => {
              var nextIndex = route.index + 1;
              navigator.push({
                index: nextIndex
              });
              }}
              onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }} />  
        } />


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
