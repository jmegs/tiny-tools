import type { Metadata } from "next"
import RatioCalculator from "@/components/RatioCalculator"

export const metadata: Metadata = {
  title: "Ratio",
  description: "Simple aspect ratio calculator",
}

export default function RatioPage() {
  return <RatioCalculator />
}
