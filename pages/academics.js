import React from 'react';

const Academics = () => {
  return (
    <div className="academics">
      <h1>Academics</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla
        auctor, vestibulum magna sed, convallis ex.
      </p>
      <h2>Curriculum</h2>
      <ul>
        <li>Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education</li>
        <li>Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</li>
        <li>Senior Secondary (Grades 11-12): 
        <ul>
          <li>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
          <li>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
        </ul>
      </li>
    </ul>
    <h2>Teaching Methodologies</h2>
    <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
    <h2>Educational Resources</h2>
    <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
  </div>
);
}
export default Academics;