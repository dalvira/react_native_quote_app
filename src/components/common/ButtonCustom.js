import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ButtonCustom = ({ label, onPress }) => {
  const { container, buttonStyle, labelStyle } = styles;

  return (
    <View style={container}>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={labelStyle}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 110,
    shadowOffset: { width: 1, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.2
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#907D50',
    borderRadius: 17,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 14
  },
  labelStyle: {
    fontSize: 20,
    color: '#F6F8FA'
  }
});

export default ButtonCustom;
