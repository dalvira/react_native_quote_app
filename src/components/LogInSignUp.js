import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import TextInputCustom from './common/TextInputCustom';
import ButtonCustom from './common/ButtonCustom';

const LogInSignUp = ({
  onChangeEmail,
  onChangePassword,
  onPressLogIn,
  onPressSignUp
}) => {
  handleEmail = text => {
    onChangeEmail(text);
  };

  handlePassword = text => {
    onChangePassword(text);
  };

  handleLogIn = () => {
    onPressLogIn();
  };

  handleSignUp = () => {
    onPressSignUp();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Quiblio</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.textInputContainer}>
          <View style={styles.emailInputContainer}>
            <TextInputCustom
              label="Email"
              placeholder={'name@email.com'}
              onChangeText={this.handleEmail}
              placeholderTextColor="#C3AD79"
            />
          </View>
          <View style={styles.passwordInputContainer}>
            <TextInputCustom
              label="Password"
              placeholder={'password'}
              onChangeText={this.handlePassword}
              placeholderTextColor="#C3AD79"
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.logInButtonContainer}>
            <ButtonCustom label={'Log In'} onPress={this.handleLogIn} />
          </View>
          <View style={styles.signUpButtonContainer}>
            <ButtonCustom label={'Sign Up'} onPress={this.handleSignUp} />
          </View>
        </View>
      </View>
    </View>
  );
};

LogInSignUp.propTypes = {
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onPressLogIn: PropTypes.func.isRequired,
  onPressSignUp: PropTypes.func.isRequired
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
  passwordInputContainer: { flex: 1 },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    padding: 20
  },
  logInButtonContainer: {
    padding: 20
  },
  signUpButtonContainer: {
    padding: 20
  }
});

export default LogInSignUp;
