import { PUSH_PAGE } from "../actions/actionTypes"

let empty

const initialState = {
  prevPage: empty,
}
export default function(state = initialState, action) {
  const { type, data } = action

  switch (type) {
    case PUSH_PAGE:
      return {
        ...state,
        prevPage: data,
      }
    default:
      return state
  }
}
