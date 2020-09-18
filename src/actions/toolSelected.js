import axios from 'axios';
import {TOOL_SELECTED} from './types';
import {Actions} from 'react-native-router-flux';

export function onToolSelected(toolId) {
  return dispatch => {
    axios
      .get(
        'https://toolshare-rails.herokuapp.com/items/' + toolId,
      )
      .then(result => {
        dispatch({type: TOOL_SELECTED, payload: result.data});
        //Actions.toolSearchResults();
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
