import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import MusicTest from "./MusicTest";
import { getPack } from "./packs";

// Rotating pad accents ("r, g, b" triples) so a grid of pads reads as a
// colourful drum machine rather than a wall of identical tiles.
const PAD_COLORS = [
  "124, 92, 255",
  "56, 189, 248",
  "244, 63, 94",
  "34, 197, 94",
  "249, 115, 22",
  "236, 72, 153",
  "20, 184, 166",
  "234, 179, 8",
];

// A single opened pack: header with a back link plus its grid of pads.
const Pack = () => {
  const { id } = useParams();
  const pack = getPack(id);

  if (!pack) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="pack-head">
        <Link to="/" className="back-btn">
          ← Packs
        </Link>
        <h1 className="pack-title">{pack.name}</h1>
      </div>
      <p className="pack-hint">
        Tap a pad to play or pause it, then use the sliders to shape the sound.
      </p>
      <div className="pad-grid">
        {pack.pads.map((pad, i) => (
          <MusicTest
            key={`${pack.id}-${i}`}
            label={pad.label}
            src={pad.src}
            accent={PAD_COLORS[i % PAD_COLORS.length]}
          />
        ))}
      </div>
    </div>
  );
};

export default Pack;
