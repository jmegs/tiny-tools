"use client"

import { useState } from "react"
import copy from "copy-to-clipboard"
import easings from "./easings.json"

function Easing({ name, curve }: { name: string; curve: string }) {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleClick = () => {
    if (copy(curve)) {
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
      }, 1500)
    }
  }

  const style = { "--curve": curve } as React.CSSProperties

  return (
    <div className="Easing">
      <div className="Easing-inner">
        <button
          onClick={handleClick}
          title="Click to Copy"
          className="UnstyledButton"
        >
          <header className="Easing-header">{name}</header>
          <div className="Easing-dot" style={style} />
          <footer className={`Easing-footer ${showSuccess ? "isShown" : ""}`}>
            Copied to Clipboard
          </footer>
        </button>
      </div>
    </div>
  )
}

export default function EasingCurves() {
  return (
    <div className="Grid Grid--easing">
      {easings.map((e) => (
        <Easing curve={e.curve} name={e.name} key={e.name} />
      ))}
    </div>
  )
}
