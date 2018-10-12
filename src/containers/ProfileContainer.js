import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { onPressEditProfile } from '../actions/profileActions';

import Profile from '../components/Profile';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Profile onPressEditProfile={this.props.onPressEditProfile} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  modalVisible: state.newQuoteReducer.modalVisible
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(
  mapStateToProps,
  { onPressEditProfile }
)(Profile);
