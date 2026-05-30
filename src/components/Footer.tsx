/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COMPANY_NAME, COMPANY_SHORT, COMPANY_INITIALS, BRANCHES } from '../data';
import { ShieldCheck, Mail, Phone, ExternalLink, Award, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = 2026;

  const quickLinks = [
    { id: 'overview', label: 'Company Profile' },
    { id: 'capabilities', label: 'Showroom Catalog' },
    { id: 'verticals', label: 'Who We Serve' },
    { id: 'alliances', label: 'Genuine Brands' },
    { id: 'clientele', label: 'Bulk Clients' },
    { id: 'support', label: 'Warranty & Support' },
    { id: 'contact', label: 'Request Quote' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm py-16 px-4 md:px-8 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        {/* Brand Block */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-4 bg-gradient-to-v from-rose-500 to-red-600 rounded-sm inline-block" />
            <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
              {COMPANY_NAME}
            </h3>
          </div>
          
          <p className="text-xs text-slate-400 leading-relaxed font-medium mt-1">
            {COMPANY_SHORT} is an ISO 9001:2015 accredited registered retailer stocking student & gaming laptops, high-performance NVMe storage, custom-built rigs, and essential computing accessories. Sourced directly from premier global brands with full-service warranty centers.
          </p>

          <div className="flex flex-col gap-2 mt-2 font-semibold text-slate-300">
            <a href="tel:+917061991192" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-red-500 shrink-0" />
              <span>+91 70619 91192</span>
            </a>
            <a href="mailto:info@kamtarn.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-red-500 shrink-0 font-mono" />
              <span>info@kamtarn.com</span>
            </a>
            <a href="mailto:kamtarninfocom@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-red-500 shrink-0 font-mono" />
              <span>kamtarninfocom@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Quick links block */}
        <div className="md:col-span-2.5 flex flex-col gap-4 md:pl-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
            Showroom Navigation
          </h4>
          <ul className="flex flex-col gap-2.5 font-semibold">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onNavigate(link.id)}
                  className="hover:text-white hover:translate-x-1 duration-200 transition-all text-slate-400 hover:underline text-xs text-left cursor-pointer focus:outline-none"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications & registrations showcase */}
        <div className="md:col-span-2.5 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
            Registrations
          </h4>
          <div className="flex flex-col gap-3 font-semibold text-slate-300">
            <div className="flex gap-2 items-start text-xs">
              <Award className="w-4.5 h-4.5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white">ISO 9001:2015 Certified</span>
                <span className="block text-[10px] text-slate-500 font-medium">Quality Management System</span>
              </div>
            </div>
            <div className="flex gap-2 items-start text-xs">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white">MSME Registered</span>
                <span className="block text-[10px] text-slate-500 font-medium">Ministry of MSME, Govt of India</span>
              </div>
            </div>
            <div className="flex gap-2 items-start text-xs">
              <ShieldCheck className="w-4.5 h-4.5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white">National GeM Partner</span>
                <span className="block text-[10px] text-slate-500 font-medium">Government e-Marketplace vendor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Operations coverage summary */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
            Showroom Desks
          </h4>
          <div className="flex flex-col gap-3.5 text-slate-400 text-xs font-semibold">
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block font-mono">Kolkata Showroom Desk</span>
              <p className="mt-1 text-[11px] text-slate-300 leading-relaxed font-sans font-medium">
                2nd floor, Room No B7, Central Plaza, 41 B B Ganguly Street, Kolkata, WB, 700012
              </p>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block font-mono">Dhanbad Branch Desk</span>
              <p className="mt-1 text-[11px] text-slate-300 leading-relaxed font-sans font-medium">
                Shop No 8 Textile Market, Bank More, Dhanbad, JH, 826001
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Sub Footer copyright bottom bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-semibold font-mono uppercase tracking-wider">
        <span>
          &copy; {currentYear} {COMPANY_NAME}. All rights reserved.
        </span>
        <div className="flex items-center gap-4 text-slate-500">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            100% Sourcing Authenticity Assurance
          </span>
          <span>&bull;</span>
          <span>Registered IT & Electronics Sourcing</span>
        </div>
      </div>
    </footer>
  );
};
