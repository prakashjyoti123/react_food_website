import React from "react";
import "../styles/Contact.css";
import ContactImage from "../assests/images/photo.jpeg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name"> Full Name</label>
          <input name="name" type="text" placeholder="Please Enter Your name" />
          <label htmlFor="email"> Enter your Email</label>
          <input
            name="email"
            type="text"
            placeholder="Please Enter Your email"
          />
          <label htmlFor="message"> Message</label>
          <textarea
            name="message"
            placeholder="Enter your Message"
            rows="6"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
