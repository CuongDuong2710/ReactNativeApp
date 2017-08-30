import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import axios from 'axios'
import firebase from firebase

const ROOT_URL = 'https://us-central1-one-time-password-d0881.cloudfunctions.net'

class SignInForm extends Component {

  state = { phone: '', code: '' }

  handleSubmit = async () => {
    try {
      // 'data' is going to contain a key called token.
      // Token is what we really care about to get our user logged in using firebase
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone, code: this.state.code 
      })

      // User can use firebase anywhere inside our application. 
      // So thay can make request, get data anything they really want to do
      firebase.auth().signInWithCustomToken(data.token)
    } catch (err) {
        console.log(err)
    }
  }

  // 'onChangeText': event handler to update our state when a user adds some text
  // 'bind(this)': we are binding the context here because it is an event handler
  render() {
    return (
        <View>

          <View style={{ marginBottom: 10 }}>
            <FormLabel>Enter Phone Number</FormLabel>
            <FormInput 
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
            />
          </View>

          <View style={{ marginBottom: 10 }}>
            <FormLabel>Enter Code</FormLabel>
            <FormInput 
              value={this.state.code}
              onChangeText={code => this.setState({ code })}
            />
          </View>

            <Button onPress={this.handleSubmit} title="Submit" />

        </View>
    )
  }
}

export default SignInForm