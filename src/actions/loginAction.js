import axios from 'axios';
import {TOOL_SEARCH_RESPONSE_RETURNED, TOOL_SEARCH_TERM_CHANGED} from './types';
import {Actions} from 'react-native-router-flux';

export function onLoginSubmit(email, password) {
  console.log("Login store check triggered");
  return dispatch => {
    
    axios
      .post('https://toolshare-rails.herokuapp.com/users/session', {
        email: email,
        password: password,
      })
      .then(result => {
        console.log('In here');
        console.log(result.data);
        //dispatch({type: TOOL_SEARCH_RESPONSE_RETURNED, payload: result.data});
      });
  };
}
