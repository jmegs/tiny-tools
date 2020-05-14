import React from "react"
import copy from "copy-to-clipboard"
import { Copy } from "react-feather"

import easings from "./easings.json"

interface EasingProps {
  /** the camelCased name of the animation */
  name: string
  /** the css string that defines the animation curve */
  curve: string
}

const Easing = (props: EasingProps) => {
  const [showSuccess, setShowSuccess] = React.useState(false)

  /** copies the passed curve to the clipboard and flashes a confirmation
   * @param {string} curve the css curve to be copied to the clipboard */

  const handleClick = curve => {
    if (copy(curve)) {
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
      }, 1500)
    }
  }

  // because custom properties are not defined as regular css properties
  let style = { "--curve": props.curve } as React.CSSProperties

  return (
    <div className="Easing">
      <button
        onClick={() => handleClick(props.curve)}
        title="Click to Copy"
        className="UnstyledButton"
      >
        <div className="Easing-inner">
          <header className="Easing-header">
            {props.name}
            <Copy />
          </header>
          {/* ts-ignore */}
          <div className="Easing-dot" style={style} />
          <footer className={`Easing-footer ${showSuccess ? "isShown" : ""}`}>
            Copied to Clipboard
          </footer>
        </div>
      </button>
    </div>
  )
}

const EasingCurves = () => {
  return (
    <div className="Grid Grid--easing">
      {easings.map(e => (
        <Easing curve={e.curve} name={e.name} key={e.name} />
      ))}
    </div>
  )
}

export default EasingCurves
