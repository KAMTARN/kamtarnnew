/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CapabilityItem {
  id: string;
  category: string;
  title: string;
  description: string;
  items: string[];
  icon: string; // Icon name from lucide-react to be mapped
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface AlliancePartner {
  name: string;
  category: 'Computing & Mobility' | 'Enterprise Infrastructure & Power' | 'Networking & Security' | 'Surveillance & Imaging' | 'Software & Security';
}

export interface ClientEntity {
  name: string;
  category: 'Government & PSU' | 'Educational & Research';
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface BranchOffice {
  type: 'Corporate Head Office' | 'Branch Office';
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface InquiryMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceCategory: string;
  message: string;
  timestamp: string;
  status: 'Pending' | 'Responded';
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: 'Laptops & Desktops' | 'IT Accessories' | 'Retail Electronics' | 'Networking & Smart Security';
  subcategory: string;
  description: string;
  price: number; // Price in INR
  discountPrice?: number; // Previous price for strikethrough retail markup
  specifications: string[];
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  rating: number;
  reviewsCount: number;
  icon: string; // Lucide icon identifier
  badge?: string; // e.g. "Best Seller", "15% OFF", "New Launch"
  isPopular?: boolean;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

