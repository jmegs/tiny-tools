"use client"

import { useState } from "react"
import copy from "copy-to-clipboard"

function letterspace(input: string): string {
  return input
    .split(" ")
    .map((w) => w.split("").join("\xa0"))
    .join("\xa0 ")
    .toUpperCase()
}

export default function LetterSpacer() {
  const [output, setOutput] = useState("")
  const [showCopied, setShowCopied] = useState(false)

  function copyText(text: string): void {
    if (copy(text)) {
      setShowCopied(true)
      document
        .querySelector(".LetterSpacer-output")
        ?.addEventListener("mouseleave", () => {
          setShowCopied(false)
        }, { once: true })
    }
  }

  return (
    <div className="Grid Grid--letterspacer">
      <div className="LetterSpacer-input">
        <label htmlFor="input" className="LetterSpacer-label">
          Input
        </label>
        <input
          id="input"
          placeholder="Type Something…"
          onChange={(e) => setOutput(letterspace(e.target.value))}
        />
      </div>
      <div
        className="LetterSpacer-output"
        data-hover-text={
          showCopied ? "Copied to Clipboard" : "Copy to Clipboard"
        }
      >
        <div className="LetterSpacer-label">Output</div>
        <button className="UnstyledButton" onClick={() => copyText(output)}>
          {output}
        </button>
      </div>
    </div>
  )
}
