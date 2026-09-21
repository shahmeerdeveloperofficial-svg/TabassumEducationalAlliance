const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'monograms');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// 1. Oxford Progressive Schools Monogram SVG
const oxfordSvg = `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="oxfordGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="50%" stop-color="#FCD34D"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <linearGradient id="oxfordBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#003b7a"/>
      <stop offset="100%" stop-color="#001838"/>
    </linearGradient>
  </defs>
  <path d="M100 15 C145 15 175 30 175 75 C175 130 100 185 100 185 C100 185 25 130 25 75 C25 30 55 15 100 15 Z" fill="url(#oxfordBlue)" stroke="url(#oxfordGold)" stroke-width="5"/>
  <path d="M100 25 C138 25 163 38 163 75 C163 122 100 170 100 170 C100 170 37 122 37 75 C37 38 62 25 100 25 Z" fill="none" stroke="url(#oxfordGold)" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.8"/>
  <path d="M75 52 L87 62 L100 48 L113 62 L125 52 L121 70 L79 70 Z" fill="url(#oxfordGold)"/>
  <circle cx="100" cy="44" r="3" fill="#FCD34D"/>
  <circle cx="75" cy="48" r="2.5" fill="#FCD34D"/>
  <circle cx="125" cy="48" r="2.5" fill="#FCD34D"/>
  <path d="M100 95 C92 88 78 86 64 88 L64 122 C78 120 92 122 100 128 C108 122 122 120 136 122 L136 88 C122 86 108 88 100 95 Z" fill="#ffffff" stroke="url(#oxfordGold)" stroke-width="2.5"/>
  <path d="M100 95 L100 128" stroke="#003b7a" stroke-width="2"/>
  <line x1="70" y1="98" x2="92" y2="98" stroke="#003b7a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="70" y1="105" x2="92" y2="105" stroke="#003b7a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="70" y1="112" x2="86" y2="112" stroke="#003b7a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="108" y1="98" x2="130" y2="98" stroke="#003b7a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="108" y1="105" x2="130" y2="105" stroke="#003b7a" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="114" y1="112" x2="130" y2="112" stroke="#003b7a" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M50 125 C45 105 50 85 58 75 M150 125 C155 105 150 85 142 75" fill="none" stroke="url(#oxfordGold)" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M70 142 L130 142 L125 153 L100 151 L75 153 Z" fill="url(#oxfordGold)"/>
  <text x="100" y="150" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#001838" text-anchor="middle">ESTD 2008</text>
  <polygon points="100,160 102,165 107,165 103,168 105,173 100,170 95,173 97,168 93,165 98,165" fill="url(#oxfordGold)"/>
</svg>`;
fs.writeFileSync(path.join(dir, 'oxford.svg'), oxfordSvg);

// 2. IQRA Madinat-Ul-Atfal Monogram SVG
const iqraSvg = `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iqraGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24"/>
      <stop offset="50%" stop-color="#FDE68A"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <linearGradient id="iqraGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#064e3b"/>
    </linearGradient>
  </defs>
  <rect x="30" y="30" width="140" height="140" rx="24" fill="url(#iqraGreen)" stroke="url(#iqraGold)" stroke-width="4.5"/>
  <rect x="30" y="30" width="140" height="140" rx="24" transform="rotate(45 100 100)" fill="url(#iqraGreen)" stroke="url(#iqraGold)" stroke-width="4.5"/>
  <circle cx="100" cy="100" r="60" fill="#022c22" stroke="url(#iqraGold)" stroke-width="3"/>
  <circle cx="100" cy="100" r="55" fill="none" stroke="url(#iqraGold)" stroke-width="1" stroke-dasharray="3,3"/>
  <path d="M78 120 L78 95 C78 78 100 68 100 68 C100 68 122 78 122 95 L122 120 Z" fill="url(#iqraGreen)" stroke="url(#iqraGold)" stroke-width="2"/>
  <path d="M104 52 A 8 8 0 1 0 96 64 A 10 10 0 1 1 104 52 Z" fill="url(#iqraGold)"/>
  <polygon points="100,50 101.5,54 105,54 102,56.5 103,60 100,58 97,60 98,56.5 95,54 98.5,54" fill="#FFFBEB"/>
  <path d="M100 95 C93 90 82 88 72 90 L72 118 C82 116 93 118 100 123 C107 118 118 116 128 118 L128 90 C118 88 107 90 100 95 Z" fill="#ffffff" stroke="url(#iqraGold)" stroke-width="2"/>
  <text x="100" y="88" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="url(#iqraGold)" text-anchor="middle" letter-spacing="2">IQRA</text>
  <text x="100" y="142" font-family="Arial, sans-serif" font-size="7.5" font-weight="bold" fill="#FDE68A" text-anchor="middle" letter-spacing="1">MADINAT-UL-ATFAL</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'iqra.svg'), iqraSvg);

// 3. Tabassum I.T and Skills Center Monogram SVG
const itSvg = `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="itGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00a2e8"/>
      <stop offset="50%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#4338ca"/>
    </linearGradient>
    <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <polygon points="100,18 172,58 172,142 100,182 28,142 28,58" fill="url(#itGrad)" stroke="url(#cyanGlow)" stroke-width="4.5"/>
  <polygon points="100,28 162,64 162,136 100,172 38,136 38,64" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.7"/>
  <rect x="75" y="75" width="50" height="50" rx="8" fill="#1e293b" stroke="url(#cyanGlow)" stroke-width="2.5"/>
  <circle cx="100" cy="100" r="14" fill="url(#cyanGlow)" opacity="0.2"/>
  <path d="M100 45 L100 75 M100 125 L100 155 M45 100 L75 100 M125 100 L155 100 M62 62 L78 78 M138 62 L122 78 M62 138 L78 122 M138 138 L122 122" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="100" cy="45" r="4" fill="#38bdf8"/>
  <circle cx="100" cy="155" r="4" fill="#38bdf8"/>
  <circle cx="45" cy="100" r="4" fill="#38bdf8"/>
  <circle cx="155" cy="100" r="4" fill="#38bdf8"/>
  <path d="M103 85 L94 100 L101 100 L97 115 L108 98 L101 98 Z" fill="#facc15" stroke="#eab308" stroke-width="1"/>
  <text x="100" y="145" font-family="Arial, sans-serif" font-size="8.5" font-weight="bold" fill="#38bdf8" text-anchor="middle" letter-spacing="1.5">I.T &amp; SKILLS</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'it_skills.svg'), itSvg);

// 4. Idara Taleemat-e-Nabawia Lahore Monogram SVG
const idaraSvg = `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#881337"/>
      <stop offset="50%" stop-color="#be123c"/>
      <stop offset="100%" stop-color="#4c0519"/>
    </linearGradient>
    <linearGradient id="idaraGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="50%" stop-color="#FACC15"/>
      <stop offset="100%" stop-color="#CA8A04"/>
    </linearGradient>
  </defs>
  <circle cx="100" cy="100" r="82" fill="url(#roseGrad)" stroke="url(#idaraGold)" stroke-width="4.5"/>
  <circle cx="100" cy="100" r="74" fill="#30030f" stroke="url(#idaraGold)" stroke-width="1.5" stroke-dasharray="4,3"/>
  <path d="M100 42 C92 48 85 58 85 70 L115 70 C115 58 108 48 100 42 Z" fill="url(#idaraGold)"/>
  <circle cx="100" cy="38" r="3.5" fill="#FDE047"/>
  <path d="M78 72 L122 72 L120 110 L80 110 Z" fill="#4c0519" stroke="url(#idaraGold)" stroke-width="1.5"/>
  <rect x="65" y="58" width="10" height="52" rx="2" fill="url(#idaraGold)"/>
  <rect x="125" y="58" width="10" height="52" rx="2" fill="url(#idaraGold)"/>
  <polygon points="70,48 64,58 76,58" fill="#FDE047"/>
  <polygon points="130,48 124,58 136,58" fill="#FDE047"/>
  <path d="M100 96 C93 92 84 90 75 92 L75 116 C84 114 93 116 100 120 C107 116 116 114 125 116 L125 92 C116 90 107 92 100 96 Z" fill="#ffffff" stroke="url(#idaraGold)" stroke-width="2"/>
  <text x="100" y="136" font-family="Arial, sans-serif" font-size="7.5" font-weight="bold" fill="#FDE047" text-anchor="middle" letter-spacing="1">IDARA TALEEMAT-E-NABAWAIA</text>
  <text x="100" y="146" font-family="Arial, sans-serif" font-size="7" font-weight="semibold" fill="#FECDD3" text-anchor="middle">LAHORE</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'idara.svg'), idaraSvg);

// 5. The Nest (National Educational School for Triumph) Monogram SVG
const nestSvg = `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="nestTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d9488"/>
      <stop offset="50%" stop-color="#0f766e"/>
      <stop offset="100%" stop-color="#134e4a"/>
    </linearGradient>
    <linearGradient id="nestGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24"/>
      <stop offset="50%" stop-color="#FCD34D"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <path d="M100 18 C142 18 172 32 172 74 C172 128 100 182 100 182 C100 182 28 128 28 74 C28 32 58 18 100 18 Z" fill="url(#nestTeal)" stroke="url(#nestGold)" stroke-width="4.5"/>
  <path d="M100 28 C135 28 160 40 160 74 C160 120 100 168 100 168 C100 168 40 120 40 74 C40 40 65 28 100 28 Z" fill="none" stroke="url(#nestGold)" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.8"/>
  <path d="M100 50 C108 62 125 58 145 45 C138 65 125 75 108 80 C114 85 120 95 100 115 C80 95 86 85 92 80 C75 75 62 65 55 45 C75 58 92 62 100 50 Z" fill="url(#nestGold)"/>
  <polygon points="100,36 102,42 108,42 103,46 105,52 100,48 95,52 97,46 92,42 98,42" fill="#FFFBEB"/>
  <path d="M62 124 L138 124 L132 138 L100 135 L68 138 Z" fill="url(#nestGold)"/>
  <text x="100" y="134" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#134e4a" text-anchor="middle" letter-spacing="1.5">THE NEST</text>
  <text x="100" y="152" font-family="Arial, sans-serif" font-size="6.5" font-weight="semibold" fill="#CCFBF1" text-anchor="middle">SCHOOL FOR TRIUMPH</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'nest.svg'), nestSvg);

// Allies:
// 6. Al Qalam School
const alQalamSvg = `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="alqalamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/><stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="alqalamGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  </defs>
  <circle cx="100" cy="100" r="82" fill="url(#alqalamGrad)" stroke="url(#alqalamGold)" stroke-width="4"/>
  <path d="M100 40 L115 80 L104 125 L100 140 L96 125 L85 80 Z" fill="url(#alqalamGold)"/>
  <circle cx="100" cy="95" r="3" fill="#0369a1"/>
  <line x1="100" y1="98" x2="100" y2="135" stroke="#0369a1" stroke-width="2"/>
  <text x="100" y="162" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">AL QALAM SCHOOL</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'alqalam.svg'), alQalamSvg);

// 7. Kids Education School System
const kidsSvg = `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="kidsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  </defs>
  <circle cx="100" cy="100" r="82" fill="url(#kidsGrad)" stroke="#ffffff" stroke-width="4"/>
  <circle cx="100" cy="70" r="16" fill="#ffffff"/>
  <path d="M80 120 C80 95 120 95 120 120 Z" fill="#ffffff"/>
  <polygon points="100,38 103,46 112,46 105,51 108,59 100,54 92,59 95,51 88,46 97,46" fill="#ffffff"/>
  <text x="100" y="148" font-family="Arial, sans-serif" font-size="7.5" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">KIDS EDUCATION</text>
  <text x="100" y="160" font-family="Arial, sans-serif" font-size="6.5" font-weight="medium" fill="#ffffff" text-anchor="middle">SCHOOL SYSTEM</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'kids_education.svg'), kidsSvg);

// 8. Fikr e Raat
const fikrSvg = `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fikrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#4338ca"/>
    </linearGradient>
  </defs>
  <circle cx="100" cy="100" r="82" fill="url(#fikrGrad)" stroke="#a5b4fc" stroke-width="4"/>
  <path d="M112 55 A 25 25 0 1 0 112 105 A 32 32 0 1 1 112 55 Z" fill="#fde047"/>
  <circle cx="120" cy="75" r="4" fill="#ffffff"/>
  <text x="100" y="145" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">FIKR E RAAT</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'fikr_e_raat.svg'), fikrSvg);

// 9. National Ulama Council Pakistan
const ulamaSvg = `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ulamaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803d"/><stop offset="100%" stop-color="#14532d"/>
    </linearGradient>
  </defs>
  <circle cx="100" cy="100" r="82" fill="url(#ulamaGrad)" stroke="#86efac" stroke-width="4"/>
  <path d="M105 60 A 24 24 0 1 0 105 110 A 30 30 0 1 1 105 60 Z" fill="#ffffff"/>
  <polygon points="110,75 112,81 118,81 113,85 115,91 110,87 105,91 107,85 102,81 108,81" fill="#ffffff"/>
  <text x="100" y="142" font-family="Arial, sans-serif" font-size="7.5" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">NATIONAL ULAMA COUNCIL</text>
  <text x="100" y="154" font-family="Arial, sans-serif" font-size="7" font-weight="medium" fill="#86efac" text-anchor="middle">PAKISTAN</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'ulama_council.svg'), ulamaSvg);

console.log('All 9 Monograms created successfully in public/monograms/');
