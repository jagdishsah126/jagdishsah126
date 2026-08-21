'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, FileText } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';

export default function HeroSection() {
  const [init, setInit] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    'Full Stack Developer',
    'NEPSE & Data Analyst',
    'BCT Student @ TU WRC',
    'Cosmic Explorer',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    let isMounted = true;
    import('@tsparticles/engine').then(async ({ tsParticles }) => {
      await loadSlim(tsParticles);
      if (isMounted) {
        setInit(true);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const particlesOptions = useMemo(() => ({
    background: {
      color: { value: 'transparent' },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' as const },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.8 } },
      },
    },
    particles: {
      color: { value: ['#3b82f6', '#818cf8', '#c084fc'] },
      links: {
        color: '#6366f1',
        distance: 150,
        enable: true,
        opacity: 0.35,
        width: 1,
      },
      move: {
        direction: 'none' as const,
        enable: true,
        outModes: { default: 'bounce' as const },
        random: false,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: { enable: true },
        value: 65,
      },
      opacity: { value: 0.6 },
      shape: { type: 'circle' },
      size: { value: { min: 1.5, max: 4 } },
    },
    detectRetina: true,
  }), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-[90vh] py-16 flex items-center justify-center overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 -z-10"
        />
      )}

      <motion.div
        className="text-center px-4 z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo with Glass Halo */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative p-2 rounded-full glass-panel border border-white/60 dark:border-white/20 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-2 ring-blue-500/50">
              <Image
                src="/images/profile.jpg"
                alt="Jagdish Sah"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
            Jagdish Sah
          </span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 h-10">
          <span className="text-gray-700 dark:text-gray-300">I am a </span>
          <motion.span
            key={textIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 dark:text-blue-400 font-semibold inline-block"
          >
            {texts[textIndex]}
          </motion.span>
        </motion.div>

        {/* Cosmic Philosophy Quote Badge */}
        <motion.div variants={itemVariants} className="inline-block mb-8">
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 italic px-5 py-2 rounded-full glass-panel border border-white/40 dark:border-white/10 shadow-sm max-w-2xl mx-auto">
            ✨ &ldquo;I am a traveller in this vast cosmos, travelling and exploring everything this universe can provide.&rdquo;
          </p>
        </motion.div>

        {/* Glass CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-12">
          <Link
            href="/portfolio"
            className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl transition-all shadow-lg shadow-blue-500/25 active:scale-95 flex items-center gap-2"
          >
            Explore Portfolio
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/cv"
            className="px-7 py-3.5 glass-card text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-2xl transition-all active:scale-95 flex items-center gap-2"
          >
            <FileText size={18} />
            View Interactive CV
          </Link>
          <Link
            href="/github"
            className="px-7 py-3.5 glass-panel text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold rounded-2xl transition-all active:scale-95 flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub Hub (4)
          </Link>
        </motion.div>

        {/* Glass Stats Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto p-4 sm:p-6 rounded-3xl glass-panel shadow-lg border border-white/60 dark:border-white/10">
          {[
            { value: '21+', label: 'Repositories' },
            { value: '4', label: 'GitHub Accounts' },
            { value: '12+', label: 'Featured Apps' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-2 rounded-2xl hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
