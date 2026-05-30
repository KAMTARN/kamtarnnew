/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { COMPANY_NAME, COMPANY_SHORT, BRANCHES } from '../data';
import { Mail, Phone, MapPin, Copy, Check, FileText, Send, Calendar, ArrowRight } from 'lucide-react';
import { InquiryMessage, CartItem } from '../types';

interface ContactFormProps {
  cart: CartItem[];
  clearCart: () => void;
  prefilledMessage: string;
  setPrefilledMessage: (message: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  cart,
  clearCart,
  prefilledMessage,
  setPrefilledMessage
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number>(-1);
  const [copiedType, setCopiedType] = useState<'address' | 'phone' | 'email' | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('Laptops & Gaming Computers');
  const [message, setMessage] = useState('');
  
  const [inquiries, setInquiries] = useState<InquiryMessage[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastTicketId, setLastTicketId] = useState('');

  // Handle pre-filled message from shopping cart
  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
      setCategory('Bulk Office / Institution Orders');
    }
  }, [prefilledMessage]);

  // Load inquiries from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kiipl_inquiries');
      if (saved) {
        setInquiries(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Local storage access failed", e);
    }
  }, []);

  const handleCopy = (text: string, idx: number, type: 'address' | 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedIndex(-1);
      setCopiedType(null);
    }, 2000);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const ticketId = `KIIPL-RETAIL-${randomSuffix}`;

    const newInquiry: InquiryMessage = {
      id: ticketId,
      name,
      email,
      phone,
      company,
      serviceCategory: category,
      message,
      timestamp: new Date().toISOString(),
      status: 'Pending'
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    
    try {
      localStorage.setItem('kiipl_inquiries', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }

    setLastTicketId(ticketId);
    setIsSubmitted(true);
    clearCart();
    setPrefilledMessage('');

    // Reset fields except company name
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-red-600 font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
            CONNECT WITH US
          </span>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 leading-snug">
            Establish Contact with Our Showrooms
          </h2>
          <p className="text-slate-500 mt-4 text-xs sm:text-sm leading-relaxed">
            Reach out to our offices in Kolkata & Dhanbad to check physical store stock, demand customized student deals, or request active installation support.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Double-Grid layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Office Addresses list */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              Our Showroom Addresses
            </h3>

            {BRANCHES.map((branch, index) => {
              const isHead = branch.type === 'Corporate Head Office';
              return (
                <div
                  key={index}
                  id={`office-card-${index}`}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative group"
                >
                  {/* Type badge */}
                  <div className="flex justify-between items-center mb-6">
                    <span className={`font-mono text-[9px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md ${
                      isHead 
                        ? 'bg-red-500/10 text-red-650 border border-red-500/10' 
                        : 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/10'
                    }`}>
                      {branch.type}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold font-mono">AUTHORIZED DESTINATION</span>
                  </div>

                  <h4 id={`office-name-${index}`} className="text-sm sm:text-base font-extrabold text-slate-900 font-sans group-hover:text-red-650 transition-colors">
                    {branch.name}
                  </h4>

                  {/* Detail details */}
                  <div className="flex flex-col gap-4 mt-6 text-xs sm:text-sm text-slate-600 font-semibold">
                    {/* Address block */}
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-mono font-bold">ADDRESS</span>
                        <p id={`office-address-${index}`} className="mt-1 leading-relaxed text-slate-700 font-medium">
                          {branch.address}
                        </p>
                        <button
                          id={`copy-address-btn-${index}`}
                          onClick={() => handleCopy(branch.address, index, 'address')}
                          className="mt-2 text-[10px] text-red-600 hover:text-red-500 flex items-center gap-1 font-mono hover:underline cursor-pointer focus:outline-none"
                        >
                          {copiedIndex === index && copiedType === 'address' ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-500" />
                              <span className="text-emerald-600 font-bold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy Address</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Phone block */}
                    <div className="flex items-start gap-3.5">
                      <Phone className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-mono font-bold">PHONE</span>
                        <a
                          id={`office-phone-link-${index}`}
                          href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                          className="mt-1 block text-slate-700 hover:text-red-650 transition-colors font-mono font-medium"
                        >
                          {branch.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email block */}
                    <div className="flex items-start gap-3.5">
                      <Mail className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-mono font-bold">EMAIL</span>
                        <a
                          id={`office-email-link-${index}`}
                          href={`mailto:${branch.email}`}
                          className="mt-1 block text-slate-700 hover:text-red-650 transition-colors font-mono font-medium"
                        >
                          {branch.email}
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Inquiry Submission Portal */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2 mb-6">
                <FileText className="w-5 h-5 text-red-600 shrink-0" />
                Submit Showroom Quote Ticket
              </h3>

              {isSubmitted ? (
                <div id="contact-success-panel" className="bg-emerald-50/50 border border-emerald-500/20 text-slate-800 p-6 rounded-xl flex flex-col gap-4 text-left">
                  <div className="flex gap-3.5 items-start">
                    <Check className="w-6 h-6 text-emerald-600 shrink-0 bg-emerald-100 rounded-full p-1" />
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm sm:text-base">Quote Request Logged Successfully</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                        Your quotation ticket was registered in this browser's local sandbox storage under reference: <strong className="font-mono text-red-600 select-all">{lastTicketId}</strong>. Our custom IT consultants will respond with a corporate GST deal proposal shortly.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 bg-slate-950 text-white rounded-lg text-xs font-semibold cursor-pointer w-fit mt-2 hover:bg-slate-900 transition-all font-sans"
                  >
                    Send Another Ticket
                  </button>
                </div>
              ) : (
                <form id="inquiry-form" onSubmit={handleInquirySubmit} className="flex flex-col gap-4">
                  
                  {/* Two columns Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="inquiry-name" className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide text-left">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="inquiry-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="e.g. Subrata Sen"
                        className="mt-1.5 px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-800 placeholder-slate-400 rounded-xl font-medium"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="inquiry-email" className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide text-left">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="inquiry-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="e.g. subrata@domain.com"
                        className="mt-1.5 px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-800 placeholder-slate-400 rounded-xl font-medium"
                      />
                    </div>
                  </div>

                  {/* Two columns Phone & Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="inquiry-phone" className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide text-left">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="inquiry-phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 9431X XXXXX"
                        className="mt-1.5 px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-800 placeholder-slate-400 rounded-xl font-medium"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="inquiry-company" className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide text-left">
                        Institution / Office Name
                      </label>
                      <input
                        type="text"
                        id="inquiry-company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Individual / School Name"
                        className="mt-1.5 px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-800 placeholder-slate-400 rounded-xl font-medium"
                      />
                    </div>
                  </div>

                  {/* Service capabilities selector */}
                  <div className="flex flex-col">
                    <label htmlFor="inquiry-category" className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide text-left">
                      Select Hardware Category
                    </label>
                    <select
                      id="inquiry-category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="mt-1.5 px-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-800 rounded-xl font-medium"
                    >
                      <option>Laptops & Gaming Computers</option>
                      <option>IT Hardware & NVMe SSDs</option>
                      <option>Keyboard-Mouse & Gaming Combos</option>
                      <option>Smart 4K TVs & Audio</option>
                      <option>Home Wi-Fi & Smart Protection</option>
                      <option>Bulk Office / Institution Orders</option>
                      <option>General Inquiry / Dealer Support</option>
                      <option>Warranty Help & Diagnostics</option>
                    </select>
                  </div>

                  {/* Message input */}
                  <div className="flex flex-col">
                    <label htmlFor="inquiry-message" className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide text-left">
                      Quotation Request Message *
                    </label>
                    <textarea
                      id="inquiry-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      placeholder="Detail your component listings, student budget terms, or diagnostic device needs..."
                      className="mt-1.5 px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-800 placeholder-slate-400 rounded-xl font-medium leading-relaxed"
                    />
                  </div>

                  {/* Submit CTA button */}
                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    className="mt-2 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-red-500/15 flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform duration-150 cursor-pointer"
                  >
                    <Send className="w-4.5 h-4.5" />
                    Submit Quote Ticket
                  </button>

                </form>
              )}
            </div>

            {/* Offline persistent storage tracker for logged inquiries */}
            {inquiries.length > 0 && (
              <div id="logged-tickets-pannel" className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2 mb-4 text-left">
                  <Calendar className="w-4 h-4 text-red-500" />
                  Showroom Quotations Logged In Browser ({inquiries.length})
                </h4>
                <div className="flex flex-col gap-3.5 max-h-56 overflow-y-auto pr-1">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      id={`ticket-log-${inq.id}`}
                      className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between text-xs font-sans hover:bg-slate-100/50 transition-colors"
                    >
                      <div className="flex flex-col text-left gap-1">
                        <span className="font-mono font-bold text-red-600 uppercase">
                          {inq.id}
                        </span>
                        <span className="text-[11px] text-slate-700 font-bold">
                          {inq.serviceCategory}
                        </span>
                        <span className="text-[10px] text-slate-405 text-slate-400">
                          By {inq.name} ({inq.company || 'Individual'}) &bull; {new Date(inq.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-600 border border-amber-500/10 shrink-0">
                        PENDING ASSIGNMENT
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
