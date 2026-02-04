import React, { useState, useEffect } from 'react';

const Taskbar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="taskbar">
      {/* XP Start Button */}
      <button className="start-button">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="8" r="4" fill="#FF0000"/>
          <circle cx="16" cy="8" r="4" fill="#00FF00"/>
          <circle cx="8" cy="16" r="4" fill="#0000FF"/>
          <circle cx="16" cy="16" r="4" fill="#FFFF00"/>
        </svg>
        <span>start</span>
      </button>

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
