import React from 'react';

const Admissions = () => {
  return (
    <div className="admissions p-8 mt-14 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Admissions</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Process</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Criteria</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Important Dates</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Admissions;