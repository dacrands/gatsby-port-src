import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProjectTwo = () => (
  <StaticQuery
    query={graphql`
      query {
        secondImage: file(relativePath: { eq: "blog.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <div className="card">
        <div className="card__text">
          <h3>My Blog</h3>
          <p>
            <em>
              GatsbyJS, Markdown, Gitpages
            </em></p>
        </div>
        <Img
          style={{
            marginBottom: "0.5rem"
          }}
          fluid={data.secondImage.childImageSharp.fluid} />
        <div className="card__text">
        <p>
            GatsbyJS blog hosted on gitpages. Features
            a markdown CMS that implements YAML front matter.
        </p>
        </div>
      </div>
    }
  />
)

export default ProjectTwo;