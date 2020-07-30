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

export const showQuote = () => {
  return {
    type: "SHOW_QUOTE"
  }
}

export const hideQuote = () => {
  return {
    type: "HIDE_QUOTE"
  }
}

export const setSticky = () => {
  return {
    type: "SET_STICKY"
  }
}

export const removeSticky = () => {
  return {
    type: "REMOVE_STICKY"
  }
}