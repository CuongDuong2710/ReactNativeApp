import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import reducers from '../reducers'

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    // Responsible for pulling our data out from AsyncStorage and then send it to through all of our different reducers
    autoRehydrate()
  )
)

// set up redux persist to watch or store for any change in state
// 'storage' object: whenever redux state changes, I want you to place that new piece of state directly into AsyncStorage
// 'whitelist': hey our redux state might have many different keys or many different properties of state saved on it. It's 'likedJobs' from 'combineReducers'
persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] })

export default store