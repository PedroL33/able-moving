import { combineReducers } from 'redux';
import resNavReducer from './resNavReducer';

const rootReducer = combineReducers({
  resNav: resNavReducer
})

export default rootReducer;