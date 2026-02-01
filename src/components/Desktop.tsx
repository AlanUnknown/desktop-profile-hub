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

interface WindowState {
  id: IconType;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isWordDocument?: boolean;
}

const desktopIcons: { id: IconType; label: string }[] = [
  { id: 'about', label: 'About_Me.exe' },
  { id: 'education', label: 'Education.doc' },
  { id: 'experience', label: 'Experience.folder' },
  { id: 'skills', label: 'Skills.sys' },
  { id: 'projects', label: 'Projects.ppt' },
  { id: 'contact', label: 'Contact.mail' },
  { id: 'fullprofile', label: 'Full_Profile.docx' },
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
};

const Desktop: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<WindowState[]>([]);
  const [windowOrder, setWindowOrder] = useState<IconType[]>([]);

  const openWindow = useCallback((id: IconType) => {
    if (openWindows.find(w => w.id === id)) {
      // Window already open, bring to front
      setWindowOrder(prev => [...prev.filter(wId => wId !== id), id]);
      return;
    }

    const config = windowConfigs[id];
    const offset = openWindows.length * 30;
    
    setOpenWindows(prev => [...prev, { 
      id, 
      ...config,
      position: { 
        x: config.position.x + offset, 
        y: config.position.y + offset 
      }
    }]);
    setWindowOrder(prev => [...prev, id]);
  }, [openWindows]);

  const closeWindow = useCallback((id: IconType) => {
    setOpenWindows(prev => prev.filter(w => w.id !== id));
    setWindowOrder(prev => prev.filter(wId => wId !== id));
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
      </div>

      {/* Windows */}
      {openWindows.map(window => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
          onFocus={() => focusWindow(window.id)}
          zIndex={100 + windowOrder.indexOf(window.id)}
          initialPosition={window.position}
          initialSize={window.size}
          isWordDocument={window.isWordDocument}
        >
          {getWindowContent(window.id)}
        </Window>
      ))}

      {/* Taskbar */}
      <Taskbar />
    </div>
  );
};

export default Desktop;
