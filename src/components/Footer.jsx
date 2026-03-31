import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-3 text-sm text-muted leading-relaxed">
            Professionele serveroplossingen
            <br />
            voor elk type bedrijf.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot shrink-0" />
            Alle systemen operationeel
          </div>
        </div>

        {/* Navigatie */}
        <div>
          <h4 className="text-xs font-semibold text-cream2 uppercase tracking-wider mb-4">
            Navigatie
          </h4>
          <div className="flex flex-col gap-2">
            {[
              ["/", "Home"],
              ["/prijzen", "Prijzen"],
              ["/faq", "FAQ"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="text-sm text-muted hover:text-cream transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Diensten */}
        <div>
          <h4 className="text-xs font-semibold text-cream2 uppercase tracking-wider mb-4">
            Diensten
          </h4>
          <div className="flex flex-col gap-2">
            {[
              "Dedicated Servers",
              "Managed Hosting",
              "Hardware Verkoop",
              "Colocation",
            ].map((s) => (
              <span key={s} className="text-sm text-muted">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold text-cream2 uppercase tracking-wider mb-4">
            Contact
          </h4>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:info@byterack.be"
              className="text-sm text-muted hover:text-cream transition-colors"
            >
              info@byterack.be
            </a>
            <a
              href="tel:+3292000000"
              className="text-sm text-muted hover:text-cream transition-colors"
            >
              +32 9 200 00 00
            </a>
            <span className="text-sm text-muted">Gent, België</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-xs text-muted">
            © 2025 ByteRack BV — Gent, België
          </span>
          <span className="text-xs text-muted text-center sm:text-left">
            This website is for educational purposes only.
          </span>
          <div className="flex items-center gap-4">
            {["Privacybeleid", "Algemene Voorwaarden", "SLA"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-muted hover:text-cream transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
