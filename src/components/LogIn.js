import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import TextInputCustom from './common/TextInputCustom';
import ButtonCustom from './common/ButtonCustom';
import SpinnerCustom from './common/SpinnerCustom';

const LogIn = ({
  navigation,
  email,
  password,
  user,
  loading,
  error,
  onChangeEmail,
  onChangePassword,
  onPressLogIn
}) => {
  const {
    container,
    header,
    title,
    accountQuestion,
    signUpLink,
    errorStyle
  } = styles;

  handleEmail = text => {
    onChangeEmail(text);
  };

  handlePassword = text => {
    onChangePassword(text);
  };

  handleLogIn = () => {
    onPressLogIn(email, password, navigation);
  };

  handleSignUp = () => {
    navigation.navigate('RegisterContainer');
  };

  renderSpinner = () => {
    if (loading) {
      return <SpinnerCustom size="large" color="#FFFFFF" />;
    }
  };

  renderError = () => {
    if (error) {
      return (
        <View>
          <Text style={errorStyle}>{error}</Text>
        </View>
      );
    }
  };

  return (
    <View style={container}>
      <View style={header}>
        {/* <View style={styles.titleContainer}> */}
        <Text style={title}>Quiblio</Text>
        {/* </View> */}
      </View>
      <View style={styles.body}>
        <View style={styles.textInputContainer}>
          <View style={styles.emailInputContainer}>
            <TextInputCustom
              label="EMAIL"
              placeholder={'example@gmail.com'}
              onChangeText={this.handleEmail}
              placeholderTextColor="#C8CED1"
            />
          </View>
          <View style={styles.passwordInputContainer}>
            <TextInputCustom
              label="PASSWORD"
              placeholder={'password1'}
              onChangeText={this.handlePassword}
              placeholderTextColor="#C8CED1"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.logInButtonContainer}>
            <ButtonCustom label={'Log In'} onPress={this.handleLogIn} />
          </View>
          <View style={styles.signUpOptionContainer}>
            <Text style={accountQuestion}>Don't have an account yet? </Text>
            <Text style={signUpLink} onPress={this.handleSignUp}>
              Sign Up
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        {this.renderSpinner()}
        {this.renderError()}
      </View>
    </View>
  );
};

LogIn.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onPressLogIn: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0094C8',
    alignItems: 'center'
  },
  header: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#F6F8FA'
  },
  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  textInputContainer: {
    flex: 1.5,
    alignSelf: 'stretch'
  },
  emailInputContainer: { flex: 1 },
  passwordInputContainer: { flex: 1 },
  buttonsContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  logInButtonContainer: {
    flex: 0.4
  },
  signUpOptionContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  accountQuestion: {
    color: '#FFFFFF',
    fontSize: 18
  },
  signUpLink: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorStyle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18
  }
});

export default LogIn;
