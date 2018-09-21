import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MyQuotesContainer from '../containers/MyQuotesContainer';
import NewQuoteContainer from '../containers/NewQuoteContainer';
import Profile from './Profile';

import { onPressToggleModal } from '../actions/newQuoteActions';
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const TabNav = createBottomTabNavigator(
      {
        MyQuotesContainer: {
          screen: MyQuotesContainer
        },
        NewQuoteContainer: {
          screen: NewQuoteContainer,
          navigationOptions: {
            tabBarOnPress: ({ navigation }) => {
              this.props.onPressToggleModal(true);
              navigation.navigate('NewQuoteContainer');
            }
          }
        },
        Profile: { screen: Profile }
      },
      {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'MyQuotesContainer') {
              iconName = 'format-quote';
            } else if (routeName === 'NewQuoteContainer') {
              iconName = 'add-circle-outline';
            } else if (routeName === 'Profile') {
              iconName = 'person';
            }
            return (
              <Icon
                style={styles.iconButton}
                name={iconName}
                size={50}
                color={tintColor}
              />
            );
          }
        }),
        tabBarOptions: {
          activeTintColor: '#907D50',
          activeBackgroundColor: '#FBF3DE',
          inactiveTintColor: '#E7C87E',
          inactiveBackgroundColor: '#FBF3DE',
          showLabel: false
        }
      }
    );

    return (
      <View style={styles.container}>
        <TabNav />
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
  { onPressToggleModal }
)(NavBar);
