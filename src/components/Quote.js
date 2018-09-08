import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';

const Quotes = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bookImageContainer}>
        <Text>Book Image</Text>
      </View>
      <View style={styles.quoteContainer}>
        <Text>Quote</Text>
      </View>
      <View style={styles.pageNumContainer}>
        <Text>Page Num</Text>
      </View>
      <View style={styles.paragraphNumContainer}>
        <Text>Paragraph Num</Text>
      </View>
      <View style={styles.bookTitleContainer}>
        <Text>Book Title</Text>
      </View>
      <View style={styles.bookAuthorContainer}>
        <Text>Book Author</Text>
      </View>
      <View style={styles.publishDateContainer}>
        <Text>Publish Date</Text>
      </View>
      <View style={styles.personalNoteContainer}>
        <Text>Personal Note</Text>
      </View>
    </View>
  );
};

Quote.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF3DE'
  },

  buttonsContainer: {
    flexDirection: 'row'
  },
  quoteButtonContainer: {
    borderBottomWidth: 1,
    borderColor: '#E7C87E'
  },
  quoteText: {
    fontSize: 24,
    color: '#907D50'
  },
  quoteAuthor: {
    fontSize: 18,
    color: '#907D50'
  }
});

export default Quotes;
