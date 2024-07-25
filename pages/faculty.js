import Image from 'next/image';
import React from 'react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'John Doe',
      designation: 'Principal',
      experience: '20 years',
      qualification: 'M.Ed',
      image: '/male.png',
    },
    {
      name: 'Jane Smith',
      designation: 'Vice Principal',
      experience: '15 years',
      qualification: 'M.Sc in Physics',
      image: '/female.png',
    },
    {
      name: 'Emily Johnson',
      designation: 'English Teacher',
      experience: '10 years',
      qualification: 'M.A in English',
      image: '/female.png',
    },
    {
      name: 'Michael Brown',
      designation: 'Mathematics Teacher',
      experience: '8 years',
      qualification: 'M.Sc in Mathematics',
      image: '/male.png',
    },
    {
      name: 'Sophia Davis',
      designation: 'Science Teacher',
      experience: '12 years',
      qualification: 'M.Sc in Chemistry',
      image: '/female.png',
    },
    {
      name: 'David Wilson',
      designation: 'Computer Science Teacher',
      experience: '5 years',
      qualification: 'B.Tech in Computer Science',
      image: '/male.png',
    },
  ];

  return (
    <div className="faculty p-8 mt-14 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Faculty</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((facultyMember, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <Image 
          src= {facultyMember.image}
          alt={facultyMember.name} 
            width={150} 
            height={150} 
            className="rounded-full mb-4"
          />
            <h2 className="text-2xl font-semibold mb-2">{facultyMember.name}</h2>
            <p className="text-lg font-medium text-gray-700">{facultyMember.designation}</p>
            <p className="text-lg text-gray-600">{facultyMember.experience} of experience</p>
            <p className="text-lg text-gray-600">{facultyMember.qualification}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;