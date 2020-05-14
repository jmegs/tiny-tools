import React, { useState, useRef } from "react"
import copy from "copy-to-clipboard"

const LetterSpacer = () => {
  const [output, setOutput] = useState("")
  const [showCopied, setShowCopied] = useState(false)
  // const outputRef = useRef<HTMLDivElement>(null)

  function letterspace(input: string): string {
    return input
      .split(" ")
      .map(w => w.split("").join("\xa0"))
      .join("\xa0 ")
      .toUpperCase()
  }

  function copyText(text: string, element: EventTarget): void {
    if (copy(text)) {
      setShowCopied(true)
      // setTimeout(() => {
      //   setShowCopied(false)
      // }, 1500)
      document
        .querySelector(".LetterSpacer-output")
        .addEventListener("mouseleave", () => {
          setShowCopied(false)
        })
    }
  }
  const handleChange = input => setOutput(letterspace(input))

  return (
    <div className="Grid Grid--letterspacer">
      <div className="LetterSpacer-input">
        <label htmlFor="input" className="LetterSpacer-label">
          Input
        </label>
        <input
          id="input"
          placeholder="Type Something…"
          onChange={e => handleChange(e.target.value)}
        />
      </div>
      <div
        className="LetterSpacer-output"
        data-hover-text={
          showCopied ? "Copied to Clipboard" : "Copy to Clipboard"
        }
      >
        <div className="LetterSpacer-label">Output</div>
        <button
          className="UnstyledButton"
          onClick={e => copyText(output, e.target)}
        >
          {output}
        </button>
      </div>
    </div>
  )
}

export default LetterSpacer
