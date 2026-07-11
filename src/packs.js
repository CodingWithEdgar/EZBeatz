// Sample-pack definitions — the single source of truth for both the pack
// browser (Home) and the per-pack pad grids (Pack). Add a pack here and it
// shows up everywhere automatically. `accent` is an "r, g, b" triple used to
// tint the pack's card.
import gabeKick from "./samples/Gabriel Set 1/808 kick.mp3";
import gabeBeep from "./samples/Gabriel Set 1/boop boop.mp3";
import gabeClaps from "./samples/Gabriel Set 1/claps.mp3";
import gabeShaker from "./samples/Gabriel Set 1/shaker.mp3";
import gabeToms from "./samples/Gabriel Set 1/toms.mp3";
import gabeHiHat from "./samples/Gabriel Set 1/hi hats.mp3";

import parkerClap from "./samples/Parker/claps.mp3";
import parkerHiHat from "./samples/Parker/hihat.mp3";
import parkerHiHat2 from "./samples/Parker/hihat2.mp3";
import parkerKick from "./samples/Parker/kick.mp3";
import parkerSnare from "./samples/Parker/snare.mp3";

import aBass from "./samples/Angela/BassDrumNew.mp3";
import aClaves from "./samples/Angela/ClavesNew.mp3";
import aTambourine from "./samples/Angela/TambourineNew.mp3";
import aTriangle from "./samples/Angela/TriangleNew.mp3";
import aWood from "./samples/Angela/WoodBlocksNew.mp3";
import aClaps from "./samples/Angela/Second/ClapsNew.mp3";
import aDrumLoop from "./samples/Angela/Second/DrumLoopNew.mp3";
import aSlaps from "./samples/Angela/Second/SlapsNew.mp3";
import aSnare from "./samples/Angela/Second/SnareNew.wav";
import aStomp from "./samples/Angela/Second/StompNew.mp3";

export const packs = [
  {
    id: "gabriel",
    name: "Gabriel's Pack",
    blurb: "808s, toms & hats",
    accent: "124, 92, 255",
    pads: [
      { label: "808 Kick", src: gabeKick },
      { label: "Boop", src: gabeBeep },
      { label: "Claps", src: gabeClaps },
      { label: "Hi-Hat", src: gabeHiHat },
      { label: "Toms", src: gabeToms },
      { label: "Shaker", src: gabeShaker },
    ],
  },
  {
    id: "parker",
    name: "Parker's Pack",
    blurb: "Tight kit essentials",
    accent: "56, 189, 248",
    pads: [
      { label: "Claps", src: parkerClap },
      { label: "Hi-Hat", src: parkerHiHat },
      { label: "Hi-Hat 2", src: parkerHiHat2 },
      { label: "Snare", src: parkerSnare },
      { label: "Kick", src: parkerKick },
    ],
  },
  {
    id: "angela",
    name: "Angela's Pack",
    blurb: "Percussion & loops",
    accent: "244, 63, 94",
    pads: [
      { label: "Bass", src: aBass },
      { label: "Claves", src: aClaves },
      { label: "Tambourine", src: aTambourine },
      { label: "Triangle", src: aTriangle },
      { label: "Wood", src: aWood },
      { label: "Claps", src: aClaps },
      { label: "Drum Loop", src: aDrumLoop },
      { label: "Slaps", src: aSlaps },
      { label: "Snare", src: aSnare },
      { label: "Stomp", src: aStomp },
    ],
  },
];

export const getPack = (id) => packs.find((pack) => pack.id === id);
