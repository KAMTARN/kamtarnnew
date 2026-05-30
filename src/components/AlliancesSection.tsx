/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_ALLIANCES } from '../data';
import { Search, ShieldAlert, Award } from 'lucide-react';

export const AlliancesSection: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const groups = [
    { label: 'All Alliances', value: 'All' },
    { label: 'Computing & Mobility', value: 'Computing & Mobility' },
    { label: 'Enterprise Infrastructure & Power', value: 'Enterprise Infrastructure & Power' },
    { label: 'Networking & Security', value: 'Networking & Security' },
    { label: 'Surveillance & Imaging', value: 'Surveillance & Imaging' },
    { label: 'Software & Security Platforms', value: 'Software & Security' }
  ];

  const filteredPartners = useMemo(() => {
    return BRAND_ALLIANCES.filter((partner) => {
      const matchGroup = selectedGroup === 'All' || partner.category === selectedGroup;
      const matchSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchGroup && matchSearch;
    });
  }, [selectedGroup, searchTerm]);

  return (
    <section id="alliances" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-red-600 font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
            STRATEGIC ALLIANCES
          </span>
          <h2 id="alliances-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 leading-snug">
            Collaborating With Leading Technology Brands
          </h2>
          <p className="text-slate-500 mt-4 text-xs sm:text-sm leading-relaxed">
            We partner with premier global OEMs and software vendors to engineer secure, authentic, high-performance, and officially warranted solutions for our enterprises.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Filter controls sub-bar */}
        <div className="mb-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-100">
          
          {/* Horizontal slider list for groups */}
          <div className="flex flex-wrap gap-2 overflow-x-auto py-1">
            {groups.map((grp) => {
              const itemID = `alliance-group-${grp.value.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
              return (
                <button
                  key={grp.value}
                  id={itemID}
                  onClick={() => setSelectedGroup(grp.value)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-semibold shrink-0 transition-all duration-200 cursor-pointer ${
                    selectedGroup === grp.value
                      ? 'bg-slate-950 text-white shadow-md'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                  }`}
                >
                  {grp.label}
                </button>
              );
            })}
          </div>

          {/* Search Box right side */}
          <div className="relative w-full xl:w-72 shrink-0">
            <input
              type="text"
              id="alliances-search-input"
              placeholder="Search OEM brand (e.g., Cisco, Dell)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-700 placeholder-slate-400 font-semibold"
            />
            <Search className="absolute right-3.5 top-2.5 w-4 h-4 text-slate-400" />
          </div>

        </div>

        {/* Grid of Partner Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 min-h-[120px]">
          <AnimatePresence mode="popLayout">
            {filteredPartners.map((partner, idx) => (
              <motion.div
                layout
                id={`partner-badge-${partner.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                key={partner.name}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="p-5 bg-slate-50 border border-slate-200/60 rounded-xl hover:bg-white hover:border-red-500/20 hover:shadow-lg transition-all duration-300 text-center flex flex-col justify-between h-32 group cursor-default"
              >
                {/* Brand Name Label mimicking professional tech plaques */}
                <div className="text-sm font-extrabold text-slate-900 group-hover:text-red-600 transition-colors duration-200 tracking-wide font-sans mt-2">
                  {partner.name}
                </div>

                {/* Subtitle Category tag */}
                <div className="text-[9px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                  {partner.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Fallback empty list */}
          {filteredPartners.length === 0 && (
            <div className="col-span-full py-16 text-center bg-slate-50 border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center">
              <ShieldAlert className="w-8 h-8 text-slate-300 mb-2" />
              <p className="text-xs font-bold text-slate-600">No partner match found</p>
              <p className="text-[11px] text-slate-400 mt-1">Try resetting the group filtering tags.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedGroup('All'); }}
                className="mt-3 px-3 py-1.5 bg-red-600 text-white rounded-lg text-[10px] font-bold cursor-pointer"
              >
                Reset Searches
              </button>
            </div>
          )}
        </div>

        {/* Accompanying compliance disclaimer note */}
        <div className="mt-12 p-4 bg-slate-50 border border-slate-200/60 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-left max-w-4xl mx-auto">
          <div className="p-2.5 bg-red-50 text-red-600 rounded-xl shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
              Genuine OEM Sourcing & Warranties Guaranteed
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
              Kamtarn Infocom collaborates directly with registered distribution channels to deploy genuine hardware and authorized software platforms. Every installation leverages native developer certifications and official SLA terms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
