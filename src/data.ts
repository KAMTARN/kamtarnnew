import { ProductItem, CoreValue, AlliancePartner, ClientEntity, BranchOffice } from './types';

export const COMPANY_NAME = "Kamtarn Infocom India Pvt. Ltd.";
export const COMPANY_SHORT = "Kamtarn Infocom";
export const COMPANY_INITIALS = "KIIPL";

export const OVERVIEW_TEXT = `${COMPANY_NAME} is Eastern India's premier IT retail and technology solutions provider. Operating our prominent showrooms and diagnostic setups in Kolkata (B B Ganguly Street) and Dhanbad (Bank More), we supply high-performance IT products, official retail electronics, and a comprehensive range of IT accessories. From students constructing high-speed gaming setups to enterprises building secure networking arrays, ${COMPANY_SHORT} is a household name for genuine software, hardware, peripheral units, and warranties.`;

export const MISC_ABOUT = "Our retail showrooms host direct interactive test stands for premium laptops, high-definition smart screens, audio hardware, and productivity peripherals. We provide immediate over-the-counter servicing, tailored desktop PC assemblies, state-of-the-art diagnostic testing, and authorized vendor warranties. We believe in providing the latest electronic retail trends with zero-delay local stock availability and unparalleled support.";

export const CORPORATE_OVERVIEW_DETAILS = [
  { label: "Showroom & Center Brand", value: COMPANY_NAME },
  { label: "Retail Niches", value: "IT Products, Consumer Electronics & IT Accessories" },
  { label: "Business Type", value: "Authorized Retailer & Institutional Supplier" },
  { label: "Kolkata Showroom", value: "B B Ganguly Street, Central Plazza" },
  { label: "Dhanbad Showroom", value: "Textile Market, Bank More" },
  { label: "Product Portfolio", value: "Laptops, Desktops, Keyboards, Mice, SSDs, Routers, Smart TVs, surveillance packs" },
  { label: "Brand Partnerships", value: "HP, Dell, Lenovo, Apple, Samsung, Logitech, TP-Link, Kingston, Hikvision" },
  { label: "Accreditation", value: "ISO 9001:2015 Quality Ensured, Authorized Distributorship, GeM Listed" }
];

export const VISION_TEXT = "To be Eastern India's most trusted single-point retail hub and distribution partner for top-tier IT products, smart home electronics, and high-quality utility accessories.";

export const MISSION_POINTS = [
  "Maintain 100% genuine and officially warranted product stock",
  "Provide competitive local pricing with transparent tax billing",
  "Enable custom desktop computing tailored for creators and gamers",
  "Offer hassle-free, over-the-counter diagnostic support and easy replacements",
  "Partner with global electronics OEMs to stock bleeding-edge accessories",
  "Delight customers with helpful, non-jargon technical showroom consultants"
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "100% Authenticity",
    description: "Every accessory, processor, cable, or screen we sell is sourced directly from certified global distributors.",
    icon: "ShieldCheck"
  },
  {
    title: "Customer Delight",
    description: "Our showroom team assists you in selecting custom parts, maximizing performance on budget.",
    icon: "Sparkles"
  },
  {
    title: "Immediate Diagnostics",
    description: "Walk-in service benches at Kolkata & Dhanbad ensure rapid product testing and instant replacements.",
    icon: "Cpu"
  },
  {
    title: "Vast Product Range",
    description: "From simple OTG adapters to high-end enterprise servers, our inventory spans thousands of live items.",
    icon: "Boxes"
  },
  {
    title: "Warranted Trust",
    description: "Every valid retail purchase is backed by complete official manufacturer warranties and easy claims. We do not sell gray-market imports.",
    icon: "Award"
  }
];

export const CHOOSE_US_METRICS = [
  { value: "15+", label: "Years of Retail & Service Excellence" },
  { value: "10k+", label: "Happy Shoppers & Custom PC Builds" },
  { value: "100%", label: "Genuine Warranted Hardware Rate" },
  { value: "24-Hr", label: "Diagnostic Turnaround Guarantee" }
];

export const OTHER_DIFFERENTIATORS = [
  "Direct Authorized Retail Channels with Top Global OEMs",
  "Walk-In Desktop Customization & Assembly Lounges",
  "Extensive In-Stock IT Accessories Catalogue (Cables, Adapters, Storage)",
  "Transparent, GST-Compliant Retail and Corporate Invoicing",
  "Immediate Over-the-Counter Diagnostic and Exchange Benchmarks",
  "Multi-Brand Laptop Showroom for Side-by-Side Screen Comparisons",
  "Smart Home & Security Live Demonstration Areas",
  "Bulk Educational and Corporate Sourcing Capabilities",
  "No Gray-Market or Unregistered Electronic Imports"
];

export const SERVICE_COMMITMENTS = [
  { title: "Immediate Over-The-Counter Swaps", description: "All eligible accessory returns are tested and swapped directly at our service benches without manufacturer delays." },
  { title: "Custom Spec Consulting", description: "Our expert consultants help you pick components (RAM, storage, GPU) perfect for software developers, gamers, or students." },
  { title: "Authorized Service Network", description: "Filing warranty claims is painless—our centers double as authorized warranty dispatch nodes for lead brands." },
  { title: "Live Configuration Testing", description: "Buy with peace of mind. We let you configure, activate, and examine your devices live at our showroom checkout." },
  { title: "On-Site Home Surveillance Setup", description: "Purchased a surveillance package? Our certified onsite crew will deploy cameras and routers at your premises in 24 hours." },
  { title: "Corporate Invoicing Benefits", description: "Claim input tax credits with our legitimate, fully compliant GST invoicing on all electronics." }
];

export const FUTURE_READY_ITEMS = [
  { name: "Next-Gen AI Laptops", desc: "Showcasing the latest Snapdragon X Elite, Intel Core Ultra, and AMD Ryzen AI processor laptops." },
  { name: "High-Speed NVMe Storage", desc: "Demonstrations of PCIe Gen 5 solid-state-drives driving transfer speeds up to 12,000 MB/s." },
  { name: "Wi-Fi 7 Mesh Networks", desc: "Live setups displaying high-throughput, ultra-low latency mesh networking for smart multi-tier homes." },
  { name: "Smart Surveillance Arrays", desc: "AI-based tracking, automatic face recognition, and local network video recording with mobile sync." },
  { name: "Creators & Gaming Gear", desc: "Providing mechanical keyboards, ergonomic high-polling-rate mice, and high-refresh-rate displays." },
  { name: "Eco-Friendly Power Solutions", desc: "Micro-UPS arrays for routers, solar-ready backup power systems, and high-efficiency smart surge bars." }
];

export const RETAIL_SEGMENTS = [
  {
    title: "Students & Gamers",
    description: "Budget laptop bundles, customized gaming rigs, RGB accessories, mechanical keyboards, and special education pricing.",
    icon: "GraduationCap"
  },
  {
    title: "Professionals & Developers",
    description: "High-performance workspaces, ultra-wide monitors, mechanical keyboards, laptop docking hubs, and dual-monitor mounts.",
    icon: "Briefcase"
  },
  {
    title: "Home Offices & SMBs",
    description: "Reliable desktops, high-speed Wi-Fi routers, printing gear, network-attached storage (NAS), and robust offline power supply.",
    icon: "Monitor"
  },
  {
    title: "Smart Home & Residential Security",
    description: "Full HD smart home security WiFi cameras, smart screens, video doorbells, automated lighting, and whole-house mesh routers.",
    icon: "Zap"
  },
  {
    title: "Institutions & Bulk Purchase",
    description: "Wholesale procurement contracts, desktop arrays for campuses, surveillance networks for offices, and dedicated AMC supply.",
    icon: "Building"
  },
  {
    title: "Research Labs & Computational Stations",
    description: "Specialized graphics accelerators, extreme multi-core processing packages, server rack units, and high-density RAM chips.",
    icon: "Boxes"
  }
];

export const BRAND_ALLIANCES: AlliancePartner[] = [
  // Laptops and Computing
  { name: "HP", category: "Computing & Mobility" },
  { name: "Dell", category: "Computing & Mobility" },
  { name: "Lenovo", category: "Computing & Mobility" },
  { name: "Acer", category: "Computing & Mobility" },
  { name: "Apple", category: "Computing & Mobility" },
  { name: "Samsung", category: "Computing & Mobility" },
  { name: "LG", category: "Computing & Mobility" },
  // Storage & Accessories
  { name: "Logitech", category: "Software & Security" }, // We'll group accessories under categorized sectors
  { name: "Kingston", category: "Enterprise Infrastructure & Power" },
  { name: "SanDisk", category: "Enterprise Infrastructure & Power" },
  { name: "Crucial", category: "Enterprise Infrastructure & Power" },
  { name: "Anker", category: "Enterprise Infrastructure & Power" },
  { name: "Zebronics", category: "Software & Security" },
  // Networking
  { name: "Cisco", category: "Networking & Security" },
  { name: "TP-Link", category: "Networking & Security" },
  { name: "D-Link", category: "Networking & Security" },
  { name: "Mercusys", category: "Networking & Security" },
  // Surveillance & Screens
  { name: "Hikvision", category: "Surveillance & Imaging" },
  { name: "CP Plus", category: "Surveillance & Imaging" },
  { name: "Dahua", category: "Surveillance & Imaging" },
  { name: "OnePlus", category: "Surveillance & Imaging" },
  { name: "Sony", category: "Surveillance & Imaging" },
  { name: "Canon", category: "Surveillance & Imaging" },
  // Software
  { name: "Microsoft Windows", category: "Software & Security" },
  { name: "Quick Heal", category: "Software & Security" },
  { name: "K7 Security", category: "Software & Security" },
  { name: "Kaspersky", category: "Software & Security" }
];

export const CLIENTLIST: ClientEntity[] = [
  { name: "Coal India Showrooms & HQ", category: "Government & PSU" },
  { name: "BCCL Local Office Procurement", category: "Government & PSU" },
  { name: "Eastern Coalfields Retail Supply", category: "Government & PSU" },
  { name: "IIT Kharagpur Computer Labs", category: "Educational & Research" },
  { name: "Indian School of Mines (IIT Dhanbad) Workstations", category: "Educational & Research" },
  { name: "CSIR National Metallurgical Laboratory Assemblies", category: "Educational & Research" },
  { name: "Webel Authorized Training Centers", category: "Government & PSU" },
  { name: "Kolkata Corporation Tech Desks", category: "Government & PSU" }
];

export const RETAIL_PRODUCTS: ProductItem[] = [
  // Laptops & Desktops
  {
    id: "prod-macbook-air",
    name: "Apple MacBook Air M2",
    brand: "Apple",
    category: "Laptops & Desktops",
    subcategory: "Premium Ultraportable",
    description: "Incredibly thin and fast, the MacBook Air features the next-generation M2 chip, silent fanless layout, and a gorgeous 13.6-inch Liquid Retina display with 18 hours of life.",
    price: 84900,
    discountPrice: 92900,
    specifications: [
      "Apple M2 8-Core CPU / 8-Core GPU",
      "8GB Unified Memory, 256GB Superfast SSD",
      "13.6\" Liquid Retina Display with True Tone",
      "Up to 18 Hours of Battery Backup",
      "Backlit Magic Keyboard with Touch ID"
    ],
    stockStatus: "In Stock",
    rating: 4.8,
    reviewsCount: 142,
    icon: "Laptop",
    badge: "Student Favorite",
    isPopular: true
  },
  {
    id: "prod-hp-pavilion",
    name: "HP Pavilion 15 Core i5",
    brand: "HP",
    category: "Laptops & Desktops",
    subcategory: "Everyday Professional",
    description: "A compact laptop with clean metal details, premium performance driven by a 12th Gen Intel Core processor, and custom audio immersive profiles tuned by B&O.",
    price: 53490,
    discountPrice: 59900,
    specifications: [
      "Intel Core i5-1240P (Up to 4.4 GHz)",
      "16GB DDR4 RAM, 512GB PCIe NVMe SSD",
      "15.6\" FHD IPS Micro-Edge Anti-Glare",
      "Intel Iris Xe Integrated Graphics",
      "Audio by Bang & Olufsen, Backlit KB"
    ],
    stockStatus: "In Stock",
    rating: 4.5,
    reviewsCount: 94,
    icon: "Laptop",
    badge: "11% OFF",
    isPopular: true
  },
  {
    id: "prod-thinkpad-e14",
    name: "Lenovo ThinkPad E14 Gen 5",
    brand: "Lenovo",
    category: "Laptops & Desktops",
    subcategory: "Business Workstation",
    description: "Renowned legendary durability with custom military-specification testing. Powerful AMD Ryzen processor, robust hardware-based security modules, and mechanical trackpoint precision.",
    price: 61990,
    discountPrice: 68000,
    specifications: [
      "AMD Ryzen 5 7530U (6 Cores / 12 Threads)",
      "16GB DDR4 High-Speed RAM, 512GB Gen4 SSD",
      "14\" WUXGA (1920x1200) IPS Anti-glare",
      "FIDO Security Key, TPM 2.0 Protection",
      "Legendary Spill-Resistant Keyboard"
    ],
    stockStatus: "In Stock",
    rating: 4.7,
    reviewsCount: 65,
    icon: "Laptop",
    badge: "Enterprise Pick",
    isPopular: false
  },
  {
    id: "prod-kiipl-gaming",
    name: "KIIPL Elite Custom Gaming PC",
    brand: "Kamtarn Custom",
    category: "Laptops & Desktops",
    subcategory: "Assembled Desktop",
    description: "Hand-assembled by our diagnostic engineers in Kolkata, this gaming powerhouse includes professional fluid cable routing, optimized airflow pressure, and active retail component warranties.",
    price: 68900,
    discountPrice: 75000,
    specifications: [
      "AMD Ryzen 5 5600X Desktop Processor",
      "NVIDIA GeForce RTX 3060 12GB GDDR6",
      "16GB Corsair Vengeance 3200MHz DDR4",
      "512GB NVMe M.2 SSD + 1TB WD Blue HDD",
      "DeepCool 650W 80+ Bronze, ARGB Glass Case"
    ],
    stockStatus: "Low Stock",
    rating: 4.9,
    reviewsCount: 38,
    icon: "Monitor",
    badge: "Kamtarn Custom",
    isPopular: true
  },

  // IT Accessories
  {
    id: "prod-mx-master",
    name: "Logitech MX Master 3S Mouse",
    brand: "Logitech",
    category: "IT Accessories",
    subcategory: "Productivity Peripheral",
    description: "The ultimate productivity tool featuring standard ultra-quiet clicks, 8,000 DPI track-on-glass sensor precision, and MagSpeed electromagnetic scrolling mimicking instant flywheels.",
    price: 8995,
    discountPrice: 10995,
    specifications: [
      "8,000 DPI Sensor (Tracks on any surface)",
      "MagSpeed Electromagnetic Zoom-Scroll",
      "Ultra-quiet tactile clicking mechanisms",
      "USB-C Quick Charging (Up to 70 Active Days)",
      "Connect up to 3 Devices (Bluetooth / Bolt)"
    ],
    stockStatus: "In Stock",
    rating: 4.9,
    reviewsCount: 210,
    icon: "Mouse",
    badge: "Best Seller",
    isPopular: true
  },
  {
    id: "prod-kingston-ssd",
    name: "Kingston XS2000 1TB Portable SSD",
    brand: "Kingston",
    category: "IT Accessories",
    subcategory: "External Storage",
    description: "Pocket-sized robust external solid state drive operating at extreme USB 3.2 Gen 2x2 transfer speeds. Enclosed in a custom rubber sleeve for IP55 water and shock defense.",
    price: 7800,
    discountPrice: 9500,
    specifications: [
      "Read/Write Speeds up to 2,000 MB/s",
      "Ultra-Compact Pocketable Form Factor",
      "IP55 Water, Dust & Shock Resistance Rating",
      "USB Type-C to Type-C Cable Included",
      "5-Year Limited Manufacturer Warranty"
    ],
    stockStatus: "In Stock",
    rating: 4.6,
    reviewsCount: 114,
    icon: "HardDrive",
    badge: "Fast Storage",
    isPopular: true
  },
  {
    id: "prod-hp-kbd-mouse",
    name: "HP KM300F RGB Backlit Keyboard Set",
    brand: "HP",
    category: "IT Accessories",
    subcategory: "Typing Combo",
    description: "Elegant metal panel layout with responsive, whisper-quiet membrane keys. Integrated multicolor custom LEDs paired with a heavy-duty 6-button utility optical gaming mouse.",
    price: 1299,
    discountPrice: 1999,
    specifications: [
      "Multicolor Rainbow LED Backlight Array",
      "Rust and Scratch Resistant Metal Plate Deck",
      "Ergonomic Integrated Suspended Keycaps",
      "6-Button Optical Mouse with adjustable DPI",
      "Reinforced Braided USB Hookup Cord"
    ],
    stockStatus: "In Stock",
    rating: 4.4,
    reviewsCount: 310,
    icon: "Keyboard",
    badge: "Popular Combo",
    isPopular: false
  },
  {
    id: "prod-anker-hub",
    name: "Anker 7-in-1 Premium USB-C Hub",
    brand: "Anker",
    category: "IT Accessories",
    subcategory: "Expansion Hubs",
    description: "Massive hub power converting one laptop USB-C port into seven media outputs. Facilitates 100W power delivery passthrough, 4K HDMI screen projection, and high speed SD readers.",
    price: 3499,
    discountPrice: 4200,
    specifications: [
      "85W USBC Power-Delivery Charging",
      "4K HDMI Port supporting UHD display at 30Hz",
      "Dual USB-A 3.0 Media Storage Ports (5Gbps)",
      "High speed SD & microSD slots",
      "Includes protective flannel transport pouch"
    ],
    stockStatus: "In Stock",
    rating: 4.5,
    reviewsCount: 82,
    icon: "Boxes",
    badge: "Must-Have",
    isPopular: false
  },
  {
    id: "prod-zebronics-set",
    name: "Zebronics Judwaa USB Keyboard Set",
    brand: "Zebronics",
    category: "IT Accessories",
    subcategory: "Office Accessories",
    description: "Affordable and highly durable, the Judwaa combo offers everyday spill-resistant typing layouts and a 1200 DPI high precision optical mouse perfect for bank offices and commercial operations.",
    price: 549,
    discountPrice: 799,
    specifications: [
      "Standard 104-Key spill-resistant layout",
      "Whisper-quiet highly responsive key membrane",
      "High-durability keys (guaranteed 5 Million taps)",
      "1200 DPI Optical high accuracy mouse sensor",
      "Plug & Play Windows/Mac immediate support"
    ],
    stockStatus: "In Stock",
    rating: 4.2,
    reviewsCount: 450,
    icon: "Keyboard",
    badge: "Budget King",
    isPopular: false
  },

  // Retail Electronics
  {
    id: "prod-samsung-tv",
    name: "Samsung Crystal 4K Smart TV 43\"",
    brand: "Samsung",
    category: "Retail Electronics",
    subcategory: "Smart Screens",
    description: "Experience hyper-lifelike colors with the Crystal Processor 4K engine. Sleek AirSlim build featuring PurColor, HDR evaluation, smart screen mirroring, and built-in voice command software.",
    price: 28990,
    discountPrice: 34900,
    specifications: [
      "True 4K UHD Resolution (3840 x 2160 pixels)",
      "Crystal Processor 4K Color Scaling",
      "Custom High Dynamic Range (HDR) standard",
      "Tizen Smart Platform with Netflix, YouTube",
      "Adaptive Sound engineering / Q-Symphony"
    ],
    stockStatus: "In Stock",
    rating: 4.6,
    reviewsCount: 167,
    icon: "Tv",
    badge: "Free Wall-mount",
    isPopular: true
  },
  {
    id: "prod-oneplus-tv",
    name: "OnePlus 32\" Y1S Smart LED TV",
    brand: "OnePlus",
    category: "Retail Electronics",
    subcategory: "Smart Screens",
    description: "Brimming with visual color depth. Includes Gamma Engine optimizations, standard bezel-less engineering, OxygenPlay exploration channels, and 20W Dolby Sound speaker arrays.",
    price: 13999,
    discountPrice: 18999,
    specifications: [
      "HD Ready Screen running Android TV 11",
      "Dolby Audio 20W Cinematic Speakers",
      "OnePlus Connect smartphone sync feature",
      "Fast Dual-Band Wi-Fi and Bluetooth 5.0",
      "Bezel-less visual design frame"
    ],
    stockStatus: "In Stock",
    rating: 4.4,
    reviewsCount: 125,
    icon: "Tv",
    badge: "Deal of the Day",
    isPopular: false
  },
  {
    id: "prod-anker-soundcore",
    name: "Soundcore Life Q20 ANC Headphones",
    brand: "Anker",
    category: "Retail Electronics",
    subcategory: "Personal Audio",
    description: "Hi-Res authentic audio featuring active hybrid noise cancellation which isolates up to 90% of outside ambience. Exclusive BassUp algorithm deepens music output instantly.",
    price: 4999,
    discountPrice: 6999,
    specifications: [
      "Certified Hi-Res Audio output clarity",
      "Hybrid Active Noise Cancellation (4 Mics)",
      "Up to 40 Hours of uninterrupted ANC playback",
      "Comfortable memory foam earcups with pivot",
      "BassUp heavy-bass booster button switch"
    ],
    stockStatus: "In Stock",
    rating: 4.7,
    reviewsCount: 88,
    icon: "Volume2",
    badge: "Hot Buy",
    isPopular: false
  },

  // Networking & Smart Security
  {
    id: "prod-tplink-deco",
    name: "TP-Link Deco M4 Mesh System",
    brand: "TP-Link",
    category: "Networking & Smart Security",
    subcategory: "Mesh Router",
    description: "Get rid of unstable Wi-Fi zones forever. Using advanced Deco Mesh technology, multiple units work together to form a unified network under a single seamless SSID name.",
    price: 4299,
    discountPrice: 5999,
    specifications: [
      "Covers up to 2,800 sq ft seamless WiFi range",
      "AC1200 speeds with seamless dual band",
      "Handles connections for more than 100 units",
      "Advanced Parental controls via unified app",
      "Easy initial setup guided by on-screen icons"
    ],
    stockStatus: "In Stock",
    rating: 4.8,
    reviewsCount: 104,
    icon: "Network",
    badge: "Best Mesh Wi-Fi",
    isPopular: true
  },
  {
    id: "prod-hikvision-wifi",
    name: "Hikvision Smart Pan-Tilt WiFi Camera",
    brand: "Hikvision",
    category: "Networking & Smart Security",
    subcategory: "Security Cameras",
    description: "Keep constant watches on areas. Motorized PTZ system provides 360-degree range, clear Full HD resolutions, smart night vision infrared rays, and real-time talk speaker functions.",
    price: 2299,
    discountPrice: 3500,
    specifications: [
      "Full HD Resolution (1080p, 2 Megapixels)",
      "Motorized Pan & Tilt for 360° visibility",
      "Smart Motion Tracking with smartphone alert",
      "Built-in Two-Way Microphone & Speaker talk",
      "Supports MicroSD Storage up to 256GB"
    ],
    stockStatus: "In Stock",
    rating: 4.5,
    reviewsCount: 153,
    icon: "Eye",
    badge: "Home Safe",
    isPopular: true
  },
  {
    id: "prod-cpplus-dome",
    name: "CP Plus 3MP Smart Home IP Camera",
    brand: "CP Plus",
    category: "Networking & Smart Security",
    subcategory: "Security Cameras",
    description: "High fidelity 3MP resolution CCTV lens that captures extreme details even during dark hours. Smart human detection minimizes false notifications on your smart phone apps.",
    price: 1899,
    discountPrice: 2800,
    specifications: [
      "Crisp 3 Megapixel High Definition Capture",
      "AI Human Detection & Smart Analytics",
      "Clear Infrared Night Vision (up to 15 Meters)",
      "Supports Alexa & Google Voice Commands",
      "Secure Encrypted Cloud Recording Sync"
    ],
    stockStatus: "In Stock",
    rating: 4.3,
    reviewsCount: 92,
    icon: "Eye",
    badge: "Budget Security",
    isPopular: false
  },
  {
    id: "prod-essl-biometric",
    name: "eSSL K30 Biometric Attendance System",
    brand: "eSSL",
    category: "Networking & Smart Security",
    subcategory: "Smart Biometrics",
    description: "Ideal for shops, offices, and warehouses. Biometric fingerprint system with built-in battery backup, custom attendance management software logs, and quick USB extraction.",
    price: 4800,
    discountPrice: 6500,
    specifications: [
      "1,000 Fingerprint Templates Capacity",
      "80,000 Local Logs Memory Storage",
      "USB and TCP/IP Ethernet Data Connection",
      "2-Hour Built-In Battery Power Backup",
      "Includes Attendance Report Analytics App"
    ],
    stockStatus: "In Stock",
    rating: 4.6,
    reviewsCount: 74,
    icon: "Lock",
    badge: "Office Essential",
    isPopular: false
  },
  {
    id: "prod-dell-ultrasharp",
    name: "Dell UltraSharp 27\" 4K USB-C Hub Monitor",
    brand: "Dell",
    category: "Laptops & Desktops",
    subcategory: "Professional IPS Displays",
    description: "Designed for premium color accuracy and multi-monitor setups. Features IPS Black technology, stellar contrast ratio, 100% sRGB color output depth, and a high-power 90W USB-C hub connectivity setup.",
    price: 38900,
    discountPrice: 45000,
    specifications: [
      "27-inch 4K UHD (3840 x 2160) Active IPS Black Display",
      "USB-C Hub with 90W Power Delivery and RJ45 Ethernet",
      "98% DCI-P3 and 100% sRGB Factory-Calibrated Profile",
      "VESA DisplayHDR 400 for stunning high-dynamic contrast",
      "Fully adjustable ergonomic stand with tilt, pivot, and swivel"
    ],
    stockStatus: "In Stock",
    rating: 4.8,
    reviewsCount: 95,
    icon: "Monitor",
    badge: "Designer Pick",
    isPopular: true
  },
  {
    id: "prod-lg-ultragear",
    name: "LG UltraGear 24\" 144Hz Gaming Monitor",
    brand: "LG",
    category: "IT Accessories",
    subcategory: "High-Refresh Gaming Displays",
    description: "Built for competitive high-frequency gaming action. Hosts ultra-responsive 1ms motion blur settings, AMD FreeSync premium sync filters, and customized crosshair targeting HUD overlay integrations.",
    price: 13499,
    discountPrice: 17500,
    specifications: [
      "24-inch Full HD (1920 x 1080) IPS borderless layout",
      "Ultra-smooth 144Hz Refresh Rate with 1ms MBR response",
      "AMD FreeSync Premium and Nvidia G-Sync compatibility",
      "Dynamic Action Sync and custom Black Stabilizer exposure",
      "DisplayPort and dual HDMI digital terminal connectors"
    ],
    stockStatus: "In Stock",
    rating: 4.7,
    reviewsCount: 148,
    icon: "Monitor",
    badge: "Gamers Top Choice",
    isPopular: true
  },
  {
    id: "prod-samsung-odyssey",
    name: "Samsung Odyssey G5 WQHD Curved Monitor",
    brand: "Samsung",
    category: "Retail Electronics",
    subcategory: "Curved Display Panels",
    description: "Unparalleled immersion matching the curvature of the human eye. Boasts native WQHD detail sharpness, hyper-responsive 165Hz playback, and robust HDR10 screen contrast ratios.",
    price: 22999,
    discountPrice: 28000,
    specifications: [
      "27-inch WQHD (2560 x 1440) high-definition 1000R Curve panel",
      "Rapid 165Hz Refresh Rate & 1ms MPRT Response Speed",
      "HDR10 Premium high contrast for high visual fidelity",
      "Eye Saver Mode with Flicker-Free shield protection tech",
      "AMD FreeSync Premium frame-tearing suppression system"
    ],
    stockStatus: "Low Stock",
    rating: 4.6,
    reviewsCount: 79,
    icon: "Monitor",
    badge: "Best Seller",
    isPopular: false
  }
];

export const BRANCHES: BranchOffice[] = [
  {
    type: "Corporate Head Office",
    name: `${COMPANY_NAME} - Corporate Showroom & HQ`,
    address: "2nd floor, Room No B7, Central Plazza, 41 B B Ganguly Street, Kolkata, West Bengal, 700012",
    phone: "+91 70619 91192",
    email: "info@kamtarn.com / kamtarninfocom@gmail.com"
  },
  {
    type: "Branch Office",
    name: `${COMPANY_NAME} - Dhanbad Showroom & Diagnostics`,
    address: "Shop No 8, Textile Market, Bank More, Dhanbad, Jharkhand, 826001",
    phone: "+91 70619 91192",
    email: "info@kamtarn.com / kamtarninfocom@gmail.com"
  }
];
