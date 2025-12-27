import type { Product, USP, ExportCapability } from "@/types";

export const products: Product[] = [
  {
    id: "fresh-garlic",
    name: "Premium Fresh Garlic Bulbs",
    description: "Harvested at peak maturity to deliver bold flavor, rich aroma, and exceptional quality. Grown using sustainable farming practices.",
    features: [
      "Rich, full-bodied flavor",
      "Naturally grown with no synthetic chemicals",
      "Hand-sorted for premium quality",
      "Long shelf life when stored correctly",
      "Export-grade packaging"
    ],
    packaging: ["250g", "500g", "1kg", "Bulk (5kg–20kg)"],
    shelfLife: "8-12 months in proper storage",
    useCases: ["Cooking & seasoning", "Health benefits", "Home use", "Restaurant kitchens"],
    image: "/images/fresh-garlic.jpg"
  },
  {
    id: "garlic-powder",
    name: "Pure Garlic Powder",
    description: "Made from finely ground, dehydrated garlic. Delivers intense aroma and flavor in every spoonful.",
    features: [
      "No additives or preservatives",
      "Fine texture for easy blending",
      "Strong natural taste and aroma",
      "Extended shelf life",
      "Versatile for home and restaurant use"
    ],
    packaging: ["100g", "250g", "500g", "1kg"],
    shelfLife: "24 months in airtight packaging",
    useCases: ["Seasoning blends", "Marinades", "Dry rubs", "Snack foods"],
    image: "/images/garlic-powder.jpg"
  },
  {
    id: "garlic-paste",
    name: "Fresh Garlic Paste",
    description: "Made from freshly peeled garlic and processed to preserve its natural flavor and aroma. Convenient and ready to use.",
    features: [
      "Smooth texture and strong flavor",
      "No artificial colors",
      "Time-saving and kitchen-friendly",
      "Refrigeration-stable",
      "Airtight container packaging"
    ],
    packaging: ["200g", "500g", "1kg"],
    shelfLife: "12 months refrigerated",
    useCases: ["Curries", "Marinades", "Sauces", "Quick cooking"],
    image: "/images/garlic-paste.jpg"
  },
  {
    id: "garlic-flakes",
    name: "Premium Garlic Flakes",
    description: "Dehydrated garlic flakes made from fresh, hand-picked cloves. Ideal for soups, sauces, and food industry use.",
    features: [
      "Crisp, fresh, and aromatic",
      "Easy to store and transport",
      "Rehydrates quickly when cooked",
      "No added chemicals",
      "Perfect for spice blends"
    ],
    packaging: ["100g", "250g", "500g", "1kg"],
    shelfLife: "18 months in dry storage",
    useCases: ["Soups & sauces", "Seasoning mixes", "Commercial kitchens", "Food processing"],
    image: "/images/garlic-flakes.jpg"
  }
];

export const usps: USP[] = [
  {
    id: "certifications",
    title: "Export Certifications",
    description: "GST, FSSAI & Export Code (User Progress) with full documentation support for international trade",
    icon: "shield-check"
  },
  {
    id: "quality",
    title: "Hand-Sorted Premium Quality",
    description: "Meticulously selected garlic ensuring only the finest bulbs reach our customers",
    icon: "hand"
  },
  {
    id: "hygienic",
    title: "Hygienic Processing",
    description: "State-of-the-art facilities with strict quality control and hygiene standards",
    icon: "sparkles"
  },
  {
    id: "supply-chain",
    title: "Strong Supply Chain",
    description: "Reliable delivery network with container-load capabilities to UAE ports",
    icon: "truck"
  },
  {
    id: "shelf-life",
    title: "Extended Shelf Life",
    description: "Moisture-controlled packaging ensuring freshness throughout transportation",
    icon: "clock"
  },
  {
    id: "sustainable",
    title: "Sustainable Farming",
    description: "Natural cultivation methods with no synthetic chemicals, respecting the land",
    icon: "leaf"
  }
];

export const exportCapabilities: ExportCapability[] = [
  {
    id: "container-loads",
    title: "Full Container Loads",
    description: "Complete FCL shipments with optimized packaging for bulk orders",
    icon: "container"
  },
  {
    id: "trial-orders",
    title: "Trial Orders Available",
    description: "Sample quantities for new buyers to test quality before bulk purchases",
    icon: "package"
  },
  {
    id: "uae-delivery",
    title: "Direct UAE Delivery",
    description: "Established shipping routes to major UAE ports including Dubai and Abu Dhabi",
    icon: "ship"
  },
  {
    id: "packaging",
    title: "Moisture-Proof Packaging",
    description: "Specialized packaging designed for long-distance shipping and climate protection",
    icon: "package-2"
  },
  {
    id: "support",
    title: "Export Documentation Support",
    description: "Full assistance with customs, shipping, and regulatory requirements",
    icon: "headphones"
  }
];