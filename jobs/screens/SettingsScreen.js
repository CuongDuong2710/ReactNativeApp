import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { clearLikedJobs } from '../actions' 

class SettingScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Settings',
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  }
  
  render() {
    // onPress={() => this.props.clearLikedJobs()}: didn't need to do so maybe we'll just drop off the arrow function
    // onPress={this.props.clearLikedJobs.bind(this)}: we don't care about this action creator being called in the correct context
    return (
      <View>
        <Button
          title="Reset Liked Jobs"
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.props.clearLikedJobs}
        />
      </View>
    )
  }
}

export default connect(null, {clearLikedJobs})(SettingScreen)