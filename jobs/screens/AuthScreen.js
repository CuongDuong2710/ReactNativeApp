import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

class AuthScreen extends Component {
    componentDidMount() {
      this.props.facebookLogin()
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