import { AsyncStorage } from 'react-native'

import {
    FACEBOOK_LOGIN_SUCCESS
} from './types'

// How to use AsyncStorage
// AsyncStorage.setItem('fb_token', token)
// AsyncStorage.getItem('fb_token')

// The keyword 'async' here means it takes some amount of time to read this value of the device's memory
export const facebookLogin = () => {
    console.log(AsyncStorage.getItem('fb_token'))
}