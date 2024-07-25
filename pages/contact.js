import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla
        auctor, vestibulum magna sed, convallis ex.
      </p>
      <h2>Address</h2>
      <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
      <h2>Phone</h2>
      <p>+1 (123) 456-7890</p>
      <h2>Email</h2>
      <p>info@springdale.edu</p>
      <h2>Contact Form</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <br />
        <label>Email:</label>
        <input type="email" />
        <br />
        <label>Message:</label>
        <textarea />
        <br />
        <button type="submit">Send</button>
      </form>
      <h2>Google Maps Integration</h2>
      <iframe
        src="https://www.google.com/maps/embed?..."
        width="100%"
        height="300"
        frameborder="0"
        allowfullscreen
      />
    </div>
  );
};

export default Contact;