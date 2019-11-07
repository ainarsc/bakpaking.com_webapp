import { COLLAPSE_NAV, EXPAND_NAV } from "../actions/actionTypes"

const initialState = {
  isExpanded: false,
  isLanding: false,
}

export default function(state = initialState, action) {
  const { type } = action

  switch (type) {
    case COLLAPSE_NAV:
      return {
        ...state,
        isExpanded: false,
      }
    case EXPAND_NAV:
      return {
        ...state,
        isExpanded: true,
      }
    default:
      return state
  }
}
