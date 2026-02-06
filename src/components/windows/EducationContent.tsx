import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationContent: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap size={28} className="text-primary" />
        <h1 className="text-xl font-bold text-foreground">Education</h1>
      </div>

      <div className="space-y-6">
        <div className="border-l-2 border-primary pl-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-foreground">Master of Arts in Human Resource Management</h3>
              <p className="text-muted-foreground">Loyola College of Social Sciences (Autonomous), Trivandrum</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>2024 – 2026</span>
            </div>
          </div>
        </div>

        <div className="border-l-2 border-secondary pl-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-foreground">Bachelor of Arts in Literature</h3>
              <p className="text-muted-foreground">Mother Theresa College, Trivandrum</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>2021 – 2023</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Award size={20} className="text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Affiliations & Engagements</h2>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <p className="text-foreground">Toastmasters</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <p className="text-foreground">Junior Chamber International (JCI)</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <p className="text-foreground">National Institute of Personnel Management (NIPM)</p>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <p className="text-foreground">NSS</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationContent;
