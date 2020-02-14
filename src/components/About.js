import React from 'react';

function About() {
  
    return (

      <div className="aboutChiranjiv" style={{color:"white"}}>
        <h1 style={{color:"#E1B995"}}>About Chiranjiv </h1>	    
      <br />
      <h3>Education</h3>
      <hr />
      <table>
          <tbody>
          <tr>
            <th>Degree/Certificate</th>
            <th>Institute/Board</th>
            <th>CGPA/Percantage</th>
            <th>Year</th>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>B.tech.</td>
            <td>Institute Indian of Technology, Guwahati</td>
            <td style={{textAlign: "centre"}}>5.98</td>
            <td style={{textAlign: "centre"}}>2015-present</td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>Senior Secondary</td>
            <td>RBSE Board</td>
            <td style={{textAlign: "centre"}}>75.20%</td>
            <td style={{textAlign: "centre"}}>2014</td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>Secondary</td>
            <td>RBSE Board</td>
            <td style={{textAlign: "centre"}}>86.33%</td>
            <td style={{textAlign: "centre"}}>2012</td>
          </tr>
          </tbody>
      </table> 
      <br />
      <h3>Technical Skills</h3>
      <hr />
      <ul>
        <li><strong>Programming Languages:</strong> C, C++, Python, Java*</li>
        <li><strong>Statistic Tools:</strong> R, Matlab</li>
        <li><strong>Web Technologies:</strong> HTML*, CSS*</li>
        <li><strong>Database Managment:</strong> MySQL, Cassandra*, Neo4j</li>
        <li><strong>Miscellaneous:</strong> Android Programming*, Machine Learning*</li>
        <li><strong>Operating Systems:</strong> Windows, Linux</li>
      </ul>

      <br />

      <h3>Achievements</h3>
      <hr />
      <ul>
        <li><strong>Joint Entrance Examination 2015:</strong> Secured All India Rank 906 among (150,000+) aspirants appearing for the test.</li>
      </ul>
    

      <br />

      <h3>Position of Responsible</h3>
      <hr />
      <ul>
        <li>Cultural Secretary, Barak Hostel, IIT Guwahati, March 2018-March 2019</li>
        <li>Treasurer, Matrix, Student Association of Department of Mathematics, IIT Guwahati</li>
        <li>Cultural Secretary, Matrix, Student Association of Department of Mathematics, IIT Guwahati</li>
      </ul>

      <br />
      <h3>Extra Curriculars</h3>
      <hr />
      <ul>
        <li>Awarded silver medal twice in Football, Spardha, Inter Hostel Sports Competition</li>
        <li>Awarded silver medal twice in Kho-Kho, Spardha, Inter Hostel Sports Competition</li>
        <li>Awarded 1st position in Rangmanch(theatre), Manthan, Inter Hostel Cultural Competition</li>
      </ul>

      <p><a  style={{color:"white"}} href="mailto:chiranjivg7497@gmail.com">chiranjivg7497@gmail.com</a> | +91-8769899317</p>
    </div>
    );
  }
  
  export default About;