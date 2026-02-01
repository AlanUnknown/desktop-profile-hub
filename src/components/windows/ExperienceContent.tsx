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
        {/* Internship */}
        <div className="bg-secondary/30 rounded-lg p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-foreground">[Internship Title]</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building size={14} />
                <span>[Company Name]</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>[Duration]</span>
            </div>
          </div>
          <ul className="text-sm text-muted-foreground space-y-1 mt-3">
            <li>• [Key responsibility or achievement]</li>
            <li>• [Another key contribution]</li>
            <li>• [Skill developed or project delivered]</li>
          </ul>
        </div>

        {/* Industrial Exposure */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Industrial Exposure</h2>
          <div className="bg-secondary/30 rounded-lg p-4">
            <h3 className="font-semibold text-foreground">[Industry Visit / Training]</h3>
            <p className="text-muted-foreground">[Organization]</p>
            <p className="text-sm text-muted-foreground mt-2">
              [Description of what you learned or observed during this exposure]
            </p>
          </div>
        </div>

        {/* Training */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Training Experience</h2>
          <div className="bg-secondary/30 rounded-lg p-4">
            <h3 className="font-semibold text-foreground">[Training Program Name]</h3>
            <p className="text-muted-foreground">[Provider / Institution]</p>
            <p className="text-sm text-muted-foreground mt-2">
              [Skills acquired or focus areas covered during this training]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceContent;
