import React from "react"
import PropTypes from "prop-types"
import copy from "copy-to-clipboard"
import { Copy } from "react-feather"

import easings from "./easings.json"

const Easing = props => {
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
          <div className="Easing-dot" style={{ "--curve": props.curve }} />
          <footer className={`Easing-footer ${showSuccess ? "isShown" : ""}`}>
            Copied to Clipboard
          </footer>
        </div>
      </button>
    </div>
  )
}

Easing.propTypes = {
  /** the camelCased name of the animation */
  name: PropTypes.string.isRequired,
  /** the css string that defines the animation curve */
  curve: PropTypes.string.isRequired,
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
