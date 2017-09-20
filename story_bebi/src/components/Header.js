import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Header extends Component {

  render() {
    const { viewStyle, textStyle } = style

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    )
  }
}

const style = {
  viewStyle: {
    backgroundColor: '#6699ff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.9
  },
  textStyle: {
    fontSize: 20
  }
}

export default Header