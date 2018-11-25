import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProjectTwo = () => (
  <StaticQuery
    query={graphql`
      query {
        secondImage: file(relativePath: { eq: "blog.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data =>
      <div className="card">
        <Img
          style={{
            marginBottom: "0.5rem"
          }}
          fluid={data.secondImage.childImageSharp.fluid} />
        <div className="card__text">
        <h3>My Blog</h3> 
        <p>
          <em>
            GatsbyJS, Markdown, Gitpages
          </em></p>
        <p>
            GatsbyJS blog hosted on gitpages. Features
            a markdown CMS that implements YAML front matter.
        </p>
        <div className="card__links">
          <div className="card__links-item">
            <a href="https://dacrands.github.io/">Website</a>
          </div>          
          <div className="card__links-item">
            <a href="https://github.com/dacrands/gatsby-blog">Github</a>
          </div>                    
        </div>
        </div>
        
      </div>
    }
  />
)

export default ProjectTwo;