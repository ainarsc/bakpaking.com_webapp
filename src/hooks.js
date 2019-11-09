import { useEffect } from "react"

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      // if is nothing (like on first render)
      // or clicked element is not in navbar div, do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }
    document.addEventListener("mousedown", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}

export const useWindowResize = action => {
  useEffect(() => {
    document.addEventListener("resize", action)
    return () => {
      document.removeEventListener("resize", action)
    }
  }, [action])
}
