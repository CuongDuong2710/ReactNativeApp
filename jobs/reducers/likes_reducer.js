import _ from 'lodash'
import {
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
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