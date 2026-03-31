import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/prijzen", label: "Prijzen" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : ""}`}
      >
        <nav className="max-w-7xl mx-auto px-3 sm:px-4 h-16 flex items-center justify-between">
          <Link to="/" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${isActive ? "text-green" : "text-cream2 hover:text-cream"}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center bg-green text-bg text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green/90 transition-colors"
          >
            Offerte aanvragen
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-cream rounded transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-cream rounded transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-cream rounded transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu — outside header to avoid stacking context issues */}
      <div
        className={`md:hidden fixed inset-0 top-16 z-[200] transition-all duration-300 ${open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"}`}
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <ul className="flex flex-col px-6 pt-2 list-none overflow-y-auto h-full">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-4 text-base font-medium border-b border-border transition-colors ${isActive ? "text-green" : "text-cream2"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="mt-6">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center bg-green text-bg text-sm font-semibold px-4 py-3 rounded-lg"
            >
              Offerte aanvragen
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
