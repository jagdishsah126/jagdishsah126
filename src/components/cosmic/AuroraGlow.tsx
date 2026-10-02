"use client";

import React from "react";

export default function AuroraGlow() {
  return (
    <div
      aria-hidden="true"
      className="aurora-lights fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Top Emerald & Teal Aurora Glow */}
      <div className="absolute -top-[20%] left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent blur-[120px] transform -rotate-12 animate-pulse-slow" />

      {/* Center-Right Electric Cyan Star Glow */}
      <div className="absolute top-[25%] -right-[15%] w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-sky-400/20 via-cyan-500/10 to-transparent blur-[140px] animate-pulse-slow" />

      {/* Bottom-Left Deep Cosmic Violet Glow */}
      <div className="absolute -bottom-[20%] left-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-600/20 via-purple-500/10 to-transparent blur-[130px] animate-pulse-slow" />

      {/* Subtle Warm Starlight Amber Accent (Representing Siraha Roots) */}
      <div className="absolute top-[60%] right-[30%] w-[350px] h-[350px] rounded-full bg-amber-400/5 blur-[100px] pointer-events-none" />
    </div>
  );
}
