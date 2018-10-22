import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import {
  onChangeQuote,
  onChangePara,
  onChangePage,
  onChangeTitle,
  onChangeAuthor,
  onChangeNote,
  onPressSaveQuote
} from '../actions/newQuoteActions';

import NewQuote from '../components/NewQuote';
class NewQuoteContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <NewQuote
          quoteNew={this.props.quoteNew}
          paraNew={this.props.paraNew}
          pageNew={this.props.pageNew}
          titleNew={this.props.titleNew}
          authorNew={this.props.authorNew}
          noteNew={this.props.noteNew}
          loadingSave={this.props.loadingSave}
          errorSave={this.props.errorSave}
          onChangeQuote={this.props.onChangeQuote}
          onChangePara={this.props.onChangePara}
          onChangePage={this.props.onChangePage}
          onChangeTitle={this.props.onChangeTitle}
          onChangeAuthor={this.props.onChangeAuthor}
          onChangeNote={this.props.onChangeNote}
          onPressSaveQuote={this.props.onPressSaveQuote}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  quoteNew: state.newQuoteReducer.quoteNew,
  paraNew: state.newQuoteReducer.paraNew,
  pageNew: state.newQuoteReducer.pageNew,
  titleNew: state.newQuoteReducer.titleNew,
  authorNew: state.newQuoteReducer.authorNew,
  noteNew: state.newQuoteReducer.noteNew,
  loadingSave: state.newQuoteReducer.loadingSave,
  errorSave: state.newQuoteReducer.errorSave
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(
  mapStateToProps,
  {
    onChangeQuote,
    onChangePara,
    onChangePage,
    onChangeTitle,
    onChangeAuthor,
    onChangeNote,
    onPressSaveQuote
  }
)(NewQuote);
