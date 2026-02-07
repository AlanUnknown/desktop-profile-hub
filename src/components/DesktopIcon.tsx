import React from 'react';
import { 
  XPUserIcon,
  XPEducationIcon,
  XPFolderIcon,
  XPGearIcon,
  XPPresentationIcon,
  XPMailIcon,
  XPWordIcon,
  XPMinesweeperIcon
} from './icons/XPIcons';

export type IconType = 'about' | 'education' | 'experience' | 'skills' | 'projects' | 'contact' | 'fullprofile' | 'minesweeper';

interface DesktopIconProps {
  id: IconType;
  label: string;
  onDoubleClick: () => void;
}

const iconConfig: Record<IconType, React.FC<{ size?: number; className?: string }>> = {
  about: XPUserIcon,
  education: XPEducationIcon,
  experience: XPFolderIcon,
  skills: XPGearIcon,
  projects: XPPresentationIcon,
  contact: XPMailIcon,
  fullprofile: XPWordIcon,
  minesweeper: XPMinesweeperIcon,
};

const DesktopIcon: React.FC<DesktopIconProps> = ({ id, label, onDoubleClick }) => {
  const Icon = iconConfig[id];

  return (
    <div 
      className="desktop-icon"
      onClick={onDoubleClick}
    >
      <div className="desktop-icon-image">
        <Icon size={32} />
      </div>
      <span className="desktop-icon-label">{label}</span>
    </div>
  );
};

export default DesktopIcon;
