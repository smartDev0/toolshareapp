import {
  LOGIN_RESPONSE_RETURNED,
  EXISTING_LOGIN_FOUND,
} from '../actions/types';

const INITIAL_STATE = {userAuthenticated: false, firstName: };
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOOL_SEARCH_RESPONSE_RETURNED:
      return {...state, searchResults: action.payload, searchTerm: ''};
    case TOOL_SEARCH_TERM_CHANGED:
      return {...state, searchTerm: action.payload};
    default:
      return state;
  }
};
