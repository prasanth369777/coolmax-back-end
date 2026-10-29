import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ShoppingBag,
  Star,
  Leaf,
  PackageCheck,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Mail,
  Play,
  Pause,
} from "lucide-react";
import { collections } from "../data/products";

const principles = [
  {
    icon: Leaf,
    title: "Professional scenting solutions",
    description:
      "Explore aroma diffuser systems designed for homes, hotels, offices, and commercial spaces.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable product information",
    description:
      "Compare diffuser categories and find a scenting system suited to your space.",
  },
  {
    icon: PackageCheck,
    title: "Solutions for every space",
    description:
      "Explore commercial, HVAC, residential, car, and small-space aroma diffuser systems.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing service and support",
    description:
      "Get support with consultation, installation, refills, maintenance, and technical adjustments.",
  },
];

const intentions = [
  {
    number: "01",
    title: "Commercial spaces",
    description: "Create a welcoming atmosphere in hotels, offices, malls, and business spaces.",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=700&q=80",
  },
  {
    number: "02",
    title: "Homes & apartments",
    description: "Discover discreet scenting systems for everyday comfort at home.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80",
  },
  {
    number: "03",
    title: "HVAC & large areas",
    description: "Distribute fragrance across large indoor environments with integrated systems.",
    image:
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=700&q=80",
  },
];

const faqs = [
  {
    question: "How do I choose the right scent diffuser?",
    answer:
      "Contact Cool Max Scent for a consultation. Our team can understand your space, coverage needs, and scenting goals before recommending a suitable system.",
  },
  {
    question: "Do you provide commercial and HVAC scenting?",
    answer:
      "Yes. Our range includes commercial aroma diffusers and HVAC-integrated systems for suitable large-area environments.",
  },
  {
    question: "Do you provide installation and maintenance?",
    answer:
      "Contact our team to discuss installation, fragrance refills, cleaning, technical calibration, and ongoing support options.",
  },
  {
    question: "Can you help with scent branding?",
    answer:
      "Yes. We help businesses select fragrance profiles that complement their brand identity and customer experience.",
  },
  {
    question: "How can I request a consultation?",
    answer:
      "Use the enquiry form or contact Cool Max Scent through the contact details listed on this website to discuss your space and requirements.",
  },
];

const youtubeVideos = [
  {
    id: "YOUR_YOUTUBE_VIDEO_ID_1",
    title: "The Cool Max Scent Story",
    category: "OUR EXPERTISE",
  },
  {
    id: "YOUR_YOUTUBE_VIDEO_ID_2",
    title: "Scenting for Everyday Spaces",
    category: "SCENTING",
  },
  {
    id: "YOUR_YOUTUBE_VIDEO_ID_3",
    title: "Explore Aroma Diffuser Systems",
    category: "PRODUCT RANGE",
  },
  {
    id: "YOUR_YOUTUBE_VIDEO_ID_4",
    title: "The Science of Scent Marketing",
    category: "SENSORY BRANDING",
  },
  {
    id: "YOUR_YOUTUBE_VIDEO_ID_5",
    title: "Commercial Scent Solutions",
    category: "SOLUTIONS",
  },
];

const formatPrice = (value) => {
  if (value === undefined || value === null || value === "") return "";
  if (typeof value === "string") return value;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
};

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div className={`mb-10 ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-[10px] font-semibold tracking-[0.24em] text-[#a47b3d]">
        {eyebrow}
      </p>

      <h2 className="font-['Poppins',sans-serif] text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#77776d]">
          {description}
        </p>
      )}
    </div>
  );
}

function ProductCard({ product, onAdd }) {
  const image =
    product.image ||
    product.images?.[0]?.src ||
    product.images?.[0]?.url ||
    product.thumbnail ||
    "";

  const name = product.name || product.title || "Cool Max Scent Diffuser";
  const price = product.price ?? product.salePrice ?? product.sale_price;

  const oldPrice =
    product.oldPrice ??
    product.regularPrice ??
    product.regular_price ??
    null;

  const description =
    product.shortDescription ||
    product.short_description ||
    product.description ||
    "";

  const productUrl = product.slug
    ? `/product/${product.slug}`
    : product.id
      ? `/product/${product.id}`
      : "/shop";

  const outOfStock =
    product.status === "Out of stock" ||
    product.inStock === false ||
    product.in_stock === false ||
    product.stock_status === "outofstock";

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-[#e8e3d8] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#cfc4aa] hover:shadow-[0_16px_40px_rgba(23,61,43,0.09)]">
      <Link
        to={productUrl}
        className="relative block overflow-hidden bg-[#f5f4ef]"
      >
        <div className="aspect-[4/4.25] overflow-hidden p-3 sm:p-4">
          {image ? (
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="h-full w-full object-contain transition duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-[#a18b68]">
              <ShoppingBag size={38} strokeWidth={1} />
            </div>
          )}
        </div>

        {product.tag && (
          <span className="absolute left-3 top-3 rounded-sm bg-[#254634] px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white sm:left-4 sm:top-4">
            {product.tag}
          </span>
        )}

        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#e8e3d8] bg-white text-[#254634] shadow-sm transition duration-300 group-hover:border-[#254634] group-hover:bg-[#254634] group-hover:text-white sm:bottom-4 sm:right-4 sm:h-10 sm:w-10">
          <ArrowUpRight size={17} strokeWidth={1.7} />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <p className="mb-1.5 line-clamp-1 text-[9px] font-medium uppercase tracking-[0.13em] text-[#a18b68]">
          {product.category || "Professional scenting"}
        </p>

        <Link to={productUrl}>
          <h3 className="line-clamp-2 min-h-10 text-[13px] font-medium leading-snug tracking-[-0.015em] text-[#233a2b] transition-colors hover:text-[#a47b3d] sm:text-sm">
            {name}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-2 min-h-9 text-[10px] leading-[1.7] text-[#817b70] sm:text-[11px]">
          {typeof description === "string" && description.trim()
            ? description.replace(/<[^>]*>/g, "")
            : "Professional aroma diffusion designed for refined spaces."}
        </p>

        <div className="mt-3 flex min-h-5 flex-wrap items-center gap-2">
          {price !== undefined && price !== null && price !== "" ? (
            <>
              <span className="text-xs font-semibold text-[#254634] sm:text-sm">
                {formatPrice(price)}
              </span>

              {oldPrice &&
                Number(oldPrice) > Number(price) && (
                  <span className="text-[10px] text-[#a59c8f] line-through">
                    {formatPrice(oldPrice)}
                  </span>
                )}
            </>
          ) : (
            <span className="text-[10px] font-medium text-[#8c7955] sm:text-xs">
              Request a quote
            </span>
          )}
        </div>

        <div className="mt-4 grid grid-cols-[1fr_38px] gap-2 sm:grid-cols-[1fr_40px]">
          <Link
            to={productUrl}
            className="flex min-h-9 items-center justify-center gap-1.5 rounded-sm bg-[#254634] px-2 text-[8px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#a47b3d] sm:min-h-10 sm:gap-2 sm:text-[9px]"
          >
            View product
            <ArrowUpRight size={13} />
          </Link>

          <button
            type="button"
            aria-label={`Add ${name} to cart`}
            title={outOfStock ? "Currently unavailable" : "Add to cart"}
            disabled={outOfStock}
            onClick={() => {
              if (!outOfStock && onAdd) onAdd(product);
            }}
            className="flex min-h-9 items-center justify-center rounded-sm border border-[#d9ded5] text-[#254634] transition hover:border-[#254634] hover:bg-[#254634] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-10"
          >
            <ShoppingBag size={16} strokeWidth={1.6} />
          </button>
        </div>

        {outOfStock && (
          <p className="mt-2 text-[10px] text-red-700">
            Currently unavailable
          </p>
        )}
      </div>
    </article>
  );
}

export default function Home({
  products = [],
  bestsellers,
  onAdd,
}) {
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const collectionTrack = useRef(null);

  const allProducts = Array.isArray(products) ? products : [];
  const featured = allProducts.slice(0, 10);

  const popularProducts =
    Array.isArray(bestsellers) && bestsellers.length > 0
      ? bestsellers.slice(0, 5)
      : allProducts.slice(0, 5);

  useEffect(() => {
    const track = collectionTrack.current;
    if (!track || collections.length < 2) return;

    let frame;
    let previousTime = 0;

    const scroll = (time) => {
      if (!track.matches(":hover") && previousTime) {
        const delta = Math.min(time - previousTime, 40);
        track.scrollLeft += delta * 0.035;

        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) {
          track.scrollLeft = 0;
        }
      }

      previousTime = time;
      frame = window.requestAnimationFrame(scroll);
    };

    frame = window.requestAnimationFrame(scroll);

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const moveVideo = (direction) => {
    setActiveVideo(
      (current) =>
        (current + direction + youtubeVideos.length) % youtubeVideos.length
    );
    setPlaying(false);
  };

  const currentVideo = youtubeVideos[activeVideo];
  const hasValidVideo =
    currentVideo.id && !currentVideo.id.startsWith("YOUR_");

  return (
    <main className="coolmax-home overflow-hidden bg-[#fcfaf6] font-['Poppins',sans-serif] text-[#26372b]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .v-video-stage {
          perspective: 1200px;
          height: 330px;
          position: relative;
        }

        .v-video-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 850ms cubic-bezier(.2,.7,.2,1);
        }

        .v-video-card {
          position: absolute;
          width: min(70%, 340px);
          height: 210px;
          top: 50%;
          left: 50%;
          margin-left: -35%;
          margin-top: -105px;
          backface-visibility: hidden;
        }

        @media (max-width: 640px) {
          .v-video-stage {
            height: 260px;
          }

          .v-video-card {
            height: 160px;
            margin-top: -80px;
          }
        }
      `}</style>

      {/* HERO BANNER — COOL MAX SCENT */}
      <section className="relative overflow-hidden bg-[#f5f0e6]">
        <div className="relative mx-auto grid min-h-[600px] max-w-[1440px] items-center gap-8 px-5 py-14 sm:px-8 lg:min-h-[680px] lg:grid-cols-2 lg:px-16 xl:px-24">
          {/* Left: hero content */}
          <div className="relative z-10 py-6">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#a47b3d] sm:text-xs">
              <span className="h-px w-9 bg-[#a47b3d]" />
              PROFESSIONAL SCENTING SOLUTIONS
            </p>

            <h1 className="max-w-2xl text-4xl font-normal leading-[1.15] tracking-tight text-[#203b2a] sm:text-5xl lg:text-6xl xl:text-7xl">
              Architects of atmosphere.{" "}
              <em className="text-[#a47b3d]">Curators of scent.</em>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#6f7168] sm:text-base sm:leading-8">
              Create fresh, memorable, and welcoming spaces with professional aroma diffuser and scent marketing solutions from Cool Max Scent.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/shop"
                className="inline-flex min-h-12 items-center gap-3 bg-[#254634] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#a47b3d]"
              >
                Shop scenting solutions
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-b border-[#b9a582] pb-2 text-xs font-medium text-[#254634] transition hover:text-[#a47b3d]"
              >
                About Cool Max Scent
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 text-xs text-[#77776d]">
              <span className="flex h-9 w-9 items-center justify-center border border-[#d5ad68] text-sm text-[#a47b3d]">
                V.
              </span>
              Premium scent experiences for distinguished spaces.
            </div>
          </div>

          {/* Right: Vinomaster image */}
          <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[420px] lg:min-h-[520px]">
            <div className="absolute right-0 top-1/2 h-[78%] w-[85%] -translate-y-1/2 rounded-tl-[160px] rounded-br-[160px] bg-[#e9dfcc]" />

            <div className="absolute right-[8%] top-[12%] h-20 w-20 rounded-full border border-[#c4a66e]/60 sm:h-28 sm:w-28" />

            <img
              src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85"
              alt="Professional aroma diffuser and scenting solution"
              fetchPriority="high"
              className="relative z-10 max-h-[340px] w-full max-w-[520px] object-contain drop-shadow-xl sm:max-h-[430px] lg:max-h-[540px]"
            />

            <div className="absolute bottom-4 left-2 z-20 border border-[#d5c19a] bg-[#fcfaf6] px-4 py-3 shadow-md sm:bottom-8 sm:left-0 sm:px-6 sm:py-4">
              <p className="text-[9px] font-semibold tracking-[0.2em] text-[#a47b3d]">
                COOL MAX SCENT
              </p>
              <p className="mt-1 text-sm text-[#254634]">
                Atmospheric technology
              </p>
            </div>

            <div className="absolute bottom-[12%] right-[5%] h-3 w-3 rounded-full bg-[#a47b3d]" />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-[#e8dfd0] bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-[#e8dfd0] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-16 xl:px-24">
          {[
            { icon: Leaf, label: "Professional expertise" },
            { icon: PackageCheck, label: "Solutions for every space" },
            { icon: HeartHandshake, label: "Ongoing support" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 py-5 text-xs font-medium text-[#5f675c] sm:py-7"
            >
              <Icon size={19} strokeWidth={1.5} className="text-[#a47b3d]" />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="THE COOL MAX SCENT"
              title={<>Our <em className="text-[#a47b3d]">scenting systems.</em></>}
              description="Explore aroma diffuser systems for homes, hospitality, retail, offices, and large commercial environments."
            />

            <Link
              to="/shop"
              className="inline-flex w-fit items-center gap-2 border-b border-[#cbb58f] pb-2 text-xs font-semibold hover:text-[#a47b3d]"
            >
              View all systems
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {featured.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
              {featured.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                />
              ))}
            </div>
          ) : (
            <div className="border border-[#e8dfd0] bg-white px-5 py-14 text-center">
              <ShoppingBag
                size={30}
                strokeWidth={1.2}
                className="mx-auto mb-4 text-[#a47b3d]"
              />
              <h3 className="text-2xl">Our collection awaits.</h3>
              <p className="mt-3 text-sm text-[#77776d]">
                Add published products to your product data to display them here.
              </p>
              <Link
                to="/shop"
                className="mt-6 inline-flex items-center gap-2 bg-[#254634] px-6 py-3 text-xs font-semibold text-white hover:bg-[#a47b3d]"
              >
                Explore product range
                <ArrowRight size={15} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="overflow-hidden bg-[#f1ede3] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="FIND YOUR STARTING POINT"
              title={<>Scenting solutions <em>for every space.</em></>}
              description="Discover commercial, HVAC, floor-standing, car, wall-mounted, desktop, and passive diffuser categories."
            />

            <Link
              to="/collections"
              className="inline-flex w-fit items-center gap-2 border-b border-[#cbb58f] pb-2 text-xs font-semibold hover:text-[#a47b3d]"
            >
              View product range
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div
          ref={collectionTrack}
          className="flex gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-16 xl:px-24"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {[...collections, ...collections].map((collection, index) => (
            <Link
              to="/collections"
              key={`${collection.name}-${index}`}
              className="group relative block w-[260px] flex-none overflow-hidden bg-[#dcd4c5] sm:w-[310px] lg:w-[350px]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                {collection.image ? (
                  <img
                    src={collection.image}
                    alt={collection.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[#a47b3d]">
                    <Sparkles size={40} strokeWidth={1} />
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#16231a]/90 via-[#16231a]/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                <p className="mb-3 text-[10px] font-medium tracking-[0.2em] text-[#e7c58a]">
                  {collection.count || "DISCOVER THE COLLECTION"}
                </p>
                <h3 className="text-2xl sm:text-3xl">{collection.name}</h3>
                <div className="mt-5 flex items-center justify-between border-t border-white/30 pt-4 text-xs">
                  Explore collection
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 transition group-hover:bg-white group-hover:text-[#254634]">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16 xl:px-24">
          <div className="relative">
            <div className="aspect-[5/4] overflow-hidden bg-[#eee6d8]">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="Premium fragrance and scenting environment"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute bottom-5 left-5 bg-[#fcfaf6] px-4 py-3 text-[10px] font-semibold tracking-[0.16em] text-[#254634]">
              SCENTED FOR YOUR SPACE
            </span>
          </div>

          <div className="py-3 lg:py-10">
            <p className="mb-4 text-[10px] font-semibold tracking-[0.24em] text-[#a47b3d]">
              JUST ADDED
            </p>
            <h2 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Professional scenting.
              <br />
              <em className="text-[#a47b3d]">Lasting impressions.</em>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-[#77776d]">
              Discover scenting systems designed to deliver consistent fragrance coverage with practical controls and support for different environments.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex min-h-12 items-center gap-3 bg-[#254634] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#a47b3d]"
            >
              Explore scenting systems
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="FEATURED SOLUTIONS"
              title={<>Popular <span className="text-[#a47b3d]">systems.</span></>}
              description="Explore diffuser systems suited to different space sizes and scenting requirements."
            />
            <Link
              to="/shop?orderby=popularity"
              className="inline-flex w-fit items-center gap-2 border-b border-[#cbb58f] pb-2 text-xs font-semibold hover:text-[#a47b3d]"
            >
              Explore product range
              <ArrowRight size={15} />
            </Link>
          </div>

          {popularProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
              {popularProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                />
              ))}
            </div>
          ) : (
            <p className="border border-[#e9e1d4] px-5 py-12 text-center text-sm text-[#77776d]">
              Products will appear here when your product data is available.
            </p>
          )}
        </div>
      </section>

      {/* WHY CHOOSE COOL MAX SCENT */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16 xl:px-24">
          <SectionHeading
            centered
            eyebrow="WHY COOL MAX SCENT"
            title={<>Scenting built around <em>your space.</em></>}
            description="From consultation to maintenance, we build practical scenting plans around your environment and goals."
          />

          <div className="grid grid-cols-1 gap-px border border-[#e9e1d4] bg-[#e9e1d4] sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="bg-[#fcfaf6] p-7 transition hover:bg-white sm:p-8"
              >
                <span className="mb-8 flex h-12 w-12 items-center justify-center border border-[#d8c7a8] text-[#a47b3d]">
                  <Icon size={22} strokeWidth={1.4} />
                </span>
                <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-[#a47b3d]">
                  0{index + 1}
                </p>
                <h3 className="text-xl">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-[#77776d]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP BY INTENTION */}
      <section className="bg-[#eee8dc] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16 xl:px-24">
          <SectionHeading
            eyebrow="SCENTING APPLICATIONS"
            title={<>Solutions for <em>every environment.</em></>}
          />

          <div className="grid gap-5 md:grid-cols-3">
            {intentions.map((item) => (
              <Link
                key={item.number}
                to="/collections"
                className="group relative min-h-[340px] overflow-hidden bg-[#d9d0bf] sm:min-h-[400px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18251b]/90 via-[#18251b]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-[#e7c58a]">
                    {item.number} / COOL MAX SCENT
                  </p>
                  <h3 className="text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-xs text-xs leading-6 text-white/80">
                    {item.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium">
                    Explore collection
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT COOL MAX SCENT */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16 xl:px-24">
          <div className="relative">
            <div className="aspect-[4/4.2] overflow-hidden bg-[#eee6d8]">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="Professional scent diffuser in a welcoming environment"
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="absolute -bottom-5 right-4 max-w-[230px] border border-[#d9c7a5] bg-[#fcfaf6] p-5 shadow-lg sm:right-8 sm:p-6">
              <Leaf size={22} className="mb-3 text-[#a47b3d]" strokeWidth={1.4} />
              <p className="text-sm leading-6 text-[#254634]">
                Professional expertise. Designed for consistent fragrance coverage.
              </p>
            </div>
          </div>

          <div className="py-4 lg:py-10">
            <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#a47b3d]">
              <span className="h-px w-9 bg-[#a47b3d]" />
              ABOUT COOL MAX SCENT
            </p>
            <h2 className="max-w-xl text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
              Expertise that creates{" "}
              <em className="text-[#a47b3d]">lasting impressions.</em>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#77776d]">
              Established in 2020 and based in the UAE, Cool Max Scent provides professional scent diffuser machines and complete fragrance systems for homes, hotels, offices, retail stores, and large commercial environments.
            </p>
            <p className="mt-4 text-sm leading-8 text-[#77776d]">
              From compact home diffusers to commercial and HVAC-integrated systems, we help clients create pleasant indoor environments with consistent fragrance coverage and practical ongoing support.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 border-y border-[#e9e1d4] py-5 sm:grid-cols-3">
              {[
                { number: "01", title: "UAE experience" },
                { number: "02", title: "Designed for your space" },
                { number: "03", title: "Built for consistency" },
              ].map((item) => (
                <div key={item.number}>
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#a47b3d]">
                    {item.number}
                  </p>
                  <p className="mt-2 text-xs font-medium text-[#254634]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex min-h-12 items-center gap-3 bg-[#254634] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#a47b3d]"
            >
              Learn about our solutions
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEO SECTION */}
      <section className="relative overflow-hidden bg-[#203b2a] py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full border border-[#d5ad68]/20" />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-16 xl:px-24">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#e7c58a]">
              <span className="h-px w-9 bg-[#d5ad68]" />
              SCENT ARCHITECTURE
            </p>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">
              Scent that creates
              <span className="mt-2 block text-[#dfbb7c]">
                lasting impressions.
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/70">
              Explore scent marketing, diffuser technology, and solutions for creating a distinctive atmosphere for your brand or home.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setPlaying((value) => !value)}
                className="inline-flex min-h-11 items-center gap-2 bg-[#d5ad68] px-5 text-xs font-semibold text-[#203b2a] transition hover:bg-white"
              >
                {playing ? <Pause size={16} /> : <Play size={16} />}
                {playing ? "Pause video" : "Play video"}
              </button>

              <a
                href={
                  hasValidVideo
                    ? `https://www.youtube.com/watch?v=${currentVideo.id}`
                    : "https://www.youtube.com/"
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 border border-white/40 px-5 text-xs font-medium text-white transition hover:bg-white hover:text-[#203b2a]"
              >
                Explore on YouTube
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <div className="relative overflow-hidden border border-white/15 bg-black/20 p-3 sm:p-5">
              <div className="aspect-video overflow-hidden bg-[#14271b]">
                {playing && hasValidVideo ? (
                  <iframe
                    key={currentVideo.id}
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&rel=0`}
                    title={currentVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      if (hasValidVideo) setPlaying(true);
                      else window.open("https://www.youtube.com/", "_blank", "noopener,noreferrer");
                    }}
                    className="group relative flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#294d36] to-[#14271b] p-6 text-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d5ad68] text-[#203b2a] transition group-hover:scale-110">
                      <Play size={25} fill="currentColor" />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#e7c58a]">
                      {currentVideo.category}
                    </span>
                    <span className="text-xl sm:text-2xl">
                      {currentVideo.title}
                    </span>
                    {!hasValidVideo && (
                      <span className="text-xs text-white/60">
                        Add your YouTube video IDs in the code
                      </span>
                    )}
                  </button>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 pt-4">
                <div className="min-w-0">
                  <p className="text-[9px] tracking-[0.2em] text-[#dfbb7c]">
                    {currentVideo.category}
                  </p>
                  <h3 className="mt-1 truncate text-sm font-medium sm:text-base">
                    {currentVideo.title}
                  </h3>
                </div>

                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    aria-label="Previous video"
                    onClick={() => moveVideo(-1)}
                    className="flex h-9 w-9 items-center justify-center border border-white/30 transition hover:bg-white hover:text-[#203b2a]"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next video"
                    onClick={() => moveVideo(1)}
                    className="flex h-9 w-9 items-center justify-center border border-white/30 transition hover:bg-white hover:text-[#203b2a]"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                {youtubeVideos.map((video, index) => (
                  <button
                    key={video.id}
                    type="button"
                    aria-label={`Select ${video.title}`}
                    onClick={() => {
                      setActiveVideo(index);
                      setPlaying(false);
                    }}
                    className={`h-1 flex-1 transition ${
                      activeVideo === index
                        ? "bg-[#d5ad68]"
                        : "bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG / SCENT JOURNAL */}
      <section className="bg-[#f1ede3] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
            <div className="relative overflow-hidden bg-[#203b2a] p-8 text-white sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/15" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[#d5ad68]/30" />
              <p className="relative mb-5 text-[10px] font-semibold tracking-[0.24em] text-[#e7c58a]">
                THE COOL MAX SCENT JOURNAL
              </p>
              <h2 className="relative text-4xl font-normal leading-tight sm:text-5xl">
                Discover the
                <br />
                <em className="text-[#dfbb7c]">world of scent.</em>
              </h2>
              <p className="relative mt-6 max-w-lg text-sm leading-7 text-white/75">
                Explore practical insights on scent marketing, fragrance selection, diffuser technology, and creating memorable environments for your customers and guests.
              </p>
              <Link
                to="/blog"
                className="relative mt-8 inline-flex min-h-12 items-center gap-3 bg-[#d5ad68] px-6 py-3 text-xs font-semibold text-[#203b2a] transition hover:bg-white"
              >
                Explore the blog
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="py-3 lg:py-8">
              <p className="mb-4 text-[10px] font-semibold tracking-[0.24em] text-[#a47b3d]">
                IDEAS FOR BETTER SCENT EXPERIENCES
              </p>
              <h3 className="text-3xl font-normal leading-tight text-[#26372b] sm:text-4xl">
                Knowledge that helps you choose with confidence.
              </h3>
              <p className="mt-5 text-sm leading-8 text-[#77776d]">
                Learn how to choose a diffuser for your space, plan fragrance coverage, build a scent identity for your business, and maintain your system for consistent performance.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "How to choose the right aroma diffuser",
                  "Scent marketing ideas for hotels and retail",
                  "Understanding commercial and HVAC scenting",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-[#ded5c5] pb-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d5c19a] text-sm text-[#a47b3d]">
                      0{index + 1}
                    </span>
                    <p className="text-sm font-medium text-[#254634]">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/blog"
                className="mt-8 inline-flex items-center gap-2 border-b border-[#cbb58f] pb-2 text-xs font-semibold text-[#254634] transition hover:text-[#a47b3d]"
              >
                Read scenting insights
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#f1ede3] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16 xl:px-24">
          <SectionHeading
            centered
            eyebrow="CLIENT EXPERIENCE"
            title={<>The experience <em className="text-[#a47b3d]">matters.</em></>}
            description="Reliable scenting helps create welcoming spaces and consistent customer experiences."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              "The Cool Max Scent lobby diffuser provides subtle, consistent fragrance distribution for our guest areas.",
              "The HVAC scenting system is practical to maintain and supports consistent fragrance across our commercial space.",
              "The scent diffuser helps create a pleasant environment without overpowering the space.",
            ].map((quote, index) => (
              <article
                key={index}
                className="flex h-full flex-col border border-[#e1d8c8] bg-[#fcfaf6] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex gap-1 text-[#b38a43]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                      strokeWidth={1.2}
                    />
                  ))}
                </div>
                <span className="mt-6 text-4xl leading-none text-[#c4a66e]">
                  “
                </span>
                <p className="mt-2 flex-1 text-sm leading-7 text-[#62695f]">
                  {quote}
                </p>
                <div className="mt-7 border-t border-[#e9e1d4] pt-5">
                  <p className="text-xs font-semibold text-[#254634]">
                    Client testimonial
                  </p>
                  <p className="mt-1 text-[10px] text-[#938a7b]">
                    Replace with an approved client name
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fcfaf6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-16 xl:px-24">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-[#a47b3d]">
              <span className="h-px w-9 bg-[#a47b3d]" />
              NEED A LITTLE HELP?
            </p>
            <h2 className="text-4xl font-normal leading-tight text-[#26372b] sm:text-5xl">
              Frequently asked{" "}
              <em className="text-[#a47b3d]">questions.</em>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#77776d]">
              Find answers about choosing scent diffusers, commercial coverage, installation, and ongoing support.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#cbb58f] pb-2 text-xs font-semibold text-[#254634] transition hover:text-[#a47b3d]"
            >
              Contact our team
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="border-t border-[#e5ddcf]">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <article key={faq.question} className="border-b border-[#e5ddcf]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                  >
                    <span className="pr-3 text-sm font-medium leading-6 text-[#254634] sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9c7a5] text-[#a47b3d] transition ${
                        isOpen ? "rotate-180 bg-[#254634] text-white" : ""
                      }`}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-5"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pr-10 text-xs leading-7 text-[#77776d] sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA + NEWSLETTER */}
      <section className="relative overflow-hidden bg-[#203b2a] px-5 py-20 text-center text-white sm:px-8 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full border border-white/10 sm:h-[500px] sm:w-[500px]" />
        <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full border border-white/10 sm:h-[400px] sm:w-[400px]" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-5 text-[10px] font-semibold tracking-[0.24em] text-[#e7c58a]">
            THE COOL MAX SCENT
          </p>
          <h2 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Create a fresher
            <br />
            <em className="text-[#dfbb7c]">environment.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-7 text-white/75">
            From home fragrance to commercial scenting and HVAC systems, find a solution designed around your space and business goals.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-[#d5ad68] px-7 py-3 text-xs font-semibold text-[#203b2a] transition hover:bg-white"
          >
            Explore product range
            <ArrowUpRight size={17} />
          </Link>

          <div className="mx-auto mt-16 max-w-xl border-t border-white/20 pt-10">
            <Mail
              size={24}
              strokeWidth={1.3}
              className="mx-auto mb-4 text-[#dfbb7c]"
            />
            <h3 className="text-2xl">Stay in the scent loop.</h3>
            <p className="mt-3 text-xs leading-6 text-white/70">
              Receive scent marketing insights, product updates, and news from Cool Max Scent.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    const subject = encodeURIComponent("Cool Max Scent newsletter subscription");
    const body = encodeURIComponent(
      `Please add this email address to the Cool Max Scent newsletter: ${email}`
    );

    window.location.href = `mailto:secretary@coolmaxscent.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setSubmitted(false);
        }}
        placeholder="Enter your email address"
        aria-label="Email address"
        className="min-h-12 min-w-0 flex-1 border border-white/25 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[#d5ad68]"
      />
      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d5ad68] px-6 text-xs font-semibold text-[#203b2a] transition hover:bg-white"
      >
        Subscribe
        <ArrowRight size={15} />
      </button>
      {submitted && (
        <span className="text-xs text-white/70">
          Continue in your email app to complete your request.
        </span>
      )}
    </form>
  );
}