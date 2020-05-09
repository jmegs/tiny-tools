import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <div>
      <Link to="/easing">Easing</Link>
      <Link to="/ratio">Aspect Ratio</Link>
      <Link to="/spacerator">Spacerator</Link>
    </div>
  </Layout>
)

export default IndexPage
