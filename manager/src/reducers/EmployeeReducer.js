import {
    EMPLOYEE_FETCH_SUCCESS
} from '../actions/types';

// Made our INITIAL_STATE is an object, it is because eventually we're going to end up with
// an object containing all the different employees and our application.
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};