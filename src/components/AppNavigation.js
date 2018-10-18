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
import AuthLoading from '../components/AuthLoading';

const HomeStack = createStackNavigator(
  {
    MyQuotesContainer: MyQuotesContainer
  },
  {
    headerMode: 'none'
  }
);

const ModalStack = createStackNavigator({
  ModalScreen: { screen: ModalScreen }
});

const ProfileStack = createStackNavigator(
  {
    ProfileContainer: ProfileContainer
  },
  {
    headerMode: 'none'
  }
);

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
            size={35}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: '#00688D',
      activeBackgroundColor: '#0094C8',
      inactiveTintColor: '#FFFFFF',
      inactiveBackgroundColor: '#0094C8',
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

const AuthStack = createStackNavigator(
  {
    LogInContainer: LogInContainer,
    RegisterContainer: RegisterContainer
  },
  {
    headerMode: 'none'
  }
);

const SwitchNav = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    ModalStackNavigator: ModalStackNavigator,
    AuthStack: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SwitchNav;
