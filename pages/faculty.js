import React from 'react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'John Doe',
      designation: 'Principal',
      experience: '20 years',
      qualification: 'M.Ed',
    },
    {
      name: 'Jane Smith',
      designation: 'Vice Principal',
      experience: '15 years',
      qualification: 'M.Sc in Physics',
    },
    {
      name: 'Emily Johnson',
      designation: 'English Teacher',
      experience: '10 years',
      qualification: 'M.A in English',
    },
    // ...
  ];

  return (
    <div className="faculty">
      <h1>Faculty</h1>
      <ul>
        {facultyMembers.map((facultyMember, index) => (
          <li key={index}>
            <h2>{facultyMember.name}</h2>
            <p>{facultyMember.designation}</p>
            <p>{facultyMember.experience} years of experience</p>
            <p>{facultyMember.qualification}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faculty;