import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import {
  onChangeName,
  onChangeEmail,
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
          name={this.props.name}
          email={this.props.email}
          password={this.props.password}
          loading={this.props.loading}
          error={this.props.error}
          onChangeEmail={this.props.onChangeEmail}
          onChangeName={this.props.onChangeName}
          onChangePassword={this.props.onChangePassword}
          onPressRegister={this.props.onPressRegister}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  name: state.registerReducer.name,
  email: state.registerReducer.email,
  password: state.registerReducer.password,
  loading: state.registerReducer.loading,
  error: state.registerReducer.error
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(
  mapStateToProps,
  { onChangeName, onChangeEmail, onChangePassword, onPressRegister }
)(Register);
