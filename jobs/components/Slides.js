import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

class Slides extends Component {
  renderSlides() {
    // Every single object that's inside of props stack data will create a new view contain the slide text
    // 'slide' is { text: 'Welcome to JobApp' } object in 'map' function
    return this.props.data.map((slide) => {
      return (
        <View key={slide.text} style={styles.slideStyle}>
          <Text style={styles.slideText}>{slide.text}</Text>
        </View>
      )
    })
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1}}
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

const styles = {
    slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideText: {
    fontSize: 30  
  }
}

export default Slides