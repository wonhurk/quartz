// Generates quartz/static/banner.svg
// Run: node scripts/generate-banner.mjs

import fs from "fs";
import path from "path";

const W = 1200, H = 200;

// Hub nodes (cx, cy, r=9) with two glow rings
const hubs = [
  { cx: 785, cy: 82 },
  { cx: 952, cy: 58 },
  { cx: 872, cy: 132 },
  { cx: 1082, cy: 102 },
];

// Regular nodes
const nodes = [
  { cx: 698, cy: 48 },
  { cx: 725, cy: 158 },
  { cx: 822, cy: 25 },
  { cx: 848, cy: 178 },
  { cx: 902, cy: 90 },
  { cx: 978, cy: 148 },
  { cx: 1022, cy: 35 },
  { cx: 1052, cy: 172 },
  { cx: 1132, cy: 65 },
  { cx: 1150, cy: 145 },
  { cx: 675, cy: 102 },
  { cx: 762, cy: 175 },
  { cx: 920, cy: 16 },
  { cx: 1102, cy: 25 },
];

const H1 = hubs[0], H2 = hubs[1], H3 = hubs[2], H4 = hubs[3];
const [N1,N2,N3,N4,N5,N6,N7,N8,N9,N10,N11,N12,N13,N14] = nodes;

const edges = [
  // hub–hub
  [H1, H2, 0.42], [H1, H3, 0.42], [H2, H4, 0.42], [H3, H4, 0.42],
  // node–hub
  [N1,  H1, 0.28], [N2,  H1, 0.28], [N3,  H2, 0.28], [N4,  H3, 0.28],
  [N5,  H2, 0.28], [N5,  H3, 0.28], [N6,  H3, 0.28], [N6,  H4, 0.28],
  [N7,  H2, 0.28], [N7,  H4, 0.28], [N8,  H4, 0.28], [N9,  H4, 0.28],
  [N10, H4, 0.28], [N11, H1, 0.28], [N12, H3, 0.28], [N13, H2, 0.28],
  [N14, H4, 0.28],
  // node–node
  [N1, N3,  0.20], [N5, N6,  0.20], [N9, N10, 0.20],
  [N7, N14, 0.20], [N2, N12, 0.20],
];

function line(a, b, opacity) {
  return `<line x1="${a.cx}" y1="${a.cy}" x2="${b.cx}" y2="${b.cy}" stroke="#4a9edd" stroke-width="0.9" opacity="${opacity}"/>`;
}
function hubCircles(h) {
  return [
    `<circle cx="${h.cx}" cy="${h.cy}" r="22" fill="none" stroke="#00d4ff" stroke-width="1" opacity="0.12"/>`,
    `<circle cx="${h.cx}" cy="${h.cy}" r="15" fill="none" stroke="#4a9edd" stroke-width="1" opacity="0.22"/>`,
    `<circle cx="${h.cx}" cy="${h.cy}" r="9" fill="#4a9edd" opacity="0.95" filter="url(#glow)"/>`,
  ].join("\n    ");
}
function nodeCircle(n) {
  return `<circle cx="${n.cx}" cy="${n.cy}" r="4.5" fill="#4a9edd" opacity="0.70"/>`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="#060b15"/>
      <stop offset="100%" stop-color="#0c1e33"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="#00d4ff"/>
      <stop offset="100%" stop-color="#0080cc"/>
    </linearGradient>
    <linearGradient id="fadeLG" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0%" stop-color="black"/>
      <stop offset="100%" stop-color="white"/>
    </linearGradient>
    <mask id="netMask">
      <rect x="610" y="0" width="130" height="${H}" fill="url(#fadeLG)"/>
      <rect x="740" y="0" width="460" height="${H}" fill="white"/>
    </mask>
    <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="titleGlow" x="-10%" y="-60%" width="120%" height="220%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="0.6" fill="white" fill-opacity="0.07"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>

  <!-- Network (right side, fades in from x=610) -->
  <g mask="url(#netMask)">
    ${edges.map(([a, b, op]) => line(a, b, op)).join("\n    ")}
    ${hubs.map(hubCircles).join("\n    ")}
    ${nodes.map(nodeCircle).join("\n    ")}
  </g>

  <!-- Accent bar (left) -->
  <circle cx="41" cy="20" r="3" fill="url(#accent)"/>
  <rect x="38" y="20" width="6" height="160" fill="url(#accent)"/>
  <circle cx="41" cy="180" r="3" fill="url(#accent)"/>
  <line x1="44" y1="50"  x2="52" y2="50"  stroke="#00d4ff" stroke-width="1"   opacity="0.55"/>
  <line x1="44" y1="80"  x2="52" y2="80"  stroke="#00d4ff" stroke-width="1"   opacity="0.55"/>
  <line x1="44" y1="100" x2="57" y2="100" stroke="#00d4ff" stroke-width="1.5" opacity="0.75"/>
  <line x1="44" y1="120" x2="52" y2="120" stroke="#00d4ff" stroke-width="1"   opacity="0.55"/>
  <line x1="44" y1="150" x2="52" y2="150" stroke="#00d4ff" stroke-width="1"   opacity="0.55"/>

  <!-- Title -->
  <text x="62" y="103" font-family="'Helvetica Neue', Arial, sans-serif" font-size="58" dominant-baseline="hanging" filter="url(#titleGlow)">
    <tspan font-weight="300" fill="#4a9edd">LLM</tspan><tspan font-weight="800" fill="white">wiki</tspan><tspan font-weight="300" fill="#4a9edd">.bio</tspan>
  </text>

  <!-- Tagline: upper right -->
  <text
    x="1188" y="14"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="10"
    font-weight="400"
    fill="white"
    fill-opacity="0.36"
    letter-spacing="4.5"
    text-anchor="end"
    dominant-baseline="hanging"
  >BIOMEDICAL KNOWLEDGE GRAPH</text>

  <!-- Border lines -->
  <line x1="0" y1="0.5"     x2="${W}" y2="0.5"     stroke="white" stroke-opacity="0.12" stroke-width="1"/>
  <line x1="0" y1="${H-0.5}" x2="${W}" y2="${H-0.5}" stroke="white" stroke-opacity="0.12" stroke-width="1"/>
</svg>`;

const out = path.join(import.meta.dirname, "../quartz/static/banner.svg");
fs.writeFileSync(out, svg, "utf-8");
console.log(`Written: ${out}`);
