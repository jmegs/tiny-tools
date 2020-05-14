import React from "react"
import Link from "next/link"

import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <div className="Grid HomePage">
      <Link href="/easing">
        <a className="HomePage-link">Easing Curves</a>
      </Link>
      <Link href="/ratio">
        <a className="HomePage-link">Aspect Ratios</a>
      </Link>
      <Link href="/letterspacer">
        <a className="HomePage-link">Letterspacing</a>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
