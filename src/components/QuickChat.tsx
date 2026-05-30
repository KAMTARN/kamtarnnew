/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Mail, MessageCircle, Send, ArrowRight, Sparkles } from 'lucide-react';

export const QuickChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');

  // Sourcing info
  const phoneNumber = '917061991192'; // Country code +91
  const emailAddress = 'kamtarninfocomindia@gmail.com';

  const templates = [
    { label: "Check Stock", text: "Hello Kamtarn Infocom, I am interested in checking the stock availability of certain laptops and storage accessories. Please guide me." },
    { label: "Student Discount", text: "Hello, I am a student and want to inquire about custom laptop deal bundles and student discounts available at your showroom." },
    { label: "Bulk Office Quote", text: "Hi, we are looking to procure computing hardware and networking supplies for our office campus. Please provide a quotation." },
    { label: "Diagnostic Service", text: "Hello sales team, I need to check about diagnostic lab availability at your showroom to service/upgrade my existing PC." }
  ];

  const handleSelectTemplate = (templateText: string, label: string) => {
    setSelectedTemplate(label);
    setMessage(templateText);
  };

  const handleSendWhatsApp = () => {
    const finalMsg = message.trim() || "Hello Kamtarn Infocom sales team! I have an inquiry about your IT products.";
    const encoded = encodeURIComponent(finalMsg);
    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = () => {
    const finalMsg = message.trim() || "Hello Kamtarn Infocom sales team! I have an inquiry about your IT products.";
    const subject = encodeURIComponent("Quick Inquiry from Kamtarn Infocom Website");
    const body = encodeURIComponent(finalMsg);
    const url = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-[90] font-sans">
        <motion.button
          id="floating-quick-chat-btn"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileActive={{ scale: 0.95 }}
          className="relative flex items-center gap-2.5 px-4.5 py-3.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-650 text-white rounded-full shadow-2xl shadow-red-600/30 font-bold text-xs sm:text-sm cursor-pointer z-10 border border-red-500/10 focus:outline-none select-none group"
        >
          <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-white"></span>
          </span>
          <MessageSquare className="w-4.5 h-4.5 group-hover:rotate-12 transition-transform duration-300" />
          <span className="tracking-wide uppercase text-[11px] sm:text-xs">Quick Chat</span>
        </motion.button>
      </div>

      {/* Slide-in Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark background overlay */}
            <motion.div
              id="quick-chat-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/45 backdrop-blur-xs z-[110] cursor-pointer"
            />

            {/* Modal Body container */}
            <motion.div
              id="quick-chat-modal-panel"
              initial={{ opacity: 0, scale: 0.93, y: 35, x: "-50%" }}
              animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, scale: 0.93, y: 35, x: "-50%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[calc(100vw-32px)] sm:w-full sm:max-w-md bg-white border border-slate-200 shadow-2xl rounded-2xl z-[120] p-5 sm:p-6 text-left font-sans flex flex-col max-h-[80vh] overflow-hidden"
            >
              {/* Header Box */}
              <div className="flex justify-between items-start pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-red-50 text-red-600 rounded-xl">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 uppercase tracking-wide">
                      Showroom Connection
                    </h3>
                    <p className="text-[10px] text-slate-400 font-mono font-bold tracking-wider">
                      DIRECT SALES DESK
                    </p>
                  </div>
                </div>
                <button
                  id="close-quick-chat-btn"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Scrollable Form Content */}
              <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
                <div className="bg-slate-50 border border-slate-200/50 p-3.5 rounded-xl text-xs text-slate-600 font-medium leading-relaxed">
                  <p>
                    Compose custom queries to our Kolkata or Dhanbad sales support team. Select a quick starter block or type custom instructions below.
                  </p>
                </div>

                {/* Templates selectors */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block text-left">
                    Select Quick Template
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {templates.map((temp) => {
                      const isSel = selectedTemplate === temp.label;
                      return (
                        <button
                          key={temp.label}
                          type="button"
                          onClick={() => handleSelectTemplate(temp.text, temp.label)}
                          className={`px-3 py-2.5 text-[10.5px] font-bold text-center rounded-xl border transition-all duration-200 cursor-pointer ${
                            isSel
                              ? 'bg-slate-950 text-white border-slate-950'
                              : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          {temp.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message text compose */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-left">
                    <label htmlFor="quick-chat-compose" className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      Your Message Content
                    </label>
                    {selectedTemplate && (
                      <button
                        onClick={() => { setSelectedTemplate(''); setMessage(''); }}
                        className="text-[9px] font-mono font-bold text-red-500 hover:underline hover:text-red-600 focus:outline-none cursor-pointer"
                      >
                        Reset Text
                      </button>
                    )}
                  </div>
                  <textarea
                    id="quick-chat-compose"
                    className="w-full text-xs font-sans p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-800 placeholder-slate-400 leading-relaxed resize-none h-28"
                    placeholder="Type your hardware specs or in-stock queries..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (selectedTemplate) setSelectedTemplate('');
                    }}
                  />
                </div>
              </div>

              {/* Action dispatch buttons bar */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  Choose Sourcing Platform
                </span>
                
                <div className="grid grid-cols-2 gap-2">
                  {/* Whatsapp Trigger Button */}
                  <button
                    id="quick-chat-whatsapp-btn"
                    onClick={handleSendWhatsApp}
                    className="flex items-center justify-center gap-1.5 px-3 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-500/10 cursor-pointer hover:scale-[1.01] active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
                    <span>WhatsApp Chat</span>
                  </button>

                  {/* Mail Trigger Button */}
                  <button
                    id="quick-chat-email-btn"
                    onClick={handleSendEmail}
                    className="flex items-center justify-center gap-1.5 px-3 py-3 bg-slate-900 hover:bg-slate-800 text-white border border-slate-900 rounded-xl text-xs font-bold transition-all shadow-md shadow-slate-900/10 cursor-pointer hover:scale-[1.01] active:scale-95"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>Compose Email</span>
                  </button>
                </div>

                <div className="flex justify-center items-center gap-1 mt-2 font-mono text-[9px] text-slate-400 uppercase tracking-widest font-semibold text-center select-none">
                  <Sparkles className="w-3.5 h-3.5 text-red-500" />
                  Kamtarn Sourcing Authenticity
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
