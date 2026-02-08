export function downloadProfile() {
  const profileText = `ALAN SURESH
HR Professional | alansuresh83@gmail.com | linkedin.com/in/alan-suresh-7a158518a

════════════════════════════════════════
ABOUT ME
════════════════════════════════════════
Budding Human Resource Management postgraduate with hands-on exposure to corporate HR operations, CSR-linked people initiatives, and academic–industry collaboration. Experienced in employee engagement support, HR documentation, and large-scale event execution. Known for leadership involvement, strong communication skills, and the ability to bridge institutions with corporate teams in structured professional environments.

════════════════════════════════════════
EDUCATION
════════════════════════════════════════
Master of Arts in Human Resource Management
  Loyola College of Social Sciences (Autonomous), Trivandrum, 2024 – 2026

Bachelor of Arts in Literature
  Mother Theresa College, Trivandrum, 2021 – 2023

Affiliations:
  • Toastmasters
  • Junior Chamber International (JCI)
  • National Institute of Personnel Management (NIPM)
  • NSS

════════════════════════════════════════
EXPERIENCE
════════════════════════════════════════
Human Resources Intern — Bisleri International Pvt. Ltd, Mumbai
October 2025
  • Supported corporate HR operations, employee engagement initiatives, and internal coordination
  • Assisted with HR documentation, communication, and basic data handling
  • Gained exposure to CSR-linked people initiatives and sustainability-oriented engagement programs
  • Acted as a coordination bridge between corporate teams and academic stakeholders
  • Coordinated hydration sponsorship for an International Seminar at Loyola College

Human Resources Intern — HLL Lifecare Limited, Trivandrum
April – June 2025
  • Gained foundational exposure to HR processes, documentation, and administrative coordination
  • Observed HR practices within a public-sector manufacturing environment
  • Supported interdepartmental coordination and routine HR-related activities

════════════════════════════════════════
LEADERSHIP & EVENT COORDINATION
════════════════════════════════════════
  • Business Quiz Coordinator — LaTarang 6.0, Management & Cultural Fest
  • Program Committee Coordinator & Venue Head — HR training programs & academic events

════════════════════════════════════════
SKILLS
════════════════════════════════════════
HR & Professional: HR Operations, Employee Engagement, CSR & Industry–Academia Collaboration, Stakeholder Coordination, Training Support, HR Documentation
Technical: MS Word, Excel, PowerPoint, Canva, Adobe Suite, Python, Claude, Lovable, Gemini, ChatGPT
Behavioural: Communication, Leadership, Team Coordination, Interpersonal Skills, Professional Discipline
Languages: English, Malayalam, Hindi

════════════════════════════════════════
CONTACT
════════════════════════════════════════
Email: alansuresh83@gmail.com
LinkedIn: linkedin.com/in/alan-suresh-7a158518a
Phone: +91 9074694074
Location: Trivandrum, Kerala, India
`;

  const blob = new Blob([profileText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Alan_Suresh_CV.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
