/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { RETAIL_SEGMENTS } from '../data';
import { Landmark, GraduationCap, Gamepad2, Laptop, Monitor, Zap, Building2, HardHat, ShieldCheck, Cpu } from 'lucide-react';

export const IndustryVerticals: React.FC = () => {
  // Mapping retail segment titles to specific rich icons
  const getSegmentIcon = (title: string) => {
    const term = title.toLowerCase();
    if (term.includes("student") || term.includes("gamer")) return <Gamepad2 className="w-5 h-5 text-red-500" />;
    if (term.includes("professional") || term.includes("developer")) return <Laptop className="w-5 h-5 text-rose-500" />;
    if (term.includes("home office") || term.includes("smb")) return <Monitor className="w-5 h-5 text-amber-500" />;
    if (term.includes("smart home") || term.includes("security")) return <Zap className="w-5 h-5 text-emerald-500" />;
    if (term.includes("institution") || term.includes("bulk")) return <Building2 className="w-5 h-5 text-orange-500" />;
    return <Cpu className="w-5 h-5 text-red-400" />;
  };

  return (
    <section id="verticals" className="py-24 bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
      {/* Decorative Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15" />
      <div className="absolute top-[30%] left-[-10%] w-96 h-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-96 h-96 rounded-full bg-rose-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-widest bg-red-900/30 border border-red-500/20 px-3 py-1 rounded-full">
            CUSTOMIZED SOLUTIONS
          </span>
          <h2 id="verticals-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4 leading-tight">
            Tailored Electronic Gear For Every User
          </h2>
          <p className="text-slate-400 mt-4 text-xs sm:text-sm leading-relaxed">
            Whether you are on a tight study budget, setting up a dual-display software development rig, deploying wireless security at a home, or purchasing fleet hardware for an office corridor.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Verticals Cards Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RETAIL_SEGMENTS.map((vert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              id={`vertical-card-${index}`}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:bg-slate-900/95 hover:border-red-500/30 transition-all duration-300 text-left flex flex-col justify-between group"
            >
              <div>
                {/* Icon box */}
                <div className="p-3 bg-slate-1500 border border-slate-850 w-fit rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-slate-950">
                  {getSegmentIcon(vert.title)}
                </div>

                <h3 id={`vertical-title-${index}`} className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-red-400 transition-colors duration-200">
                  {vert.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed font-sans font-medium">
                  {vert.description}
                </p>
              </div>

              {/* Accent micro tagging */}
              <div className="mt-8 pt-4 border-t border-slate-800/50 flex justify-between items-center text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">
                <span>STOCK ASSURED</span>
                <span className="text-red-400 group-hover:translate-x-1 duration-200 transition-transform font-bold">
                  GENUINE &bull; OFFICIAL
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
