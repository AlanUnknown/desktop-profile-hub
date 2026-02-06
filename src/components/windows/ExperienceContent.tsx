import React from 'react';
import { Briefcase, Building, Calendar } from 'lucide-react';

const ExperienceContent: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase size={28} className="text-primary" />
        <h1 className="text-xl font-bold text-foreground">Experience</h1>
      </div>

      <div className="space-y-6">
        <div className="bg-secondary/30 rounded-lg p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-foreground">Human Resources Intern</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building size={14} />
                <span>Bisleri International Pvt. Ltd — Mumbai, Maharashtra</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>Oct 2025</span>
            </div>
          </div>
          <ul className="text-sm text-muted-foreground space-y-1 mt-3">
            <li>• Supported corporate HR operations, employee engagement initiatives, and internal coordination</li>
            <li>• Assisted with HR documentation, communication, and basic data handling</li>
            <li>• Gained exposure to CSR-linked people initiatives and sustainability-oriented engagement programs</li>
            <li>• Acted as a coordination bridge between corporate teams and academic stakeholders for CSR collaboration</li>
            <li>• Coordinated hydration sponsorship for an International Seminar at Loyola College of Social Sciences</li>
          </ul>
        </div>

        <div className="bg-secondary/30 rounded-lg p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-foreground">Human Resources Intern</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building size={14} />
                <span>HLL Lifecare Limited — Trivandrum, Kerala</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>Apr – Jun 2025</span>
            </div>
          </div>
          <ul className="text-sm text-muted-foreground space-y-1 mt-3">
            <li>• Gained foundational exposure to HR processes, documentation, and administrative coordination</li>
            <li>• Observed HR practices within a public-sector manufacturing environment</li>
            <li>• Supported interdepartmental coordination and routine HR-related activities</li>
            <li>• Developed understanding of procedural discipline and compliance orientation</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Leadership & Event Coordination</h2>
          <div className="bg-secondary/30 rounded-lg p-4 space-y-3">
            <div>
              <h3 className="font-semibold text-foreground">Business Quiz Coordinator</h3>
              <p className="text-muted-foreground text-sm">LaTarang 6.0 – Management & Cultural Fest</p>
              <p className="text-sm text-muted-foreground mt-1">
                Coordinated with faculty, participants, and logistics teams to ensure smooth conduct
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Program Committee Coordinator & Venue Head</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Actively involved in HR training programs, academic events, and leadership initiatives
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceContent;
