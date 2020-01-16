import wrapWithProvider from "./wrap-with-provider"
import { globalHistory } from "@reach/router"

import "typeface-raleway"
import "typeface-amatic-sc"
export const wrapRootElement = wrapWithProvider
export const onServiceWorkerUpdateReady = () => window.location.reload(true)
export const onInitialClientRender = () => {
  /**
   * This is a workaround for a bug in Gatsby
   *
   * See https://github.com/gatsbyjs/gatsby/issues/8357 for more details
   */
  globalHistory._onTransitionComplete()
}
