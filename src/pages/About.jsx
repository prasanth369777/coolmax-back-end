import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Hotel,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  House,
  Wind,
  Settings2,
  Wrench,
  ShieldCheck,
  Leaf,
  Handshake,
  Truck,
  Lightbulb,
  Sparkles,
  Target,
  Compass,
  Users,
  Droplets,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We assess your space, usage patterns, and expectations to understand the real requirement.",
    icon: <Users size={22} strokeWidth={1.6} />,
  },
  {
    number: "02",
    title: "Solution Design",
    description:
      "We recommend the right diffuser technology and fragrance options for your space and objectives.",
    icon: <Compass size={22} strokeWidth={1.6} />,
  },
  {
    number: "03",
    title: "Installation",
    description:
      "We configure placement, schedules, and intensity to support balanced fragrance distribution.",
    icon: <Settings2 size={22} strokeWidth={1.6} />,
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Refills, maintenance, and adjustments help keep your scenting system performing consistently.",
    icon: <Wrench size={22} strokeWidth={1.6} />,
  },
];

const industries = [
  {
    title: "Offices & Corporate Spaces",
    text: "Create a welcoming, professional atmosphere with controlled fragrance diffusion.",
    icon: <Building2 size={23} strokeWidth={1.5} />,
  },
  {
    title: "Hotels & Hospitality",
    text: "Enhance guest experiences with considered hotel scenting and air-freshening systems.",
    icon: <Hotel size={23} strokeWidth={1.5} />,
  },
  {
    title: "Retail Stores & Malls",
    text: "Build a more inviting shopping environment through a consistent ambient scent.",
    icon: <ShoppingBag size={23} strokeWidth={1.5} />,
  },
  {
    title: "Hospitals & Clinics",
    text: "Support a comfortable indoor environment with appropriately selected scent solutions.",
    icon: <Stethoscope size={23} strokeWidth={1.5} />,
  },
  {
    title: "Schools & Institutions",
    text: "Explore practical scenting options for classrooms and shared indoor spaces.",
    icon: <GraduationCap size={23} strokeWidth={1.5} />,
  },
  {
    title: "Residential Homes",
    text: "Bring reliable home fragrance systems into everyday living spaces.",
    icon: <House size={23} strokeWidth={1.5} />,
  },
];

const strengths = [
  {
    title: "UAE Market Experience",
    text: "Solutions shaped around local conditions and commercial requirements.",
    icon: <Compass size={21} />,
  },
  {
    title: "Wide Product Portfolio",
    text: "From home scent diffusers to commercial and HVAC-connected systems.",
    icon: <Wind size={21} />,
  },
  {
    title: "Scalable Solutions",
    text: "Options for compact rooms, shared spaces, and large facilities.",
    icon: <Settings2 size={21} />,
  },
  {
    title: "Low-Maintenance Systems",
    text: "Practical equipment designed for straightforward day-to-day operation.",
    icon: <CheckCircle2 size={21} />,
  },
  {
    title: "Ongoing Support",
    text: "Refills, service, maintenance, and technical assistance.",
    icon: <Wrench size={21} />,
  },
  {
    title: "Safety-Conscious Selection",
    text: "Products selected with commercial use and operating requirements in mind.",
    icon: <ShieldCheck size={21} />,
  },
];

const values = [
  {
    title: "Innovative Thinking",
    text: "We keep improving our product range and solutions to respond to evolving needs.",
    icon: <Lightbulb size={22} />,
  },
  {
    title: "Strategic Partnerships",
    text: "We work closely with clients and suppliers to build long-term, effective outcomes.",
    icon: <Handshake size={22} />,
  },
  {
    title: "Dependable Delivery",
    text: "We focus on consistent product quality, practical installation, and reliable service.",
    icon: <Truck size={22} />,
  },
  {
    title: "Environmental Responsibility",
    text: "We favour efficient systems and thoughtful usage to help minimise unnecessary consumption.",
    icon: <Leaf size={22} />,
  },
];

const services = [
  "Professional scent diffuser machines for homes and businesses",
  "Home fragrance systems and commercial scenting plans",
  "Installation and configuration based on space size",
  "Hotel scent diffusers and air-freshening systems",
  "HVAC scent diffusion for larger areas",
  "Refills, maintenance, and technical assistance",
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`cms-reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function AboutCoolMaxScent() {
  return (
    <main className="cms-about overflow-hidden bg-[#faf9f5] text-[#193d2b]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .cms-about {
          font-family: 'Poppins', sans-serif;
          --cms-forest: #193d2b;
          --cms-forest-light: #285b41;
          --cms-gold: #d8c59a;
          --cms-muted: #77796f;
          --cms-cream: #faf9f5;
        }
        .cms-about h1, .cms-about h2, .cms-about h3,
        .cms-about p, .cms-about a, .cms-about button, .cms-about span {
          font-family: 'Poppins', sans-serif;
        }
        .cms-about h1, .cms-about h2, .cms-about h3 { letter-spacing: -0.035em; }
        .cms-reveal {
          opacity: 0;
          transform: translate3d(0, 24px, 0);
          transition: opacity 700ms ease, transform 700ms cubic-bezier(.2,.65,.25,1);
          transition-delay: var(--reveal-delay, 0ms);
        }
        .cms-reveal.is-visible { opacity: 1; transform: translate3d(0,0,0); }
        .cms-hero-copy { animation: cmsFadeUp 850ms cubic-bezier(.2,.65,.25,1) both; }
        .cms-hero-visual { animation: cmsVisualIn 1000ms cubic-bezier(.2,.65,.25,1) both; animation-delay: 120ms; }
        .cms-hero-ring { animation: cmsRotate 36s linear infinite; }
        .cms-image { transition: transform 850ms cubic-bezier(.2,.7,.2,1); }
        .cms-image-wrap:hover .cms-image { transform: scale(1.045); }
        .cms-card { transition: transform 350ms ease, box-shadow 350ms ease, border-color 350ms ease; }
        .cms-card:hover { transform: translateY(-5px); box-shadow: 0 18px 38px rgba(25,61,43,.09); border-color: #c5b486; }
        .cms-button { transition: transform 250ms ease, box-shadow 250ms ease, background-color 250ms ease; }
        .cms-button:hover { transform: translateY(-2px); box-shadow: 0 12px 25px rgba(25,61,43,.15); }
        .cms-button-icon { transition: transform 250ms ease; }
        .cms-button:hover .cms-button-icon { transform: translateX(4px); }
        .cms-grain { background-image: radial-gradient(rgba(255,255,255,.10) .7px, transparent .7px); background-size: 6px 6px; }
        .cms-cta { position: relative; isolation: isolate; }
        .cms-cta::before {
          content: ""; position: absolute; z-index: -1; width: 380px; height: 380px;
          top: -220px; right: -120px; border: 1px solid rgba(216,197,154,.2);
          border-radius: 50%; box-shadow: 0 0 0 35px rgba(216,197,154,.035), 0 0 0 75px rgba(216,197,154,.025);
        }
        @keyframes cmsFadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes cmsVisualIn { from { opacity: 0; transform: translateX(24px) scale(.98); } to { opacity: 1; transform: translateX(0) scale(1); } }
        @keyframes cmsRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .cms-about *, .cms-about *::before, .cms-about *::after {
            animation-duration: .01ms !important; animation-iteration-count: 1 !important;
            scroll-behavior: auto !important; transition-duration: .01ms !important;
          }
          .cms-reveal { opacity: 1; transform: none; }
        }
        .cms-about a:focus-visible { outline: 2px solid #bba574; outline-offset: 4px; }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#193d2b] px-5 py-16 text-white sm:px-8 sm:py-24 lg:py-28">
        <div className="cms-grain pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="cms-hero-ring absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />
          <div className="absolute -right-24 -top-24 h-[350px] w-[350px] rounded-full border border-white/[0.06]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div className="cms-hero-copy">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8c59a] sm:text-xs">
              <span className="h-px w-8 bg-[#d8c59a]" />
              ABOUT COOL MAX SCENT
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.15] sm:text-6xl lg:text-7xl">
              Your trusted partner for
              <span className="mt-3 block font-normal text-[#d8c59a]">
                professional scent solutions.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Dubai-based scenting expertise for homes and commercial spaces across the UAE. Since 2020, we have helped clients find practical diffuser and fragrance solutions built around their spaces, needs, and day-to-day operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="cms-button inline-flex items-center gap-3 rounded-full bg-[#d8c59a] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#193d2b]">
                Explore products <ArrowRight className="cms-button-icon" size={16} />
              </Link>
              <Link to="/contact" className="cms-button inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-xs font-medium text-white hover:bg-white/10">
                Contact our team <ArrowUpRight size={15} />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/65">
              <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-[#d8c59a]" /> Established in 2020</span>
              <span className="flex items-center gap-2"><Wind size={15} className="text-[#d8c59a]" /> Home & commercial systems</span>
              <span className="flex items-center gap-2"><Wrench size={15} className="text-[#d8c59a]" /> Ongoing service support</span>
            </div>
          </div>

          <div className="cms-hero-visual cms-image-wrap relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[42%] border border-white/10" />
            <img
              src="/images/about/coolmax-scent-machine.webp"
              alt="Professional scent diffuser system"
              loading="eager"
              onError={(event) => {
                event.currentTarget.src = "/images/productimg/CMwebpimg/AeroBlack%20Med%20diffuser/1.webp";
              }}
              className="cms-image relative h-[360px] w-full rounded-tl-[100px] rounded-br-[100px] bg-white/10 object-cover shadow-2xl sm:h-[500px] lg:h-[560px]"
            />
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-white/10 bg-[#244a36] p-5 shadow-xl sm:left-8 sm:p-6">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#d8c59a]">Our approach</p>
              <p className="mt-2 max-w-[240px] text-lg font-medium leading-snug sm:text-xl">The right system. The right fragrance. Reliable performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.8fr_1.2fr] md:items-start">
          <Reveal>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a28a58]">Who we are</p>
            <h2 className="max-w-md text-3xl font-semibold leading-tight sm:text-5xl">A solution-driven scent partner.</h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="max-w-2xl md:justify-self-end">
              <p className="text-sm leading-8 text-[#6e766b] sm:text-base">
                Cool Max Scent is more than a product supplier. We work with clients to understand their space, usage patterns, and expectations before recommending a suitable aroma diffuser or air scenting machine. Our goal is to match the right diffuser technology with suitable fragrance options for effective, controlled diffusion.
              </p>
              <p className="mt-5 text-sm leading-8 text-[#6e766b] sm:text-base">
                Our portfolio includes battery-operated diffusers, wall-mounted systems, floor-standing scent machines, and HVAC-integrated solutions for everything from compact rooms to large commercial environments. With ongoing service support, we aim to keep scenting consistent and straightforward—not overpowering, inconsistent, or complicated.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY + WHAT WE DO */}
      <section className="border-y border-[#e7e2d7] bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a28a58]">Our journey</p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">Built around practical scenting since 2020.</h2>
            <p className="mt-5 text-sm leading-8 text-[#77796f]">
              Cool Max Scent was founded in 2020 to provide dependable, easy-to-manage scent and hygiene solutions for the UAE market. Starting with hygiene and washroom solutions, we expanded into home fragrance systems, commercial scent machines, and large-area HVAC scent diffusion.
            </p>
            <p className="mt-4 text-sm leading-8 text-[#77796f]">
              Today, our portfolio supports a broad range of environments, including homes, hotels, offices, hospitals, schools, malls, food chains, and facility management operations. Our approach is grounded in practical recommendations, service continuity, and long-term client relationships.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-[#f0eee5] p-6 sm:p-9">
              <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a28a58]"><Sparkles size={15} /> What we do</p>
              <h3 className="text-2xl font-semibold sm:text-3xl">End-to-end scenting solutions.</h3>
              <p className="mt-3 text-sm leading-7 text-[#77796f]">From selecting equipment to maintaining consistent operation, we help make scenting easier to manage.</p>
              <ul className="mt-6 space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex gap-3 text-sm leading-6 text-[#4e5d51]">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#8e7847]" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a28a58]">How we work</p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">A clear process. Consistent performance.</h2>
              <p className="mt-4 text-sm leading-7 text-[#77796f]">Successful scenting starts with understanding the space—not making assumptions.</p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 80}>
                <article className="cms-card h-full rounded-2xl border border-[#e6e1d6] bg-white p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#a28a58]">{step.number}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e9eee5] text-[#193d2b]">{step.icon}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#77796f]">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <blockquote className="mx-auto mt-10 max-w-4xl border-l-2 border-[#d8c59a] pl-5 text-base leading-8 text-[#526153] sm:pl-7 sm:text-lg">
              “From a single scent machine for a home to a large commercial installation, each solution should be tailored to the environment it serves.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-y border-[#e7e2d7] bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 max-w-2xl sm:mb-14">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a28a58]">Industries we serve</p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">Designed for different spaces and needs.</h2>
              <p className="mt-4 text-sm leading-7 text-[#77796f]">We help clients evaluate scenting options based on the environment, footprint, and operating requirements.</p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.title} delay={(index % 3) * 80}>
                <article className="cms-card h-full rounded-2xl border border-[#e6e1d6] bg-[#faf9f5] p-6 sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e9eee5] text-[#193d2b]">{industry.icon}</span>
                  <h3 className="mt-5 text-lg font-semibold sm:text-xl">{industry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#77796f]">{industry.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a28a58]">Why Cool Max Scent</p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">A dependable partner beyond the product.</h2>
              <p className="mt-4 text-sm leading-7 text-[#77796f]">Our focus is on selecting a practical system and supporting it through its day-to-day use.</p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 80}>
                <article className="cms-card h-full rounded-2xl border border-[#e6e1d6] bg-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0eee5] text-[#8e7847]">{item.icon}</div>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#77796f]">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-[#193d2b] px-5 py-16 text-white sm:px-8 sm:py-20">
        <Reveal>
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8c59a]">Trusted across the UAE</p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">Solutions for real-world environments.</h2>
            </div>
            <div>
              <p className="text-sm leading-8 text-white/70 sm:text-base">
                Cool Max Scent serves a range of public and private organisations, including hospitals, schools, corporate offices, retail chains, food service brands, and facility management companies. Our focus is on practical solutions that work reliably in the environments they are designed for.
              </p>
              <Link to="/clients" className="cms-button mt-6 inline-flex items-center gap-3 rounded-full bg-[#d8c59a] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#193d2b]">
                View our clients <ArrowRight className="cms-button-icon" size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* VISION MISSION VALUES */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-[#e6e1d6] bg-white p-7 sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e9eee5] text-[#193d2b]"><Target size={23} /></span>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a28a58]">Our vision</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Better environments for the future.</h2>
                <p className="mt-4 text-sm leading-8 text-[#77796f]">To become a trusted provider of professional, cost-effective scent and hygiene solutions that support cleaner, more comfortable environments for future generations.</p>
              </article>
              <article className="rounded-3xl border border-[#e6e1d6] bg-white p-7 sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e9eee5] text-[#193d2b]"><Droplets size={23} /></span>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a28a58]">Our mission</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Reliable scenting, supported with care.</h2>
                <p className="mt-4 text-sm leading-8 text-[#77796f]">To deliver reliable, eco-conscious, high-quality home scent systems, commercial diffusers, and fragrance solutions with a strong focus on customer satisfaction and consistent service.</p>
              </article>
            </div>
          </Reveal>

          <Reveal>
            <div className="mb-8 mt-14 text-center">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a28a58]">Our core values</p>
              <h2 className="text-3xl font-semibold sm:text-5xl">The principles behind our work.</h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <article className="cms-card h-full rounded-2xl border border-[#e6e1d6] bg-[#f4f1e9] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#8e7847]">{value.icon}</span>
                  <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#77796f]">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <Reveal>
          <div className="cms-cta mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#193d2b] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d8c59a]">Let’s create better scent experiences</p>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">The right scent solution starts with the right conversation.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70">
              Whether you need a home scent machine, a hotel diffuser, or a scalable commercial scenting system, our team can help you explore the options and plan for ongoing performance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="cms-button inline-flex items-center gap-3 rounded-full bg-[#d8c59a] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#193d2b]">
                Contact Cool Max Scent <ArrowRight className="cms-button-icon" size={16} />
              </Link>
              <Link to="/shop" className="cms-button inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-xs font-medium text-white hover:bg-white/10">
                Browse products <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
