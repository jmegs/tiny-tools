import type { Metadata } from "next"
import EasingCurves from "@/components/EasingCurves"

export const metadata: Metadata = {
  title: "Easing",
  description: "Preview and copy CSS transition easing curves",
}

export default function EasingPage() {
  return <EasingCurves />
}
