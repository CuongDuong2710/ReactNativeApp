/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

export default class story_bebi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Albums"/>
        <AlbumList />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
};

AppRegistry.registerComponent('story_bebi', () => story_bebi);
