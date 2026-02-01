import React from 'react';

const FullProfileContent: React.FC = () => {
  return (
    <div className="word-document">
      <div className="word-document-page">
        {/* Header */}
        <h1>[YOUR FULL NAME]</h1>
        <p className="text-center" style={{ marginTop: '-1rem' }}>
          [Your Title] | [your.email@example.com] | [linkedin.com/in/yourprofile]
        </p>

        {/* About */}
        <h2>ABOUT ME</h2>
        <p>
          [Write your professional summary here. This should be a compelling overview of who you are, 
          what you do, and what drives you. Think of it as your personal pitch — clear, confident, and memorable. 
          Include your vision, core values, and what makes you unique in your field.]
        </p>

        {/* Education */}
        <h2>EDUCATION</h2>
        <p><strong>[Degree Name]</strong> — [University Name], [Year - Year]</p>
        <p style={{ marginTop: '-0.5rem' }}>[Brief description or achievements]</p>
        
        <p><strong>[Previous Degree]</strong> — [Institution Name], [Year - Year]</p>

        {/* Certifications */}
        <p style={{ marginTop: '1rem' }}><strong>Certifications:</strong></p>
        <ul>
          <li>[Certification 1] — [Issuing Organization], [Year]</li>
          <li>[Certification 2] — [Issuing Organization], [Year]</li>
        </ul>

        {/* Experience */}
        <h2>EXPERIENCE</h2>
        
        <p><strong>[Internship Title]</strong> — [Company Name]</p>
        <p style={{ marginTop: '-0.5rem', fontStyle: 'italic' }}>[Duration]</p>
        <ul>
          <li>[Key responsibility or achievement]</li>
          <li>[Another key contribution]</li>
          <li>[Skill developed or project delivered]</li>
        </ul>

        <p><strong>Industrial Exposure:</strong> [Organization] — [Brief description]</p>
        <p><strong>Training:</strong> [Program Name] — [Provider]</p>

        {/* Skills */}
        <h2>SKILLS</h2>
        
        <p><strong>HR Skills:</strong> [Skill 1], [Skill 2], [Skill 3]</p>
        <p><strong>Research Tools:</strong> [Tool 1], [Tool 2], [Tool 3]</p>
        <p><strong>Soft Skills:</strong> [Communication], [Leadership], [Problem Solving]</p>
        <p><strong>Technical Skills:</strong> [Software 1], [Technology 1], [Platform 1]</p>

        {/* Projects */}
        <h2>PROJECTS</h2>
        
        <p><strong>[Project Title]</strong> (Academic)</p>
        <p style={{ marginTop: '-0.5rem' }}>
          [Brief description of the project, objectives, and your role]
        </p>

        <p><strong>[Research Title]</strong> (Research)</p>
        <p style={{ marginTop: '-0.5rem' }}>
          [Description of research methodology and key findings]
        </p>

        <p><strong>[Startup/Concept Name]</strong> (Concept)</p>
        <p style={{ marginTop: '-0.5rem' }}>
          [Explain your startup idea and what problem it solves]
        </p>

        {/* Contact */}
        <h2>CONTACT</h2>
        <p>
          <strong>Email:</strong> [your.email@example.com]<br />
          <strong>LinkedIn:</strong> [linkedin.com/in/yourprofile]<br />
          <strong>Phone:</strong> [+1 (123) 456-7890]<br />
          <strong>Location:</strong> [City, Country]
        </p>
      </div>
    </div>
  );
};

export default FullProfileContent;
