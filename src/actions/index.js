export const showResNav = () => {
  return {
    type: "SHOW_RES_NAV"
  }
}

export const hideResNav = () => {
  return {
    type: "HIDE_RES_NAV"
  }
}

export const setNav = (section) => {
  return {
    type: "SET_NAV",
    payload: section
  }
}