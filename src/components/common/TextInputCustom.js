import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextInputCustom = ({
  label,
  placeholder,
  placeholderTextColor,
  onChangeText,
  secureTextEntry
}) => {
  const {
    container,
    labelContainerStyle,
    labelStyle,
    textInputContainerStyle,
    textInputStyle
  } = styles;

  return (
    <View style={container}>
      {/* <View style={labelContainerStyle}> */}
      <Text style={labelStyle}>{label}</Text>
      {/* </View> */}
      {/* <View style={textInputContainerStyle}> */}
      <TextInput
        style={textInputStyle}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    // backgroundColor: 'green',
    alignSelf: 'stretch'
  },
  labelContainerStyle: {},
  labelStyle: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500'
  },
  textInputContainerStyle: {
    // paddingLeft: 10
  },
  textInputStyle: {
    // alignSelf: 'stretch',
    height: 30,
    // width: 220,
    fontSize: 18,
    color: '#FFFFFF',
    borderBottomWidth: 0.8,
    borderColor: '#FFFFFF'
  }
});

export default TextInputCustom;
