"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "../../data/portfolioData";
import { playClickSound } from "../../utils/audio";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Send,
  Copy,
  Check,
  Globe,
  Sparkles,
  ExternalLink,
  MessageSquare,
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
    const subject = encodeURIComponent(`Message from ${senderName || "Visitor"} via jagdishsah.com.np`);
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
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Contact Us</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
          Get in Touch & <span className="cosmic-gradient-text">Connect</span>
        </h2>
        <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Open for engineering opportunities, quantitative market data collaborations, or human-agent AI projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Direct Channels & Socials */}
        <div className="space-y-3.5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Direct Communication Channels
          </h3>

          {/* Email */}
          <div className="cosmic-glass p-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  Email Address
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-xs md:text-sm font-mono text-slate-200 hover:text-cyan-300 hover:underline"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <button
              onClick={() => handleCopy(personal.email, "email")}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              title="Copy Email"
            >
              {copiedField === "email" ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Phone & WhatsApp */}
          <div className="cosmic-glass p-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-violet-500/10 text-violet-300 border border-violet-500/20">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  Phone / WhatsApp
                </span>
                <a
                  href={`tel:${personal.phone}`}
                  className="text-xs md:text-sm font-mono text-slate-200 hover:text-violet-300 hover:underline"
                >
                  {personal.phone}
                </a>
              </div>
            </div>

            <button
              onClick={() => handleCopy(personal.phone, "phone")}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              title="Copy Phone"
            >
              {copiedField === "phone" ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Viber */}
          <div className="cosmic-glass p-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/20">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  Viber
                </span>
                <a
                  href="viber://chat?number=%2B9779702406668"
                  className="text-xs md:text-sm font-mono text-slate-200 hover:text-purple-300 hover:underline"
                >
                  +977 9702406668
                </a>
              </div>
            </div>

            <button
              onClick={() => handleCopy("+977 9702406668", "viber")}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              title="Copy Viber Number"
            >
              {copiedField === "viber" ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Current Coordinates */}
          <div className="cosmic-glass p-3.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  Current Coordinates
                </span>
                <span className="text-xs md:text-sm font-mono text-slate-200">
                  IOE WRC / Bishnupur, Siraha, Nepal
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 pt-2 mb-1">
            Social & Developer Networks
          </h3>

          <div className="grid grid-cols-3 gap-2">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/kingdaya.happy"
              target="_blank"
              rel="noreferrer"
              className="cosmic-glass p-3 text-center hover:border-blue-400/50 hover:bg-blue-500/10 transition-all group flex flex-col items-center justify-center gap-1"
            >
              <span className="text-sm font-bold text-blue-400">Facebook</span>
              <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-200 flex items-center gap-1">
                <span>@kingdaya</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/jagdish___sah/"
              target="_blank"
              rel="noreferrer"
              className="cosmic-glass p-3 text-center hover:border-pink-400/50 hover:bg-pink-500/10 transition-all group flex flex-col items-center justify-center gap-1"
            >
              <span className="text-sm font-bold text-pink-400">Instagram</span>
              <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-200 flex items-center gap-1">
                <span>@jagdish___sah</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/jagdishsah126"
              target="_blank"
              rel="noreferrer"
              className="cosmic-glass p-3 text-center hover:border-amber-400/50 hover:bg-amber-500/10 transition-all group flex flex-col items-center justify-center gap-1"
            >
              <span className="text-sm font-bold text-amber-300">GitHub</span>
              <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-200 flex items-center gap-1">
                <span>@jagdishsah126</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Message Composer Form */}
        <div className="cosmic-glass p-6 md:p-7 flex flex-col justify-between">
          <form onSubmit={handleSend} className="space-y-3.5">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                Send a Direct Message
              </h3>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Alex Mercer"
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                Your Email
              </label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                Message Content
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your project inquiry, trading question, or note here..."
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_4px_16px_rgba(56,189,248,0.35)] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </form>

          <div className="pt-3 mt-3 border-t border-white/10 text-[10px] font-mono text-slate-500 text-center">
            Zero Tracking • Direct Client Mail Relay
          </div>
        </div>
      </div>
    </div>
  );
}
