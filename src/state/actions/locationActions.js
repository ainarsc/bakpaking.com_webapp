import { PUSH_PAGE } from "./actionTypes"

export const pushPage = currentPage => {
  return {
    type: PUSH_PAGE,
    data: currentPage,
  }
}
