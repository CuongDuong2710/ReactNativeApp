import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

// Get width of screen
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  // 'raised': default styling give button a slightly better look
  // We're going to pass down a prop from the Welcome screen, this callback should be called whenever user presses.
  // 'this.props.onComplete'  not any parentheses. This is supposed to be a function right here. We only want to call this
  // at some point in the future.
  // If we add () that means the callback will be called the instant that the button is rendered which is of course not what we want.
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
        return (
          <View style={{ marginTop: 15 }}>
            <Button
                title="Onwards!"
                raised
                buttonStyle={styles.buttonStyle}
                onPress={this.props.onComplete}
            />
          </View>
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
  },
  buttonStyle: {
      backgroundColor: '#0288D1',
    //   marginTop: 15 - have a little white space above button.
    // Looks like the style only applies within the component. 
    // To add the marginTop outside of the Button, I wrapped it in a view and applied the style to that view
  }
}

export default Slides