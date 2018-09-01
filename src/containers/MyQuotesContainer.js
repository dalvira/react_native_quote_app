import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { onPressQuote, onDeleteQuote } from '../actions/myQuotesActions';

import MyQuotes from '../components/MyQuotes';

class MyQuotesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <MyQuotes
          quoteObjArr={this.props.quoteObjArr}
          onPressQuote={this.props.onPressQuote}
          onDeleteQuote={this.props.onDeleteQuote}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  quoteObjArr: state.myQuotesReducer.quoteObjArr
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(
  mapStateToProps,
  { onPressQuote, onDeleteQuote }
)(MyQuotes);
