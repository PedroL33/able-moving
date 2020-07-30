import { combineReducers } from 'redux';
import resNavReducer from './resNavReducer';
import navReducer from './nav';
import showQuoteReducer from './showQuote';
import stickyReducer from './stickyReducer';

const rootReducer = combineReducers({
  resNav: resNavReducer,
  nav: navReducer,
  showQuote: showQuoteReducer,
  sticky: stickyReducer
})

export default rootReducer;