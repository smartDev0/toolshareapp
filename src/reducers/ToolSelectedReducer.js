import {
  TOOL_SELECTED
} from '../actions/types';

const INITIAL_STATE = {toolId: '', searchResults: []};
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
