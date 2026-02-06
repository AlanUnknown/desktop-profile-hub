import React, { useState, useEffect, useRef } from 'react';
import { User, LogOut, HelpCircle, Settings, FolderOpen } from 'lucide-react';

interface TaskbarProps {
  onOpenWindow?: (windowId: string) => void;
  onLogOff?: () => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ onOpenWindow, onLogOff }) => {
  const [time, setTime] = useState(new Date());
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const startMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (startMenuRef.current && !startMenuRef.current.contains(event.target as Node)) {
        setIsStartMenuOpen(false);
      }
    };

    if (isStartMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isStartMenuOpen]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const handleMenuItemClick = (windowId: string) => {
    onOpenWindow?.(windowId);
    setIsStartMenuOpen(false);
  };

  return (
    <div className="taskbar">
      {/* XP Start Button */}
      <div className="relative" ref={startMenuRef}>
        <button 
          className={`start-button ${isStartMenuOpen ? 'active' : ''}`}
          onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="8" cy="8" r="4" fill="#FF0000"/>
            <circle cx="16" cy="8" r="4" fill="#00FF00"/>
            <circle cx="8" cy="16" r="4" fill="#0000FF"/>
            <circle cx="16" cy="16" r="4" fill="#FFFF00"/>
          </svg>
          <span>start</span>
        </button>

        {/* Start Menu */}
        {isStartMenuOpen && (
          <div className="start-menu">
            {/* User Header */}
            <div className="start-menu-header">
              <div className="start-menu-avatar">
                <User size={32} className="text-white" />
              </div>
              <span className="start-menu-username">[Your Name]</span>
            </div>

            {/* Menu Content */}
            <div className="start-menu-content">
              {/* Left Column - Pinned Items */}
              <div className="start-menu-left">
                <button 
                  className="start-menu-item"
                  onClick={() => handleMenuItemClick('about')}
                >
                  <User size={24} className="text-xp-blue" />
                  <span>About Me</span>
                </button>
                <button 
                  className="start-menu-item"
                  onClick={() => handleMenuItemClick('projects')}
                >
                  <FolderOpen size={24} className="text-yellow-600" />
                  <span>My Projects</span>
                </button>
                <button 
                  className="start-menu-item"
                  onClick={() => handleMenuItemClick('fullprofile')}
                >
                  <FolderOpen size={24} className="text-xp-blue" />
                  <span>Full Profile</span>
                </button>
                
                <div className="start-menu-separator" />
                
                <button 
                  className="start-menu-item"
                  onClick={() => handleMenuItemClick('contact')}
                >
                  <Settings size={24} className="text-gray-600" />
                  <span>Contact</span>
                </button>
              </div>

              {/* Right Column - Places */}
              <div className="start-menu-right">
                <button 
                  className="start-menu-item"
                  onClick={() => handleMenuItemClick('education')}
                >
                  <span>Education</span>
                </button>
                <button 
                  className="start-menu-item"
                  onClick={() => handleMenuItemClick('experience')}
                >
                  <span>Experience</span>
                </button>
                <button 
                  className="start-menu-item"
                  onClick={() => handleMenuItemClick('skills')}
                >
                  <span>Skills</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="start-menu-footer">
              <button className="start-menu-footer-btn" onClick={() => { setIsStartMenuOpen(false); onLogOff?.(); }}>
                <LogOut size={20} />
                <span>Log Off</span>
              </button>
              <button className="start-menu-footer-btn">
                <HelpCircle size={20} />
                <span>Turn Off</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quick Launch area - empty space */}
      <div className="flex-1" />

      {/* System Tray */}
      <div className="system-tray">
        <span className="text-xs text-white font-normal">
          {formatTime(time)}
        </span>
      </div>
    </div>
  );
};

export default Taskbar;
