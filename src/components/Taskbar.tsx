import React, { useState, useEffect } from 'react';
import { Search, Wifi, Volume2, Battery } from 'lucide-react';

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

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="taskbar">
      {/* Left side - Start and Search */}
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="8" height="8" fill="white"/>
            <rect x="13" y="3" width="8" height="8" fill="white"/>
            <rect x="3" y="13" width="8" height="8" fill="white"/>
            <rect x="13" y="13" width="8" height="8" fill="white"/>
          </svg>
        </button>
        <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 w-64">
          <Search size={16} className="text-white/60" />
          <span className="text-sm text-white/60">Search</span>
        </div>
      </div>

      {/* Right side - System tray */}
      <div className="flex items-center gap-1">
        <button className="p-2 hover:bg-white/10 rounded transition-colors">
          <Wifi size={16} className="text-white" />
        </button>
        <button className="p-2 hover:bg-white/10 rounded transition-colors">
          <Volume2 size={16} className="text-white" />
        </button>
        <button className="p-2 hover:bg-white/10 rounded transition-colors">
          <Battery size={16} className="text-white" />
        </button>
        <div className="flex flex-col items-end ml-2 px-3 py-1 hover:bg-white/10 rounded transition-colors cursor-pointer">
          <span className="text-xs text-white">{formatTime(time)}</span>
          <span className="text-xs text-white/80">{formatDate(time)}</span>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
