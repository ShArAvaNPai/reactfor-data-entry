import React from "react";


const Skills = () => (
  <div className="skills-container">
    <h1>Skills and Expertise</h1>
    <table className="skills-table">
      <thead>
        <tr>
          <th>Skill</th>
          <th>Experience</th>
          <th>Proficiency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>JavaScript</td>
          <td>5 years</td>
          <td>Expert</td>
        </tr>
        <tr>
          <td>React</td>
          <td>3 years</td>
          <td>Advanced</td>
        </tr>
        <tr>
          <td>Node.js</td>
          <td>4 years</td>
          <td>Advanced</td>
        </tr>
        <tr>
          <td>Python</td>
          <td>6 years</td>
          <td>Expert</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Skills;
