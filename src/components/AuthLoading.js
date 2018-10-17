import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import SpinnerCustom from './common/SpinnerCustom';

class AuthLoading extends React.Component {
  componentWillMount() {}

  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <SpinnerCustom size="large" color="#907D50" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7C87E'
  }
});

export default AuthLoading;
