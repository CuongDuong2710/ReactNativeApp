import React, { Component } from 'react'
import { View, Text, Linking, Image, FlatList } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

class Movies extends Component {
  
  keyExtractor = (item) => item.title

  renderItem = ({item}) => {
    const { thumbnailContainerStyle, thumbnailStyle, headerContentStyle, headerTextStyle } = styles

    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image
              style={thumbnailStyle}
              source={{ uri: item.imageUrl }}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{item.title}</Text>
            <Text>{item.length}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(item.videoUrl)}>
            Watching now!!!
          </Button>
        </CardSection>
      </Card>
    )
  }

  render() {
    console.log('this.props.movies', this.props.movies)

    return (
      <FlatList
        data= {this.props.movies}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    height: 100,
    width: 100
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  }
}

export default Movies