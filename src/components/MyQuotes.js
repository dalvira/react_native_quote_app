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
        <Text style={styles.quoteText}>"{quoteObj.text}"</Text>
        <Text style={styles.quoteAuthor}>-{quoteObj.author}</Text>
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

export default MyQuotes;
