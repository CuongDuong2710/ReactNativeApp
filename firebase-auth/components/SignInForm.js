import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import axios from 'axios'

const ROOT_URL = 'https://us-central1-one-time-password-d0881.cloudfunctions.net'

class SignInForm extends Component {

  state = { phone: '', code: '' }

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone, code: this.state.code 
      })
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