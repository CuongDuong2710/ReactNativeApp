import React, { Component } from 'react'
import { View, Text } from 'react-native'

class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>SplashScreen</Text>
      </View>
    )
  }
}

const styles = {
  wrapper: {
    justifyContent: 'center', //horizontal
    alignItems: 'center' // vertical
  }
}

export default SplashScreen