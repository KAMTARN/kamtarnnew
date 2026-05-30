/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_NAME, OVERVIEW_TEXT, MISC_ABOUT, VISION_TEXT, MISSION_POINTS, CORE_VALUES, CORPORATE_OVERVIEW_DETAILS } from '../data';
import { IconMapper } from './IconMapper';
import { Target, Compass, Award, ShieldAlert, CheckCircle, TableProperties } from 'lucide-react';

export const CompanyOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'vision' | 'values' | 'metrics'>('profile');

  const tabs = [
    { id: 'profile', label: 'Company Overview', icon: Compass },
    { id: 'vision', label: 'Vision & Mission', icon: Target },
    { id: 'values', label: 'Core Values', icon: Award },
    { id: 'metrics', label: 'Registration & Stats', icon: TableProperties }
  ] as const;

  return (
    <section id="overview" className="section-padding bg-slate-50 py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-red-600 font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
            WHO WE ARE
          </span>
          <h2 id="overview-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 font-sans">
            Premier IT Retailers & Authorized Device Showrooms
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Modular Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`overview-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-red-500' : 'text-slate-500'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Contents Frame */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-100/40 p-6 sm:p-10 min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div
                key="profile-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid lg:grid-cols-12 gap-10 items-center text-left"
              >
                <div className="lg:col-span-7 flex flex-col gap-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    About {COMPANY_NAME}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {OVERVIEW_TEXT}
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed border-l-2 border-red-500 pl-4 bg-slate-50/50 py-2 rounded-r-lg">
                    {MISC_ABOUT}
                  </p>
                </div>
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
                  {/* Absolute visual noise background */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                  <div className="relative z-10 flex flex-col justify-between h-full gap-8">
                    <div>
                      <span className="font-mono text-[10px] text-red-500 uppercase tracking-widest font-bold">
                        CORPORATE SNAPSHOT
                      </span>
                      <h4 className="text-lg font-bold text-white mt-1 leading-tight">
                        Proven execution model backing critical enterprise workflows.
                      </h4>
                    </div>
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="flex justify-between border-b border-slate-800 pb-3 text-xs">
                        <span className="text-slate-400">Industry</span>
                        <span className="font-mono font-semibold text-slate-200">System Integration</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-3 text-xs">
                        <span className="text-slate-400">Headquarters</span>
                        <span className="font-mono font-semibold text-slate-200">Kolkata, WB</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-3 text-xs">
                        <span className="text-slate-400">Branches</span>
                        <span className="font-mono font-semibold text-slate-200">Dhanbad, JH</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Presence</span>
                        <span className="font-mono font-semibold text-red-400 uppercase tracking-wide">PAN India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'vision' && (
              <motion.div
                key="vision-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid md:grid-cols-12 gap-8 text-left"
              >
                {/* Vision Box */}
                <div className="md:col-span-5 bg-slate-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="p-3 bg-red-600 text-white rounded-xl w-fit mb-6">
                      <Compass className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-red-400 uppercase tracking-widest font-bold">
                      OUR VISION STATEMENT
                    </span>
                    <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed mt-4">
                      "{VISION_TEXT}"
                    </p>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-8 border-t border-slate-900 pt-4 font-mono uppercase tracking-wider">
                    Kamtarn Infocom Strategic Horizon
                  </div>
                </div>

                {/* Mission Points Box */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5 mb-6">
                    <Target className="w-5 h-5 text-red-600" />
                    Our Strategic Mission
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {MISSION_POINTS.map((pt, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-slate-50 border border-slate-100 hover:border-red-200 hover:bg-red-50/10 rounded-xl transition-all duration-200 group text-left"
                      >
                        <div className="flex gap-3 items-start">
                          <CheckCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-xs sm:text-sm font-medium text-slate-700 leading-normal">
                            {pt}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'values' && (
              <motion.div
                key="values-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-left"
              >
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <span className="font-mono text-[10px] text-red-600 uppercase tracking-widest font-bold">
                    CORE STRATEGIC VALUES
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    The Pillars of Every Engagement
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {CORE_VALUES.map((val, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:border-red-500/20 hover:shadow-lg transition-all duration-300 flex flex-col text-left group"
                    >
                      <div className="p-2.5 bg-red-50 text-red-600 rounded-lg w-fit group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                        <IconMapper name={val.icon} className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-4 tracking-tight">
                        {val.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'metrics' && (
              <motion.div
                key="metrics-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-left relative"
              >
                <div className="mb-6">
                  <span className="font-mono text-[10px] text-red-600 uppercase tracking-widest font-bold">
                    CORPORATE SPECS & DETAILS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    Registrations & Overview Parameters
                  </h3>
                </div>
                <div className="border border-slate-200/60 rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200 text-xs sm:text-sm">
                        <th className="px-6 py-4 font-bold tracking-wide">Particulars</th>
                        <th className="px-6 py-4 font-bold tracking-wide">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CORPORATE_OVERVIEW_DETAILS.map((det, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-slate-200/80 hover:bg-red-50/20 transition-colors last:border-b-0 text-xs sm:text-sm"
                        >
                          <td className="px-6 py-3.5 font-semibold text-slate-800">{det.label}</td>
                          <td className="px-6 py-3.5 text-slate-600 font-sans font-medium">{det.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
