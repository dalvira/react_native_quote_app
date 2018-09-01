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

import store from './src/store';

import MyQuotesContainer from './src/containers/MyQuotesContainer';
import NavBar from './src/components/NavBar';

console.log(store.getState());
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.myQuotesContainer}>
            <MyQuotesContainer />
          </View>
          <View style={styles.navBarContainer}>
            <NavBar />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  myQuotesContainer: {
    flex: 2
  },
  navBarContainer: {
    flex: 0.25
  }
});
