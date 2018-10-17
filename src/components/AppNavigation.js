import React from 'react';
import { StyleSheet } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import MyQuotesContainer from '../containers/MyQuotesContainer';
import NewQuoteContainer from '../containers/NewQuoteContainer';
import ProfileContainer from '../containers/ProfileContainer';
import ModalScreen from './ModalScreen';
import LogInContainer from '../containers/LogInContainer';
import RegisterContainer from '../containers/RegisterContainer';

const AuthStack = createStackNavigator(
  {
    LogInContainer: LogInContainer,
    RegisterContainer: RegisterContainer
  },
  {
    headerMode: 'none'
  }
);

const HomeStack = createStackNavigator({
  MyQuotesContainer: MyQuotesContainer
});

const ModalStack = createStackNavigator({
  ModalScreen: { screen: ModalScreen }
});

const ProfileStack = createStackNavigator({
  ProfileContainer: ProfileContainer
});

const MainTabNavigator = createBottomTabNavigator(
  {
    HomeStack: { screen: HomeStack },
    ModalStack: {
      screen: ModalStack,
      navigationOptions: {
        tabBarOnPress: ({ navigation }) => {
          navigation.navigate('NewQuoteContainer', {
            quoteNavigation: navigation
          });
        }
      }
    },
    ProfileStack: { screen: ProfileStack }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HomeStack') {
          iconName = 'format-quote';
        } else if (routeName === 'ModalStack') {
          iconName = 'add-circle-outline';
        } else if (routeName === 'ProfileStack') {
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

const ModalStackNavigator = createStackNavigator(
  {
    MainTabNavigator: { screen: MainTabNavigator },
    NewQuoteContainer: { screen: NewQuoteContainer }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
);

const SwitchNav = createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    ModalStackNavigator: ModalStackNavigator,
    AuthStack: AuthStack
  },
  {
    // initialRouteName: 'AuthLoading'
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AuthStack;
