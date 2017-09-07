import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import { MapView } from 'expo'
import { Card, Button } from 'react-native-elements'
import Swipe from '../components/Swipe'
import * as actions from '../actions'

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

  // ** ERROR 'Undefined is not an object this.props.navigation'
  // This function is being executed by the Swipe component, not by the DeckScreen like the DeckScreen itself does not call this function.
  // The value of 'this' is equal to the Swipe component. Swipe component does not have access to 'props.navigation'
  // We can just bind the value of renderNoMoreCards to the DeckScreen.
  // Fix: arrow funtion OR vanila funtion .bind(this)
  renderNoMoreCards = () => {
    return (
      <Card title="No More Jobs">
        <Button
          title="Back To Map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate('map')}
        />
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
          onSwipeRight={job => this.props.likeJob(job)}
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

// Make sure this component is wired up to redux state
// 'jobs' piece of state from combineReducers (right :)
// can pass 'state' argument =>  mapStateToProps( state )
// jobs (left :) inside a component will refer to the array of jobs that we're working with
function mapStateToProps({ jobs }) {
  return { jobs: jobs.results }
}

// which means we need to import all our action creators
export default connect(mapStateToProps, actions)(DeckScreen)