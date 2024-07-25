import Image from 'next/image';
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
        <div className="bg-white p-6 rounded-lg shadow-md">
        <Image 
          src='/male.png'
          alt='principal sir'
            width={150} 
            height={150} 
            className="rounded-full mb-4"
          />
        <h2 className="text-2xl font-semibold mb-2">Principal's Message</h2>
          <p className="text-lg leading-relaxed ">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Infrastructure and Facilities</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside text-lg leading-relaxed">
          <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
            <Image src='/lab.png' alt='science lab' width={710} height={710} className="rounded-lg" />
            <Image src='/comp_lab-820x400.png' alt='computer lab' width={820} height={820} className="rounded-lg" />
            </div>
             <li className="text-lg font-medium text-gray-700">State-of-the-art science and computer labs</li>
          </section>
          <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
            <Image src='/classroom.png' alt='science lab' width={710} height={710} className="rounded-lg" />
            </div>
            <li className="text-lg font-medium text-gray-700">Spacious and well-equipped classrooms</li>
          </section>
          <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
            <Image src='/library.png' alt='science lab' width={710} height={710} className="rounded-lg" />
            </div>
            <li className="text-lg font-medium text-gray-700">Library with a vast collection of books and digital resources</li>
          </section>
          <section className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
            <Image src='/gym.png' alt='gymnasium' width={300} height={300} className="rounded-lg" />
            <Image src='/playground.png' alt='playground' width={300} height={300} className="rounded-lg" />
            <Image src='/pool.png' alt='pool' width={300} height={300} className="rounded-lg" />
            </div>
            <li className="text-lg font-medium text-gray-700">Sports facilities including a playground, gymnasium, and swimming pool</li>
          </section>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;