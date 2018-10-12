import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

const NewQuote = ({ navigation, onPressSaveQuote }) => {
  handleOnPressCancelNewQuote = () => {
    navigation.goBack();
  };

  handleOnPressSaveQuote = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.bookImageContainer}>
        <Text>Book Image</Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.quoteInputContainer}>
          <TextInput style={styles.textInput} placeholder="Enter quote..." />
        </View>
        <View style={styles.paraNumInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter paragraph number..."
          />
        </View>
        <View style={styles.pageNumInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter page number..."
          />
        </View>
        <View style={styles.bookInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter book title..."
          />
        </View>
        <View style={styles.authorInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter author name..."
          />
        </View>
        <View style={styles.noteInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter personal note..."
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.cancelButtonContainer}>
          <TouchableOpacity>
            <Text
              style={styles.quoteText}
              onPress={() => handleOnPressCancelNewQuote()}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity>
            <Text
              style={styles.quoteText}
              onPress={() => handleOnPressSaveQuote()}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    flex: 1,
    marginTop: 25
  },
  inputsContainer: {
    flex: 1.75
  },
  textInput: {
    fontSize: 24,
    padding: 5
  },
  buttonsContainer: {
    flex: 0.25,
    flexDirection: 'row'
  },
  cancelButtonContainer: {},
  saveButtonContainer: {}
});

export default NewQuote;
