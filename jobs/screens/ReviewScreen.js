import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { Button } from 'react-native-elements'

class ReviewScreen extends Component {
    // The block of code will automatically moved into the constructor of the component - instance property
    //state = { color: 'red' }
    static navigationOptions = ({ navigation }) => ({
        title: 'Review Jobs',
        headerRight: (
            <Button 
              title="Settings" 
              onPress={() => { navigation.navigate('settings') }}
              backgroundColor="rgba(0,0,0,0)"
              color="rgba(0, 122, 255, 1)"
            />
        ),
        style: {
            marginTop: Platform.OS === 'android' ? 24 : 0
        }
    })

    render() {
        return (
            <View>
              <Text>ReviewScreen</Text>
            </View>
        )
    }
}

export default ReviewScreen