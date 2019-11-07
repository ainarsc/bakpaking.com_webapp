import { COLLAPSE_NAV, EXPAND_NAV } from "./actionTypes"

export const collapseNav = () => {
  return {
    type: COLLAPSE_NAV,
  }
}

export const expandNav = () => {
  return {
    type: EXPAND_NAV,
  }
}
