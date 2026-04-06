import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <div className="Grid About">
      <div className="About-blurb">
        <p>
          Product designers encounter little moments of friction every day –
          figuring out the height of that 16x9 image, remembering what
          &ldquo;ease-in-expo&rdquo; looks like, formatting text in Google
          Slides. Tiny Tools is my attempt to solve those little moments of
          friction.
        </p>
      </div>
      <div className="About-credits">
        <div>
          made by <a href="https://johnmeguerian.com">John Meguerian</a>
        </div>
        <div>with Next and ♥️</div>
      </div>
    </div>
  )
}
