import {combineReducers} from 'redux';
import SearchResultsReducer from './SearchReducer';

export default combineReducers({
  toolSearch: SearchResultsReducer,
});
