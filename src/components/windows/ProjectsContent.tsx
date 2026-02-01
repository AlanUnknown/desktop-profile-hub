import React from 'react';
import { Presentation, Lightbulb, BookOpen, Rocket } from 'lucide-react';

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
        <h1 className="text-xl font-bold text-foreground">Projects</h1>
      </div>

      <div className="space-y-4">
        <ProjectCard
          icon={<BookOpen size={20} className="text-primary" />}
          category="Academic"
          title="[Project Title]"
          description="[Brief description of the academic project, its objectives, and your role in it. What did you learn or achieve?]"
        />

        <ProjectCard
          icon={<Lightbulb size={20} className="text-primary" />}
          category="Research"
          title="[Research Title]"
          description="[Describe your research work, methodology used, and key findings or contributions.]"
        />

        <ProjectCard
          icon={<Rocket size={20} className="text-primary" />}
          category="Startup / Concept"
          title="[Startup or Concept Name]"
          description="[Explain your startup idea or concept project. What problem does it solve? What stage is it at?]"
        />

        <ProjectCard
          icon={<BookOpen size={20} className="text-primary" />}
          category="Academic"
          title="[Another Project]"
          description="[Description of another significant project you've worked on.]"
        />
      </div>
    </div>
  );
};

export default ProjectsContent;
