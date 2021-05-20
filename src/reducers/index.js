import { UPDATE_FILTER } from '../actions/actionTypes';

const INITIAL_STATE = {
  filter: '',
}

const searchBarReducer = (state = INITIAL_STATE, { type, filter }) => {
  switch (type) {
    case UPDATE_FILTER:
      return {
        filter,
      }
      
  
    default:
      return state;
  }
}

export { searchBarReducer }