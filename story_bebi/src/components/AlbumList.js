import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

class AlbumList extends Component {

  state = { albums: [] }

  componentWillMount() {
    axios.get('https://storybebi-179314.firebaseio.com/albums/1/movies/.json?format=export')
      .then(response => this.setState({state: response.data}))
  }

  render() {
    console.log('this.state', this.state)

    return (
      <View>
        <Text>AlbumList</Text>
      </View>
    )
  }
}

export default AlbumList