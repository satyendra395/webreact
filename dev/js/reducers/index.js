// Set up your root reducer here...
import { combineReducers } from 'redux';
import {jobReducer} from './jobReducer';


export default combineReducers({
  jobs: jobReducer,
  
});
