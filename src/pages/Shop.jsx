import { useMemo, useState } from "react";
import {
  ShoppingBag,
  ShoppingCart,
  Search,
  SlidersHorizontal,
  ArrowRight,
  ArrowUpRight,
  Star,
  ShieldCheck,
  PackageCheck,
  Headphones,
  Sparkles,
  X,
} from "lucide-react";

const sampleProducts = [
  { id: 1, name: "AeroBlack Med diffuser", category: "Commercial Aroma Diffusers", description: "Professional aroma diffusion for commercial interiors.", image: "/images/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp", badge: "Bestseller" },
  { id: 2, name: "MistBox X Diffuser", category: "Commercial Aroma Diffusers", description: "A refined scenting solution for business environments.", image: "/images/productimg/CMwebpimg/Mistbox%20X%20commercial%20Diffuser/1.webp" },
  { id: 3, name: "AeroBlack Pro Diffuser", category: "Large Area & HVAC", description: "High-performance scent diffusion for larger commercial spaces.", image: "/images/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp" },
  { id: 4, name: "AirPulse 150", category: "Large Area & HVAC", description: "Designed for consistent fragrance coverage across expansive areas.", image: "/images/productimg/CMwebpimg/AirPulse 150/1.webp" },
  { id: 5, name: "NanoPillar Diffuser", category: "Floor-Standing Aroma Diffusers", description: "A floor-standing diffuser for premium shared environments.", image: "/images/productimg/CMwebpimg/NanoPillar Diffuser/1.webp" },
  { id: 6, name: "Titan Diffuser", category: "Floor-Standing Aroma Diffusers", description: "A robust floor-standing scent solution for larger spaces.", image: "/images/productimg/CMwebpimg/Titan Diffuser/1.webp" },
  { id: 7, name: "AeroPillar Diffuser", category: "Floor-Standing Aroma Diffusers", description: "A sleek pillar-style system for professional scenting.", image: "/images/productimg/CMwebpimg/AeroPillar Diffuser/1.webp" },
  { id: 8, name: "AirPole Pro Diffuser", category: "Floor-Standing Aroma Diffusers", description: "A modern floor-standing option for continuous ambient fragrance.", image: "/images/productimg/CMwebpimg/Air%20pole%20Pro%20Floor%20Diffuser/1.webp" },
  { id: 9, name: "Vento Car", category: "Car Aroma Diffusers", description: "Compact fragrance diffusion designed for your drive.", image: "/images/productimg/CMwebpimg/VentoCar/1.webp" },
  { id: 10, name: "DriveScent", category: "Car Aroma Diffusers", description: "Bring a fresh, refined atmosphere to your vehicle.", image: "/images/productimg/CMwebpimg/DriveScent/1.webp" },
  { id: 11, name: "DeskScent", category: "Car Aroma Diffusers", description: "A compact scenting option for personal spaces and desks.", image: "/images/productimg/CMwebpimg/DeskScent/1.webp" },
  { id: 12, name: "NovaCarDiffuser", category: "Car Aroma Diffusers", description: "A contemporary diffuser for everyday journeys.", image: "/images/productimg/CMwebpimg/NovaCar%20Diffuser/1.webp" },
  { id: 13, name: "AeroCube Diffuser", category: "Wall-Mounted & Ceiling", description: "Space-conscious scent diffusion for wall or ceiling installation.", image: "/images/productimg/CMwebpimg/AeroCube Diffuser/1.webp" },
  { id: 14, name: "ZenBox Mini Diffuser", category: "Wall-Mounted & Ceiling", description: "A compact system for discreet fragrance delivery.", image: "/images/productimg/CMwebpimg/AeroCube Diffuser/1.webp" },
  { id: 15, name: "LuxePanel Diffuser", category: "Wall-Mounted & Ceiling", description: "A streamlined panel-style diffuser for modern interiors.", image: "/images/productimg/CMwebpimg/LuxePanel%20Diffuser%20wtc/1.webp" },
  { id: 16, name: "CeilAir Pro Diffuser", category: "Wall-Mounted & Ceiling", description: "A ceiling-integrated scenting option for a clean finish.", image: "/images/productimg/CMwebpimg/CeilAir Pro Diffuser/1.webp" },
  { id: 17, name: "AeroMax Pro", category: "Wall-Mounted & Ceiling", description: "A professional scent system for demanding indoor environments.", image: "/images/productimg/CMwebpimg/AeroMax Pro/1.webp" },
  { id: 18, name: "AromaDesk", category: "Desktop & Small Space", description: "Compact aroma diffusion for desks and smaller rooms.", image: "/images/productimg/CMwebpimg/AromaDesk/1.webp" },
  { id: 19, name: "OpalMist Clock Diffuser", category: "Desktop & Small Space", description: "A desktop diffuser designed for smaller personal environments.", image: "/images/productimg/CMwebpimg/OpalMist Clock Diffuser/1.webp" },
  { id: 20, name: "Natural Fragrance Diffusion", category: "Passive / No-Power Diffusers", description: "A no-power fragrance option for simple, low-maintenance scenting.", image: "/images/productimg/CMwebpimg/Natural%20Fragrance%20Diffusion%20wtc/1.webp" },
  { id: 21, name: "Aerosol Dispenser LCD", category: "Aerosol Dispensers", description: "An automatic dispenser for practical air-freshening routines.", image: "/images/productimg/CMwebpimg/Aerosol Dispensers/1.webp" },
];

const categories = [
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

const aromaOilCategories = [
  { title: "Oriental Fragrances", href: "https://www.coolmaxscent.com/oriental-aroma-oil/", image: "/images/Aroma oils img/ARABIAN BAKHOOR.webp", description: "Rich, warm fragrance profiles inspired by oriental notes." },
  { title: "Fresh Fragrances", href: "https://www.coolmaxscent.com/fresh-aroma-oil/", image: "/images/Aroma oils img/ENGLISH LAVENDER.webp", description: "Clean, uplifting scents for bright and welcoming spaces." },
  { title: "Perfumers Choice", href: "https://www.coolmaxscent.com/perfumers-choice-aroma-oil/", image: "/images/Aroma oils img/CLASSIC.webp", description: "Distinctive blends selected for signature scent concepts." },
  { title: "Fruity Fragrances", href: "https://www.coolmaxscent.com/fruity-aroma-oil/", image: "/images/Aroma oils img/FLORAL.webp", description: "Expressive fragrance profiles with a lively character." },
  { title: "Food & Beverage Fragrances", href: "https://www.coolmaxscent.com/food-and-beverage-aroma-oil/", image: "/images/Aroma oils img/TRUE COFFEE.webp", description: "Recognisable aroma profiles for cafés and hospitality spaces." },
  { title: "Premium Collection", href: "https://www.coolmaxscent.com/premium-aroma-oil/", image: "/images/Aroma oils img/EMAAR.webp", description: "Premium fragrance choices for elevated environments." },
];

const solutionCategories = [
  { title: "Scent Marketing Strategy", href: "https://www.coolmaxscent.com/scent-marketing-solutions/", number: "01", description: "Build a recognisable sensory identity for your brand." },
  { title: "Commercial Aroma Diffusion", href: "https://www.coolmaxscent.com/commercial-aroma-diffusion-solutions/", number: "02", description: "Professional scenting for hospitality, retail, and offices." },
  { title: "HVAC Scenting Solutions", href: "https://www.coolmaxscent.com/hvac-scenting-solutions/", number: "03", description: "Integrate fragrance delivery with large-area air systems." },
  { title: "Washroom Hygiene Solutions", href: "https://www.coolmaxscent.com/washroom-hygiene-solutions/", number: "04", description: "Support fresh, comfortable, high-traffic washroom spaces." },
  { title: "Car & Personal Space Scenting", href: "https://www.coolmaxscent.com/car-and-personal-space-scenting-solutions/", number: "05", description: "Compact scenting for vehicles and personal environments." },
  { title: "Maintenance & Refill Support", href: "https://www.coolmaxscent.com/maintenance-and-refill-support-services/", number: "06", description: "Keep your scenting systems maintained and performing." },
];

function getName(product) {
  return product.name || product.title || "Thoughtful find";
}

function getPrice(product) {
  const raw =
    product.salePrice ??
    product.sale_price ??
    product.price ??
    product.regular_price ??
    null;

  if (raw === null || raw === undefined || raw === "") return null;
  const value = Number(String(raw).replace(/[^0-9.]/g, ""));
  return Number.isFinite(value) ? value : null;
}

function getDescription(product) {
  const value =
    product.shortDescription ||
    product.short_description ||
    product.description ||
    "Contact our team for product specifications and pricing.";

  return String(value).replace(/<[^>]*>/g, "").trim();
}

function getCategory(product) {
  const category = product.category || product.categories;

  if (Array.isArray(category)) {
    return category[0]?.name || category[0] || "Commercial Aroma Diffusers";
  }

  if (category && typeof category === "object") {
    return category.name || "Commercial Aroma Diffusers";
  }

  return category || "Commercial Aroma Diffusers";
}

function getRating(product) {
  const rating = Number(
    product.rating ?? product.average_rating ?? product.averageRating ?? null
  );

  return Number.isFinite(rating) && rating > 0 ? rating : null;
}

function getImage(product) {
  if (Array.isArray(product.images) && product.images.length) {
    const first = product.images[0];

    if (typeof first === "string") return first;

    if (first?.src || first?.url) return first.src || first.url;
  }

  return (
    product.image ||
    product.thumbnail ||
    "/images/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp"
  );
}

function ProductTile({ product, onAdd }) {
  const name = getName(product);
  const image = getImage(product);
  const category = getCategory(product);
  const description = getDescription(product);
  const price = getPrice(product);
  const rating = getRating(product);

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-[#e8e3d8] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#cfc4aa] hover:shadow-[0_18px_45px_rgba(23,61,43,0.09)]">
      <div className="relative aspect-[4/4.2] overflow-hidden bg-[#f7f6f1] p-4 sm:p-6">
        <div className="pointer-events-none absolute inset-3 rounded-[16px] border border-white/80" />
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="relative z-[1] h-full w-full object-contain transition duration-700 ease-out group-hover:scale-[1.045]"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src =
              "/images/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp";
          }}
        />

        {product.badge && (
          <span className="absolute left-4 top-4 z-[2] rounded-full border border-[#d9d0bb] bg-white/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#173d2b] shadow-sm sm:left-5 sm:top-5">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => onAdd?.(product)}
          aria-label={`Add ${name} to cart`}
          className="absolute right-4 top-4 z-[2] flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e3d8] bg-white/95 text-[#173d2b] transition hover:border-[#173d2b] hover:bg-[#173d2b] hover:text-white sm:right-5 sm:top-5 sm:h-10 sm:w-10"
        >
          <ShoppingCart size={16} strokeWidth={1.7} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="mb-2 line-clamp-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a8355] sm:text-[10px]">
          {category}
        </p>

        <h3 className="line-clamp-2 min-h-10 text-sm font-medium leading-snug tracking-[-0.02em] text-[#173d2b] sm:text-base">
          {name}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-10 text-[11px] leading-[1.8] text-[#77796f] sm:text-xs">
          {description}
        </p>

        <div className="mt-4 flex min-h-6 flex-wrap items-center justify-between gap-2 border-t border-[#f0ede6] pt-3">
          <span className="text-[11px] font-semibold tracking-wide text-[#173d2b] sm:text-xs">
            {price !== null ? `AED ${price.toLocaleString("en-AE")}` : "Request a quote"}
          </span>

          {rating !== null && (
            <span className="flex items-center gap-1 text-[10px] text-[#6b705f] sm:text-xs">
              <Star size={12} className="fill-[#c6a45b] text-[#c6a45b]" />
              {rating.toFixed(1)}
            </span>
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => {
              if (typeof onAdd === "function") onAdd(product);
            }}
            className="flex min-h-10 min-w-0 items-center justify-center gap-1.5 rounded-full bg-[#173d2b] px-2 py-2.5 text-[9px] font-medium uppercase tracking-[0.08em] text-white transition hover:bg-[#285b41] sm:text-[10px]"
          >
            Shop Now <ArrowRight size={13} />
          </button>
          <button
            type="button"
            onClick={() => onAdd?.(product)}
            aria-label={`Add ${name} to cart`}
            className="flex min-h-10 min-w-0 items-center justify-center gap-1.5 rounded-full border border-[#deded4] bg-white px-2 py-2.5 text-[9px] font-medium uppercase tracking-[0.08em] text-[#173d2b] transition hover:border-[#173d2b] hover:bg-[#f8f8f3] sm:text-[10px]"
          >
            <ShoppingCart size={13} strokeWidth={1.7} /> Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Shop({
  products = [],
  onAdd,
  title = "Explore Our Scenting Systems",
  subtitle = "Discover professional aroma diffusers for homes, hospitality, retail, and commercial environments.",
}) {
  const [category, setCategory] = useState("All Systems");
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState("");

  // Use the supplied Cool Max Scent catalogue as the source of truth.
  // Keep the products prop in the signature for compatibility with existing routes.
  const allProducts = sampleProducts;

  const filteredProducts = useMemo(() => {
    let list = [...allProducts];

    if (category !== "All Systems") {
      list = list.filter(
        (product) =>
          getCategory(product).toLowerCase() === category.toLowerCase()
      );
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      list = list.filter((product) =>
        [getName(product), getDescription(product), getCategory(product)]
          .join(" ")
          .toLowerCase()
          .includes(query)
      );
    }

    if (sort === "price-low") {
      list.sort((a, b) => (getPrice(a) ?? Number.POSITIVE_INFINITY) - (getPrice(b) ?? Number.POSITIVE_INFINITY));
    } else if (sort === "price-high") {
      list.sort((a, b) => (getPrice(b) ?? -1) - (getPrice(a) ?? -1));
    } else if (sort === "name") {
      list.sort((a, b) => getName(a).localeCompare(getName(b)));
    } else if (sort === "rating") {
      list.sort((a, b) => getRating(b) - getRating(a));
    } else if (sort === "newest") {
      list.reverse();
    }

    return list;
  }, [allProducts, category, search, sort]);

  const specialPicks = [...allProducts]
    .sort((a, b) => getRating(b) - getRating(a))
    .slice(0, 4);

  const collectionCards = [
    {
      title: "Commercial Aroma Diffusers",
      subtitle: "Professional scenting for business",
      image: "/images/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp",
    },
    {
      title: "Large Area & HVAC",
      subtitle: "Consistent coverage for large spaces",
      image: "/images/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp",
    },
    {
      title: "Car Aroma Diffusers",
      subtitle: "Fragrance for every journey",
      image: "/images/productimg/CMwebpimg/VentoCar/1.webp",
    },
    {
      title: "Wall-Mounted & Ceiling",
      subtitle: "Discreet, integrated scenting",
      image: "/images/productimg/CMwebpimg/AeroCube Diffuser/1.webp",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-[#faf9f5] text-[#173d2b]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .coolmax-shop,
        .coolmax-shop * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        .coolmax-shop .product-grid {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .coolmax-shop .product-grid > * {
          min-width: 0;
          opacity: 1;
          visibility: visible;
          transform: none;
        }

        @media (min-width: 640px) {
          .coolmax-shop .product-grid {
            gap: 20px;
          }
        }

        @media (min-width: 1024px) {
          .coolmax-shop .product-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 24px;
          }
        }

        .coolmax-shop img {
          display: block;
          max-width: 100%;
        }

        .coolmax-shop button,
        .coolmax-shop a,
        .coolmax-shop input,
        .coolmax-shop select {
          -webkit-tap-highlight-color: transparent;
        }

        .coolmax-shop button:focus-visible,
        .coolmax-shop a:focus-visible,
        .coolmax-shop input:focus-visible,
        .coolmax-shop select:focus-visible {
          outline: 2px solid #b49a63;
          outline-offset: 3px;
        }

        .coolmax-shop .soft-grain {
          background-image: radial-gradient(rgba(255,255,255,.12) .7px, transparent .7px);
          background-size: 5px 5px;
        }

        @media (max-width: 380px) {
          .coolmax-shop .product-grid {
            gap: 8px;
          }

          .coolmax-shop .product-card-content {
            padding: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .coolmax-shop *,
          .coolmax-shop *::before,
          .coolmax-shop *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="coolmax-shop">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#173d2b] px-5 py-14 text-white sm:px-8 sm:py-24 lg:py-28">
          <div className="soft-grain pointer-events-none absolute inset-0 opacity-40" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="mb-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-[#d7c49a] sm:text-xs">
                <Sparkles size={15} />
                COOL MAX SCENT SYSTEMS
              </p>

              <h1 className="max-w-2xl text-4xl leading-[1.15] sm:text-6xl lg:text-7xl">
                Explore Our Scenting Systems.
                <span className="mt-2 block italic text-[#d7c49a]">
                  Premium scent experiences.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                Discover professional aroma diffusers, premium fragrance oils,
                and end-to-end scenting solutions for commercial and residential
                environments.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#all-products"
                  className="inline-flex items-center gap-3 rounded-full bg-[#d7c49a] px-6 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#173d2b] transition hover:bg-white"
                >
                  Explore collection
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#featured-collections"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-xs text-white transition hover:bg-white/10"
                >
                  Our collections
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-5 text-xs text-white/70">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#d7c49a]" />
                  Professional-grade systems
                </span>
                <span className="flex items-center gap-2">
                  <PackageCheck size={16} className="text-[#d7c49a]" />
                  Expert consultation
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-3 rounded-[40%] border border-white/10 sm:-inset-4" />
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=90"
                alt="Thoughtfully styled living space"
                className="relative h-[280px] w-full rounded-3xl object-cover sm:h-[430px]"
              />
              <div className="absolute -bottom-4 left-3 max-w-[220px] rounded-2xl bg-[#f5f0e5] p-4 text-[#173d2b] shadow-xl sm:bottom-5 sm:left-8 sm:p-5">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#8b7850]">
                  SCENTING, REIMAGINED
                </p>
                <p className="mt-2 text-lg font-medium">
                  Designed for your space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ALL PRODUCTS */}
        <section
          id="all-products"
          className="scroll-mt-6 border-y border-[#e8e4d9] bg-[#f4f2eb] px-3 py-12 sm:px-8 sm:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center sm:mb-12">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a28a58]">
                THE COOL MAX SCENT RANGE
              </p>
              <h2 className="text-3xl sm:text-5xl">{title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#77796f]">
                {subtitle}
              </p>
            </div>

            {/* Category filters */}
            <div className="mb-5 flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full border px-3 py-2 text-[10px] transition sm:px-4 sm:text-xs ${
                    category === item
                      ? "border-[#173d2b] bg-[#173d2b] text-white"
                      : "border-[#dcd8cc] bg-white text-[#536052] hover:border-[#173d2b]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Search and sort */}
            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_auto]">
              <label className="flex min-w-0 items-center gap-2 rounded-xl border border-[#ddd9ce] bg-white px-4 py-3">
                <Search size={16} className="shrink-0 text-[#7b8277]" />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products..."
                  aria-label="Search products"
                  className="w-full min-w-0 bg-transparent text-xs outline-none placeholder:text-[#9a9b91]"
                />
                {search && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => setSearch("")}
                  >
                    <X size={14} />
                  </button>
                )}
              </label>

              <label className="flex min-w-0 items-center gap-2 rounded-xl border border-[#ddd9ce] bg-white px-4 py-3">
                <SlidersHorizontal
                  size={15}
                  className="shrink-0 text-[#7b8277]"
                />
                <span className="shrink-0 text-xs text-[#6d7469]">Sort</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  aria-label="Sort products"
                  className="min-w-0 flex-1 bg-transparent text-xs font-medium outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Recently added</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                  <option value="rating">Top rated</option>
                  <option value="name">Name A–Z</option>
                </select>
              </label>
            </div>

            <div className="mb-5 flex items-center justify-between gap-3">
              <p className="text-xs text-[#77796f]">
                Showing{" "}
                <span className="font-semibold text-[#173d2b]">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>

              {(category !== "All Systems" || search) && (
                <button
                  type="button"
                  onClick={() => {
                    setCategory("All Systems");
                    setSearch("");
                  }}
                  className="shrink-0 text-xs font-medium underline underline-offset-4"
                >
                  Clear filters
                </button>
              )}
            </div>

            {/* Important: always-visible product grid; no scroll-reveal hiding */}
            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((product, index) => (
                  <ProductTile
                    key={product.id ?? product.slug ?? `${getName(product)}-${index}`}
                    product={product}
                    onAdd={onAdd}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#d5d0c3] bg-white px-5 py-16 text-center">
                <Search size={30} className="mx-auto text-[#a28a58]" />
                <h3 className="mt-5 text-2xl">No products found</h3>
                <p className="mt-3 text-sm text-[#77796f]">
                  Try another search or browse the full collection.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All Systems");
                  }}
                  className="mt-6 rounded-full bg-[#173d2b] px-6 py-3 text-xs font-semibold text-white"
                >
                  View all products
                </button>
              </div>
            )}
          </div>
        </section>


        {/* FEATURED COLLECTIONS */}
        <section
          id="featured-collections"
          className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-24"
        >
          <div className="mb-8">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a28a58]">
              EXPLORE OUR SYSTEMS
            </p>
            <h2 className="text-3xl sm:text-4xl">Scenting solutions by application</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#77796f]">
              Choose the right scenting system for your space and coverage requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {collectionCards.map((item) => (
              <button
                type="button"
                key={item.title}
                onClick={() => {
                  setCategory(item.title);
                  document
                    .getElementById("all-products")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative min-h-[210px] overflow-hidden rounded-2xl bg-[#eae6dc] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b49a63] sm:min-h-[300px] sm:rounded-3xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102b1e]/90 via-[#102b1e]/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-6">
                  <p className="text-[9px] text-white/70 sm:text-[10px]">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 text-sm font-medium leading-tight sm:text-xl">
                    {item.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-[10px] sm:gap-2 sm:text-xs">
                    Explore <ArrowUpRight size={14} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* SPECIAL CATEGORIES: AROMA OILS + SOLUTIONS */}
        <section id="special-categories" className="bg-[#f4f2eb] px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-2xl">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a28a58]">DISCOVER MORE FROM COOL MAX SCENT</p>
              <h2 className="text-3xl leading-tight sm:text-4xl">Fragrance collections & tailored solutions</h2>
              <p className="mt-3 text-sm leading-7 text-[#77796f]">Explore specialist aroma oils or find a scenting service aligned with your space, brand, and operational needs.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <details open className="group overflow-hidden rounded-2xl border border-[#e2dccf] bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-[#173d2b] px-5 py-5 text-white sm:px-7">
                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-[#d7c49a]">SPECIAL CATEGORY</span>
                    <span className="mt-1 block text-xl font-medium sm:text-2xl">Aroma Oils</span>
                    <span className="mt-1 block text-xs text-white/65">Explore fragrance families and premium blends</span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 transition group-open:rotate-180"><ArrowRight size={17} className="rotate-90" /></span>
                </summary>
                <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
                  {aromaOilCategories.map((item) => (
                    <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group/oil flex min-w-0 items-center gap-3 rounded-xl border border-[#eee9df] p-3 transition hover:border-[#bba36e] hover:bg-[#faf8f2]">
                      <div className="h-[76px] w-[66px] shrink-0 overflow-hidden rounded-lg bg-[#f0ece3]">
                        <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover/oil:scale-105" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/images/Aroma oils img/CLASSIC.webp"; }} />
                      </div>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-[#173d2b]">{item.title}</span>
                        <span className="mt-1 block text-[11px] leading-5 text-[#77796f]">{item.description}</span>
                      </span>
                      <ArrowUpRight size={16} className="shrink-0 text-[#a28a58] transition group-hover/oil:-translate-y-0.5 group-hover/oil:translate-x-0.5" />
                    </a>
                  ))}
                </div>
                <div className="border-t border-[#eee9df] px-5 py-4 sm:px-6">
                  <a href="https://www.coolmaxscent.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#173d2b] hover:text-[#9b7b3e]">Explore all aroma oils <ArrowRight size={14} /></a>
                </div>
              </details>

              <details open className="group overflow-hidden rounded-2xl border border-[#e2dccf] bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-[#ebe4d5] px-5 py-5 text-[#173d2b] sm:px-7">
                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.22em] text-[#927643]">SPECIAL CATEGORY</span>
                    <span className="mt-1 block text-xl font-medium sm:text-2xl">Scenting Solutions</span>
                    <span className="mt-1 block text-xs text-[#6e7168]">From strategy and installation to ongoing support</span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b8a47a] transition group-open:rotate-180"><ArrowRight size={17} className="rotate-90" /></span>
                </summary>
                <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
                  {solutionCategories.map((item) => (
                    <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group/solution rounded-xl border border-[#eee9df] p-4 transition hover:border-[#bba36e] hover:bg-[#faf8f2]">
                      <span className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold tracking-[0.18em] text-[#a28a58]">{item.number}</span>
                        <ArrowUpRight size={16} className="text-[#a28a58] transition group-hover/solution:-translate-y-0.5 group-hover/solution:translate-x-0.5" />
                      </span>
                      <span className="mt-3 block text-sm font-semibold leading-5 text-[#173d2b]">{item.title}</span>
                      <span className="mt-2 block text-[11px] leading-5 text-[#77796f]">{item.description}</span>
                    </a>
                  ))}
                </div>
                <div className="border-t border-[#eee9df] px-5 py-4 sm:px-6">
                  <a href="https://www.coolmaxscent.com/solution/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#173d2b] hover:text-[#9b7b3e]">Explore all solutions <ArrowRight size={14} /></a>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* SECTION 4: TRUST STRIP */}
        <section className="border-y border-[#e8e4d9] bg-white px-5 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {[
              {
                number: "01",
                title: "Tailored solutions",
                description: "Scenting built around your space",
                icon: <Sparkles size={19} />,
              },
              {
                number: "02",
                title: "Performance focused",
                description: "Systems selected for your needs",
                icon: <ShieldCheck size={19} />,
              },
              {
                number: "03",
                title: "Multiple applications",
                description: "From homes to commercial spaces",
                icon: <PackageCheck size={19} />,
              },
              {
                number: "04",
                title: "Ongoing support",
                description: "Guidance for your scenting journey",
                icon: <Headphones size={19} />,
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group flex min-w-0 items-start gap-3 rounded-2xl border border-[#e8e4d9] bg-[#faf9f5] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#c8b582] hover:shadow-md sm:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#173d2b] text-[#d7c49a] transition group-hover:bg-[#285b41]">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a28a58]">
                    {item.number}
                  </p>
                  <h3 className="mt-1 text-xs font-semibold text-[#173d2b] sm:text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[10px] leading-5 text-[#77796f] sm:text-xs">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY COOL MAX SCENT */}
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a28a58]">
                THE COOL MAX SCENT DIFFERENCE
              </p>
              <h2 className="max-w-lg text-3xl leading-tight sm:text-5xl">
                Create a distinctive atmosphere for every customer interaction.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#77796f]">
                From signature scent strategies to dependable diffuser maintenance,
                our solutions are designed around your environment and business goals.
              </p>
              <a
                href="#all-products"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#173d2b] px-6 py-3.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#285b41]"
              >
                Find your favourites <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <Sparkles size={22} />,
                  title: "Space-led recommendations",
                  description: "Choose systems based on your environment and coverage needs.",
                },
                {
                  icon: <ShieldCheck size={22} />,
                  title: "Reliable performance",
                  description: "Product guidance to help you make an informed decision.",
                },
                {
                  icon: <PackageCheck size={22} />,
                  title: "Flexible applications",
                  description: "Options for homes, offices, hospitality, retail, and vehicles.",
                },
                {
                  icon: <Headphones size={22} />,
                  title: "Expert support",
                  description: "Get guidance on selection, setup, refills, and maintenance.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#e8e4d9] bg-white p-5 sm:p-7"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#edf0e8] text-[#173d2b]">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-[#77796f]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIAL PICKS */}
        <section className="border-t border-[#e8e4d9] bg-white px-3 py-12 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a28a58]">
                FEATURED SYSTEMS
              </p>
              <h2 className="text-3xl sm:text-4xl">Popular scenting systems</h2>
              <p className="mt-3 text-sm text-[#77796f]">
                Explore solutions for different space sizes and scenting requirements.
              </p>
            </div>

            <div className="product-grid">
              {specialPicks.map((product, index) => (
                <ProductTile
                  key={`special-${product.id ?? getName(product)}-${index}`}
                  product={product}
                  onAdd={onAdd}
                />
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => {
                  setCategory("All Systems");
                  setSearch("");
                  setSort("featured");
                  document
                    .getElementById("all-products")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-full border border-[#173d2b] px-6 py-3 text-xs font-semibold text-[#173d2b] transition hover:bg-[#173d2b] hover:text-white"
              >
                Browse all products <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="px-4 pb-14 sm:px-8 sm:pb-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#173d2b] px-5 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="soft-grain pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d7c49a]">
                LET’S DESIGN YOUR ATMOSPHERE
              </p>
              <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-5xl">
                Experience Cool Max Scent in Your Space.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/70">
                Get expert guidance on selecting the right fragrance, diffuser system,
                and support plan for your home or business environment.
              </p>
              <a
                href="#all-products"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#d7c49a] px-7 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#173d2b] transition hover:bg-white"
              >
                Shop All Systems <ArrowRight size={16} />
              </a>
              <a
                href="mailto:secretary@coolmaxscent.com"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                Contact Our Experts <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#e8e4d9] bg-[#faf9f5] px-5 py-6 text-center sm:px-8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#7b8277]">
            Cool Max Scent — Professional Scent Marketing & Aroma Solutions
          </p>
        </footer>
      </div>
    </main>
  );
}