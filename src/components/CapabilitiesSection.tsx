/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RETAIL_PRODUCTS } from '../data';
import { ProductItem, CartItem } from '../types';
import { Search, Check, ShoppingBag, ShoppingCart, Star, SlidersHorizontal, Tag, Eye } from 'lucide-react';

interface CapabilitiesSectionProps {
  addToCart: (product: ProductItem) => void;
  cart: CartItem[];
  onOpenCart: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ addToCart, cart, onOpenCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePriceRange, setActivePriceRange] = useState<'All' | 'budget' | 'mid' | 'premium'>('All');

  // Categories list
  const categories = useMemo(() => {
    const list = new Set(RETAIL_PRODUCTS.map(p => p.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter items based on criteria
  const filteredProducts = useMemo(() => {
    return RETAIL_PRODUCTS.filter((prod) => {
      // Category Match
      const matchCategory = selectedCategory === 'All' || prod.category === selectedCategory;

      // Price Filter
      let matchPrice = true;
      if (activePriceRange === 'budget') {
        matchPrice = prod.price <= 2000;
      } else if (activePriceRange === 'mid') {
        matchPrice = prod.price > 2000 && prod.price <= 10000;
      } else if (activePriceRange === 'premium') {
        matchPrice = prod.price > 10000;
      }

      // Search Match
      const searchStr = searchTerm.toLowerCase();
      const matchSearch = 
        prod.name.toLowerCase().includes(searchStr) ||
        prod.brand.toLowerCase().includes(searchStr) ||
        prod.subcategory.toLowerCase().includes(searchStr) ||
        prod.description.toLowerCase().includes(searchStr) ||
        prod.specifications.some(spec => spec.toLowerCase().includes(searchStr));

      return matchCategory && matchPrice && matchSearch;
    });
  }, [searchTerm, selectedCategory, activePriceRange]);

  // Helper check to see if item is in cart
  const getCartQuantity = (productId: string) => {
    const item = cart.find(c => c.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section id="capabilities" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-red-600 font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
            OFFICIAL RETAIL CATALOG
          </span>
          <h2 id="capabilities-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 leading-tight">
            Browse Genuine Hardware & Essential Accessories
          </h2>
          <p className="text-slate-500 mt-4 text-xs sm:text-sm leading-relaxed">
            Configure student bundles, select external NVMe SSDs, order mechanical keyboards, or purchase commercial laptops in stock at our local Dhanbad & Kolkata showrooms. All hardware is GST-ready and fully warranted.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-rose-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Filters and Control Grid */}
        <div className="mb-12 bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex flex-col gap-6">
          
          {/* Categories Row */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest text-left">
              Select Department
            </span>
            <div className="flex flex-wrap gap-2 overflow-x-auto py-1">
              {categories.map((cat) => {
                const itemID = `prod-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
                return (
                  <button
                    key={cat}
                    id={itemID}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg shrink-0 transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-red-600 text-white shadow-md shadow-red-500/15'
                        : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sub-Filters: Price Tiers & Live Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 border-t border-slate-200/60">
            
            {/* Price Filter Capsules */}
            <div className="flex flex-col gap-2 text-left">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                Filter by Price Tier
              </span>
              <div className="flex gap-1.5 flex-wrap">
                {(['All', 'budget', 'mid', 'premium'] as const).map((tier) => {
                  const labels = { All: "All Prices", budget: "Budget (< ₹2,000)", mid: "Mid-Range (₹2,000 - ₹10,000)", premium: "Premium (> ₹10,000)" };
                  return (
                    <button
                      key={tier}
                      onClick={() => setActivePriceRange(tier)}
                      className={`px-3 py-1.5 text-[11px] font-medium rounded-md cursor-pointer transition-colors ${
                        activePriceRange === tier
                          ? 'bg-slate-900 text-white'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      {labels[tier]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Search */}
            <div className="flex flex-col gap-2 w-full md:w-80 text-left">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                Search In-Stock Items
              </span>
              <div className="relative">
                <input
                  type="text"
                  id="showroom-search"
                  placeholder="Query brand, spec or keyword (e.g. SSD, HP)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2.5 pl-10 pr-4 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-700 placeholder-slate-400 font-sans shadow-sm"
                />
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              </div>
            </div>

          </div>

        </div>

        {/* Showcase Grid of Retail Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 min-h-[250px]">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => {
              const inCartQty = getCartQuantity(prod.id);
              const starCount = Math.floor(prod.rating);

              return (
                <motion.div
                  layout
                  id={`product-card-${prod.id}`}
                  key={prod.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200/60 hover:border-red-500/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
                >
                  {/* Badge Ribbon */}
                  {prod.badge && (
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="bg-red-50 text-red-600 border border-red-200/60 px-2.5 py-1 rounded-md text-[9px] font-mono font-bold tracking-wider uppercase shadow-xs">
                        {prod.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Brand & Subcategory */}
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="font-mono text-[9px] text-red-600 bg-red-100/50 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
                        {prod.brand}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold font-sans">
                        &bull; {prod.subcategory}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 id={`product-title-${prod.id}`} className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-red-600 transition-colors duration-200 font-sans mt-1 leading-snug">
                      {prod.name}
                    </h3>

                    {/* Stars & Reviews */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3.5 h-3.5 ${i < starCount ? 'fill-current' : 'text-slate-200'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono font-bold">
                        {prod.rating.toFixed(1)} ({prod.reviewsCount} reviews)
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-slate-500 mt-3 leading-relaxed font-sans line-clamp-2">
                      {prod.description}
                    </p>

                    {/* Horizontal separator */}
                    <div className="h-[1px] bg-slate-200/60 my-4" />

                    {/* Bullet Specs */}
                    <ul className="space-y-2 mb-4">
                      {prod.specifications.slice(0, 3).map((spec, i) => (
                        <li key={i} className="flex gap-2 items-start text-left">
                          <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0 bg-emerald-50 rounded-md p-0.5" />
                          <span className="text-[10.5px] font-semibold text-slate-700 leading-normal truncate">
                            {spec}
                          </span>
                        </li>
                      ))}
                      {prod.specifications.length > 3 && (
                        <li className="text-[9.5px] font-mono text-slate-400 pl-5">
                          + {prod.specifications.length - 3} Technical Specifications
                        </li>
                      )}
                    </ul>

                  </div>

                  <div>
                    {/* Horizontal Divider */}
                    <div className="h-[1px] bg-slate-200/40 my-3" />

                    {/* Stock Status & Warranty Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] font-mono font-bold text-slate-400">
                        OFFICIAL INDIA WARRANTY
                      </span>
                      <div className="flex items-center gap-1 text-[10px] font-bold font-sans">
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                          prod.stockStatus === 'In Stock' 
                            ? 'bg-emerald-500' 
                            : prod.stockStatus === 'Low Stock' 
                            ? 'bg-amber-400' 
                            : 'bg-red-400'
                        }`} />
                        <span className={
                          prod.stockStatus === 'In Stock' 
                            ? 'text-emerald-600' 
                            : prod.stockStatus === 'Low Stock' 
                            ? 'text-amber-600' 
                            : 'text-red-500'
                        }>
                          {prod.stockStatus}
                        </span>
                      </div>
                    </div>

                    {/* Price and Cart controls */}
                    <div className="flex items-center justify-between gap-2.5 pt-2 border-t border-slate-150">
                      
                      {/* Price Section */}
                      <div className="flex flex-col text-left">
                        {prod.discountPrice && (
                          <span className="text-[10px] text-slate-400 font-mono font-bold line-through">
                            ₹{prod.discountPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                        <span className="text-sm sm:text-base font-black text-slate-900 font-mono leading-none">
                          ₹{prod.price.toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* Add Button */}
                      {inCartQty > 0 ? (
                        <div className="flex flex-col items-stretch gap-1 shrink-0 w-32">
                          <button
                            onClick={onOpenCart}
                            className="px-3 py-2 bg-slate-900 text-white hover:bg-slate-850 rounded-xl text-[10px] font-bold text-center flex items-center justify-center gap-1 cursor-pointer transition-all uppercase tracking-wide shrink-0 border border-slate-900 shadow-sm"
                          >
                            <ShoppingCart className="w-3.5 h-3.5 text-red-500" />
                            <span>In Basket ({inCartQty})</span>
                          </button>
                          <button
                            onClick={() => addToCart(prod)}
                            className="text-[9px] font-mono font-bold text-red-600 hover:text-red-500 hover:underline text-center w-full block mt-0.5 cursor-pointer leading-none"
                          >
                            Add Another
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(prod)}
                          disabled={prod.stockStatus === 'Out of Stock'}
                          className={`px-3.5 py-2.5 text-[11px] font-extrabold uppercase tracking-wider rounded-xl cursor-pointer transition-all shrink-0 flex items-center gap-1.5 shadow-sm hover:scale-[1.02] active:scale-95 duration-200 ${
                            prod.stockStatus === 'Out of Stock'
                              ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                              : 'bg-red-650 hover:bg-red-600 text-white bg-red-600 shadow-red-600/10'
                          }`}
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </button>
                      )}

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty Search Handler */}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-16 text-center bg-slate-50 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center">
              <ShoppingCart className="w-10 h-10 text-slate-300 mb-3 animate-bounce" />
              <p className="text-sm font-bold text-slate-700">No products matching your search criteria</p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm">
                Try searching general categories like "SSD", "Laptop", "Mouse", or modifying your price tier tags.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setActivePriceRange('All'); }}
                className="mt-5 px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md hover:bg-red-500 transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
