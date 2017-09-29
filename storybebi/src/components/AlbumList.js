import React, { Component, Dimensions } from 'react'
import { View, Text, ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

// var width = Dimensions.get('window').width;

class AlbumList extends Component {

  state = { albums: [] }

  componentWillMount() {
    axios.get('https://storybebi-179314.firebaseio.com/albums.json?format=export')
      .then(response => this.setState({albums: response.data}))
      .catch(error => console.log(error))
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.album} album={album}/>
    )
  }

  render() {
    console.log('this.state', this.state)

    return (
      <ScrollView style={styles.scrollViewStyle}>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

const styles = {
  scrollViewStyle: {
    // stretch full screen
    alignSelf: 'stretch'
  }
}

export default AlbumList