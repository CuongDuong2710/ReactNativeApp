import _ from 'lodash'
import { REHYDRATE } from 'redux-persist/constants'
import {
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    // I want to watch for whenever it dispatches an action hey here's the state from the last time that redux was running
    // 'action.payload' is entire state object from the last time that redux was running and we're pulling just in 'likedJobs' off here.
    // '[]' this is to catch the very first time that redux persists runs inside of our application, 'action.payload.likedJobs' is undefined
    case REHYDRATE:
      return action.payload.likedJobs || []
    case LIKE_JOB:
      // 'uniqBy' should compare in between all the different jobs inside this array
      // to make sure that we only get back to a unique list of jobs that comparison key
      // 'action.payload': the job that the user just liked
      // ...state: add the list of jobs that the user has previously liked
      return _.uniqBy([
        action.payload, ...state
      ],'jobkey')
    
    case CLEAR_LIKED_JOBS:
      return []
    
    // Default case which the reducer doesn't care about the action that is getting
    default:
      return state
  }
}