import { combineReducers } from "redux"
import uiReducer from "./uiReducer"
import locationReducer from "./locationReducer"

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
  location: locationReducer,
})
