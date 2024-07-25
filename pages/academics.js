import React from 'react';

const Academics = () => {
  return (
    <div className="academics p-8 mt-14 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Academics</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>
              <strong>Primary (Grades 1-5):</strong> English, Mathematics, Science, Social Studies, Art, Physical Education
            </li>
            <li>
              <strong>Secondary (Grades 6-10):</strong> English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
            </li>
            <li>
              <strong>Senior Secondary (Grades 11-12):</strong>
              <ul className="list-disc list-inside ml-6">
                <li>
                  <strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English
                </li>
                <li>
                  <strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Teaching Methodologies</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Educational Resources</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-lg leading-relaxed">
            Digital classrooms, interactive learning modules, and access to online educational platforms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Academics;