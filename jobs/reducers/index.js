import { combineReducers } from 'redux'
import auth from './auth_reducer'
import jobs from './jobs_reducer'
import likedJobs from './likes_reducer'

export default combineReducers({
    // auth: auth
    // the list of jobs exits on the the 'jobs' piece of state and pass in 'DeckScreen' mapStateToProps()
    auth, jobs, likedJobs
})