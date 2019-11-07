import { combineReducers } from "redux"
import uiReducer from "./uiReducer"

// const appReducer = combineReducers({
//   uiReducer: uiReducer,
// })
// export default function appReducer() {
//   return combineReducers({
//     ui: uiReducer
//   });
// }

export default combineReducers({
  ui: uiReducer,
})
