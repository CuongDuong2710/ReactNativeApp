import { AppRegistry, UIManager, Platform } from 'react-native'
import App from './src/app'

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}
AppRegistry.registerComponent('tech', () => App)