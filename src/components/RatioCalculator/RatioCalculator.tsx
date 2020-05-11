import useRatio, { RatioLabel, Ratio, RATIOS } from "../../hooks/useRatio"
import React, { ChangeEvent, ReactElement } from "react"

type InputProps = {
  value: string
  label: RatioLabel
  active: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type ButtonProps = {
  currentRatio: Ratio
  ratio: Ratio
  onClick: (MouseEvent) => void
}

const RatioInput: React.FC<InputProps> = ({
  value,
  label,
  active,
  onChange,
}) => {
  const cx = `Ratio-input ${active ? "isActive" : ""}`
  return (
    <div className={cx}>
      <label htmlFor={label}>{label}</label>
      <input
        type="number"
        value={value}
        id={label}
        placeholder="Value"
        onChange={onChange}
      />
    </div>
  )
}

const RatioButton: React.FC<ButtonProps> = ({
  currentRatio,
  ratio,
  onClick,
  children,
}) => {
  const cx = `Ratio-button ${ratio === currentRatio ? "isActive" : ""}`
  return (
    <button className={cx} onClick={onClick} data-ratio={ratio}>
      {children}
    </button>
  )
} 

const RatioCalculator = () => {
  const {
    width,
    height,
    active,
    ratio,
    onHeightChange,
    onRatioChange,
    onWidthChange,
  } = useRatio()

  return (
    <div className="Grid Grid--ratio">
      <RatioInput
        label="width"
        value={width}
        onChange={e => onWidthChange(e.target.value)}
        active={active === "width"}
      />
      <RatioInput
        label="height"
        value={height}
        onChange={e => onHeightChange(e.target.value)}
        active={active === "height"}
      />
      {RATIOS.map(r => {
        return (
          <RatioButton
            currentRatio={ratio}
            ratio={r}
            data-ratio={r}
            key={r}
            onClick={e => onRatioChange(e.target.dataset.ratio)}
          >
            {r}
          </RatioButton>
        )
      })}
    </div>
  )
}

export default RatioCalculator
