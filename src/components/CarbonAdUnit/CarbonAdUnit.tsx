import { useEffect } from "react"

const CarbonAdUnit = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".carbon-ad-wrapper")
    const script = document.createElement("script")

    script.src =
      "//cdn.carbonads.com/carbon.js?serve=CE7DL5QW&placement=tinytoolsdesign"
    script.id = "_carbonads_js"
    script.async = true

    wrapper.appendChild(script)
    return () => {
      wrapper.removeChild(script)
    }
  }, [])

  return <div className="carbon-ad-wrapper" />
}

export default CarbonAdUnit
