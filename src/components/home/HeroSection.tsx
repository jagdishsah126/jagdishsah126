'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Link from 'next/link';

export default function HeroSection() {
  const [init, setInit] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = ['Full Stack Developer', 'NEPSE Analyst', 'AI Enthusiast', 'BCT Student'];

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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 -z-10"
        />
      )}

      <motion.div
        className="text-center px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo Placeholder */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 rounded-full border-4 border-blue-500 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)] animate-pulse-slow">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold">
              JS
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
            Jagdish Sah
          </span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-medium mb-8 h-10">
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

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4 justify-center mb-12">
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-blue-500/25"
          >
            View Portfolio
          </Link>
          <Link
            href="/cv"
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white font-medium rounded-lg transition-colors"
          >
            My CV
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="flex justify-center gap-8 md:gap-16">
          {[
            { value: '21+', label: 'Repositories' },
            { value: '4', label: 'GitHub Accounts' },
            { value: '10+', label: 'Projects' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
