import React from 'react'

import Saturn from '../images/saturn.svg'
import Satellite from '../images/satellite.svg'

const Contact = () => (
    <div className="contact__container">
      <Saturn className="contact__svg saturn" />
      <Satellite className="contact__svg satellite" />
      <div className="contact">
        <h1>Contact me</h1>
        <form action="">
          <label htmlFor="name">
            Name
          <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="email">
            Email
          <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="message">
            message
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </label>
        </form>
      </div>
    </div>
);

export default Contact;