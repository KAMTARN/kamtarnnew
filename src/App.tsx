/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Trash2, Plus, Minus, X, ArrowRight, ShoppingBag, Percent } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyOverview } from './components/CompanyOverview';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { IndustryVerticals } from './components/IndustryVerticals';
import { AlliancesSection } from './components/AlliancesSection';
import { ClientsSection } from './components/ClientsSection';
import { SupportSection } from './components/SupportSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { QuickChat } from './components/QuickChat';
import { ProductItem, CartItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [prefilledMessage, setPrefilledMessage] = useState('');

  // Save/Load cart from localStorage for sandbox persistence
  useEffect(() => {
    const savedCart = localStorage.getItem('ki_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart', e);
      }
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('ki_cart', JSON.stringify(newCart));
  };

  // Cart actions
  const addToCart = (product: ProductItem) => {
    const existing = cart.find(item => item.product.id === product.id);
    if (existing) {
      const updated = cart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      saveCart(updated);
    } else {
      saveCart([...cart, { product, quantity: 1 }]);
    }
    // Shake or trigger open notification
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const updated = cart.map(item =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    saveCart(updated);
  };

  const removeFromCart = (productId: string) => {
    const updated = cart.filter(item => item.product.id !== productId);
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Trigger smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of the sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Proceed Checkout handler to trigger email automatically
  const handleCheckout = () => {
    setIsCartOpen(false);
    
    // Create pre-filled message text automatically compiled from the cart
    const itemsText = cart
      .map(item => `• ${item.product.brand} ${item.product.name} (Qty: ${item.quantity})`)
      .join('\n');
    
    const message = `Hello Kamtarn Infocom sales team,\n\nI would like to request an official GST-compliant retail quotation and stock availability estimation for the following IT accessories and electronics items:\n\n${itemsText}\n\nPlease check stock status at your showrooms and confirm delivery timelines. Thank you!`;
    
    setPrefilledMessage(message);

    // Auto trigger mail client to both addresses
    const mailtoUrl = `mailto:info@kamtarn.com,kamtarninfocom@gmail.com?subject=${encodeURIComponent("Showroom Stock & Custom Quotation Inquiry")}&body=${encodeURIComponent(message)}`;
    window.open(mailtoUrl, '_blank');
    
    // Smooth scroll to the contact form section
    setTimeout(() => {
      handleNavigate('contact');
    }, 100);
  };

  // Monitor Scroll positions to update active nav indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'overview', 'capabilities', 'verticals', 'alliances', 'clientele', 'support', 'contact'];
      const scrollPosition = window.scrollY + 180; // offset bounds anchor

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-red-500 selection:text-white font-sans antialiased">
      {/* Absolute top decorative loading bar */}
      <div className="fixed top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 z-[99]" />

      {/* Modern Sticky Navigation with Cart support */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
        cartCount={cartTotalItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Container */}
      <main className="relative">
        <Hero 
          onExploreSolutions={() => handleNavigate('capabilities')} 
          onRequestQuote={() => handleNavigate('contact')} 
        />
        <CompanyOverview />
        
        {/* Restyled into retail showcase catalog */}
        <CapabilitiesSection 
          addToCart={addToCart} 
          cart={cart}
          onOpenCart={() => setIsCartOpen(true)}
        />
        
        <IndustryVerticals />
        <AlliancesSection />
        <ClientsSection />
        <SupportSection />
        
        <ContactForm 
          cart={cart} 
          clearCart={clearCart} 
          prefilledMessage={prefilledMessage}
          setPrefilledMessage={setPrefilledMessage}
        />
      </main>

      {/* Interactive Sliding Side Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop blur effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-[100] cursor-pointer"
            />

            {/* Sliding Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:max-w-md bg-white shadow-2xl z-[101] flex flex-col h-full font-sans border-l border-slate-100"
            >
              {/* Header */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">
                      Showroom Checkout
                    </h3>
                    <p className="text-[10px] text-slate-500 font-mono">
                      {cartTotalItems} ITEM{cartTotalItems === 1 ? '' : 'S'} IN YOUR BASKET
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 hover:bg-slate-200 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6">
                    <div className="p-4 bg-slate-100 rounded-full text-slate-400 mb-4 animate-pulse">
                      <ShoppingCart className="w-8 h-8" />
                    </div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Cart is Empty
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 max-w-xs leading-relaxed">
                      Select high-performance IT products, storage accessories, or surveillance hardware from our showroom catalog below.
                    </p>
                    <button
                      onClick={() => { setIsCartOpen(false); handleNavigate('capabilities'); }}
                      className="mt-5 px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-extrabold shadow-sm hover:bg-red-500 transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      Browse Showroom
                    </button>
                  </div>
                ) : (
                  cart.map((item, idx) => {
                    return (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        key={item.product.id}
                        className="flex items-start gap-3.5 p-3.5 bg-slate-50 border border-slate-100 rounded-2xl group relative hover:bg-slate-50/50 hover:border-slate-200 transition-all"
                      >
                        {/* Item Icon Indicator */}
                        <div className="w-10 h-10 shrink-0 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 group-hover:text-red-500 group-hover:border-red-100 transition-all font-mono font-bold text-xs">
                          {item.product.brand.substring(0, 2).toUpperCase()}
                        </div>

                        {/* Title & Price */}
                        <div className="flex-1 min-w-0">
                          <span className="text-[9px] font-mono font-bold text-red-500 uppercase tracking-widest block leading-none">
                            {item.product.brand}
                          </span>
                          <h4 className="text-xs font-extrabold text-slate-800 truncate mt-0.5 whitespace-normal pr-5">
                            {item.product.name}
                          </h4>
                          <span className="text-[10px] font-mono font-bold text-red-600 bg-red-50/50 border border-red-100/50 rounded-md px-1.5 py-0.5 mt-1 block w-max select-none">
                            Get Query
                          </span>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-3 bg-white border border-slate-200 rounded-lg p-1 w-max">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 hover:bg-slate-100 text-slate-500 rounded-xs transition-colors cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-extrabold text-slate-800 px-2 min-w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:bg-slate-100 text-slate-500 rounded-xs transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* Right Options (Delete) */}
                        <div className="flex flex-col items-end justify-between shrink-0">
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-1 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-lg transition-all cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>

              {/* Checkout Summary Footer */}
              {cart.length > 0 && (
                <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-4">
                  {/* Total calculation */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-500 font-semibold">
                      <span>Total Query Items:</span>
                      <span className="font-mono text-slate-800 font-bold">{cartTotalItems} item(s)</span>
                    </div>
                    <div className="flex justify-between text-slate-500 font-semibold items-center">
                      <span className="flex items-center gap-1 text-emerald-600">
                        <Percent className="w-3.5 h-3.5" /> Showroom Offer:
                      </span>
                      <span className="text-emerald-600 font-extrabold text-[10px] uppercase font-mono">GST-READY PRICE</span>
                    </div>
                    <div className="h-[1px] bg-slate-200/60 my-2" />
                    <div className="flex justify-between text-sm font-extrabold text-slate-900">
                      <span>Official Quotation Estimate:</span>
                      <span className="font-mono text-red-650 text-xs font-bold uppercase tracking-wide">Automated Trigger</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-1 gap-2.5">
                    <button
                      onClick={handleCheckout}
                      className="w-full py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-red-500/15 cursor-pointer uppercase tracking-wider transition-all"
                    >
                      <span>Proceed to Quote Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full py-2 bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-600 border border-slate-200 rounded-lg text-[10px] font-bold text-center tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      Clear All Items
                    </button>
                  </div>
                  <p className="text-[9px] text-slate-400 text-center leading-relaxed">
                    *Quote requested is logged directly in this browser's local sandbox storage. Walk-in or AMC setup estimations are immediate.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Informative Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Quick Chat System */}
      <QuickChat />
    </div>
  );
}
