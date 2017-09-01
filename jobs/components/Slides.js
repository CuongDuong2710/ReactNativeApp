import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

// Get width of screen
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  // render button on last slide
  // 'raised': default styling give button a slightly better look
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
        return (
          <Button
            title="Onwards!"
            raised
          />
        )
    }
  }
  // render each slides of Welcome screen
  renderSlides() {
    // Every single object that's inside of props stack data will create a new view contain the slide text
    // 'slide' is record object of 'data' in 'map' function, ex: { text: 'Welcome to JobApp' }
    return this.props.data.map((slide, index) => {
      return (
        <View 
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(index)}
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