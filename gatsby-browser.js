import wrapWithProvider from "./wrap-with-provider"
import "typeface-raleway"
import "typeface-amatic-sc"
export const wrapRootElement = wrapWithProvider
export const onServiceWorkerUpdateReady = () => window.location.reload(true)
