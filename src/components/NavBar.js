import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MyQuotesContainer from '../containers/MyQuotesContainer';
import NewQuoteContainer from '../containers/NewQuoteContainer';
import Profile from './Profile';

const NavBar = createBottomTabNavigator(
  {
    MyQuotesContainer: { screen: MyQuotesContainer },
    NewQuoteContainer: { screen: NewQuoteContainer },
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

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
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
  // {
  //   tabBarPosition: 'bottom',
  //   swipeEnabled: true,
  //   tabBarOptions: {
  //     activeTintColor: '#907D50',
  //     activeBackgroundColor: '#FBF3DE',
  //     inactiveTintColor: '#E7C87E',
  //     inactiveBackgroundColor: '#FBF3DE',
  //     lableStyle: {
  //       fontSize: 30,
  //       padding: 12
  //     }
  //   }
  // }
);

//   return (
//     <View style={styles.container}>
//       <View style={styles.myQuotesButtonContainer}>
//         <Icon.Button
//           style={styles.myQuotesButton}
//           name="format-quote"
//           size={50}
//           backgroundColor="#E7C87E"
//           underlayColor="rgba(0, 0, 0, 0)"
//           onPress={() => handleOnPressMyQuotes()}
//         />
//       </View>
//       <View style={styles.newQuoteButtonContainer}>
//         <Icon.Button
//           style={styles.myQuotesButton}
//           name="add-circle-outline"
//           size={50}
//           backgroundColor="#E7C87E"
//           underlayColor="rgba(0, 0, 0, 0)"
//           onPress={() => handleOnPressMyQuotes()}
//         />
//       </View>
//       <View style={styles.profileButtonContainer}>
//         <Icon.Button
//           style={styles.myQuotesButton}
//           name="person"
//           size={50}
//           backgroundColor="#E7C87E"
//           underlayColor="rgba(0, 0, 0, 0)"
//           onPress={() => handleOnPressMyQuotes()}
//         />
//       </View>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E7C87E'
  },
  iconButton: {}
});

export default NavBar;
