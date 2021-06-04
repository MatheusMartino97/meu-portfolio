import { UPDATE_TIMER } from '../actions/actionTypes';
import { combineReducers } from 'redux';

const INITIAL_STATE = true;

const timer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case UPDATE_TIMER:
      return !state;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  timer,
});

export default rootReducer;
