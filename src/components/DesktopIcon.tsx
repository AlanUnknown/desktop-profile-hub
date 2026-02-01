import React from 'react';
import { 
  User, 
  GraduationCap, 
  FolderOpen, 
  Settings, 
  Presentation, 
  Mail, 
  FileText 
} from 'lucide-react';

export type IconType = 'about' | 'education' | 'experience' | 'skills' | 'projects' | 'contact' | 'fullprofile';

interface DesktopIconProps {
  id: IconType;
  label: string;
  onDoubleClick: () => void;
}

const iconConfig: Record<IconType, { icon: React.ElementType; color: string }> = {
  about: { icon: User, color: '#0078D4' },
  education: { icon: GraduationCap, color: '#2B579A' },
  experience: { icon: FolderOpen, color: '#E5B800' },
  skills: { icon: Settings, color: '#505050' },
  projects: { icon: Presentation, color: '#C43E1C' },
  contact: { icon: Mail, color: '#0078D4' },
  fullprofile: { icon: FileText, color: '#2B579A' },
};

const DesktopIcon: React.FC<DesktopIconProps> = ({ id, label, onDoubleClick }) => {
  const { icon: Icon, color } = iconConfig[id];

  return (
    <div 
      className="desktop-icon"
      onDoubleClick={onDoubleClick}
    >
      <div className="desktop-icon-image">
        <Icon size={40} color={color} strokeWidth={1.5} />
      </div>
      <span className="desktop-icon-label">{label}</span>
    </div>
  );
};

export default DesktopIcon;
