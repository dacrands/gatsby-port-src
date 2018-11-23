import React from 'react'

const Info = () => (
    <div className="info">
        <div className="info__item">
            
            <div className="info__text">
            <h1>Frontend</h1>
            <p>
                My sites are fast, responsive, and
                accessible.
                I spend most of time developing
              with React. This
              site is built with GatsbyJS,
                a React static-site generator. I
              also use templates, e.g., Jinja2.
            </p>
            </div>            
        </div>
        {/* <div className="stick"></div> */}
        <div className="info__item">
            
            <div className="info__text">
            <h1>Backend</h1>
                <p>
                    My primary backend tools are Flask and Postgresql.
                    My applications feature email-authentication (sendgrid), JSON Web Tokens,
                    and Bcrypt password encryption.
                </p>
            </div>
            
        </div>
    </div>
)

export default Info