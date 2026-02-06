import React from 'react';
import { Settings, Users, Monitor, Lightbulb, Globe } from 'lucide-react';

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
          title="HR & Professional"
          skills={[
            'HR Operations',
            'Employee Engagement',
            'CSR & Industry–Academia Collaboration',
            'Stakeholder Coordination',
            'Training Support',
            'HR Documentation',
          ]}
        />

        <SkillCategory
          icon={<Monitor size={20} className="text-primary" />}
          title="Technical"
          skills={[
            'MS Word',
            'Excel',
            'PowerPoint',
            'Canva',
            'Adobe Suite',
            'Python',
            'Claude',
            'Lovable',
            'Gemini',
            'ChatGPT',
          ]}
        />

        <SkillCategory
          icon={<Lightbulb size={20} className="text-primary" />}
          title="Behavioural"
          skills={[
            'Communication',
            'Leadership',
            'Team Coordination',
            'Interpersonal Skills',
            'Professional Discipline',
          ]}
        />

        <SkillCategory
          icon={<Globe size={20} className="text-primary" />}
          title="Languages"
          skills={['English', 'Malayalam', 'Hindi']}
        />
      </div>
    </div>
  );
};

export default SkillsContent;
