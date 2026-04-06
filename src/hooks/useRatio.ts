"use client"

import { useState, useEffect } from "react"

export const RATIOS = ["16x9", "4x3", "3x2", "21x9"] as const
export type Ratio = (typeof RATIOS)[number]

export type RatioLabel = "width" | "height"

function getFactors(ratio: Ratio = "16x9") {
  const [wFactor, hFactor] = ratio.split("x").map((part) => parseInt(part))
  return { wFactor, hFactor }
}

export default function useRatio() {
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [value, setValue] = useState("")
  const [active, setActive] = useState<"width" | "height">("width")
  const [ratio, setRatio] = useState<Ratio>("16x9")

  function getWidthFromHeight(height: string, ratio: Ratio): string {
    const input = parseInt(height)
    if (Number.isNaN(input)) return ""
    const { wFactor, hFactor } = getFactors(ratio)
    return Math.round((input / hFactor) * wFactor).toString()
  }

  function getHeightFromWidth(width: string, ratio: Ratio): string {
    const input = parseInt(width)
    if (Number.isNaN(input)) return ""
    const { wFactor, hFactor } = getFactors(ratio)
    return Math.round((input / wFactor) * hFactor).toString()
  }

  function onHeightChange(value: string): void {
    setActive("height")
    setValue(value)
  }

  function onWidthChange(value: string): void {
    setActive("width")
    setValue(value)
  }

  function onRatioChange(ratio: Ratio): void {
    setRatio(ratio)
  }

  useEffect(() => {
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
