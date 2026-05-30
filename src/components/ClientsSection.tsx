/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLIENTLIST } from '../data';
import { Search, Building, Landmark, GraduationCap } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Government & PSU' | 'Educational & Research'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = useMemo(() => {
    return CLIENTLIST.filter((client) => {
      const matchCat = selectedCategory === 'All' || client.category === selectedCategory;
      const matchSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id="clientele" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-red-600 font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
            OUR PRESTIGIOUS CLIENTELE
          </span>
          <h2 id="clientele-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 leading-snug">
            Trusted by Reputed Institutions Nationwide
          </h2>
          <p className="text-slate-500 mt-4 text-xs sm:text-sm leading-relaxed">
            We deliver bulletproof IT system integration, structured network matrices, and centralized surveillance platforms protecting critical governmental vaults and scientific hubs.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Dynamic Client search panel */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm">
          
          {/* Slider category filter buttons */}
          <div className="flex gap-2.5 overflow-x-auto py-1">
            {(['All', 'Government & PSU', 'Educational & Research'] as const).map((cat) => (
              <button
                key={cat}
                id={`client-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 text-xs font-semibold rounded-lg shrink-0 transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-md shadow-red-500/10'
                    : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-100'
                }`}
              >
                {cat === 'All' ? 'All Clients' : cat}
              </button>
            ))}
          </div>

          {/* Quick search input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              id="clientele-search"
              placeholder="Search clients (e.g. Coal, IIT)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-700 placeholder-slate-400 font-semibold"
            />
            <Search className="absolute right-3.5 top-2.5 w-4 h-4 text-slate-400" />
          </div>

        </div>

        {/* Client Entity Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 min-h-[140px]">
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client, idx) => {
              const isGov = client.category === 'Government & PSU';
              return (
                <motion.div
                  layout
                  id={`client-card-${idx}`}
                  key={client.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.22, delay: Math.min(idx * 0.02, 0.2) }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="bg-white border border-slate-200/60 hover:border-red-500/20 p-5 rounded-xl hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between h-36 group font-sans"
                >
                  <div className="flex gap-3.5 items-start">
                    <div className={`p-2 rounded-lg shrink-0 ${
                      isGov ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {isGov ? <Landmark className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 id={`client-name-${idx}`} className="text-xs sm:text-sm font-extrabold text-slate-800 tracking-tight group-hover:text-red-600 transition-colors duration-200 font-sans leading-tight">
                        {client.name}
                      </h4>
                    </div>
                  </div>

                  {/* bottom metadata stamp */}
                  <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono font-bold text-slate-400 tracking-wider">
                    <span>{client.category}</span>
                    <span className="text-slate-300 group-hover:text-red-500 transition-colors">ACTIVE</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty search results */}
          {filteredClients.length === 0 && (
            <div className="col-span-full py-16 text-center bg-white border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center">
              <Building className="w-8 h-8 text-slate-300 mb-2 animate-pulse" />
              <p className="text-xs font-semibold text-slate-600">No client listings match your query</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-3 px-3.5 py-1.5 bg-red-600 text-white rounded-lg text-xs font-bold cursor-pointer hover:bg-red-500"
              >
                Clear Client Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom credibility showcase quote strip */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-xl text-left">
          {/* Aesthetic grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
          <div className="relative z-10 lg:w-2/3">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
              Over a Decade of Public and Scientific Sector Audits Passed
            </h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Serving government giants like Coal India and elite educational channels requires absolute procedural compliance, structural data security, and long-term service delivery models. We maintain robust site support networks for these high-grade installations nationwide.
            </p>
          </div>
          <div className="relative z-10 bg-slate-800/80 border border-slate-700/60 p-4 rounded-xl shrink-0 text-center font-sans">
            <span className="text-2xl font-extrabold text-red-400">100%</span>
            <span className="block text-[9px] font-mono tracking-widest text-slate-400 mt-1 uppercase font-semibold">
              Procurement Warranty PASS
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
