import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Products from '../components/Products/Products'

const AdvancedExamplePage = () => (
  <Layout>
    <SEO title="Advanced Example" />
    <h1>gatsby-source-stripe to bring on te products</h1>
    <Products />
    <Link to="/">Go back to the first example</Link>
  </Layout>
)

export default AdvancedExamplePage
