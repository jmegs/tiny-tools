import React from 'react'

import Layout from "../components/Layout"
import EasingCurves from "../components/EasingCurves"
import { NextSeo } from 'next-seo'

const EasingPage = () => {
  return (
    <Layout>
      <NextSeo
        title="Easing • Tiny Tools"
        description="Preview and copy CSS transition easing curves"
      />
      <EasingCurves />
    </Layout>
  )
}

export default EasingPage
