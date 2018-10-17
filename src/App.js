/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import store from './store';
import config from './server';

import ModalStackNavigator from './components/AppNavigation';
import LogInContainer from './containers/LogInContainer';
import RegisterContainer from './containers/RegisterContainer';
import AuthStack from './components/AppNavigation';
import AuthLoading from './components/AuthLoading';
import Register from './components/Register';

console.log(store.getState());
export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {/* <ModalStackNavigator /> */}
          {/* <LogInContainer /> */}
          {/* <RegisterContainer /> */}
          <AuthStack />
          {/* <AuthLoading /> */}
          {/* <Register /> */}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  }
});
