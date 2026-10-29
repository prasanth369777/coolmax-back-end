// ============================================================
// COOL MAX SCENT — PRODUCT CATALOGUE
// File: src/data/products.js
// Images: public/images/productimg/CMwebpimg/
// ============================================================

export const systemCategories = [
  "All Systems",
  "Commercial Aroma Diffusers",
  "Large Area & HVAC",
  "Floor-Standing Aroma Diffusers",
  "Car Aroma Diffusers",
  "Wall-Mounted & Ceiling",
  "Desktop & Small Space",
  "Passive / No-Power Diffusers",
  "Aerosol Dispensers",
];

// ------------------------------------------------------------
// PRODUCT DATA
// Folder names must match the actual folders in public/images.
// ------------------------------------------------------------

const productData = [
  {
    id: "aeroblack-med",
    name: "AeroBlack Med diffuser",
    folder: "AeroBlack Med diffuser",
    category: "Commercial Aroma Diffusers",
    description:
      "Professional aroma diffusion for commercial interiors.",
    tag: "Bestseller",
  },
  {
    id: "mistbox-x",
    name: "MistBox X Diffuser",
    folder: "Mistbox X commercial Diffuser",
    category: "Commercial Aroma Diffusers",
    description:
      "A refined scenting solution for business environments.",
    tag: "New",
  },
  {
    id: "aeroblack-pro",
    name: "AeroBlack Pro Diffuser",
    folder: "AeroBlack Pro Diffuser",
    category: "Large Area & HVAC",
    description:
      "High-performance scent diffusion for larger commercial spaces.",
  },
  {
    id: "airpulse-150",
    name: "AirPulse 150",
    folder: "AirPulse 150",
    category: "Large Area & HVAC",
    description:
      "Designed for consistent fragrance coverage across expansive areas.",
  },
  {
    id: "nanopillar",
    name: "NanoPillar Diffuser",
    folder: "NanoPillar Diffuser",
    category: "Floor-Standing Aroma Diffusers",
    description:
      "A floor-standing diffuser for premium shared environments.",
  },
  {
    id: "titan",
    name: "Titan Diffuser",
    folder: "Titan Diffuser",
    category: "Floor-Standing Aroma Diffusers",
    description:
      "A robust floor-standing scent solution for larger spaces.",
  },
  {
    id: "aeropillar",
    name: "AeroPillar Diffuser",
    folder: "AeroPillar Floor Diffuser",
    category: "Floor-Standing Aroma Diffusers",
    description:
      "A sleek pillar-style system for professional scenting.",
  },
  {
    id: "airpole-pro",
    name: "AirPole Pro Diffuser",
    folder: "Air pole Pro Floor Diffuser",
    category: "Floor-Standing Aroma Diffusers",
    description:
      "A modern floor-standing option for continuous ambient fragrance.",
  },
  {
    id: "vento-car",
    name: "Vento Car",
    folder: "VentoCar",
    category: "Car Aroma Diffusers",
    description:
      "Compact fragrance diffusion designed for your drive.",
  },
  {
    id: "drivescent",
    name: "DriveScent",
    folder: "DriveScent",
    category: "Car Aroma Diffusers",
    description:
      "Bring a fresh, refined atmosphere to your vehicle.",
  },
  {
    id: "deskscent",
    name: "DeskScent",
    folder: "DeskScent",
    category: "Car Aroma Diffusers",
    description:
      "A compact scenting option for personal spaces and desks.",
  },
  {
    id: "nova-car",
    name: "NovaCarDiffuser",
    folder: "NovaCarDiffuser",
    category: "Car Aroma Diffusers",
    description:
      "A contemporary diffuser for everyday journeys.",
  },
  {
    id: "aerocube",
    name: "AeroCube Diffuser",
    folder: "AeroCube Diffuser",
    category: "Wall-Mounted & Ceiling",
    description:
      "Space-conscious scent diffusion for wall or ceiling installation.",
  },
  {
    id: "zenbox-mini",
    name: "ZenBox Mini Diffuser",
    folder: "ZenBox Mini Diffuser",
    category: "Wall-Mounted & Ceiling",
    description:
      "A compact system for discreet fragrance delivery.",
  },
  {
    id: "luxepanel",
    name: "LuxePanel Diffuser",
    folder: "LuxePanel Diffuser wtc",
    category: "Wall-Mounted & Ceiling",
    description:
      "A streamlined panel-style system for modern interiors.",
  },
  {
    id: "ceilair-pro",
    name: "CeilAir Pro Diffuser",
    folder: "CeilAir Pro Diffuser",
    category: "Wall-Mounted & Ceiling",
    description:
      "A ceiling-integrated scenting option for a clean finish.",
  },
  {
    id: "aeromax-pro",
    name: "AeroMax Pro",
    folder: "AeroMax Pro",
    category: "Wall-Mounted & Ceiling",
    description:
      "A professional scent system for demanding indoor environments.",
  },
  {
    id: "aromadesk",
    name: "AromaDesk",
    folder: "AromaDesk",
    category: "Desktop & Small Space",
    description:
      "Compact aroma diffusion for desks and smaller rooms.",
  },
  {
    id: "opalmist-clock",
    name: "OpalMist Clock Diffuser",
    folder: "OpalMist Clock Diffuser",
    category: "Desktop & Small Space",
    description:
      "A desktop diffuser designed for smaller personal environments.",
  },
  {
    id: "natural-fragrance",
    name: "Natural Fragrance Diffusion",
    folder: "Natural Fragrance Diffusion wtc",
    category: "Passive / No-Power Diffusers",
    description:
      "A no-power fragrance option for simple, low-maintenance scenting.",
  },
  {
    id: "aerosol-lcd",
    name: "Aerosol Dispenser LCD",
    folder: "Aerosol Dispensers",
    category: "Aerosol Dispensers",
    description:
      "An automatic dispenser for practical air-freshening routines.",
  },
];

// ------------------------------------------------------------
// IMAGE PATHS
// URL-encode folder names so spaces work correctly in URLs.
// Assumes each product's main image is named 1.webp.
// ------------------------------------------------------------

const getProductImage = (folder) =>
  `/images/productimg/CMwebpimg/${encodeURIComponent(folder)}/1.webp`;

// ------------------------------------------------------------
// EXPORT PRODUCTS
// ------------------------------------------------------------

export const products = productData.map((product) => {
  const image = getProductImage(product.folder);

  return {
    ...product,
    slug: product.id,
    image,
    thumbnail: image,
    images: [
      {
        src: image,
        alt: product.name,
      },
    ],
    shortDescription: product.description,
    price: null,
    salePrice: null,
    oldPrice: null,
    stock: 10,
    inStock: true,
    status: "Published",
    tone: "Professional Scenting",
  };
});

// ------------------------------------------------------------
// COLLECTIONS — USED BY THE HOMEPAGE
// ------------------------------------------------------------

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const collections = systemCategories
  .filter((category) => category !== "All Systems")
  .map((category) => {
    const categoryProducts = products.filter(
      (product) => product.category === category
    );

    return {
      name: category,
      count: `${categoryProducts.length} ${
        categoryProducts.length === 1 ? "product" : "products"
      }`,
      image: categoryProducts[0]?.image || "",
      slug: slugify(category),
    };
  });

// ------------------------------------------------------------
// PRICE FORMATTER
// ------------------------------------------------------------

export const formatPrice = (price) => {
  if (price === null || price === undefined || price === "") {
    return "Request a quote";
  }

  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 2,
  }).format(Number(price));
};

export default products;