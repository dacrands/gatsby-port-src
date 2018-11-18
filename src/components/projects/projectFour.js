import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProjectOne = () => (
    <StaticQuery
    query={graphql`
      query {
        firstImage: file(relativePath: { eq: "toview.jpg" }) {
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
      <h3>To View It</h3>   
      <p>
        <em>Flask, Postgresql, Sendgrid (email client), <br/>
          JSON Web Tokens, Bcrypt, Heroku hosting
        </em>
      </p>
    </div>    
      <Img 
        style={{
            marginBottom: "0.5rem"
        }}
        fluid={data.firstImage.childImageSharp.fluid} />
    <div className="card__text">                    
        <p>
          Showcases student projects, scholarship
          opportunities, and department information
          for the STEM program at Bergen Community College.
        </p>
        <a href="">Site</a>
        <a href="">Github</a>
      </div>        
    </div>
    }
  />
)

export default ProjectOne;
