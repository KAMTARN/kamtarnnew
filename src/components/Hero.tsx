/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_NAME, COMPANY_SHORT, CHOOSE_US_METRICS } from '../data';
import { ArrowRight, Laptop, Keyboard, Tv, ShieldCheck, Gamepad2, ShoppingCart } from 'lucide-react';

interface HeroProps {
  onExploreSolutions: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSolutions, onRequestQuote }) => {
  const retailCategories = [
    { 
      title: "Laptops & Desktops", 
      desc: "Student notebooks, gaming rigs, custom business PCs", 
      color: "from-red-600 to-rose-600",
      icon: Laptop 
    },
    { 
      title: "IT Accessories", 
      desc: "SSDs, keyboard sets, gamers' mice, Type-C multi-hubs", 
      color: "from-rose-500 to-orange-500",
      icon: Keyboard 
    },
    { 
      title: "Retail Electronics", 
      desc: "4K UHD Smart TVs, Dolby audio, hybrid headphones", 
      color: "from-orange-500 to-red-500",
      icon: Tv 
    },
    { 
      title: "Smart Security & Nets", 
      desc: "Mesh Wi-Fi systems, dome PTZ cameras, biometric logs", 
      color: "from-red-600 to-orange-600",
      icon: ShieldCheck 
    }
  ];

  return (
    <section id="hero" className="relative min-h-[95vh] bg-slate-950 text-white flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Grid and Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-red-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[5%] w-96 h-96 rounded-full bg-rose-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:items-center">
        {/* Left Column Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-red-950/40 to-slate-900/60 border border-red-500/20 text-red-500 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 w-fit"
          >
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            100% Genuine Retail Showrooms
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.1]"
          >
            Your Ultimate IT Products & <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-orange-400">
              Electronics Hub
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base text-slate-300 max-w-2xl font-sans leading-relaxed"
          >
            {COMPANY_NAME} brings you the largest retail selection of premium laptops, custom PC builds, high-speed storage, smart home screens, and networking accessories in Eastern India. Stocked at our showrooms in Kolkata and Dhanbad with official country warranties.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 text-xs font-semibold"
          >
            <button
              id="hero-explore"
              onClick={onExploreSolutions}
              className="px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-lg shadow-red-600/15"
            >
              Shop Showroom Catalog
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="hero-quote"
              onClick={onRequestQuote}
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
            >
              Get Custom Bulk Quote
            </button>
          </motion.div>

          {/* Core Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-900 pt-8"
          >
            {CHOOSE_US_METRICS.map((met, index) => (
              <div key={index} className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-300">
                  {met.value}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1.5 leading-snug">
                  {met.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column Interactive Categories Presentation */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl"
          >
            {/* Visual Header of the Interactive Grid */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-[10px] text-red-400 uppercase tracking-widest font-bold">
                DEPARTMENT DIRECTORY
              </span>
              <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                SHOWROOM LIVE
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {retailCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={idx}
                    className="group relative p-4 bg-slate-1000 border border-slate-800/60 hover:border-red-500/30 rounded-xl transition-all duration-300 bg-slate-950/70"
                  >
                    <div className="flex gap-4 items-start">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${cat.color} text-white shrink-0 shadow-sm`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400 transition-colors duration-200">
                          {cat.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                          {cat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Accent Footer Note of the Card */}
            <div className="mt-6 pt-4 border-t border-slate-800/50 flex justify-between items-center text-[10px] text-slate-400 font-mono font-bold">
              <span>AUTHORIZED DISPATCH</span>
              <span className="font-semibold text-slate-300 uppercase">KOLKATA • DHANBAD</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
