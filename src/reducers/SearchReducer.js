import {
  TOOL_SEARCH_TERM_CHANGED,
  TOOL_SEARCH_RESPONSE_RETURNED,
} from '../actions/types';

const INITIAL_STATE = {searchTerm: '', searchResults: []};
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
