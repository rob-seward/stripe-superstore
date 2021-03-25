import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Checkout from '../components/checkout'
import styled from "styled-components"

const TshirtStyled = styled.div`
max-width: 300px;
display: grid;
grid-template-columns: 1fr;

`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <TshirtStyled>
    <h1>T-shirt for sale</h1>
    <p>Hot t-shirts with the latest deisgns</p>
    
   
    <div>
      
      <Image />
      
    </div>
    <Checkout />
    <Link to="/advanced/">Go to the advanced example</Link>
    </TshirtStyled>
  </Layout>
)

export default IndexPage
