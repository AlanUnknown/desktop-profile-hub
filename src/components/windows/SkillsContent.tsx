import React from 'react';
import { Settings, Users, Search, Lightbulb, Monitor } from 'lucide-react';

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon, title, skills }) => (
  <div className="bg-secondary/30 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h3 className="font-semibold text-foreground">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-card text-sm text-foreground rounded-full border border-border"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsContent: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Settings size={28} className="text-primary" />
        <h1 className="text-xl font-bold text-foreground">Skills</h1>
      </div>

      <div className="space-y-4">
        <SkillCategory
          icon={<Users size={20} className="text-primary" />}
          title="HR Skills"
          skills={[
            '[Skill 1]',
            '[Skill 2]',
            '[Skill 3]',
            '[Add more]',
          ]}
        />

        <SkillCategory
          icon={<Search size={20} className="text-primary" />}
          title="Research Tools"
          skills={[
            '[Tool 1]',
            '[Tool 2]',
            '[Tool 3]',
            '[Add more]',
          ]}
        />

        <SkillCategory
          icon={<Lightbulb size={20} className="text-primary" />}
          title="Soft Skills"
          skills={[
            '[Communication]',
            '[Leadership]',
            '[Problem Solving]',
            '[Add more]',
          ]}
        />

        <SkillCategory
          icon={<Monitor size={20} className="text-primary" />}
          title="Digital & Technical Skills"
          skills={[
            '[Software 1]',
            '[Technology 1]',
            '[Platform 1]',
            '[Add more]',
          ]}
        />
      </div>
    </div>
  );
};

export default SkillsContent;
