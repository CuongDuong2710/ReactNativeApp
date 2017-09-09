import { Permissions, Notifications } from 'expo'

export default async () => {
  // get previous token to check whether user registerd
  let previousToken = await AsyncStorage.getItem('pushtoken')

  // if user have registered skip ask permission
  if (previousToken) {
    return
  } else {
    // if not ask user for permission, 'askAsync' needs to take amount of time for the user see pop and say OK.
    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS)

    // skip if user don't agree permission
    if (status !== 'granted') {
      return;       
    }

    // Generate a token that identifies particular user's device. So we can tie this token with given user.
    // 'getExponentPushTokenAsync' has 'async' word: imagine it takes amount of time to generate the token => await
    let token = await Notifications.getExpoPushTokenAsync()
  }
}