import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Slides from '../components/Slides'

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
]

class WelcomeScreen extends Component {

  // Define 'onComplete' callback and pass it down into slides.
  // We might have many different callbacks inside of here.
  // Arrow function do not need to bind(this)
  onSlidesComplete = () => {
    // ??? How we get access to that 'navigate' function ???
    // Well, the 'navigate' function is provided on a prop to Welcome screen.
    // Whenever we render a component with the react-native navigation, it will automatically pass down a set of props called navigation
    // to the component that it renders. <See comment at App.js for more details>
    this.props.navigation.navigate('auth')
  }

  // Maybe we're rendering several different funtions or different components inside of 'render'
  // and we might have some callbacks for each one.
  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    )
  }
}

export default WelcomeScreen