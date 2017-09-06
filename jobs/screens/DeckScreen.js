import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import { MapView } from 'expo'
import { Card, Button } from 'react-native-elements'
import Swipe from '../components/Swipe'

class DeckScreen extends Component {
  // receving a single job & return some amount of jsx will show a render card
  renderCard(job) {

    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      longitudeDelta: 0.045,
      latitudeDelta: 0.02
    }

    // MapView 'scrollEnable=false', user cannot scroll when view job
    // 'cacheEnabled': we control whether or not the mapview is going to render itself as a plain image 
    // or it's going to render itself like very live and real component
    // 'true': the map will render as a very static image and that is not going to be consuming a tremendous amount of resources (50-100 megabytes)
    // 'job.snipped' is replace open tag <b> and close tag </b> to empty string ''
    return (
      <Card title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android' ? true : false }
            initialRegion={initialRegion}
          >
          </MapView>
        </View>
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

  renderNoMoreCards() {
    return (
      <Card title="No more jobs">
      </Card>
    )
  }

  render() {
    // 'this.renderCard' we're not placing any parenthese on here because we don't want to call it right now.
    // It's up to the Swipe component for deciding when and how to call the function.
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe 
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          keyProp="jobkey"
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