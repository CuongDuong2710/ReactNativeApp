import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import Home from './components/Home'
import Movies from './components/Movies'
import Youtube from './components/Youtube'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 10 }}>
      <Scene key="main">
        <Scene 
          key="home"
          component={Home}
          title="Thể loại"/>

        <Scene
          key="movies"
          component={Movies}
          title="Danh sách video"/>

        <Scene
          key="youtube"
          component={Youtube}
          title="Phát video"
        />

      </Scene>
    </Router>
  )
}

export default RouterComponent