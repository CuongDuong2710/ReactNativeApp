import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { Notifications } from 'expo'

import registerForNotifications from './services/push_notifications'
import store from './store'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'

// We make use of the 'react-redux' library to get a binding between the redux side of our application and the react side of our application.
export default class App extends React.Component {
  componentDidMount() {
    registerForNotifications()

    // Callback will be executed anytime the user receives a push notification
    // It will be called with single argument refer as 'notification'. 
    // This object will contain all the information we need to know about incoming notification and customized for the user
    Notifications.addListener((notification) => {
      // nested 'data' property to get access 'text' property
      // 'origin' is going to help us make sure that we are actually receiving the 'notification' properly
      const { data: { text }, origin } = notification
      // const text = notification.data.text

      if (origin === 'received' && text) {
        console.log(origin)
        Alert.alert(
          'New Push Notification',
          text, // text is coming from a variable inside 'notification' itself
          [{ text: 'Ok.' }] // button to dismiss popup
        )
      }
    })
  }

  render() {
    // The 'welcome' screen is being rendered directly by react-navigation through the 'TabNavigator'.
    // React-navigation going to pass down that 'props' of navigation to 'welcome' screen.
    // By defaut, react-navigation is going to attempt to automatically render both 'welcome' and 'auth' screen.
    // So delay react-navigation from attempting to eagerly load 'auth' screen
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        },
        {
          tabBarPosition: 'bottom',
          lazy: true, //Each screen will not mount/load until user click on them
          swipeEnabled: false,
          animationEnabled: false,
          labalStyle: { fontSize: 12 },
          // backBehavior: 'none',
          tabBarOptions: { // show icon tabbar in Android
            showIcon: true,
            iconStyle: {
              width: 30,
              height: 30
            }
          }
        })
      },
    },
    {
      navigationOptions: {
        tabBarVisible: false
      },
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      lazy: true,
      animationEnabled: false
    })

    // The 'provider' tag here is a react component that accepts our redux store as a prop
    // then the provider make access to the store available to all of its children properties or seemy all of its children component.
    // So we need to make sure that we also use 'redux' to create a store thats going to hold all of the state for our application.
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
