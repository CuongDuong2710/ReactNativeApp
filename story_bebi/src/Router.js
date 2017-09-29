import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import Home from './components/Home'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 10 }}>
      <Scene key="main">
        <Scene key="home" component={Home} title="Albums"/>
      </Scene>
    </Router>
  )
}

export default RouterComponent