"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { playClickSound } from "../../utils/audio";
import {
  Radio,
  Mail,
  Phone,
  MapPin,
  Github,
  Send,
  Copy,
  Check,
  Globe,
  Sparkles,
} from "lucide-react";

export default function ContactTab() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCopy = (text: string, field: string) => {
    playClickSound();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    const subject = encodeURIComponent(`Transmission from ${senderName || "Visitor"} via jagdishsah.com.np`);
    const body = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>Interstellar Transmission</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
          Open a Direct <span className="cosmic-gradient-text">Communication Channel</span>
        </h2>
        <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Open for engineering collaborations, quantitative market data projects, or discussions on
          human-agent AI systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Direct Channels */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Verified Transmission Lines
          </h3>

          {/* Email */}
          <div className="cosmic-glass p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  Primary Email
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm font-mono text-slate-200 hover:text-cyan-300 hover:underline"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => handleCopy(personal.email, "email")}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              title="Copy Email"
            >
              {copiedField === "email" ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Phone */}
          <div className="cosmic-glass p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-300 border border-violet-500/20">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  Telephone / WhatsApp
                </span>
                <a
                  href={`tel:${personal.phone}`}
                  className="text-sm font-mono text-slate-200 hover:text-violet-300 hover:underline"
                >
                  {personal.phone}
                </a>
              </div>
            </div>

            <button
              onClick={() => handleCopy(personal.phone, "phone")}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              title="Copy Phone"
            >
              {copiedField === "phone" ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Location */}
          <div className="cosmic-glass p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  Current Coordinates
                </span>
                <span className="text-sm font-mono text-slate-200">
                  Pokhara (IOE WRC) / Mirchaiya, Siraha, Nepal
                </span>
              </div>
            </div>
          </div>

          {/* Official GitHub */}
          <div className="cosmic-glass p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  Main GitHub Citadel
                </span>
                <a
                  href={personal.githubMain}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-mono text-slate-200 hover:text-amber-300 hover:underline"
                >
                  github.com/jagdishsah126
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Transmission Composer Form */}
        <div className="cosmic-glass p-6 md:p-8 flex flex-col justify-between">
          <form onSubmit={handleSend} className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                Dispatch Transmission
              </h3>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                Your Identification (Name)
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Alex Mercer"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                Return Frequency (Your Email)
              </label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                Encrypted Payload (Message)
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your transmission or project inquiry here..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(56,189,248,0.35)] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Broadcast Transmission</span>
            </button>
          </form>

          <div className="pt-4 mt-4 border-t border-white/10 text-[10px] font-mono text-slate-500 text-center">
            Zero Telemetry • End-to-end direct client mail relay
          </div>
        </div>
      </div>
    </div>
  );
}
