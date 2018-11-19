import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProjectTwo = () => (
    <StaticQuery
    query={graphql`
      query {
        secondImage: file(relativePath: { eq: "nyt.jpg" }) {
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
      <div className="card__text">
      <h3>NYT App</h3>
        <p>
          <em>React, Redux, Redux-thunk, 
            Webpack, Sass</em>
          </p>           
      </div>
        <Img 
        style={{
            marginBottom: "0.5rem"
        }}
        fluid={data.secondImage.childImageSharp.fluid} />
        <div className="card__text">
      
        <p>
            Read articles dating back to the year 1800,
            see the top sellers, view today's most shared news
            stories.
        </p>
        <div className="card__links">
          <div className="card__links-item">
            <a href="https://www.bergenstem.com">Website</a>
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

export default ProjectTwo;