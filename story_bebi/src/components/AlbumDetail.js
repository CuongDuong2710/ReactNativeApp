import React, { Component } from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { Actions } from 'react-native-router-flux'
import CardSection from './CardSection'
import Card from './Card'
import Button from './Button'

class AlbumDetail extends Component {

  // navigator list movies
  onRowPress() {
    Actions.movies({ movies: this.props.album.movies })
  }
  
  render() {
    const { album, imageUrl, language, movies } = this.props.album
    const { 
      headerContentStyle,
      headerTextStyle,
      thumbnailStyle,
      thumbnailContainerStyle
    } = styles

    // console.log('movies:', movies)

    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: imageUrl}}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{album}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Button onPress={this.onRowPress.bind(this)}>
            Xem danh sách
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 100,
    // flex to screen
    // flex: 1,
    width: 100
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
}

export default AlbumDetail