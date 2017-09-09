import { Permissions, Notifications } from 'expo'
import { AsyncStorage } from 'react-native'
import axios from 'axios'

// URL that we push token
const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens'

export default async () => {
  // get previous token to check whether user registerd
  let previousToken = await AsyncStorage.getItem('pushtoken')

  // if user have registered skip
  if (previousToken) {
    return
  } else {
    // if not, ask user for permission to send them push notification. 'askAsync' needs to take amount of time for the user see pop and say OK.
    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS)

    // skip if user don't agree permission
    if (status !== 'granted') {
      return;       
    }

    // Generate a token that identifies particular user's device. So we can tie this token with given user.
    // 'getExponentPushTokenAsync' has 'async' word: imagine it takes amount of time to generate the token => await
    let token = await Notifications.getExpoPushTokenAsync()
    
    // push token to API and save it to local store
    await axios.post(PUSH_ENDPOINT, { token: { token } })
    AsyncStorage.setItem('pushtoken', token)
  }
}