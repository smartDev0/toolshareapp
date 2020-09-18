import axios from 'axios';
import {TOOL_SEARCH_RESPONSE_RETURNED, TOOL_SEARCH_TERM_CHANGED} from './types';
import {Actions} from 'react-native-router-flux';
export function onSearchSubmit() {
  return dispatch => {
    
    axios
      .get(
        'https://toolshare-rails.herokuapp.com/search?search_term="hammer"&page=1',
      )
      .then(result => {
        console.log("In here");
        Actions.toolSearchResults();
        dispatch({type: TOOL_SEARCH_RESPONSE_RETURNED, payload: result.data});
      });
  };
}

export function onToolSearchTermChange(text) {
  //console.log(text);
  return {
    type: TOOL_SEARCH_TERM_CHANGED,
    payload: text,
  };
}
