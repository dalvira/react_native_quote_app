import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  TextInput,
  TouchableOpacity
} from 'react-native';

const NewQuote = ({ modalVisible, onPressToggleModal, onPressSaveQuote }) => {
  handleOnPressToggleModal = visible => {
    onPressToggleModal(visible);
  };
  handleOnPressNewQuote = visible => {
    onPressNewQuote(visible);
  };

  handleOnPressSaveQuote = visible => {
    onPressSaveQuote(visible);
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.bookImageContainer}>
          <Text>Book Image</Text>
        </View>
        <View style={styles.quoteInputContainer}>
          <TextInput placeholder="Enter quote..." />
        </View>
        <View style={styles.paraNumInputContainer}>
          <TextInput placeholder="Enter paragraph number..." />
        </View>
        <View style={styles.pageNumInputContainer}>
          <TextInput placeholder="Enter page number..." />
        </View>
        <View style={styles.bookInputContainer}>
          <TextInput placeholder="Enter book title..." />
        </View>
        <View style={styles.authorInputContainer}>
          <TextInput placeholder="Enter author name..." />
        </View>
        <View style={styles.publishInputContainer}>
          <TextInput placeholder="Enter publish year..." />
        </View>
        <View style={styles.noteInputContainer}>
          <TextInput placeholder="Enter personal note..." />
        </View>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity>
            <Text
              style={styles.quoteText}
              onPress={() => handleOnPressToggleModal(false)}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

NewQuote.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7C87E',
    alignItems: 'center'
  },
  bookImageContainer: {
    paddingTop: 25
  }
});

export default NewQuote;
