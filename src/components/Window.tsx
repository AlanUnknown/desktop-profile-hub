import React, { useState, useRef, useEffect } from 'react';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onFocus: () => void;
  onMinimize?: () => void;
  zIndex: number;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
  isWordDocument?: boolean;
  isMinimized?: boolean;
}

const Window: React.FC<WindowProps> = ({
  id,
  title,
  children,
  onClose,
  onFocus,
  onMinimize,
  zIndex,
  initialPosition = { x: 100, y: 50 },
  initialSize = { width: 600, height: 450 },
  isWordDocument = false,
  isMinimized = false,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isMaximized, setIsMaximized] = useState(false);
  const [preMaxState, setPreMaxState] = useState<{ position: { x: number; y: number }; size: { width: number; height: number } } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.window-controls')) return;
    if (isMaximized) return;
    
    onFocus();
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMaximize = () => {
    if (isMaximized) {
      // Restore
      if (preMaxState) {
        setPosition(preMaxState.position);
        setSize(preMaxState.size);
      }
      setIsMaximized(false);
    } else {
      // Maximize
      setPreMaxState({ position, size });
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight - 30 }); // 30 = taskbar height
      setIsMaximized(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const newX = Math.max(0, Math.min(e.clientX - dragOffset.x, window.innerWidth - size.width));
      const newY = Math.max(0, Math.min(e.clientY - dragOffset.y, window.innerHeight - size.height - 48));
      
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, size.width, size.height]);

  if (isMinimized) return null;

  return (
    <div
      ref={windowRef}
      className="window fixed"
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
        borderRadius: isMaximized ? 0 : undefined,
      }}
      onMouseDown={onFocus}
    >
      {/* XP Title Bar */}
      <div 
        className="window-titlebar"
        style={{ borderRadius: isMaximized ? 0 : undefined }}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleMaximize}
      >
        <span className="window-title truncate pr-2 pl-1">
          {title}
        </span>
        <div className="window-controls flex items-center gap-0.5 mr-1">
          <button className="window-btn" onClick={onMinimize}>_</button>
          <button className="window-btn" onClick={handleMaximize}>{isMaximized ? '❐' : '□'}</button>
          <button 
            className="window-btn window-close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div 
        className={`overflow-auto ${isWordDocument ? 'bg-muted' : 'bg-card'}`}
        style={{ height: `calc(100% - var(--titlebar-height))` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Window;
