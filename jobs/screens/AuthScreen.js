import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

// We'll watch our props object, will watch our application state if we receive an update to the prop's being passed to screen right here.
// Like the token has been successfully saved then let's forcibly navigate the user over to the map.
class AuthScreen extends Component {
    componentDidMount() {
      // We'll attempt to log the user in if there is a safe token, we dispatch an action which will update the 'auth' piece of state
      // through the auth reducer
      this.props.facebookLogin()
      this.onAuthComplete(this.props)
      // remove token to test facebook's flow again
    //   AsyncStorage.removeItem('fb_token')
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps)
    }

    onAuthComplete(props) {
      if (props.token) {
        console.log(props.token)
        this.props.navigation.navigate('map')
      }
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

// 'auth' is from 'combineReducers' from 'reducers/index.js'
function mapStateToProps({ auth }) {
    return { token: auth.token }
}

export default connect(mapStateToProps, actions)(AuthScreen)