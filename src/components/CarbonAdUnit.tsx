"use client"

import { useEffect } from "react"

export default function CarbonAdUnit() {
  useEffect(() => {
    const wrapper = document.querySelector(".carbon-ad-wrapper")
    if (!wrapper) return

    const script = document.createElement("script")
    script.src =
      "//cdn.carbonads.com/carbon.js?serve=CE7DL5QW&placement=tinytoolsdesign"
    script.id = "_carbonads_js"
    script.async = true

    wrapper.appendChild(script)
    return () => {
      script.remove()
    }
  }, [])

  return <div className="carbon-ad-wrapper" />
}
