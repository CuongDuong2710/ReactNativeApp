import { AsyncStorage } from 'react-native'
import { Facebook } from 'expo'

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types'

// How to use AsyncStorage
// AsyncStorage.setItem('fb_token', token)
// AsyncStorage.getItem('fb_token')

// The keyword 'async' here means it takes some amount of time to read this value of the device's memory.
// This is not a synchronous call so we cannot say.
export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token')
    if (token) {
        // Dispatch an action saying FB login is done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    } else {
        // Start up FB login process
        doFacebookLogin(dispatch)
  }
}

const doFacebookLogin= async dispatch => {
  // login facebook and request permission to access user's public profile
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('755805821257858', {
    permissions: ['public_profile']
  })

  // 'type' is check login facebook success or fail
  if (type == 'cancel') {
      return dispatch({ type: FACEBOOK_LOGIN_FAIL })
  }

  // 'token' is coming from the Facebook authentication request
  // AsyncStorage is asynchronous in nature, so await and say don't do anything until we've successfully saved that token to the device
  // The only reason if async fails then we will not dispatch with the log in success
  await AsyncStorage.setItem('fb_token', token)
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
}