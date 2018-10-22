import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';

import {
  userDataFetch,
  onPressEditProfile,
  onPressSignOut
} from '../actions/profileActions';

import Profile from '../components/Profile';
class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.userDataFetch();
  }

  handleOnPressEditProfile = () => {
    alert('Edit Profile');
  };

  handleSignOut = () => {
    this.props.onPressSignOut(this.props.navigation);
  };

  render() {
    const {
      container,
      nameContainer,
      numOfQuotesGroupContainer,
      mostQuotedAuthorGroupContainer,
      numOfNotesGroupContainer,
      labelContainer,
      dataContainer,
      nameStyle,
      label,
      data,
      signOutButtonContainer,
      signOutButton
    } = styles;

    return (
      <View style={container}>
        <View style={nameContainer}>
          <Text style={nameStyle}>{this.props.name}</Text>
        </View>
        <View style={numOfQuotesGroupContainer}>
          <View style={labelContainer}>
            <Text style={label}>Quotes</Text>
          </View>
          <View style={dataContainer}>
            <Text style={data}>26</Text>
          </View>
        </View>
        <View style={mostQuotedAuthorGroupContainer}>
          <View style={labelContainer}>
            <Text style={label}>Most Quoted Author</Text>
          </View>
          <View style={dataContainer}>
            <Text style={data}>Robert Greene</Text>
          </View>
        </View>
        <View style={numOfNotesGroupContainer}>
          <View style={labelContainer}>
            <Text style={label}>Notes</Text>
          </View>
          <View style={dataContainer}>
            <Text style={data}>14</Text>
          </View>
        </View>
        <View style={signOutButtonContainer}>
          <Text style={signOutButton} onPress={this.handleSignOut}>
            Sign Out
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({ name: state.profileReducer.name });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numOfQuotesGroupContainer: {
    flex: 1,
    alignItems: 'center'
  },
  mostQuotedAuthorGroupContainer: {
    flex: 1,
    alignItems: 'center'
  },
  numOfNotesGroupContainer: {
    flex: 1,
    alignItems: 'center'
  },
  labelContainer: {},
  dataContainer: { paddingTop: 5 },
  nameStyle: { fontSize: 22, color: '#0094C8', fontWeight: 'bold' },
  label: { fontSize: 18, color: '#0094C8', fontWeight: '700' },
  data: { fontSize: 20, color: '#0094C8' },
  signOutButtonContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signOutButton: { fontSize: 20, color: '#0094C8' }
});

export default connect(
  mapStateToProps,
  { userDataFetch, onPressEditProfile, onPressSignOut }
)(ProfileContainer);
