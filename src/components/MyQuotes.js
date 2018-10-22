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
          {/* <Text style={styles.quoteMarks}>"</Text> */}
          <Text style={styles.quoteText}>"{quoteObj.text}"</Text>
          {/* <Text style={styles.quoteMarks}>"</Text> */}
        </View>
        <View style={styles.quoteAuthorContainer}>
          <Text style={styles.authorDash}>-</Text>
          <Text style={styles.quoteAuthor}>{quoteObj.author}</Text>
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
    backgroundColor: '#F3F3F3',
    paddingTop: 25
  },
  quoteTextContainer: {
    flex: 3,
    flexDirection: 'row'
  },
  quoteAuthorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  quoteButtonContainer: {
    borderBottomWidth: 1,
    borderColor: '#0094C8',
    flexDirection: 'column',
    margin: 5
  },
  quoteText: {
    fontSize: 22,
    color: '#838383'
  },
  quoteAuthor: {
    fontSize: 18,
    color: '#838383'
  },
  authorDash: {
    fontSize: 18,
    color: '#0094C8'
  },
  quoteMarks: {
    fontSize: 22,
    color: '#0094C8'
  }
});

export default MyQuotes;
