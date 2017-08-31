import React, { Component } from 'react'
import { View, Text } from 'react-native'

class ReviewScreen extends Component {
    // The block of code will automatically moved into the constructor of the component - instance property
    //state = { color: 'red' }
    static navigationOptions = {
        title: 'Review Jobs',
        headerRight: <Text>Go Right</Text>
    }

    render() {
        return (
            <View>
              <Text>ReviewScreen</Text>
            </View>
        )
    }
}

export default ReviewScreen