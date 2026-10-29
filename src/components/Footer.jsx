import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const companyLinks = [
    { label: "About Cool Max Scent", to: "/about" },
    { label: "Our Solutions", to: "/solutions" },
    { label: "Fragrance Innovation", to: "/fragrance-innovation" },
    { label: "Industries We Serve", to: "/industries" },
  ];

  const collectionLinks = [
    { label: "Spray Collections", to: "/shop?category=spray" },
    { label: "Car Scent Diffusers", to: "/shop?category=car-diffusers" },
    { label: "Lobby & HVAC Systems", to: "/shop?category=h-vac-systems" },
    { label: "Wall Mount Diffusers", to: "/shop?category=wall-mount" },
    { label: "Room Solutions", to: "/shop?category=room-solutions" },
    { label: "Automatic Dispensers", to: "/shop?category=automatic-dispensers" },
  ];

  return (
    <footer className="cms-footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .cms-footer {
          --cms-gold: #d7bd83;
          --cms-ink: #101b1b;
          --cms-muted: rgba(255,255,255,.66);
          position: relative;
          overflow: hidden;
          background: #101b1b;
          color: #f8f6ef;
          font-family: 'Poppins', sans-serif;
        }
        .cms-footer *, .cms-footer *::before, .cms-footer *::after { box-sizing: border-box; }
        .cms-footer a { text-decoration: none; }
        .cms-footer-top {
          position: relative;
          padding: 72px 0 58px;
          border-bottom: 1px solid rgba(255,255,255,.13);
        }
        .cms-footer-top::before, .cms-footer-top::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(215,189,131,.13);
          border-radius: 50%;
          pointer-events: none;
        }
        .cms-footer-top::before {
          width: 340px; height: 340px; right: -130px; top: -210px;
          animation: cms-orbit 28s linear infinite;
        }
        .cms-footer-top::after {
          width: 230px; height: 230px; right: -75px; top: -155px;
          animation: cms-orbit 22s linear infinite reverse;
        }
        .cms-footer-container { width: min(1320px, calc(100% - 48px)); margin: 0 auto; }
        .cms-footer-grid {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: 1.05fr .85fr 1fr 1.45fr;
          gap: 42px;
        }
        .cms-footer-brand { animation: cms-rise .7s ease both; }
        .cms-footer-logo {
          display: inline-flex; align-items: center; gap: 3px;
          color: #fff; font-size: 30px; font-weight: 600;
          letter-spacing: -.055em; line-height: 1.1;
          transition: color .25s ease;
        }
        .cms-footer-logo span { color: var(--cms-gold); }
        .cms-footer-logo:hover { color: var(--cms-gold); }
        .cms-footer-tagline {
          max-width: 280px; margin: 20px 0 0;
          color: var(--cms-muted); font-size: 12px;
          line-height: 2; font-weight: 300;
        }
        .cms-footer-eyebrow {
          margin: 5px 0 22px; color: #fff; font-size: 12px;
          font-weight: 500; letter-spacing: .04em;
        }
        .cms-footer-column { animation: cms-rise .7s ease both; }
        .cms-footer-column:nth-child(2) { animation-delay: .08s; }
        .cms-footer-column:nth-child(3) { animation-delay: .16s; }
        .cms-footer-column:nth-child(4) { animation-delay: .24s; }
        .cms-footer-links { display: flex; flex-direction: column; align-items: flex-start; gap: 13px; }
        .cms-footer-links a {
          display: inline-flex; align-items: center; gap: 6px;
          color: var(--cms-muted); font-size: 11px; line-height: 1.7;
          font-weight: 300; transition: color .25s ease, transform .25s ease;
        }
        .cms-footer-links a:hover { color: var(--cms-gold); transform: translateX(4px); }
        .cms-footer-link-arrow { opacity: 0; transition: opacity .25s ease; }
        .cms-footer-links a:hover .cms-footer-link-arrow { opacity: 1; }
        .cms-footer-location + .cms-footer-location {
          margin-top: 24px; padding-top: 22px; border-top: 1px solid rgba(255,255,255,.12);
        }
        .cms-footer-location-title {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 11px; color: var(--cms-gold);
          font-size: 11px; font-weight: 500; letter-spacing: .03em;
        }
        .cms-footer-address {
          margin: 0 0 12px; color: var(--cms-muted);
          font-size: 11px; line-height: 1.9; font-weight: 300;
        }
        .cms-footer-contact {
          display: flex; flex-direction: column; align-items: flex-start; gap: 9px;
        }
        .cms-footer-contact a {
          display: inline-flex; align-items: center; gap: 9px;
          color: var(--cms-muted); font-size: 11px; overflow-wrap: anywhere;
          transition: color .25s ease;
        }
        .cms-footer-contact a svg { flex: 0 0 auto; color: var(--cms-gold); }
        .cms-footer-contact a:hover { color: var(--cms-gold); }
        .cms-footer-bottom {
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; min-height: 76px; color: rgba(255,255,255,.52);
          font-size: 10px; font-weight: 300;
        }
        .cms-footer-legal { display: flex; gap: 20px; }
        .cms-footer-legal a { color: rgba(255,255,255,.52); transition: color .25s ease; }
        .cms-footer-legal a:hover { color: var(--cms-gold); }
        @keyframes cms-rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cms-orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 1050px) {
          .cms-footer-grid { grid-template-columns: 1fr 1fr; gap: 38px 34px; }
          .cms-footer-top { padding: 60px 0 48px; }
        }
        @media (max-width: 560px) {
          .cms-footer-container { width: calc(100% - 36px); }
          .cms-footer-top { padding: 48px 0 40px; }
          .cms-footer-grid { grid-template-columns: 1fr 1fr; gap: 34px 20px; }
          .cms-footer-brand, .cms-footer-contact-column { grid-column: 1 / -1; }
          .cms-footer-logo { font-size: 28px; }
          .cms-footer-eyebrow { margin-bottom: 17px; font-size: 11px; }
          .cms-footer-links { gap: 12px; }
          .cms-footer-bottom { align-items: flex-start; flex-direction: column; justify-content: center; gap: 13px; padding: 22px 0; }
          .cms-footer-legal { gap: 17px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cms-footer *, .cms-footer *::before, .cms-footer *::after {
            animation-duration: .01ms !important; animation-iteration-count: 1 !important;
            transition-duration: .01ms !important; scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="cms-footer-top">
        <div className="cms-footer-container cms-footer-grid">
          <div className="cms-footer-brand">
            <Link className="cms-footer-logo" to="/" aria-label="Cool Max Scent home">
              COOL MAX <span>SCENT.</span>
            </Link>
            <p className="cms-footer-tagline">
              Architects of atmosphere. Curating premium olfactory experiences for distinguished spaces.
            </p>
          </div>

          <div className="cms-footer-column">
            <h4 className="cms-footer-eyebrow">Company</h4>
            <nav className="cms-footer-links" aria-label="Company">
              {companyLinks.map((item) => (
                <Link key={item.label} to={item.to}>
                  {item.label}<ArrowUpRight className="cms-footer-link-arrow" size={13} />
                </Link>
              ))}
            </nav>
          </div>

          <div className="cms-footer-column">
            <h4 className="cms-footer-eyebrow">Collections</h4>
            <nav className="cms-footer-links" aria-label="Collections">
              {collectionLinks.map((item) => (
                <Link key={item.label} to={item.to}>
                  {item.label}<ArrowUpRight className="cms-footer-link-arrow" size={13} />
                </Link>
              ))}
            </nav>
          </div>

          <div className="cms-footer-column cms-footer-contact-column">
            <h4 className="cms-footer-eyebrow">Get in touch</h4>

            <div className="cms-footer-location">
              <h5 className="cms-footer-location-title"><MapPin size={15} /> UAE Headquarters</h5>
              <p className="cms-footer-address">
                Office no:501 Al Reem building, Bus station Road Muweilah, Sharjah - UAE
              </p>
              <div className="cms-footer-contact">
                <a href="mailto:secretary@coolmaxscent.com"><Mail size={14} /> secretary@coolmaxscent.com</a>
                <a href="tel:+971509282702"><Phone size={14} /> +971 50 928 2702</a>
              </div>
            </div>

            <div className="cms-footer-location">
              <h5 className="cms-footer-location-title"><MapPin size={15} /> Qatar Branch</h5>
              <p className="cms-footer-address">
                Building Number: 64, Street:, Room No: 02, Office No: 1, 7th Floor, 950 Zone: 27, Doha, Qatar
              </p>
              <div className="cms-footer-contact">
                <a href="mailto:salesqatar@coolmaxscent.com"><Mail size={14} /> salesqatar@coolmaxscent.com</a>
                <a href="tel:+97466043446"><Phone size={14} /> +974 66 043 446</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cms-footer-container cms-footer-bottom">
        <span>© {new Date().getFullYear()} Cool Max Scent. All rights reserved.</span>
        <nav className="cms-footer-legal" aria-label="Legal">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
