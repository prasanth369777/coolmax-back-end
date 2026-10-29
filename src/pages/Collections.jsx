import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Wind,
  Building2,
  CarFront,
  Droplets,
  Wrench,
  Leaf,
  ChevronDown,
  Flower2,
} from "lucide-react";

const aromaCollections = [
  {
    title: "Oriental Fragrances",
    description: "Rich, warm fragrance profiles inspired by depth, woods and amber notes.",
    href: "https://www.coolmaxscent.com/oriental-aroma-oil/",
    image: "/images/Aroma%20oils%20img/ARABIAN%20BAKHOOR.webp",
    label: "Warm & distinctive",
  },
  {
    title: "Fresh Fragrances",
    description: "Clean, airy scent profiles designed to make spaces feel bright and welcoming.",
    href: "https://www.coolmaxscent.com/fresh-aroma-oil/",
    image: "/images/Aroma%20oils%20img/ENGLISH%20LAVENDER.webp",
    label: "Clean & uplifting",
  },
  {
    title: "Perfumers Choice",
    description: "A curated selection of signature scents for memorable environments.",
    href: "https://www.coolmaxscent.com/perfumers-choice-aroma-oil/",
    image: "/images/Aroma%20oils%20img/CLASSIC.webp",
    label: "Signature blends",
  },
  {
    title: "Fruity Fragrances",
    description: "Vibrant, expressive fragrance notes that add energy and character.",
    href: "https://www.coolmaxscent.com/fruity-aroma-oil/",
    image: "/images/Aroma%20oils%20img/FLORAL.webp",
    label: "Bright & expressive",
  },
  {
    title: "Food & Beverage Fragrances",
    description: "Atmosphere-led scent profiles suited to hospitality and food-led spaces.",
    href: "https://www.coolmaxscent.com/food-and-beverage-aroma-oil/",
    image: "/images/Aroma%20oils%20img/TRUE%20COFFEE.webp",
    label: "Hospitality inspired",
  },
  {
    title: "Premium Collection",
    description: "Refined fragrance choices for spaces where every detail matters.",
    href: "https://www.coolmaxscent.com/premium-aroma-oil/",
    image: "/images/Aroma%20oils%20img/TAJ%20SUNSET.webp",
    label: "Elevated experiences",
  },
];

const scentSolutions = [
  {
    title: "Scent Marketing Strategy",
    description: "Build a distinctive brand atmosphere with a considered scent identity.",
    href: "https://www.coolmaxscent.com/scent-marketing-solutions/",
    icon: Sparkles,
    number: "01",
  },
  {
    title: "Commercial Aroma Diffusion",
    description: "Create consistent fragrance experiences across customer-facing spaces.",
    href: "https://www.coolmaxscent.com/commercial-aroma-diffusion-solutions/",
    icon: Building2,
    number: "02",
  },
  {
    title: "HVAC Scenting Solutions",
    description: "Integrate scent distribution into suitable air-conditioning systems.",
    href: "https://www.coolmaxscent.com/hvac-scenting-solutions/",
    icon: Wind,
    number: "03",
  },
  {
    title: "Washroom Hygiene Solutions",
    description: "Support a fresh, welcoming washroom environment with practical solutions.",
    href: "https://www.coolmaxscent.com/washroom-hygiene-solutions/",
    icon: Droplets,
    number: "04",
  },
  {
    title: "Car & Personal Space Scenting",
    description: "Bring a more considered fragrance experience to vehicles and smaller spaces.",
    href: "https://www.coolmaxscent.com/car-and-personal-space-scenting-solutions/",
    icon: CarFront,
    number: "05",
  },
  {
    title: "Maintenance & Refill Support",
    description: "Keep scenting systems performing with ongoing refill and maintenance support.",
    href: "https://www.coolmaxscent.com/maintenance-and-refill-support-services/",
    icon: Wrench,
    number: "06",
  },
];

function ImageWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`${className} flex items-center justify-center bg-gradient-to-br from-[#f1e9dc] to-[#d8c8ad]`}>
      <Flower2 className="h-12 w-12 text-[#9b7c50]" strokeWidth={1.1} />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export default function CoolMaxScentCollections() {
  const [activeSection, setActiveSection] = useState("aroma");

  return (
    <main className="cms-collections min-h-screen overflow-hidden bg-[#faf8f4] text-[#202a25]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        .cms-collections { --cms-ink:#202a25; --cms-green:#183d31; --cms-gold:#c9a66b; --cms-muted:#6f7771; font-family:'DM Sans',sans-serif; }
        .cms-collections h1,.cms-collections h2,.cms-collections h3 { font-family:'Manrope',sans-serif; letter-spacing:-.035em; }
        .cms-eyebrow { letter-spacing:.22em; }
        .cms-card { transition:transform .35s ease,box-shadow .35s ease,border-color .35s ease; }
        .cms-card:hover { transform:translateY(-5px); box-shadow:0 22px 55px rgba(24,61,49,.12); }
        .cms-card-image { transition:transform .7s cubic-bezier(.2,.7,.2,1); }
        .cms-card:hover .cms-card-image { transform:scale(1.06); }
        .cms-link-icon { transition:transform .25s ease,background .25s ease,color .25s ease; }
        .cms-card:hover .cms-link-icon { transform:translate(2px,-2px); background:var(--cms-gold); color:var(--cms-green); }
        .cms-tab { transition:background .2s ease,color .2s ease,border-color .2s ease; }
        @media (prefers-reduced-motion:reduce) { .cms-collections *, .cms-collections *::before,.cms-collections *::after { animation:none!important;transition:none!important;scroll-behavior:auto!important; } }
      `}</style>

      <section className="relative isolate overflow-hidden bg-[#183d31] px-5 py-16 text-white sm:px-8 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-28 -top-36 h-[420px] w-[420px] rounded-full border border-white/10 sm:h-[600px] sm:w-[600px]" />
        <div className="pointer-events-none absolute -right-10 -top-16 h-[300px] w-[300px] rounded-full border border-[#c9a66b]/20 sm:h-[440px] sm:w-[440px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="cms-eyebrow mb-5 flex items-center gap-3 text-[10px] font-bold uppercase text-[#d9bd8b] sm:text-xs"><span className="h-px w-9 bg-[#d9bd8b]" />Cool Max Scent · Collections & Solutions</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] sm:text-6xl lg:text-7xl">Architects of atmosphere.<span className="mt-2 block font-medium text-[#d9bd8b]">Curators of experience.</span></h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">Discover premium aroma oils and professional scenting solutions designed to make spaces more memorable, welcoming and unmistakably yours.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#aroma-oils" onClick={() => setActiveSection("aroma")} className="inline-flex items-center gap-3 rounded-full bg-[#d9bd8b] px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-[#183d31] transition hover:bg-white">Explore aroma oils <ArrowRight size={16} /></a>
              <a href="#scent-solutions" onClick={() => setActiveSection("solutions")} className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-white/10">Discover solutions <ArrowUpRight size={15} /></a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/65"><span className="flex items-center gap-2"><Leaf size={15} className="text-[#d9bd8b]"/>Fragrance collections</span><span className="flex items-center gap-2"><Wind size={15} className="text-[#d9bd8b]"/>Professional scenting systems</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] border border-white/10" />
            <div className="grid grid-cols-[1.1fr_.9fr] gap-3">
              <ImageWithFallback src="/images/Aroma%20oils%20img/TAJ%20SUNSET.webp" alt="Premium fragrance collection" className="cms-card-image h-[270px] w-full rounded-tl-[5rem] rounded-br-2xl object-cover sm:h-[390px]" />
              <div className="grid gap-3 pt-10"><ImageWithFallback src="/images/Aroma%20oils%20img/ARABIAN%20BAKHOOR.webp" alt="Oriental fragrance" className="cms-card-image h-[125px] w-full rounded-tr-[3rem] object-cover sm:h-[180px]"/><ImageWithFallback src="/images/Aroma%20oils%20img/WHITE%20TEA.webp" alt="White tea fragrance" className="cms-card-image h-[125px] w-full rounded-bl-[3rem] object-cover sm:h-[180px]"/></div>
            </div>
            <div className="absolute -bottom-5 left-4 rounded-xl border border-white/10 bg-[#244c3d] px-5 py-4 shadow-xl sm:left-8"><p className="cms-eyebrow text-[9px] font-semibold uppercase text-[#d9bd8b]">A signature for every space</p><p className="mt-1 text-sm font-semibold">Make the atmosphere memorable.</p></div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e8e3d9] bg-white px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div><p className="cms-eyebrow text-[9px] font-bold uppercase text-[#9b7c50]">Explore by interest</p><p className="mt-1 text-sm text-[#69736c]">Choose a fragrance family or a scenting solution.</p></div>
          <div className="flex flex-wrap gap-2"><button type="button" onClick={() => {setActiveSection("aroma");document.getElementById("aroma-oils")?.scrollIntoView({behavior:"smooth"});}} className={`cms-tab rounded-full border px-4 py-2 text-xs font-semibold ${activeSection === "aroma" ? "border-[#183d31] bg-[#183d31] text-white" : "border-[#d9ded8] bg-white text-[#425148] hover:border-[#183d31]"}`}>Aroma Oils</button><button type="button" onClick={() => {setActiveSection("solutions");document.getElementById("scent-solutions")?.scrollIntoView({behavior:"smooth"});}} className={`cms-tab rounded-full border px-4 py-2 text-xs font-semibold ${activeSection === "solutions" ? "border-[#183d31] bg-[#183d31] text-white" : "border-[#d9ded8] bg-white text-[#425148] hover:border-[#183d31]"}`}>Solutions</button></div>
        </div>
      </section>

      <section id="aroma-oils" className="scroll-mt-8 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-5 border-b border-[#e3ded3] pb-6 sm:flex-row sm:items-end">
            <div><p className="cms-eyebrow mb-3 text-[10px] font-bold uppercase text-[#9b7c50]">The fragrance library</p><h2 className="text-3xl font-semibold sm:text-5xl">Aroma Oils<span className="text-[#c9a66b]">.</span></h2><p className="mt-3 max-w-2xl text-sm leading-7 text-[#6f7771]">Explore fragrance families and premium blends to find the scent profile that fits your brand, venue or personal preference.</p></div>
            <a href="https://www.coolmaxscent.com/" className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#183d31] hover:text-[#9b7c50]">View all aroma oils <ArrowUpRight size={15}/></a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aromaCollections.map((item, index) => (
              <a key={item.title} href={item.href} className="cms-card group overflow-hidden rounded-2xl border border-[#e7e1d6] bg-white">
                <div className="relative h-56 overflow-hidden bg-[#eee7da] sm:h-64"><ImageWithFallback src={item.image} alt={item.title} className="cms-card-image h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#132d23]/65 via-transparent to-transparent"/><span className="absolute left-4 top-4 rounded-full border border-white/40 bg-black/15 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.16em] text-white backdrop-blur-sm">{item.label}</span><span className="cms-link-icon absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#183d31]"><ArrowUpRight size={17}/></span></div>
                <div className="p-5 sm:p-6"><div className="mb-3 flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-[.18em] text-[#a18a61]">Collection {String(index + 1).padStart(2,"0")}</span><span className="h-px w-10 bg-[#d9c8a8]"/></div><h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3><p className="mt-3 min-h-[48px] text-sm leading-6 text-[#6f7771]">{item.description}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#183d31]">Explore fragrances <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="scent-solutions" className="scroll-mt-8 border-y border-[#e6e1d7] bg-[#f0eee7] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 grid gap-5 md:grid-cols-[1fr_.8fr] md:items-end"><div><p className="cms-eyebrow mb-3 text-[10px] font-bold uppercase text-[#9b7c50]">Designed around your environment</p><h2 className="text-3xl font-semibold sm:text-5xl">Scenting Solutions<span className="text-[#c9a66b]">.</span></h2></div><p className="max-w-xl text-sm leading-7 text-[#6f7771] md:justify-self-end">From scent strategy to system integration and ongoing care, discover services that help create a consistent fragrance experience across your space.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {scentSolutions.map((item) => {
              const Icon = item.icon;
              return <a key={item.title} href={item.href} className="cms-card group flex min-h-[235px] flex-col rounded-2xl border border-[#e0dbd0] bg-white p-6 sm:p-7"><div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf0e9] text-[#183d31]"><Icon size={22} strokeWidth={1.6}/></span><span className="text-xs font-semibold tracking-widest text-[#b29a70]">{item.number}</span></div><h3 className="mt-6 text-xl font-semibold">{item.title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-[#6f7771]">{item.description}</p><span className="mt-6 inline-flex items-center justify-between border-t border-[#eee9df] pt-4 text-xs font-bold uppercase tracking-wide text-[#183d31]">Explore solution <span className="cms-link-icon flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f0e8]"><ArrowUpRight size={15}/></span></span></a>;
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#183d31] text-white md:grid-cols-[1.1fr_.9fr]">
          <div className="px-6 py-10 sm:px-12 sm:py-14 lg:px-16"><p className="cms-eyebrow mb-4 text-[10px] font-bold uppercase text-[#d9bd8b]">Your space. Your signature.</p><h2 className="max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">Make every first impression feel intentional.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/70">Find the right fragrance family and scenting approach for your environment with Cool Max Scent.</p><a href="https://www.coolmaxscent.com/solution/" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#d9bd8b] px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-[#183d31] transition hover:bg-white">Explore our solutions <ArrowRight size={16}/></a></div>
          <div className="relative min-h-[250px] overflow-hidden bg-[#244c3d] md:min-h-full"><ImageWithFallback src="/images/Aroma%20oils%20img/EMAAR.webp" alt="Premium fragrance atmosphere" className="cms-card-image absolute inset-0 h-full w-full object-cover opacity-75"/><div className="absolute inset-0 bg-gradient-to-r from-[#183d31]/40 to-transparent"/><div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-[#183d31]/75 p-5 backdrop-blur-sm"><p className="cms-eyebrow text-[9px] font-bold uppercase text-[#d9bd8b]">Cool Max Scent</p><p className="mt-2 text-lg font-semibold">Architects of atmosphere.</p></div></div>
        </div>
      </section>
    </main>
  );
}
