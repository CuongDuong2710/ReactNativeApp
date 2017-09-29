import React, { Component } from 'react'
import { View } from 'react-native'
import AlbumList from './AlbumList'

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AlbumList />
      </View>
    )
  }
}

const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
};

export default Home