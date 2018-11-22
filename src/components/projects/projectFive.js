import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProjectFive = () => (
    <StaticQuery
    query={graphql`
      query {
        fifthImage: file(relativePath: { eq: "gatsby-port.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
    <div
    className="card"
    >
      <div className="card__title">
      <h3>Portfolio Site</h3>
                  
      </div>
        <Img 
        style={{
            marginBottom: "0.5rem"
        }}
        fluid={data.fifthImage.childImageSharp.fluid} />
        <div className="card__text">  
        <p>
          <em>GatsbyJS, Netlify</em>
          </p>     
        <p>
            Read articles dating back to the year 1800,
            see the top sellers, view today's most shared news
            stories.
        </p>
        <div className="card__links">
          <div className="card__links-item">
            <a href="/">Website</a>
          </div>          
          <div className="card__links-item">
            <a href="">Github</a>
          </div>  
        </div>
                          
        </div>
        
    </div>
    }
  />
)

export default ProjectFive;