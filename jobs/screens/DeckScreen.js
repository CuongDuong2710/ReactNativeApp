import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class DeckScreen extends Component {
  render() {
    return (
      <View>
        <Text>DeckScreen</Text>
      </View>
    )
  }
}

// 'jobs' piece of state from combineReducers (right :)
// can pass 'state' argument =>  mapStateToProps( state )
// jobs (left :) inside a component will refer to the array of jobs that we're working with
function mapStateToProps({ jobs }) {
  return { jobs: jobs.results }
}

export default connect(mapStateToProps)(DeckScreen)