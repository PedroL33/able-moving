import { combineReducers } from 'redux';
import resNavReducer from './resNavReducer';
import navReducer from './nav';

const rootReducer = combineReducers({
  resNav: resNavReducer,
  nav: navReducer
})

export default rootReducer;