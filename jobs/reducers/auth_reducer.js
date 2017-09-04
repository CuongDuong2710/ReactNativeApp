import { 
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL  
} from '../actions/types'

// Reducer will store the token that get returns from 'auth_action.js'
// And use the presence of that token inside of our application state to decide 
// whether or not the user should be forwarded into the map screen of our application.
export default function(state = {}, action) {
  switch (action.type) {
      case FACEBOOK_LOGIN_SUCCESS:
        return { token: action.payload }

      case FACEBOOK_LOGIN_FAIL:
        return { token: null }
        
      default:
        return state
  }
}