import { useState, useEffect } from "react"

const getCurrentBreakpoints = () => {
  const width = window.innerWidth

  /* eslint-disable @typescript-eslint/naming-convention */
  /* eslint-disable sort-keys-fix/sort-keys-fix */
  return {
    xxl: width >= 1400,
    xl: width >= 1200,
    lg: width >= 992,
    md: width >= 768,
    sm: width >= 786,
  }
  /* eslint-enable @typescript-eslint/naming-convention */
  /* eslint-enable sort-keys-fix/sort-keys-fix */
}

const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState(getCurrentBreakpoints)

  useEffect(() => {
    const handleResize = () => {
      setBreakpoints(getCurrentBreakpoints())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return breakpoints
}

export default useBreakpoints
