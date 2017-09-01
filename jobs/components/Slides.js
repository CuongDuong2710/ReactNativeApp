import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'

// Get width of screen
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderSlides() {
    // Every single object that's inside of props stack data will create a new view contain the slide text
    // 'slide' is { text: 'Welcome to JobApp' } object in 'map' function
    return this.props.data.map((slide) => {
      return (
        <View 
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
        </View>
      )
    })
  }

  // 'pagingEnabled': automatically advance to closest page when user drag halfway
  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1}}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

// 'textAlign: center' is just for Android multitext
const styles = {
    slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  }
}

export default Slides