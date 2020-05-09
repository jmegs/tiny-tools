import React from "react"

// creates a type that can only be one of the things in the RATIOS array
export const RATIOS = ["16x9", "4x3", "3x2", "21x9"] as const
export type Ratio = typeof RATIOS[any]

export type RatioLabel = "width" | "height"

type Factors = {
  hFactor: number
  wFactor: number
}
/**
 * Takes a written ratio and returns the width and height factors
 * @param {Ratio} ratio an aspect ratio written like "16x9"
 * @returns {Factors} the width and height factors e.x. {wFactor, hFactor}
 */
function getFactors(ratio: Ratio = "16x9"): Factors {
  let [wFactor, hFactor] = ratio.split("x").map(part => parseInt(part))
  return {wFactor, hFactor}
}

function useRatio() {
  const [width, setWidth] = React.useState("")
  const [height, setHeight] = React.useState("")
  const [value, setValue] = React.useState("")
  const [active, setActive] = React.useState<"width" | "height">("width")
  const [ratio, setRatio] = React.useState<Ratio>("16x9")

  function getWidthFromHeight(height: any, ratio: Ratio): string {
    let input = parseInt(height)
    if (Number.isNaN(input)) {
      return ""
    }
    const { wFactor, hFactor } = getFactors(ratio)
    let output = Math.round((height / hFactor) * wFactor)
    return output.toString()
  }

  function getHeightFromWidth(width: any, ratio: Ratio): string {
    let input = parseInt(width)
    if (Number.isNaN(input)) {
      return ""
    }
    const { wFactor, hFactor } = getFactors(ratio)
    let output = Math.round((width / wFactor) * hFactor)
    return output.toString()
  }

  function onHeightChange(value: any): void {
    setActive("height")
    setValue(value)
  }

  function onWidthChange(value: any): void {
    setActive("width")
    setValue(value)
  }

  function onRatioChange(ratio: Ratio): void {
    setRatio(ratio)
  }

  React.useEffect(() => {
    setWidth(active === "height" ? getWidthFromHeight(value, ratio) : value)
    setHeight(active === "width" ? getHeightFromWidth(value, ratio) : value)
  }, [value, ratio])

  return {
    active,
    ratio,
    height,
    width,
    onWidthChange,
    onHeightChange,
    onRatioChange,
  }
}

export default useRatio
