import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import {
  onChangeEmail,
  onChangeUsername,
  onChangePassword,
  onPressRegister
} from '../actions/registerActions';

import Register from '../components/Register';
class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Register
          onChangeEmail={this.props.onChangeEmail}
          onChangeUsername={this.props.onChangeUsername}
          onChangePassword={this.props.onChangePassword}
          onPressRegister={this.props.onPressRegister}
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
  { onChangeEmail, onChangeUsername, onChangePassword, onPressRegister }
)(Register);
