/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICE_COMMITMENTS, FUTURE_READY_ITEMS } from '../data';
import { ClipboardCheck, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';

export const SupportSection: React.FC = () => {
  const [openCommitmentIndex, setOpenCommitmentIndex] = useState<number>(0);

  return (
    <section id="support" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-red-600 font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
            SERVICE & SHOWROOM BENCHMARK
          </span>
          <h2 id="support-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 leading-snug">
            Over-the-Counter Diagnostic Labs & Authorized Warranties
          </h2>
          <p className="text-slate-500 mt-4 text-xs sm:text-sm leading-relaxed">
            We understand technology represents key utility in your daily workflows and personal lives. Our services are backed by direct OEM warranties, active tech support desks, and premium hardware calibration benchmarks.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Double-Grid Layout: Left: Support Commitments, Right: Future-Ready Approach */}
        <div className="grid lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left: Interactive Accordion of Core Commitments */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5 mb-6">
              <ClipboardCheck className="w-5 h-5 text-red-600 shrink-0" />
              Our Core Support Commitments
            </h3>

            <div className="flex flex-col gap-3.5">
              {SERVICE_COMMITMENTS.map((com, index) => {
                const isOpen = openCommitmentIndex === index;
                return (
                  <div
                    key={index}
                    id={`support-commitment-${index}`}
                    className={`border rounded-xl transition-all duration-300 ${
                      isOpen 
                        ? 'border-red-500/20 bg-red-50/10 shadow-lg' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <button
                      id={`support-commitment-btn-${index}`}
                      onClick={() => setOpenCommitmentIndex(isOpen ? -1 : index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-extrabold text-slate-800 flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-500 font-mono font-bold shrink-0">
                          0{index + 1}
                        </span>
                        {com.title}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-red-600' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`support-commitment-desc-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-medium bg-slate-50/40 rounded-b-xl border-t border-slate-100">
                            {com.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Future Ready Strategy Cards List */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5 mb-6">
              <Sparkles className="w-5 h-5 text-red-600 shrink-0" />
              Future-Ready Investment
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {FUTURE_READY_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  id={`future-ready-card-${idx}`}
                  className="p-5 bg-slate-50 border border-slate-200/60 rounded-xl hover:bg-white hover:border-red-500/10 hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-2 items-center mb-4">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight font-sans">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-normal font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <span className="text-[9px] font-mono tracking-widest text-slate-400 font-bold uppercase mt-6 block">
                    CAPABILITY FOCUS
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
