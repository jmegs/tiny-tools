"use client"

import useRatio, { type RatioLabel, type Ratio, RATIOS } from "@/hooks/useRatio"

function RatioInput({
  value,
  label,
  active,
  onChange,
}: {
  value: string
  label: RatioLabel
  active: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const cx = `Ratio-input ${active ? "isActive" : ""}`
  return (
    <div className={cx}>
      <label htmlFor={label}>
        <span className="Ratio-label">{label}</span>
      </label>
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

function RatioButton({
  currentRatio,
  ratio,
  onClick,
  children,
}: {
  currentRatio: Ratio
  ratio: Ratio
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}) {
  const cx = `Ratio-button ${ratio === currentRatio ? "isActive" : ""}`
  return (
    <button className={cx} onClick={onClick} data-ratio={ratio}>
      {children}
    </button>
  )
}

export default function RatioCalculator() {
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
        onChange={(e) => onWidthChange(e.target.value)}
        active={active === "width"}
      />
      <RatioInput
        label="height"
        value={height}
        onChange={(e) => onHeightChange(e.target.value)}
        active={active === "height"}
      />
      {RATIOS.map((r) => (
        <RatioButton
          currentRatio={ratio}
          ratio={r}
          key={r}
          onClick={(e) =>
            onRatioChange(
              (e.target as HTMLButtonElement).dataset.ratio as Ratio
            )
          }
        >
          {r}
        </RatioButton>
      ))}
    </div>
  )
}
