import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { MapView } from 'expo'

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
      </View>
    )
  }
}

export default MapScreen