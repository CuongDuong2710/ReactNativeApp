import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

// We'll watch our props object, will watch our application state if we receive an update to the prop's being passed to screen right here.
// Like the token has been successfully saved then let's forcibly navigate the user over to the map.
class AuthScreen extends Component {
    componentDidMount() {
      this.props.facebookLogin()
      // remove token to test facebook's flow again
      AsyncStorage.removeItem('fb_token')
    }

    render() {
        return (
            <View style={styles.containerStyles}>
              <Text>AuthScreen</Text>
            </View>
        )
    }
}

const styles = {
    containerStyles: {
        marginTop: 24
    }
}

export default connect(null, actions)(AuthScreen)