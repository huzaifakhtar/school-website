import React from 'react';

const Contact = () => {
  return (
    <div className="contact mt-14 p-8 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Address</h2>
        <p className="text-lg">Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Phone</h2>
        <p className="text-lg">+1 (123) 456-7890</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Email</h2>
        <p className="text-lg">info@springdale.edu</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Form</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium">Name:</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium">Email:</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium">Message:</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="5"></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
        </form>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0b1a0b1b!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1614311234567!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="border rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;