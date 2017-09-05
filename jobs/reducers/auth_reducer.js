import { 
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL  
} from '../actions/types'

// Reducer will store the token that get returns from 'auth_action.js'
// And use the presence of that token inside of our application state to decide 
// whether or not the user should be forwarded into the map screen of our application.
export default function(state = {}, action) {
  switch (action.type) {
      // Remember that when we produce a new piece of states or change our state inside of redux
      // it automatically causes every component that is hooked up to redux to re render with the new set of props from 'mapStateToProps'
      case FACEBOOK_LOGIN_SUCCESS:
        return { token: action.payload }

      case FACEBOOK_LOGIN_FAIL:
        return { token: null }
        
      default:
        return state
  }
}