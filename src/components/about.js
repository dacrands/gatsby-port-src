import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const About = (
    <StaticQuery
    query={graphql`
      query {
        secondImage: file(relativePath: { eq: "11.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <div>
          <h1>Test</h1>
      </div>
    }
  />
)

export default About;