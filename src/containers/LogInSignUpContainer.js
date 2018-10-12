import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import {
  onChangeEmail,
  onChangePassword,
  onPressLogIn,
  onPressSignUp
} from '../actions/logInSignUpActions';

import LogInSignUp from '../components/LogInSignUp';
class LogInSignUpContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <LogInSignUp
          onChangeEmail={this.props.onChangeEmail}
          onChangePassword={this.props.onChangePassword}
          onPressLogIn={this.props.onPressLogIn}
          onPressSignUp={this.props.onPressSignUp}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(
  mapStateToProps,
  { onChangeEmail, onChangePassword, onPressLogIn, onPressSignUp }
)(LogInSignUp);
