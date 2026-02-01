import React from 'react';
import { Mail, Linkedin, Download, Phone, MapPin } from 'lucide-react';

const ContactContent: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Mail size={28} className="text-primary" />
        <h1 className="text-xl font-bold text-foreground">Contact</h1>
      </div>

      <div className="space-y-4">
        {/* Email */}
        <a 
          href="mailto:your.email@example.com"
          className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Email</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">
              [your.email@example.com]
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Linkedin size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">LinkedIn</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">
              [linkedin.com/in/yourprofile]
            </p>
          </div>
        </a>

        {/* Phone (Optional) */}
        <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Phone</h3>
            <p className="text-muted-foreground">[+1 (123) 456-7890]</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Location</h3>
            <p className="text-muted-foreground">[City, Country]</p>
          </div>
        </div>

        {/* Download Resume */}
        <button className="w-full flex items-center justify-center gap-3 p-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
          <Download size={20} />
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default ContactContent;
