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
        <div className="card__title">
          <h3>To View It</h3>
        </div>
        <Img
          style={{
            marginBottom: "0.5rem"
          }}
          fluid={data.firstImage.childImageSharp.fluid} />
        <div className="card__text">
          <p>
            <em>Flask, Postgresql, Sendgrid (email client), <br />
              JSON Web Tokens, Bcrypt, Heroku hosting
        </em>
          </p>
          <p>
            A to-do list application that features a configurable
            background video, stock-ticker, and weather information.
        </p>
          <div className="card__links">
            <div className="card__links-item">
              <a href="https://flaskframe.herokuapp.com/">Website</a>
            </div>
            <div className="card__links-item">
              <a href="https://github.com/dacrands/flask-smart-monitor">Github</a>
            </div>
          </div>
        </div>
      </div>
    }
  />
)

export default ProjectOne;
