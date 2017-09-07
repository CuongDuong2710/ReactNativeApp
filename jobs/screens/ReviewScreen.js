import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

class ReviewScreen extends Component {
    // The block of code will automatically moved into the constructor of the component - instance property
    //state = { color: 'red' }

    // This is all a class level properties do not have access to 'props' 
    // because 'props' only exist on instances of components
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
        headerStyle: {
            // If the app running on Android set margin Top is 24
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

// now we can consider the list of like jobs to exist as a prop 'likedJobs' inside our component
function mapStateToProps(state) {
    return { likedJobs: state.likedJobs }
}

export default connect(mapStateToProps)(ReviewScreen)