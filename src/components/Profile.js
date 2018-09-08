import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = ({}) => {
  handleOnPressEditProfile = () => {
    alert('Pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilePhotoContainer}>
        <Text>Photo</Text>
      </View>
      <View style={styles.usernameContainer}>
        <Text>Username</Text>
      </View>
      {/* <View style={styles.editProfileButtonContainer}>
        <Icon.Button
          style={styles.myQuotesButton}
          name="edit"
          size={24}
          backgroundColor="#E7C87E"
          underlayColor="rgba(0, 0, 0, 0)"
          onPress={() => handleOnPressEditProfile()}
        />
      </View> */}
      <View style={styles.numOfQuotesGroupContainer}>
        <View style={styles.numOfQuotesLabelContainer}>
          <Text>Quotes</Text>
        </View>
        <View style={styles.numOfQuotesLabelContainer}>
          <Text>26</Text>
        </View>
      </View>
      <View style={styles.mostQuotedAuthorGroupContainer}>
        <View style={styles.mostQuotedAuthorLabelContainer}>
          <Text>Most Quoted Author</Text>
        </View>
        <View style={styles.mostQuotedAuthorContainer}>
          <Text>Robert Greene</Text>
        </View>
      </View>
      <View style={styles.numOfNotesGroupContainer}>
        <View style={styles.numOfNotesLabelContainer}>
          <Text>Notes</Text>
        </View>
        <View style={styles.numOfNotesContainer}>
          <Text>14</Text>
        </View>
      </View>
    </View>
  );
};

Profile.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF3DE',
    alignItems: 'center'
  },
  profilePhotoContainer: {
    paddingTop: 25
  },
  myQuotesButton: {}
});

export default Profile;
