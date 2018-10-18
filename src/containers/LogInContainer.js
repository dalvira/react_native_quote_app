import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import {
  onChangeEmail,
  onChangePassword,
  onPressLogIn
} from '../actions/logInActions';

import LogIn from '../components/LogIn';

class LogInContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <LogIn
          email={this.props.email}
          password={this.props.password}
          user={this.props.user}
          loading={this.props.loading}
          error={this.props.error}
          onChangeEmail={this.props.onChangeEmail}
          onChangePassword={this.props.onChangePassword}
          onPressLogIn={this.props.onPressLogIn}
          onPressSignUp={this.props.onPressSignUp}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.logInReducer.email,
  password: state.logInReducer.password,
  user: state.logInReducer.user,
  loading: state.logInReducer.loading,
  error: state.logInReducer.error
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(
  mapStateToProps,
  { onChangeEmail, onChangePassword, onPressLogIn }
)(LogIn);
