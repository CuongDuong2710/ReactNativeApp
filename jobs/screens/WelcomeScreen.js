import _ from 'lodash'
import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { AppLoading } from 'expo'
import Slides from '../components/Slides'

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
]

class WelcomeScreen extends Component {
  state = { token: null }
  
  // We will look at the value of a storage token and decide what to do
  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token')

    // update 'token' and will show 'welcome' screen
    if (token) {
      this.setState({ token })
      this.props.navigation.navigate('map')
    } else {
      // 'token' is false skipped <AppLoading /> (appear with token=null) and return Slides
      this.setState({ token: false })
    }
  }

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
    if (_.isNull(this.state.token)) { // this.state.token == null
      return <AppLoading />
    }

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    )
  }
}

export default WelcomeScreen