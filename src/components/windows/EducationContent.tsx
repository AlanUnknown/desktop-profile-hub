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
        {/* Degree Entry */}
        <div className="border-l-2 border-primary pl-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-foreground">[Degree Name]</h3>
              <p className="text-muted-foreground">[University/Institution Name]</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>[Year - Year]</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            [Brief description of your studies, major achievements, or relevant coursework]
          </p>
        </div>

        {/* Another Degree */}
        <div className="border-l-2 border-secondary pl-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-foreground">[Previous Degree]</h3>
              <p className="text-muted-foreground">[School/College Name]</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>[Year - Year]</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Award size={20} className="text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Certifications</h2>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <div>
                <p className="text-foreground">[Certification Name]</p>
                <p className="text-sm text-muted-foreground">[Issuing Organization] • [Year]</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
              <div>
                <p className="text-foreground">[Another Certification]</p>
                <p className="text-sm text-muted-foreground">[Issuing Organization] • [Year]</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationContent;
