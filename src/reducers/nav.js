const navReducer = (state="about", action) => {
  switch(action.type) {
    case "SET_NAV":
      return action.payload;
    default:
      return state;
  }
}

export default navReducer;