import React, { useState } from 'react';

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
    <div className={`xp-login ${isFading ? 'xp-login--fade' : ''}`}>
      {/* ── Top Banner ── */}
      <div className="xp-login__top">
        <div className="xp-login__brand">
          {/* Windows flag logo — 4-color waving flag */}
          <svg className="xp-login__flag" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Red pane */}
            <path d="M2 8 C4 7, 10 5, 22 4 L22 22 L4 22 C3 22, 2 20, 2 18 Z" fill="#FF2B2B" />
            {/* Green pane */}
            <path d="M26 3.5 C34 2, 42 1, 46 0.5 L46 22 L26 22 Z" fill="#52B748" />
            {/* Blue pane */}
            <path d="M2 26 L22 26 L22 44 C10 43, 4 41, 2 40 L2 30 C2 28, 2 27, 2 26 Z" fill="#05A6F0" />
            {/* Yellow pane */}
            <path d="M26 26 L46 26 L46 47.5 C42 47, 34 46, 26 44.5 Z" fill="#FFB900" />
          </svg>
          <div className="xp-login__brand-text">
            <span className="xp-login__microsoft">Microsoft</span>
            <span className="xp-login__windows-text">
              Windows<span className="xp-login__xp">xp</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Gold separator line ── */}
      <div className="xp-login__separator" />

      {/* ── Middle content area ── */}
      <div className="xp-login__middle">
        {/* Left — welcome text */}
        <div className="xp-login__welcome">
          <p className="xp-login__instruction">To begin, click your user name</p>
        </div>

        {/* Right — user list */}
        <div className="xp-login__users">
          <button
            className={`xp-login__user ${isLoading ? 'xp-login__user--active' : ''}`}
            onClick={handleProfileClick}
            disabled={isLoading}
          >
            {/* XP default user icon — chess piece / person silhouette */}
            <div className="xp-login__avatar">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="avatar-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A0C0E8" />
                    <stop offset="100%" stopColor="#5080B8" />
                  </linearGradient>
                </defs>
                <rect width="48" height="48" rx="3" fill="url(#avatar-bg)" />
                <rect x="1" y="1" width="46" height="46" rx="2" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
                {/* Head */}
                <circle cx="24" cy="17" r="8" fill="white" fillOpacity="0.9" />
                {/* Shoulders */}
                <ellipse cx="24" cy="42" rx="16" ry="12" fill="white" fillOpacity="0.9" />
              </svg>
            </div>
            <div className="xp-login__user-info">
              <span className="xp-login__username">Alan Suresh</span>
              {isLoading && (
                <span className="xp-login__loading">Loading your personal settings...</span>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* ── Gold separator line ── */}
      <div className="xp-login__separator" />

      {/* ── Bottom bar ── */}
      <div className="xp-login__bottom">
        <button className="xp-login__turnoff">
          {/* Power icon — circle with line */}
          <div className="xp-login__power-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#C93528" strokeWidth="2.5" fill="none" />
              <rect x="10.5" y="2" width="3" height="11" rx="1.5" fill="#C93528" />
            </svg>
          </div>
          <span>Turn off computer</span>
        </button>
        <div className="xp-login__bottom-help">
          After you log on, you can add or change accounts.<br />
          Just go to Control Panel and click User Accounts.
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
