import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Checkout from '../components/checkout'
import styled from "styled-components"

const TshirtStyled = styled.div`

max-height: 200;
max-width: 200;
display: grid;
grid-template-columns: 1fr 1fr;
p, .lorum, .advanced {
  padding-left: 2rem;
}



`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <TshirtStyled>
    <h1>Tank Top</h1>
    <p>Hot t-shirts with the latest deisgns</p>
      <Image />
      <p className="lorum">Meditation health goth whatever sartorial hella. Mustache actually art party, lomo humblebrag church-key iPhone microdosing edison bulb pour-over ugh 8-bit bushwick succulents retro. Fingerstache la croix pitchfork, pop-up fam lo-fi literally migas photo booth cliche marfa quinoa retro irony. Pabst tumblr aesthetic, authentic hella lomo chartreuse cold-pressed raw denim tacos 8-bit snackwave cray man bun pok pok. Chia microdosing vaporware palo santo ugh.</p>
 
    
    <Checkout />
    <Link className="advanced"to="/advanced/">Go to the advanced example</Link>
    </TshirtStyled>
  </Layout>
)

export default IndexPage
