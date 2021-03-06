import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

//Turns an object whose values are different reducer functions, into a single reducer function. 
//It will call every child reducer, and gather their results into a single state object, whose keys correspond to the keys of the passed reducer functions.
// That makes multiple reducers work together nicely
export default combineReducers({
    // hook up my library reducer to the library piece of state 'libraries'
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
})

// console.log(state.getState())
// { libraries: [] }
// { libraries: [ {id: 1, title:'webpack', description:'...'} ] }