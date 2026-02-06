import React from 'react';
import { Presentation, Users, Award, Megaphone } from 'lucide-react';

interface ProjectCardProps {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ icon, title, category, description }) => (
  <div className="bg-secondary/30 rounded-lg p-4 hover:bg-secondary/50 transition-colors">
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <span className="text-xs text-primary font-medium uppercase tracking-wide">{category}</span>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  </div>
);

const ProjectsContent: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Presentation size={28} className="text-primary" />
        <h1 className="text-xl font-bold text-foreground">Projects & Leadership</h1>
      </div>

      <div className="space-y-4">
        <ProjectCard
          icon={<Megaphone size={20} className="text-primary" />}
          category="Event Coordination"
          title="Business Quiz — LaTarang 6.0"
          description="Coordinated the business quiz at the Management & Cultural Fest, managing faculty coordination, participant logistics, and smooth event execution."
        />

        <ProjectCard
          icon={<Users size={20} className="text-primary" />}
          category="CSR Collaboration"
          title="Bisleri × Loyola CSR Initiative"
          description="Acted as a coordination bridge between Bisleri's corporate team and Loyola College for CSR collaboration, including hydration sponsorship for an International Seminar."
        />

        <ProjectCard
          icon={<Award size={20} className="text-primary" />}
          category="Academic Leadership"
          title="Program Committee & Venue Head"
          description="Actively involved in HR training programs, academic events, and leadership initiatives as Program Committee Coordinator and Venue Head."
        />
      </div>
    </div>
  );
};

export default ProjectsContent;
