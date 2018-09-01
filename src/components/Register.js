import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

const Register = ({
  onChangeUsername,
  onChangeEmail,
  onChangePassword,
  onPressSignUp
}) => {
  handleUsername = text => {
    onChangeUsername(text);
  };

  handleEmail = text => {
    onChangeEmail(text);
  };

  handlePassword = text => {
    onChangePassword(text);
  };

  handleCancel = () => {};

  handleSignUp = () => {
    onPressSignUp();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Quiblio</Text>
      </View>
      <View style={styles.usernameInputContainer}>
        <TextInput
          style={styles.usernameInput}
          placeholder={'username'}
          onChangeText={this.handleUsername}
          placeholderTextColor="#FFFFFF"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.emailInputContainer}>
        <TextInput
          style={styles.emailInput}
          placeholder={'username or email'}
          onChangeText={this.handleEmail}
          placeholderTextColor="#FFFFFF"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder={'password'}
          onChangeText={this.handlePassword}
          placeholderTextColor="#FFFFFF"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.cancelButtonContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={this.handleCancel}
          >
            <Text style={styles.cancelButtonLabel}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpButtonContainer}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={this.handleSignUp}
          >
            <Text style={styles.signUpButtonLabel}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

Register.propTypes = {
  onChangeUsername: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onPressSignUp: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7C87E'
  },
  titleContainer: {
    padding: 15
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  usernameInputContainer: {},
  usernameInput: {
    height: 30,
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  },
  emailInputContainer: {},
  emailInput: {
    height: 30,
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  },
  passwordInputContainer: {},
  passwordInput: {
    height: 30,
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  cancelButtonContainer: {},
  cancelButtonLabel: {
    fontSize: 24,
    color: '#907D50'
  },
  cancelButton: {},
  signUpButtonContainer: {},
  signUpButtonLabel: {
    fontSize: 24,
    color: '#907D50'
  },
  signUpButton: {}
});

export default Register;
