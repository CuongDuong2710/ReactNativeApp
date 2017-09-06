import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { MapView } from 'expo'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'

import * as actions from '../actions'

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    // initial region
    // We're going to pass the entire region object over to the action creator
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true })
  }

  onRegionChangeComplete = (region) => {
    console.log(region)
    this.setState({ region })
  }

  // Pass entire 'region' to 'fetchJobs' action creator
  onButtonPress = () => {
    // we pass a callback function to 'fetchJobs' to navigate deck screen
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('deck')
    })
  }

  render() {
    // show indicator when loading map view
    if (!this.state.mapLoaded) {
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView 
          region={this.state.region}
          style={{ flex: 1 }}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search This Area"
            backgroundColor="#009688"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute', // every inside of it does not try to take up space away from the map view
    bottom: 20, // margin bottom 20 units from the bottom tab bar
    left: 0, // stretch all the way from left to right
    right: 0
  }
}

// don't need action clear in here { fetchJobs }
export default connect(null, actions)(MapScreen)