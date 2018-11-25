import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProjectFive = () => (
    <StaticQuery
    query={graphql`
      query {
        fifthImage: file(relativePath: { eq: "gatsby-port.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
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
        <Img 
        style={{
            
        }}
        fluid={data.fifthImage.childImageSharp.fluid} />
        <div className="card__text">  
        <p>
          <h3>Portfolio Site</h3>
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