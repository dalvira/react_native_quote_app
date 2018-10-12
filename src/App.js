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

import store from './store';

import ModalStackNavigator from './components/NavBar';
import LogInSignUpContainer from './containers/LogInSignUpContainer';

console.log(store.getState());
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <LogInSignUpContainer />
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
  },
  myQuotesContainer: {
    flex: 2
  },
  navBarContainer: {
    flex: 0.25,
    alignItems: 'center',
    backgroundColor: '#E7C87E'
  }
});