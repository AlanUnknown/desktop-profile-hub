import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const XPUserIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="userGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7CB4F5" />
        <stop offset="100%" stopColor="#1E5AA8" />
      </linearGradient>
      <linearGradient id="faceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFE4C4" />
        <stop offset="100%" stopColor="#DEB887" />
      </linearGradient>
    </defs>
    <rect x="8" y="28" width="32" height="18" rx="3" fill="url(#userGrad)" stroke="#0D3A6B" strokeWidth="1"/>
    <circle cx="24" cy="16" r="12" fill="url(#faceGrad)" stroke="#8B7355" strokeWidth="1"/>
    <ellipse cx="20" cy="14" rx="2" ry="2" fill="#4A4A4A"/>
    <ellipse cx="28" cy="14" rx="2" ry="2" fill="#4A4A4A"/>
    <path d="M20 20 Q24 24 28 20" fill="none" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 8 Q24 2 36 8 Q32 12 24 10 Q16 12 12 8Z" fill="#6B4423"/>
  </svg>
);

export const XPDocumentIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="docGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#D4D4D4" />
      </linearGradient>
      <linearGradient id="docFold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C4C4C4" />
        <stop offset="100%" stopColor="#9A9A9A" />
      </linearGradient>
    </defs>
    <path d="M8 4 L32 4 L40 12 L40 44 L8 44 Z" fill="url(#docGrad)" stroke="#666" strokeWidth="1"/>
    <path d="M32 4 L32 12 L40 12 Z" fill="url(#docFold)"/>
    <rect x="12" y="18" width="24" height="2" fill="#2B579A"/>
    <rect x="12" y="24" width="20" height="2" fill="#666"/>
    <rect x="12" y="30" width="22" height="2" fill="#666"/>
    <rect x="12" y="36" width="16" height="2" fill="#666"/>
  </svg>
);

export const XPFolderIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="folderBack" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFE566" />
        <stop offset="100%" stopColor="#CC9900" />
      </linearGradient>
      <linearGradient id="folderFront" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFDD44" />
        <stop offset="100%" stopColor="#DDAA00" />
      </linearGradient>
    </defs>
    <path d="M4 10 L20 10 L24 6 L44 6 L44 14 L4 14 Z" fill="url(#folderBack)" stroke="#997700" strokeWidth="1"/>
    <rect x="4" y="14" width="40" height="30" rx="2" fill="url(#folderFront)" stroke="#997700" strokeWidth="1"/>
    <rect x="8" y="18" width="32" height="2" fill="#FFE566" opacity="0.7"/>
  </svg>
);

export const XPGearIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="gearGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C0C0C0" />
        <stop offset="50%" stopColor="#808080" />
        <stop offset="100%" stopColor="#606060" />
      </linearGradient>
    </defs>
    <path d="M24 4 L28 8 L34 6 L36 12 L44 14 L42 20 L46 26 L40 30 L42 36 L36 38 L34 44 L28 42 L24 48 L20 42 L14 44 L12 38 L4 36 L6 30 L2 24 L8 20 L6 14 L12 12 L14 6 L20 8 Z" 
      fill="url(#gearGrad)" stroke="#404040" strokeWidth="1"/>
    <circle cx="24" cy="26" r="8" fill="#505050" stroke="#303030" strokeWidth="2"/>
    <circle cx="24" cy="26" r="4" fill="#707070"/>
  </svg>
);

export const XPPresentationIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="pptGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF8855" />
        <stop offset="100%" stopColor="#CC4400" />
      </linearGradient>
      <linearGradient id="slideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#EEEEEE" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="36" rx="2" fill="url(#pptGrad)" stroke="#992200" strokeWidth="1"/>
    <rect x="8" y="8" width="32" height="24" fill="url(#slideGrad)" stroke="#666" strokeWidth="1"/>
    <circle cx="24" cy="18" r="6" fill="#CC4400"/>
    <rect x="12" y="26" width="24" height="3" fill="#333"/>
    <rect x="30" y="36" width="4" height="8" fill="#666"/>
    <rect x="14" y="36" width="4" height="8" fill="#666"/>
  </svg>
);

export const XPMailIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="mailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFEE" />
        <stop offset="100%" stopColor="#E8DCC0" />
      </linearGradient>
      <linearGradient id="flapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F0E8D8" />
        <stop offset="100%" stopColor="#C8B898" />
      </linearGradient>
    </defs>
    <rect x="4" y="12" width="40" height="28" rx="2" fill="url(#mailGrad)" stroke="#8B7355" strokeWidth="1"/>
    <path d="M4 12 L24 28 L44 12" fill="url(#flapGrad)" stroke="#8B7355" strokeWidth="1"/>
    <path d="M4 40 L18 26" stroke="#8B7355" strokeWidth="1" fill="none"/>
    <path d="M44 40 L30 26" stroke="#8B7355" strokeWidth="1" fill="none"/>
  </svg>
);

export const XPWordIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="wordGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4488DD" />
        <stop offset="100%" stopColor="#1A4B8C" />
      </linearGradient>
      <linearGradient id="pageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E8E8E8" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="2" fill="url(#wordGrad)" stroke="#0D3366" strokeWidth="1"/>
    <rect x="22" y="8" width="18" height="32" fill="url(#pageGrad)" stroke="#888" strokeWidth="0.5"/>
    <rect x="24" y="12" width="14" height="1.5" fill="#333"/>
    <rect x="24" y="16" width="12" height="1.5" fill="#666"/>
    <rect x="24" y="20" width="14" height="1.5" fill="#666"/>
    <rect x="24" y="24" width="10" height="1.5" fill="#666"/>
    <text x="8" y="32" fill="white" fontSize="20" fontWeight="bold" fontFamily="serif">W</text>
  </svg>
);

export const XPMinesweeperIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="mineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#404040" />
        <stop offset="100%" stopColor="#1A1A1A" />
      </linearGradient>
      <radialGradient id="mineShine" cx="30%" cy="30%" r="50%">
        <stop offset="0%" stopColor="#666666" />
        <stop offset="100%" stopColor="#1A1A1A" />
      </radialGradient>
    </defs>
    {/* Grid background */}
    <rect x="4" y="4" width="40" height="40" fill="#C0C0C0" stroke="#808080" strokeWidth="2"/>
    {/* Grid lines */}
    <line x1="4" y1="17" x2="44" y2="17" stroke="#808080" strokeWidth="1"/>
    <line x1="4" y1="31" x2="44" y2="31" stroke="#808080" strokeWidth="1"/>
    <line x1="17" y1="4" x2="17" y2="44" stroke="#808080" strokeWidth="1"/>
    <line x1="31" y1="4" x2="31" y2="44" stroke="#808080" strokeWidth="1"/>
    {/* Mine */}
    <circle cx="24" cy="24" r="8" fill="url(#mineShine)"/>
    <line x1="24" y1="12" x2="24" y2="36" stroke="#1A1A1A" strokeWidth="3"/>
    <line x1="12" y1="24" x2="36" y2="24" stroke="#1A1A1A" strokeWidth="3"/>
    <line x1="15" y1="15" x2="33" y2="33" stroke="#1A1A1A" strokeWidth="2"/>
    <line x1="33" y1="15" x2="15" y2="33" stroke="#1A1A1A" strokeWidth="2"/>
    {/* Shine */}
    <circle cx="21" cy="21" r="2" fill="#FFFFFF" opacity="0.6"/>
    {/* Red flag in corner */}
    <polygon points="36,6 44,10 36,14" fill="#FF0000"/>
    <line x1="36" y1="6" x2="36" y2="16" stroke="#1A1A1A" strokeWidth="1.5"/>
  </svg>
);

export const XPEducationIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="capGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2B2B2B" />
        <stop offset="100%" stopColor="#0A0A0A" />
      </linearGradient>
      <linearGradient id="bookGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8B0000" />
        <stop offset="100%" stopColor="#5C0000" />
      </linearGradient>
    </defs>
    {/* Book */}
    <rect x="6" y="24" width="36" height="22" rx="2" fill="url(#bookGrad)" stroke="#3A0000" strokeWidth="1"/>
    <rect x="8" y="26" width="32" height="3" fill="#FFD700"/>
    <rect x="20" y="24" width="8" height="22" fill="#5C0000"/>
    {/* Graduation cap */}
    <polygon points="24,6 4,18 24,26 44,18" fill="url(#capGrad)" stroke="#000" strokeWidth="0.5"/>
    <rect x="22" y="16" width="4" height="6" fill="#333"/>
    <ellipse cx="24" cy="22" rx="6" ry="2" fill="#333"/>
    {/* Tassel */}
    <line x1="38" y1="18" x2="42" y2="28" stroke="#FFD700" strokeWidth="2"/>
    <circle cx="42" cy="30" r="3" fill="#FFD700"/>
  </svg>
);
