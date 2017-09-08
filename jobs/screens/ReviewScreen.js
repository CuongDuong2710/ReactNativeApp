import React, { Component } from 'react'
import { View, Text, Platform, ScrollView, Linking } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { connect } from 'react-redux'
import { MapView } from 'expo'

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

    renderLikedJobs() {
      return this.props.likedJobs.map(job => {
        const {
          company, formattedRelativeTime, url,
          longitude, latitude, jobtitle, jobkey
        } = job
        const initialRegion = {
          longitude,
          latitude,
          latitudeDelta: 0.045,
          longitudeDelta: 0.02
        }

        return (
          <Card title={jobtitle} key={jobkey}>
            <View style={{ height: 200 }}>
              <MapView
                style={{ flex: 1 }}
                cacheEnabled={Platform.OS === 'android' ? true : false}
                scrollEnabled={false}
                initialRegion={initialRegion}
              />
              <View style={styles.detailWrapper}>
                <Text style={styles.italics}>{company}</Text>
                <Text style={styles.italics}>{formattedRelativeTime}</Text>
              </View>
              <Button
                title="Apply Now!"
                backgroundColor="#03A9F4"
                onPress={() => Linking.openURL(url)}
              />
            </View>
          </Card>
        )
      })
    }

    render() {
      return (
        <ScrollView>
          {this.renderLikedJobs()}
        </ScrollView>
      )
    }
}

const styles = {
  italics: {
    fontStyle: 'italic'
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

// now we can consider the list of like jobs to exist as a prop 'likedJobs' inside our component from '../reducer/index'
function mapStateToProps(state) {
  return { likedJobs: state.likedJobs }
}

export default connect(mapStateToProps)(ReviewScreen)