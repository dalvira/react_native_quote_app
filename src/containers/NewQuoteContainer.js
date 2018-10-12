import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { onPressSaveQuote } from '../actions/newQuoteActions';

import NewQuote from '../components/NewQuote';
class NewQuoteContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <NewQuote onPressSaveQuote={this.props.onPressSaveQuote} />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(
  mapStateToProps,
  { onPressSaveQuote }
)(NewQuote);
