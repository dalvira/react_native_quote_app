import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { onPressSaveQuote } from '../actions/newQuoteActions';

import NavBar from '../components/NavBar';

class NavBarContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          modalVisible={this.props.modalVisible}
          onPressSaveQuote={this.props.onPressSaveQuote}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  modalVisible: state.newQuoteReducer.modalVisible
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(
  mapStateToProps,
  { onPressSaveQuote }
)(NavBar);
