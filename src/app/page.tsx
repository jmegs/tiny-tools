import Link from "next/link"
import CarbonAdUnit from "@/components/CarbonAdUnit"

export default function HomePage() {
  return (
    <>
      <div className="Grid HomePage">
        <Link href="/ratio" className="HomePage-link">
          Aspect Ratios
        </Link>
        <Link href="/easing" className="HomePage-link">
          Easing Curves
        </Link>
        <Link href="/letterspacer" className="HomePage-link">
          Letterspacing
        </Link>
      </div>
      <CarbonAdUnit />
    </>
  )
}
