/*
 * HeaderReducer
 *
 * This reducer contains user profile information and authentication info.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_USER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  user: {
    username: 'Hank Huang',
    credentials: [],
  },
});

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER:

      // Delete prefixed '@' from the github username
      return state
        .set('user', action.user);
    default:
      return state;
  }
}

export default headerReducer;
