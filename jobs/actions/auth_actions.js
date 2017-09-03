import { AsyncStorage } from 'react-native'

import {
    FACEBOOK_LOGIN_SUCCESS
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
    } else {
        // Start up FB login process
  }
}