import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProjectOne = () => (
  <StaticQuery
    query={graphql`
      query {
        firstImage: file(relativePath: { eq: "bergen.jpg" }) {
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
          className="card__img"
          fluid={data.firstImage.childImageSharp.fluid} />
        <div className="card__text">
        
        <h3>Bergen STEM</h3>
          <p>
            <em>React, Webpack, Fetch-API, <br />
              responsive web-design via custom CSS
            </em>
          </p>
          <p>
            Showcases student projects, scholarship
            opportunities, and department information
            for the STEM program at Bergen Community College.
        </p>
          <div className="card__links">
            <div className="card__links-item">
              <a href="https://www.bergenstem.com">Website</a>
            </div>
            <div className="card__links-item">
              <a href="https://github.com/dacrands/bergen-reactpack">Github</a>
            </div>
          </div>
        </div>
      </div>
    }
  />
)

export default ProjectOne;
