const resNavReducer = (state=false, action) => {
  switch(action.type) {
    case "SHOW_RES_NAV":
      return true;
    case "HIDE_RES_NAV":
      return false;
    default:
      return state;
  }
}

export default resNavReducer;