const showQuoteReducer = (state=false, action) => {
  switch(action.type) {
    case "SHOW_QUOTE":
      return true;
    case "HIDE_QUOTE":
      return false;
    default:
      return state;
  }
}

export default showQuoteReducer;