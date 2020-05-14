import React from 'react'

import Layout from "../components/Layout"
import RatioCalculator from '../components/RatioCalculator'
import { NextSeo } from 'next-seo'

const RatioPage = () => {
  return (
    <Layout>
      <NextSeo
        title="Ratio • Tiny Tools"
        description="Simple aspect ratio calculator"
      />
      <RatioCalculator /> 
    </Layout>
  )
}

export default RatioPage