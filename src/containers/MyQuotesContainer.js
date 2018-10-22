import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList, ListView } from 'react-native';
import _ from 'lodash';
import {
  quotesFetch,
  onPressQuote,
  onDeleteQuote
} from '../actions/myQuotesActions';

import ListItem from '../components/ListItem';
class MyQuotesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.quotesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ quotes }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(quotes);
  }

  renderRow(quote) {
    return <ListItem quote={quote} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const quotes = _.map(state.myQuotesReducer.quotes, (val, uid) => {
    return { ...val, uid };
  });
  return { quotes };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});

export default connect(
  mapStateToProps,
  { quotesFetch, onPressQuote, onDeleteQuote }
)(MyQuotesContainer);
