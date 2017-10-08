import { combineReducers } from 'redux'

//Turns an object whose values are different reducer functions, into a single reducer function. 
//It will call every child reducer, and gather their results into a single state object, whose keys correspond to the keys of the passed reducer functions.
export default combineReducers({
    libraries: () => []
})