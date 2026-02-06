import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

// Classic XP "My Computer"-style user icon — head/torso with blue badge
export const XPUserIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="userBody" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5B9BD5" />
        <stop offset="100%" stopColor="#2060A0" />
      </linearGradient>
      <radialGradient id="userHead" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#FFE0B2" />
        <stop offset="100%" stopColor="#D4A574" />
      </radialGradient>
    </defs>
    {/* Body/shirt */}
    <path d="M8 44 C8 32 14 28 24 28 C34 28 40 32 40 44 Z" fill="url(#userBody)" stroke="#1A4478" strokeWidth="1"/>
    {/* Head */}
    <circle cx="24" cy="16" r="10" fill="url(#userHead)" stroke="#A0845C" strokeWidth="1"/>
    {/* Eyes */}
    <ellipse cx="20.5" cy="15" rx="1.5" ry="2" fill="#3A3A3A"/>
    <ellipse cx="27.5" cy="15" rx="1.5" ry="2" fill="#3A3A3A"/>
    {/* Eye highlights */}
    <circle cx="21" cy="14" r="0.6" fill="white"/>
    <circle cx="28" cy="14" r="0.6" fill="white"/>
    {/* Smile */}
    <path d="M20 20 Q24 23.5 28 20" fill="none" stroke="#8B5E3C" strokeWidth="1.2" strokeLinecap="round"/>
    {/* Hair */}
    <path d="M14 12 Q14 4 24 6 Q34 4 34 12 Q30 8 24 9 Q18 8 14 12Z" fill="#5C3317"/>
  </svg>
);

// XP Notepad/Document icon — white page with folded corner & blue lines
export const XPDocumentIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="docPage" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E8E8E8" />
      </linearGradient>
    </defs>
    {/* Page shadow */}
    <path d="M12 6 L34 6 L42 14 L42 44 L12 44 Z" fill="#B0B0B0" opacity="0.4" transform="translate(1,1)"/>
    {/* Page */}
    <path d="M10 4 L32 4 L40 12 L40 44 L10 44 Z" fill="url(#docPage)" stroke="#808080" strokeWidth="1"/>
    {/* Fold */}
    <path d="M32 4 L32 12 L40 12 Z" fill="#C8C8C8" stroke="#808080" strokeWidth="0.5"/>
    {/* Text lines */}
    <rect x="14" y="18" width="22" height="1.5" rx="0.5" fill="#4472C4"/>
    <rect x="14" y="23" width="18" height="1.5" rx="0.5" fill="#808080"/>
    <rect x="14" y="28" width="20" height="1.5" rx="0.5" fill="#808080"/>
    <rect x="14" y="33" width="14" height="1.5" rx="0.5" fill="#808080"/>
    <rect x="14" y="38" width="16" height="1.5" rx="0.5" fill="#808080"/>
  </svg>
);

// XP classic yellow folder — open folder with documents peeking out
export const XPFolderIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="folderBackXP" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F7D76E" />
        <stop offset="100%" stopColor="#C49B1A" />
      </linearGradient>
      <linearGradient id="folderFrontXP" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFE98A" />
        <stop offset="50%" stopColor="#F2C94C" />
        <stop offset="100%" stopColor="#D4A017" />
      </linearGradient>
    </defs>
    {/* Back panel */}
    <path d="M4 12 L18 12 L22 8 L42 8 L42 40 L4 40 Z" fill="url(#folderBackXP)" stroke="#9A7700" strokeWidth="1"/>
    {/* Documents inside */}
    <rect x="14" y="14" width="16" height="20" rx="1" fill="white" stroke="#AAA" strokeWidth="0.5"/>
    <rect x="16" y="17" width="10" height="1" fill="#CCC"/>
    <rect x="16" y="20" width="8" height="1" fill="#CCC"/>
    {/* Front panel */}
    <path d="M2 20 L46 18 L44 42 L4 42 Z" fill="url(#folderFrontXP)" stroke="#9A7700" strokeWidth="1"/>
    {/* Highlight stripe */}
    <path d="M4 22 L44 20" stroke="#FFE98A" strokeWidth="1.5" opacity="0.6"/>
  </svg>
);

// XP Control Panel gear icon — metallic gear with center detail
export const XPGearIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="gearXP" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D0D0D0" />
        <stop offset="30%" stopColor="#A8A8A8" />
        <stop offset="70%" stopColor="#888888" />
        <stop offset="100%" stopColor="#686868" />
      </linearGradient>
      <radialGradient id="gearCenter" cx="50%" cy="45%" r="40%">
        <stop offset="0%" stopColor="#E0E0E0" />
        <stop offset="100%" stopColor="#707070" />
      </radialGradient>
    </defs>
    {/* Gear teeth - 8 tooth gear */}
    <path d="M21 2 L27 2 L28 7 L31 8 L35 4 L39 8 L36 12 L38 15 L43 15 L44 21 L39 23 L39 26 L44 29 L42 34 L37 33 L35 36 L37 41 L33 44 L30 40 L27 41 L27 46 L21 46 L20 41 L17 40 L13 44 L9 40 L12 36 L10 33 L5 33 L4 27 L9 25 L9 22 L4 19 L6 14 L11 15 L13 12 L11 7 L15 4 L18 8 L20 7 Z"
      fill="url(#gearXP)" stroke="#505050" strokeWidth="1"/>
    {/* Center hub */}
    <circle cx="24" cy="24" r="8" fill="url(#gearCenter)" stroke="#505050" strokeWidth="1.5"/>
    {/* Center hole */}
    <circle cx="24" cy="24" r="3.5" fill="#505050"/>
    {/* Highlight */}
    <circle cx="21" cy="21" r="1.5" fill="white" opacity="0.4"/>
  </svg>
);

// XP PowerPoint-style presentation icon — orange/red with slide preview
export const XPPresentationIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="pptXP" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FF8844" />
        <stop offset="100%" stopColor="#CC3300" />
      </linearGradient>
    </defs>
    {/* Main body */}
    <rect x="4" y="4" width="40" height="40" rx="3" fill="url(#pptXP)" stroke="#8B2200" strokeWidth="1"/>
    {/* Slide preview */}
    <rect x="10" y="10" width="28" height="20" fill="white" stroke="#DDD" strokeWidth="0.5"/>
    {/* Slide content - chart bars */}
    <rect x="14" y="22" width="4" height="6" fill="#CC3300"/>
    <rect x="20" y="18" width="4" height="10" fill="#FF6633"/>
    <rect x="26" y="14" width="4" height="14" fill="#CC3300"/>
    <rect x="32" y="20" width="4" height="8" fill="#FF6633"/>
    {/* Slide title line */}
    <rect x="14" y="12" width="16" height="2" fill="#333"/>
    {/* Bottom slides indicator */}
    <rect x="10" y="34" width="8" height="6" rx="1" fill="white" opacity="0.5"/>
    <rect x="20" y="34" width="8" height="6" rx="1" fill="white" opacity="0.3"/>
    <rect x="30" y="34" width="8" height="6" rx="1" fill="white" opacity="0.3"/>
  </svg>
);

// XP Outlook Express–style mail icon — sealed envelope with blue accent
export const XPMailIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="envBody" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFF0" />
        <stop offset="100%" stopColor="#E8DFC4" />
      </linearGradient>
      <linearGradient id="envFlap" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#D4C8A8" />
        <stop offset="100%" stopColor="#BFB08C" />
      </linearGradient>
    </defs>
    {/* Shadow */}
    <rect x="5" y="14" width="40" height="26" rx="2" fill="#999" opacity="0.3" transform="translate(1,1)"/>
    {/* Envelope body */}
    <rect x="4" y="13" width="40" height="26" rx="2" fill="url(#envBody)" stroke="#8B7355" strokeWidth="1"/>
    {/* Top flap */}
    <path d="M4 13 L24 29 L44 13" fill="url(#envFlap)" stroke="#8B7355" strokeWidth="1"/>
    {/* Fold lines */}
    <path d="M4 39 L19 27" stroke="#8B7355" strokeWidth="0.7" fill="none" opacity="0.6"/>
    <path d="M44 39 L29 27" stroke="#8B7355" strokeWidth="0.7" fill="none" opacity="0.6"/>
    {/* Blue seal */}
    <circle cx="24" cy="22" r="5" fill="#3070B8" stroke="#1A4478" strokeWidth="0.8"/>
    <circle cx="24" cy="22" r="2.5" fill="#5B9BD5"/>
  </svg>
);

// XP Word icon — blue W badge with document page
export const XPWordIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="wordBadge" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4A90D9" />
        <stop offset="100%" stopColor="#1B4F8A" />
      </linearGradient>
      <linearGradient id="wordPage" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E4E4E4" />
      </linearGradient>
    </defs>
    {/* Page behind */}
    <path d="M20 4 L40 4 L44 8 L44 44 L20 44 Z" fill="url(#wordPage)" stroke="#888" strokeWidth="0.8"/>
    <path d="M40 4 L40 8 L44 8 Z" fill="#CCC"/>
    {/* Page lines */}
    <rect x="23" y="12" width="18" height="1.2" fill="#CCC"/>
    <rect x="23" y="16" width="15" height="1.2" fill="#CCC"/>
    <rect x="23" y="20" width="17" height="1.2" fill="#CCC"/>
    <rect x="23" y="24" width="13" height="1.2" fill="#CCC"/>
    <rect x="23" y="28" width="16" height="1.2" fill="#CCC"/>
    <rect x="23" y="32" width="11" height="1.2" fill="#CCC"/>
    {/* Blue W badge */}
    <rect x="2" y="8" width="24" height="32" rx="2" fill="url(#wordBadge)" stroke="#0D3366" strokeWidth="1"/>
    <text x="14" y="31" fill="white" fontSize="22" fontWeight="bold" fontFamily="serif" textAnchor="middle">W</text>
    {/* Badge highlight */}
    <rect x="4" y="10" width="20" height="4" rx="1" fill="white" opacity="0.15"/>
  </svg>
);

// XP Minesweeper icon — mine on classic grid with flag
export const XPMinesweeperIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <radialGradient id="mineBodyXP" cx="40%" cy="35%" r="50%">
        <stop offset="0%" stopColor="#555" />
        <stop offset="100%" stopColor="#111" />
      </radialGradient>
    </defs>
    {/* Grid background */}
    <rect x="2" y="2" width="44" height="44" fill="#C0C0C0" stroke="#808080" strokeWidth="1.5" rx="1"/>
    {/* 3x3 grid cells with beveled look */}
    {[0, 1, 2].map(r => [0, 1, 2].map(c => (
      <rect key={`${r}${c}`} x={4 + c * 14} y={4 + r * 14} width="12" height="12"
        fill="#BFBFBF"
        stroke="#FFF" strokeWidth="1"
        style={{ filter: r === 1 && c === 1 ? 'none' : undefined }}
      />
    )))}
    {/* Numbers in revealed cells */}
    <text x="10" y="14" fill="#0000FF" fontSize="10" fontWeight="bold" textAnchor="middle">1</text>
    <text x="38" y="14" fill="#008000" fontSize="10" fontWeight="bold" textAnchor="middle">2</text>
    <text x="10" y="42" fill="#FF0000" fontSize="10" fontWeight="bold" textAnchor="middle">3</text>
    {/* Center mine */}
    <circle cx="24" cy="24" r="6" fill="url(#mineBodyXP)"/>
    {/* Mine spikes */}
    <line x1="24" y1="14" x2="24" y2="34" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="14" y1="24" x2="34" y2="24" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="17" y1="17" x2="31" y2="31" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
    <line x1="31" y1="17" x2="17" y2="31" stroke="#111" strokeWidth="2" strokeLinecap="round"/>
    {/* Mine highlight */}
    <circle cx="22" cy="22" r="1.8" fill="white" opacity="0.7"/>
    {/* Red flag in top-right cell */}
    <line x1="36" y1="7" x2="36" y2="15" stroke="#222" strokeWidth="1.5"/>
    <polygon points="36,7 42,9.5 36,12" fill="#FF0000"/>
  </svg>
);

// XP Graduation cap icon — classic mortarboard on open book
export const XPEducationIcon: React.FC<IconProps> = ({ size = 40, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className}>
    <defs>
      <linearGradient id="bookCoverXP" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C0392B" />
        <stop offset="100%" stopColor="#7B1A0E" />
      </linearGradient>
      <linearGradient id="capTopXP" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3A3A3A" />
        <stop offset="100%" stopColor="#111111" />
      </linearGradient>
    </defs>
    {/* Open book */}
    <path d="M6 28 L24 32 L24 46 L6 42 Z" fill="url(#bookCoverXP)" stroke="#5A0F08" strokeWidth="0.8"/>
    <path d="M42 28 L24 32 L24 46 L42 42 Z" fill="url(#bookCoverXP)" stroke="#5A0F08" strokeWidth="0.8"/>
    {/* Book pages */}
    <path d="M8 29 L24 33 L24 44 L8 40 Z" fill="#FFF8E7"/>
    <path d="M40 29 L24 33 L24 44 L40 40 Z" fill="#FFF0D0"/>
    {/* Page lines */}
    <line x1="10" y1="33" x2="22" y2="36" stroke="#CCC" strokeWidth="0.5"/>
    <line x1="10" y1="35.5" x2="22" y2="38.5" stroke="#CCC" strokeWidth="0.5"/>
    <line x1="26" y1="36" x2="38" y2="33" stroke="#CCC" strokeWidth="0.5"/>
    {/* Graduation cap - diamond shape */}
    <polygon points="24,6 4,18 24,26 44,18" fill="url(#capTopXP)" stroke="#000" strokeWidth="0.8"/>
    {/* Cap band */}
    <path d="M12 18 L12 24 Q24 30 36 24 L36 18" fill="none" stroke="#222" strokeWidth="1"/>
    {/* Tassel string */}
    <line x1="36" y1="18" x2="40" y2="28" stroke="#DAA520" strokeWidth="1.5"/>
    {/* Tassel end */}
    <path d="M38 28 L42 28 L41 33 L39 33 Z" fill="#DAA520"/>
    <rect x="37.5" y="27" width="5" height="2" rx="0.5" fill="#B8860B"/>
  </svg>
);
