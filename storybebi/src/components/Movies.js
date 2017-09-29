import React, { Component } from 'react'
import { View, Text, Linking, Image, FlatList } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'
import Card from './Card'
import CardSection from './CardSection'

class Movies extends Component {
  
  keyExtractor = (item) => item.title

  renderItem = ({item}) => {
    return (
      <ListItem 
        roundAvatar
        avatar={{uri: item.imageUrl}}
        title={item.title}
        subtitle={item.length}
        onPress={() => Linking.openURL(item.videoUrl)}
      />
    )
  }

  render() {
    console.log('this.props.movies', this.props.movies)

    return (
      <List>
        <FlatList
          data= {this.props.movies}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </List>
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