import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="pt-28 pb-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bp-sheet">
          {/* Top Title Strip */}
          <div className="bp-strip">
            <span className="font-bold text-[var(--amber)]">[ 01 ]</span>
            <span className="bp-strip-title">SYSTEM ARCHITECTURE SPECIFICATION &amp; VERIFIED PROFILE</span>
            <span className="hidden sm:inline text-[var(--ink-3)]">HAS-PORTFOLIO · SHEET 01 / 05</span>
          </div>
          <div className="bp-ruler"></div>

          {/* Registration Crosshair */}
          <div className="bp-crosshair"></div>

          {/* Sheet Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            {/* Left Blueprint Details */}
            <div className="lg:col-span-7 flex flex-col space-y-5">
              <div className="flex items-center gap-2 font-mono-code text-xs text-[var(--amber)] uppercase tracking-[0.18em]">
                <span className="w-1.5 h-1.5 bg-[var(--amber)]"></span>
                <span>ENGINEERING FIELD GUIDE // FACT-BASED EVIDENCE</span>
              </div>

              <div>
                <h1 className="font-cond font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[var(--ink)] leading-[0.92] m-0">
                  CHUTCHAWAN
                  <br />
                  <span className="text-[var(--cyan)]">MEESRIMATUPOJ</span>
                </h1>
                <div className="font-mono-code text-sm sm:text-base text-[var(--amber)] font-medium mt-3 tracking-wider flex items-center gap-2">
                  <span className="text-[var(--ink-3)]">&gt;</span>
                  <span>FULL-STACK &amp; BACK-END DEVELOPER</span>
                </div>
              </div>

              {/* Blueprint Callout Box */}
              <div className="bp-callout bp-callout-amber my-2">
                <span className="bp-callout-tag">NOTE 1 · PRAGMATIC PROBLEM SOLVER</span>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[var(--ink-2)] m-0">
                  Pragmatic Back-End &amp; Full-Stack Developer with hands-on production experience in
                  cross-database migrations (MariaDB to SQL Server 2025), enterprise Docker modernization
                  (PHP 8.4 with native Oracle 12c OCI8 connectivity), multi-channel payment integrations
                  (Omise &amp; KTB), PII encryption/hashing, and automated screening with Tesseract OCR &amp; YOLO.
                </p>
              </div>

              {/* Technical Specifications Specs Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono-code text-xs">
                <div className="border border-[var(--ink-4)] p-2.5 bg-[rgba(12,58,106,0.3)]">
                  <span className="text-[10px] text-[var(--ink-3)] block uppercase tracking-wider">CORE BACKEND</span>
                  <span className="text-[var(--cyan)] font-semibold">PHP (7.3 - 8.4) · CI4 · SQL</span>
                </div>
                <div className="border border-[var(--ink-4)] p-2.5 bg-[rgba(12,58,106,0.3)]">
                  <span className="text-[10px] text-[var(--ink-3)] block uppercase tracking-wider">DATABASES</span>
                  <span className="text-[var(--ink)] font-semibold">SQL Server · Oracle 12c</span>
                </div>
                <div className="border border-[var(--ink-4)] p-2.5 bg-[rgba(12,58,106,0.3)] col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-[var(--ink-3)] block uppercase tracking-wider">SECURITY &amp; APIS</span>
                  <span className="text-[var(--amber)] font-semibold">Omise · KTB · SHA-256</span>
                </div>
              </div>

              {/* Blueprint Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#projects" className="bp-btn bp-btn-solid">
                  <i className="fas fa-layer-group text-xs"></i>
                  <span>EXPLORE VERIFIED BLUEPRINTS [ 04 ]</span>
                </a>
                <a href="#contact" className="bp-btn bp-btn-amber">
                  <i className="fas fa-paper-plane text-xs"></i>
                  <span>TRANSMIT MESSAGE [ 05 ]</span>
                </a>
              </div>
            </div>

            {/* Right Profile Schematic */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative p-3 border border-[var(--cyan)] bg-[rgba(12,58,106,0.4)] shadow-[0_0_24px_rgba(127,220,255,0.15)] max-w-[320px] w-full">
                {/* Schematic Frame Ticks */}
                <div className="absolute top-1 left-2 font-mono-code text-[9px] text-[var(--cyan)] tracking-widest">
                  FIG 1.0 // CAD VIEW
                </div>
                <div className="absolute top-1 right-2 font-mono-code text-[9px] text-[var(--ink-3)]">
                  LOC: WATLADPRADUK
                </div>

                <div className="relative mt-5 aspect-square border border-[var(--line)] overflow-hidden bg-[var(--paper-deep)]">
                  {!imgError ? (
                    <img
                      src="./assets/images/profile.jpg"
                      alt="Chutchawan Meesrimatupoj"
                      className="w-full h-full object-cover grayscale-[25%] contrast-110 hover:grayscale-0 transition duration-300"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center font-mono-code text-[var(--cyan)] bp-hatch-cyan">
                      <span className="text-4xl font-bold mb-2">CM</span>
                      <span className="text-xs uppercase tracking-widest">CHUTCHAWAN M.</span>
                      <span className="text-[10px] text-[var(--amber)] mt-1">[SYS-PROFILE-ACTIVE]</span>
                    </div>
                  )}

                  {/* Blueprint Target Reticle Overlay */}
                  <div className="absolute inset-0 pointer-events-none border border-[rgba(127,220,255,0.2)]"></div>
                  <div className="absolute bottom-2 left-2 font-mono-code text-[10px] bg-[rgba(7,37,70,0.85)] px-2 py-0.5 border border-[var(--ink-4)] text-[var(--cyan)]">
                    X: 100.50 · Y: 11110
                  </div>
                </div>

                <div className="mt-3 flex justify-between items-center font-mono-code text-[10px] text-[var(--ink-3)]">
                  <span>SCALE: 1:1 ACTIVE</span>
                  <span className="text-[var(--cyan)]">STATUS: VERIFIED (100% EVIDENCE)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Engineering Titleblock (Bottom of Sheet 01) */}
          <div className="mt-10 pt-6 border-t border-[var(--ink-4)]">
            <div className="bp-titleblock">
              <div className="bp-tb-cell">
                <span className="bp-tb-label">DRAWING TITLE</span>
                <span className="bp-tb-val text-[var(--cyan)]">FULL-STACK &amp; BACK-END SYSTEM ENGINEER</span>
              </div>
              <div className="bp-tb-cell">
                <span className="bp-tb-label">DRAWN BY / AUTHOR</span>
                <span className="bp-tb-val">CHUTCHAWAN MEESRIMATUPOJ (DRINK)</span>
              </div>
              <div className="bp-tb-cell">
                <span className="bp-tb-label">SPECIALIZATION</span>
                <span className="bp-tb-val">PHP 8.4 · SQL SERVER · ORACLE 12C</span>
              </div>
              <div className="bp-tb-cell">
                <span className="bp-tb-label">ENGINEERING VERIFICATION</span>
                <span className="bp-tb-val text-[var(--amber)]">GROUND-TRUTH · 100% PROVEN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
