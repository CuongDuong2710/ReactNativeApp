import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Youtube extends Component {
  render() {
    console.log('this.props.item', this.props.item)
    return (
      <View>
        <Text>Youtube</Text>
      </View>
    )
  }
}

export default Youtube