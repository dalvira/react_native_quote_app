import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import TextInputCustom from './common/TextInputCustom';
import ButtonCustom from './common/ButtonCustom';

const Register = ({
  onChangeEmail,
  onChangeUsername,
  onChangePassword,
  onPressRegister
}) => {
  handleEmail = text => {
    onChangeEmail(text);
  };

  handleUsername = text => {
    onChangeUsername(text);
  };

  handlePassword = text => {
    onChangePassword(text);
  };

  handleRegister = () => {
    onPressRegister();
  };

  const {
    container,
    header,
    titleContainer,
    title,
    body,
    textInputContainer,
    emailInputContainer,
    usernameInputContainer,
    passwordInputContainer,
    buttonsContainer,
    cancelButtonContainer,
    signUpButtonContainer
  } = styles;

  return (
    <View style={container}>
      <View style={header}>
        <View style={titleContainer}>
          <Text style={title}>Quiblio</Text>
        </View>
      </View>
      <View style={body}>
        <View style={textInputContainer}>
          <View style={emailInputContainer}>
            <TextInputCustom
              label={'Email'}
              placeholder={'email'}
              onChangeText={this.handleEmail}
              placeholderTextColor="#C3AD79"
            />
          </View>
          <View style={usernameInputContainer}>
            <TextInputCustom
              label={'Username'}
              placeholder={'username'}
              onChangeText={this.handleUsername}
              placeholderTextColor="#C3AD79"
            />
          </View>
          <View style={passwordInputContainer}>
            <TextInputCustom
              label={'Password'}
              placeholder={'password'}
              onChangeText={this.handlePassword}
              placeholderTextColor="#C3AD79"
            />
          </View>
        </View>
        <View style={buttonsContainer}>
          <View style={signUpButtonContainer}>
            <ButtonCustom label={'Register'} onPress={this.handleRegister} />
          </View>
        </View>
      </View>
    </View>
  );
};

Register.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onPressRegister: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7C87E',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    marginTop: 70
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#F6F8FA'
  },
  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInputContainer: {
    flex: 1
  },
  emailInputContainer: { flex: 1 },
  usernameInputContainer: { flex: 1 },
  passwordInputContainer: { flex: 1 },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    padding: 20
  },
  registerButtonContainerStyle: {
    padding: 20
  }
});

export default Register;
