// Remember reducers are always called with the state object which is the state that was returned the last time this reducer
// was executed and a second argument is action.
// Whenever I dispatch an action it will show up as the second argument.
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
//    console.log(action);
//    return null;
}