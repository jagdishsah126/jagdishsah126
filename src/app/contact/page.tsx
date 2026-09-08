'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/icons/BrandIcons';
import { useState } from 'react';
import { cvData } from '@/data/cv-data';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${cvData.personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoUrl, '_blank');
    alert('Thank you, ' + formData.name + '! Your message draft has been prepared.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have an idea, project, or want to discuss NEPSE data and web engineering? Let&apos;s connect!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1 space-y-8"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Email</h4>
                  <a href={`mailto:${cvData.personalInfo.email}`} className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all">
                    {cvData.personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Phone</h4>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {cvData.personalInfo.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Location</h4>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {cvData.personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Website</h4>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {cvData.personalInfo.website}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
              <h4 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">Connect on Socials</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/jagdish.sah.king"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/jagdish.sah.daya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-50 dark:bg-pink-900/20 text-pink-600 hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-pink-600 hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jagdish-sah6347482ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 text-blue-700 hover:bg-blue-700 hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/9779702406668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-50 dark:bg-green-900/20 text-green-600 hover:bg-green-600 hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/jagdishsah126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 h-full">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Direct Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
                  placeholder="Project Collaboration / NEPSE Inquiry / General"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none dark:text-white"
                  placeholder="Tell me about your project or message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
