import type { Metadata } from "next"
import LetterSpacer from "@/components/LetterSpacer"

export const metadata: Metadata = {
  title: "Spacer",
  description: "Letterspace text with unicode spaces",
}

export default function LetterSpacerPage() {
  return <LetterSpacer />
}
