import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { MapView } from 'expo'
import { Card, Button } from 'react-native-elements'
import Swipe from '../components/Swipe'

class DeckScreen extends Component {
  // receving a single job & return some amount of jsx will show a render card
  // 'job.snipped' is replace open tag <b> and close tag </b> to empty string ''
  renderCard(job) {
    return (
      <Card title={job.jobtitle}>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
        </Text>
      </Card>
    )
  }
  render() {
    // 'this.renderCard' we're not placing any parenthese on here because we don't want to call it right now.
    // It's up to the Swipe component for deciding when and how to call the function.
    return (
      <View>
        <Swipe 
          data={this.props.jobs}
          renderCard={this.renderCard}
        />
      </View>
    )
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

// 'jobs' piece of state from combineReducers (right :)
// can pass 'state' argument =>  mapStateToProps( state )
// jobs (left :) inside a component will refer to the array of jobs that we're working with
function mapStateToProps({ jobs }) {
  return { jobs: jobs.results }
}

export default connect(mapStateToProps)(DeckScreen)