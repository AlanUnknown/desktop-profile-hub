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
        <a 
          href="mailto:alansuresh83@gmail.com"
          className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Email</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">
              alansuresh83@gmail.com
            </p>
          </div>
        </a>

        <a 
          href="https://linkedin.com/in/alan-suresh-7a158518a"
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
              linkedin.com/in/alan-suresh-7a158518a
            </p>
          </div>
        </a>

        <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Phone</h3>
            <p className="text-muted-foreground">+91 9074694074</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Location</h3>
            <p className="text-muted-foreground">Trivandrum, Kerala, India</p>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 p-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
          <Download size={20} />
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default ContactContent;
