import React from "react";
import { Link } from "react-router-dom";
import { packs } from "./packs";

// A little 2x2 "pads" glyph for the pack covers.
const PadsGlyph = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect x="3" y="3" width="8" height="8" rx="2" />
    <rect x="13" y="3" width="8" height="8" rx="2" />
    <rect x="3" y="13" width="8" height="8" rx="2" />
    <rect x="13" y="13" width="8" height="8" rx="2" />
  </svg>
);

// Landing screen: a browsable card per sample pack. Click a card to open it.
const Home = () => (
  <div>
    <div className="home-head">
      <h1 className="home-title">Sample packs</h1>
      <p className="home-sub">
        Open a pack, tap a pad to trigger its sound, then shape it with the
        gain, pan and tone controls.
      </p>
    </div>
    <div className="pack-grid">
      {packs.map((pack) => (
        <Link
          key={pack.id}
          to={`/pack/${pack.id}`}
          className="pack-card"
          style={{ "--pack-accent": pack.accent }}
        >
          <div
            className="pack-cover"
            style={{
              background: `linear-gradient(140deg, rgb(${pack.accent}), rgba(${pack.accent}, 0.35))`,
            }}
          >
            <PadsGlyph />
          </div>
          <div className="pack-body">
            <h2 className="pack-name">{pack.name}</h2>
            <p className="pack-blurb">{pack.blurb}</p>
            <div className="pack-foot">
              <span className="pack-count">{pack.pads.length} pads</span>
              <span className="pack-open">Open →</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Home;
