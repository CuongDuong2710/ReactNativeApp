import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'

export default class App extends React.Component {
  componentDidMount {
    const config = {
      apiKey: "AIzaSyDGjYUAEi6OdCQx9LIxJWEmCxiV4lt_0GE",
      authDomain: "one-time-password-d0881.firebaseapp.com",
      databaseURL: "https://one-time-password-d0881.firebaseio.com",
      projectId: "one-time-password-d0881",
      storageBucket: "one-time-password-d0881.appspot.com",
      messagingSenderId: "124827344490"
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
