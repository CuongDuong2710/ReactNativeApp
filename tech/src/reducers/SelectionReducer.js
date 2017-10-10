/**
 * Recording the current selected library by id. Assemble some anout of new application state
 * Remember reducers are always called with the state object that was returned the last time this reducer was executed
 * @param state set is null (if not state is undefined). I don't have a selected library right now
 */
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload
    default:
      return state
  }
}

// console.log('SelectionReducer state', state)
// console.log('SelectionReducer action', action)
// SelectionReducer state null
// action {type: "select_library", payload: 7}
// payload : 7
// type : "select_library"