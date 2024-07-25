import React from 'react';

const About = () => {
  return (
    <div className="about p-8 mt-14 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-lg leading-relaxed">
          Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Vision</h2>
        <p className="text-lg leading-relaxed">
          To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Mission</h2>
        <p className="text-lg leading-relaxed">
          To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Principal's Message</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Infrastructure and Facilities</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;