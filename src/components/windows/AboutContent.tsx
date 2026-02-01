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
          <h1 className="text-2xl font-bold text-foreground">[Your Name]</h1>
          <p className="text-muted-foreground">[Your Title / Tagline]</p>
        </div>
      </div>

      <div className="space-y-4">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            [Write a brief professional introduction here. Share your vision, what drives you, 
            and what you're passionate about. This is your elevator pitch — make it memorable!]
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">What I Do</h2>
          <p className="text-muted-foreground leading-relaxed">
            [Describe your primary focus areas, expertise, and the value you bring. 
            What problems do you solve? What makes your approach unique?]
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Interests & Direction</h2>
          <p className="text-muted-foreground leading-relaxed">
            [Share your professional interests and where you see yourself heading. 
            What are you currently learning or exploring?]
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutContent;
