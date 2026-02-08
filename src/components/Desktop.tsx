import React, { useState, useCallback } from 'react';
import DesktopIcon, { IconType } from './DesktopIcon';
import Window from './Window';
import Taskbar from './Taskbar';
import AboutContent from './windows/AboutContent';
import EducationContent from './windows/EducationContent';
import ExperienceContent from './windows/ExperienceContent';
import SkillsContent from './windows/SkillsContent';
import ProjectsContent from './windows/ProjectsContent';
import ContactContent from './windows/ContactContent';
import FullProfileContent from './windows/FullProfileContent';
import MinesweeperContent from './windows/MinesweeperContent';
import { downloadProfile } from '../utils/downloadProfile';

interface WindowState {
  id: IconType;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isWordDocument?: boolean;
  isMinimized?: boolean;
}

const desktopIcons: { id: IconType; label: string }[] = [
  { id: 'about', label: 'About_Me.exe' },
  { id: 'education', label: 'Education.doc' },
  { id: 'experience', label: 'Experience.folder' },
  { id: 'skills', label: 'Skills.sys' },
  { id: 'projects', label: 'Projects.ppt' },
  { id: 'contact', label: 'Contact.mail' },
  { id: 'fullprofile', label: 'Full_Profile.docx' },
  { id: 'minesweeper', label: 'Minesweeper' },
];

const windowConfigs: Record<IconType, Omit<WindowState, 'id'>> = {
  about: { title: 'About Me', position: { x: 150, y: 60 }, size: { width: 550, height: 450 } },
  education: { title: 'Education.doc', position: { x: 200, y: 80 }, size: { width: 580, height: 480 } },
  experience: { title: 'Experience', position: { x: 180, y: 70 }, size: { width: 600, height: 500 } },
  skills: { title: 'Skills.sys', position: { x: 220, y: 90 }, size: { width: 560, height: 480 } },
  projects: { title: 'Projects.ppt', position: { x: 170, y: 65 }, size: { width: 580, height: 520 } },
  contact: { title: 'Contact', position: { x: 250, y: 100 }, size: { width: 480, height: 460 } },
  fullprofile: { 
    title: 'Full_Profile.docx — Word', 
    position: { x: 120, y: 40 }, 
    size: { width: 850, height: 600 },
    isWordDocument: true 
  },
  minesweeper: { 
    title: 'Minesweeper', 
    position: { x: 300, y: 100 }, 
    size: { width: 280, height: 380 }
  },
};

interface DesktopProps {
  onLogOff?: () => void;
}

const Desktop: React.FC<DesktopProps> = ({ onLogOff }) => {
  const [openWindows, setOpenWindows] = useState<WindowState[]>([]);
  const [windowOrder, setWindowOrder] = useState<IconType[]>([]);

  const openWindow = useCallback((id: IconType) => {
    setOpenWindows(prev => {
      const existing = prev.find(w => w.id === id);
      if (existing) {
        // If minimized, restore it
        if (existing.isMinimized) {
          return prev.map(w => w.id === id ? { ...w, isMinimized: false } : w);
        }
        return prev;
      }

      const config = windowConfigs[id];
      const offset = prev.length * 30;
      return [...prev, { 
        id, 
        ...config,
        position: { 
          x: config.position.x + offset, 
          y: config.position.y + offset 
        }
      }];
    });
    setWindowOrder(prev => [...prev.filter(wId => wId !== id), id]);
  }, []);

  const closeWindow = useCallback((id: IconType) => {
    setOpenWindows(prev => prev.filter(w => w.id !== id));
    setWindowOrder(prev => prev.filter(wId => wId !== id));
  }, []);

  const minimizeWindow = useCallback((id: IconType) => {
    setOpenWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
  }, []);

  const focusWindow = useCallback((id: IconType) => {
    setWindowOrder(prev => [...prev.filter(wId => wId !== id), id]);
  }, []);

  const getWindowContent = (id: IconType) => {
    switch (id) {
      case 'about': return <AboutContent />;
      case 'education': return <EducationContent />;
      case 'experience': return <ExperienceContent />;
      case 'skills': return <SkillsContent />;
      case 'projects': return <ProjectsContent />;
      case 'contact': return <ContactContent />;
      case 'fullprofile': return <FullProfileContent />;
      case 'minesweeper': return <MinesweeperContent />;
    }
  };

  return (
    <div className="desktop-wallpaper fixed inset-0 overflow-hidden">
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-1">
        {desktopIcons.map(icon => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            label={icon.label}
            onDoubleClick={() => openWindow(icon.id)}
          />
        ))}
        {/* Download Profile Icon */}
        <div
          className="desktop-icon"
          onClick={downloadProfile}
        >
          <div className="desktop-icon-image">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="6" y="2" width="20" height="28" rx="1" fill="#f5f3ea" stroke="#808080" strokeWidth="1"/>
              <rect x="8" y="4" width="16" height="24" fill="white" stroke="#c0c0c0" strokeWidth="0.5"/>
              <path d="M16 10 L16 22" stroke="#316ac5" strokeWidth="2"/>
              <path d="M11 18 L16 23 L21 18" stroke="#316ac5" strokeWidth="2" fill="none"/>
              <rect x="10" y="6" width="12" height="1.5" fill="#316ac5" rx="0.5"/>
              <rect x="10" y="9" width="8" height="1" fill="#808080" rx="0.5"/>
            </svg>
          </div>
          <span className="desktop-icon-label">Download_CV.pdf</span>
        </div>
      </div>

      {/* Windows */}
      {openWindows.map(win => (
        <Window
          key={win.id}
          id={win.id}
          title={win.title}
          onClose={() => closeWindow(win.id)}
          onFocus={() => focusWindow(win.id)}
          onMinimize={() => minimizeWindow(win.id)}
          zIndex={100 + windowOrder.indexOf(win.id)}
          initialPosition={win.position}
          initialSize={win.size}
          isWordDocument={win.isWordDocument}
          isMinimized={win.isMinimized}
        >
          {getWindowContent(win.id)}
        </Window>
      ))}

      {/* Taskbar */}
      <Taskbar 
        onOpenWindow={(id) => openWindow(id as IconType)} 
        onLogOff={onLogOff}
        openWindows={openWindows.map(w => ({ id: w.id, title: w.title, isMinimized: w.isMinimized }))}
      />
    </div>
  );
};

export default Desktop;
