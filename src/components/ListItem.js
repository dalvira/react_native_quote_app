import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = ({ quote }) => {
  return (
    <View style={styles.quoteButtonContainer} key={quote.uid}>
      <TouchableOpacity>
        <View style={styles.quoteTextContainer}>
          <Text style={styles.quoteText}>"{quote.quote}"</Text>
        </View>
        <View style={styles.quoteAuthorContainer}>
          <Text style={styles.authorDash}>-</Text>
          <Text style={styles.quoteAuthor}>{quote.author}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
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

export default ListItem;
