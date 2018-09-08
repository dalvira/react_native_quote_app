import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';

const MyQuotes = ({ quoteObjArr, onPressQuote, onDeleteQuote }) => {
  quotesArr = quoteObjArr.map(quoteObj => (
    <View style={styles.quoteButtonContainer} key={quoteObj.id}>
      <TouchableOpacity>
        <View style={styles.quoteTextContainer}>
          <Text style={styles.quoteText}>"{quoteObj.text}"</Text>
        </View>
        <View style={styles.quoteAuthorContainer}>
          <Text style={styles.quoteAuthor}>-{quoteObj.author}</Text>
        </View>
      </TouchableOpacity>
    </View>
  ));

  handleOnPressQuote = () => {
    onPressQuote();
  };

  handleOnDeleteQuote = () => {
    onDeleteQuote();
  };

  return (
    <View style={styles.container}>
      <ScrollView>{quotesArr}</ScrollView>
    </View>
  );
};

MyQuotes.propTypes = {
  quoteObjArr: PropTypes.array.isRequired,
  onPressQuote: PropTypes.func.isRequired,
  onDeleteQuote: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF3DE',
    paddingTop: 25
  },
  quoteTextContainer: {
    flex: 3,
    alignItems: 'center'
  },
  quoteAuthorContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  quoteButtonContainer: {
    borderBottomWidth: 1,
    borderColor: '#E7C87E',
    flexDirection: 'column'
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

export default MyQuotes;
