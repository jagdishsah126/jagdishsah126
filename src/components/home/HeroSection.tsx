'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Link from 'next/link';
import Image from 'next/image';

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
        grab: { distance: 140, links: { opacity: 1 } },
      },
    },
    particles: {
      color: { value: '#3b82f6' },
      links: {
        color: '#6366f1',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: 'none' as const,
        enable: true,
        outModes: { default: 'bounce' as const },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true },
        value: 70,
      },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  }), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 border-blue-500 overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.6)] ring-4 ring-blue-500/30">
            <Image
              src="/images/profile.jpg"
              alt="Jagdish Sah"
              fill
              className="object-cover"
              priority
              unoptimized
            />
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

        {/* Cosmic Philosophy Quote */}
        <motion.p variants={itemVariants} className="text-sm sm:text-base text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto mb-8">
          &ldquo;I am a traveller in this vast cosmos, travelling and exploring everything this universe can provide.&rdquo;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-12">
          <Link
            href="/portfolio"
            className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 active:scale-95"
          >
            Explore Portfolio
          </Link>
          <Link
            href="/cv"
            className="px-7 py-3.5 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white font-semibold rounded-xl transition-all active:scale-95"
          >
            View My CV
          </Link>
          <Link
            href="/github"
            className="px-7 py-3.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-xl transition-all active:scale-95"
          >
            GitHub Profiles (4)
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm">
          {[
            { value: '21+', label: 'Repositories' },
            { value: '4', label: 'GitHub Accounts' },
            { value: '12+', label: 'Featured Apps' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-0.5">
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
