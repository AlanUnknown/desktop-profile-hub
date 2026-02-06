import React from 'react';
import { User } from 'lucide-react';

const AboutContent: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
          <User size={40} className="text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Alan Suresh</h1>
          <p className="text-muted-foreground">HR Professional | HRM Postgraduate</p>
        </div>
      </div>

      <div className="space-y-4">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            Budding Human Resource Management postgraduate with hands-on exposure to corporate HR operations, 
            CSR-linked people initiatives, and academic–industry collaboration. Known for leadership involvement, 
            strong communication skills, and the ability to bridge institutions with corporate teams in structured 
            professional environments.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">What I Do</h2>
          <p className="text-muted-foreground leading-relaxed">
            Experienced in employee engagement support, HR documentation, and large-scale event execution. 
            I bring value through stakeholder coordination, training support, and CSR & industry–academia collaboration.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Interests & Direction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Actively involved in Toastmasters, JCI, and NIPM. Passionate about people management, 
            professional development, and exploring how AI tools can enhance HR operations.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutContent;
