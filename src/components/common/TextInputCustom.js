import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextInputCustom = ({
  label,
  placeholder,
  placeholderTextColor,
  onChangeText
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
      <View style={labelContainerStyle}>
        <Text style={labelStyle}>{label}</Text>
      </View>
      <View style={textInputContainerStyle}>
        <TextInput
          style={textInputStyle}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeText}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  labelContainerStyle: {},
  labelStyle: {
    fontSize: 18,
    color: '#907D50'
  },
  textInputContainerStyle: {
    paddingLeft: 10
  },
  textInputStyle: {
    height: 30,
    width: 220,
    fontSize: 18,
    color: 'white',
    borderBottomWidth: 0.8,
    borderColor: '#907D50'
  }
});

export default TextInputCustom;
