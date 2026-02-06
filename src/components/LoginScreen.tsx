import React, { useState } from 'react';
import { User } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleProfileClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        onLogin();
      }, 600);
    }, 1200);
  };

  return (
    <div
      className={`login-screen ${isFading ? 'login-fade-out' : ''}`}
    >
      {/* Main content area */}
      <div className="login-content">
        {/* Left side - Logo & prompt */}
        <div className="login-left">
          <div className="login-logo">
            {/* Windows XP flag logo */}
            <svg width="80" height="80" viewBox="0 0 48 48" fill="none">
              <path d="M4 4L22 2V22H4Z" fill="#F25022" />
              <path d="M26 1.5L46 0V22H26Z" fill="#7FBA00" />
              <path d="M4 26H22V46L4 44Z" fill="#00A4EF" />
              <path d="M26 26H46V48L26 46Z" fill="#FFB900" />
            </svg>
            <h1 className="login-title">Windows<span className="login-title-xp">XP</span></h1>
          </div>
          <p className="login-prompt">To begin, click your user name</p>
        </div>

        {/* Right side - User profiles */}
        <div className="login-right">
          <button
            className={`login-profile ${isLoading ? 'login-profile-active' : ''}`}
            onClick={handleProfileClick}
            disabled={isLoading}
          >
            <div className="login-avatar">
              <User size={36} className="text-white" />
            </div>
            <div className="login-profile-info">
              <span className="login-profile-name">Alan Suresh</span>
              {isLoading && (
                <span className="login-loading-text">Loading your personal settings...</span>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="login-bottom">
        <button className="login-turnoff">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="2" x2="12" y2="12" />
          </svg>
          <span>Turn off computer</span>
        </button>
        <span className="login-footer-text">After you log on, you can add or change accounts.<br />Just go to Control Panel and click User Accounts.</span>
      </div>
    </div>
  );
};

export default LoginScreen;
