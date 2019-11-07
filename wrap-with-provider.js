import React from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import theme from "./src/theme"

import createStore from "./src/state/createStore"

export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </Provider>
  )
}
