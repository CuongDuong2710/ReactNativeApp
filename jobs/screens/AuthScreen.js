import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AuthScreen extends Component {
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
        marginTop: 10
    }
}

export default AuthScreen