/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Award, CheckCircle2, ShoppingCart } from 'lucide-react';
import { COMPANY_SHORT } from '../data';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection, cartCount, onOpenCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'overview', label: 'Company Profile' },
    { id: 'capabilities', label: 'Showroom Catalog' },
    { id: 'verticals', label: 'Who We Serve' },
    { id: 'alliances', label: 'Genuine Brands' },
    { id: 'clientele', label: 'Bulk Clients' },
    { id: 'support', label: 'Warranty & Support' },
    { id: 'contact', label: 'Request Quote' }
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Upper Info Strip */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 hidden md:block border-b border-slate-900/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
              <Award className="w-3.5 h-3.5 text-red-500" />
              ISO 9001:2015 Quality Certified Retailer
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
              Authorized OEM Dealer & GeM Registered
            </span>
          </div>
          <div className="flex items-center gap-6 text-[11px] text-slate-400">
            <a href="tel:+917061991192" className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
              <Phone className="w-3.5 h-3.5 text-red-500" />
              +91 70619 91192
            </a>
            <span className="text-slate-600">|</span>
            <a href="mailto:info@kamtarn.com" className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
              <Mail className="w-3.5 h-3.5 text-red-500" />
              info@kamtarn.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Glassmorphism Layout */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-lg border-b border-slate-800' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Brand */}
          <div className="flex items-center" id="nav-brand-logo">
            <button 
              onClick={() => handleItemClick('hero')} 
              className="text-left font-sans flex flex-col focus:outline-none cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-4 bg-gradient-to-v from-rose-500 to-red-600 rounded-sm inline-block group-hover:scale-y-125 transition-transform duration-300" />
                <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-red-400 transition-colors duration-300">
                  {COMPANY_SHORT}
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                IT Products & Accessories Showrooms
              </span>
            </button>
          </div>

          {/* Desktop Navigation Link Cluster */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'text-white bg-slate-800' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span 
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-red-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Cart Icon & Checkout Button Call-To-Action */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Shopping Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all cursor-pointer group active:scale-95"
              title="Open Showroom Basket"
            >
              <ShoppingCart className="w-4.5 h-4.5 group-hover:text-red-400 transition-colors" />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-600 text-white font-mono text-[10px] font-bold flex items-center justify-center rounded-full shadow-md shadow-red-500/20"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            <button
              id="nav-consult-cta"
              onClick={() => handleItemClick('contact')}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white rounded-md text-xs font-semibold shadow-md shadow-red-500/15 hover:shadow-red-500/25 hover:scale-[1.02] transform transition-all duration-200 cursor-pointer"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Actions Container */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Showroom Cart Bubble for Mobile */}
            <button
              onClick={onOpenCart}
              className="relative p-2 bg-slate-800 text-white rounded-lg transition-all cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 bg-red-600 text-white font-mono text-[9px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Slide-in */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-2xl px-4 pt-3 pb-6 flex flex-col gap-2.5 max-h-[85vh] overflow-y-auto"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                    isActive 
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/10' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="border-t border-slate-800/80 pt-4 mt-2 flex flex-col gap-4">
              <div className="px-4 text-xs text-slate-400 flex flex-col gap-2">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-100" />
                  +91 70619 91192
                </span>
                <span className="flex items-center gap-2 mt-1">
                  <Mail className="w-4 h-4 text-red-100 font-mono" />
                  info@kamtarn.com
                </span>
              </div>
              <button
                id="mobile-nav-consult-cta"
                onClick={() => handleItemClick('contact')}
                className="w-full text-center py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg text-sm font-bold shadow-md shadow-red-600/15"
              >
                Request Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
