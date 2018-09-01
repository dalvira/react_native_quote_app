import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NavBar = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Nav Bar</Text>
      <View style={styles.myQuotesButtonContainer}>
        <Text>My Quotes Button</Text>
      </View>
      <View style={styles.newQuoteButtonContainer}>
        <Text>New Quote Button</Text>
      </View>
      <View style={styles.profileButtonContainer}>
        <Text>Profile Button</Text>
      </View>
    </View>
  );
};

NavBar.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NavBar;
