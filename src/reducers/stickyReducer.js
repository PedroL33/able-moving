const stickyReducer = (state=false, action) => {
  switch(action.type) {
    case "SET_STICKY":
      return false;
    case "REMOVE_STICKY":
      return true;
    default:
      return state;
  }
}

export default stickyReducer;