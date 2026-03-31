import { Link } from "react-router-dom";
import RackVisual from "../components/RackVisual";

const services = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <rect x="2" y="3" width="20" height="5" rx="1" />
        <rect x="2" y="11" width="20" height="5" rx="1" />
        <circle cx="18" cy="5.5" r="0.8" fill="currentColor" />
        <circle cx="18" cy="13.5" r="0.8" fill="currentColor" />
      </svg>
    ),
    title: "Dedicated Servers",
    desc: "Volledige servercapaciteit uitsluitend voor jou. Geen shared resources — maximale prestaties voor veeleisende workloads en kritieke applicaties.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Managed Hosting",
    desc: "Wij beheren de volledige infrastructuur zodat jij je kan focussen op je applicatie. Inclusief 24/7 monitoring, updates en proactieve support.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    title: "Hardware Verkoop",
    desc: "Koop nieuwe of gecertificeerde refurbished servers rechtstreeks bij ons. Elk toestel is getest en geleverd met volledige garantie.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
    title: "Colocation",
    desc: "Plaats jouw eigen hardware in ons datacenter. Profiteer van onze 10Gbps-uplinks, redundante stroomvoorziening en 24/7 fysieke beveiliging.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "DDoS-bescherming",
    desc: "Geavanceerde bescherming tegen DDoS-aanvallen standaard inbegrepen bij elk plan. Automatisch geactiveerd bij detectie, geen downtime.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "24/7 Support",
    desc: "Ons technisch team staat altijd voor je klaar — ook midden in de nacht. Reactietijd onder 15 minuten gegarandeerd via onze SLA.",
  },
];

const stats = [
  { value: "99.98%", label: "Uptime SLA" },
  { value: "10Gbps", label: "Netwerk uplink" },
  { value: "<15min", label: "Support reactietijd" },
  { value: "24/7", label: "Monitoring" },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 text-xs font-medium text-green bg-green/10 border border-green/20 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
            Server specialist — Gent, België
          </div>

          <h1 className="animate-fade-up delay-1 text-4xl sm:text-5xl lg:text-6xl font-head font-bold text-cream mb-4 leading-tight">
            Krachtige servers.
            <br />
            <em className="not-italic text-green">
              Gebouwd om
              <br />
              te schalen.
            </em>
          </h1>

          <p className="animate-fade-up delay-2 text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-lg">
            ByteRack levert professionele serveroplossingen — van dedicated
            hosting tot verkoop van high-performance hardware. Betrouwbaar, snel
            en volledig op maat.
          </p>

          <div className="animate-fade-up delay-3 flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              to="/prijzen"
              className="inline-flex items-center justify-center bg-green text-bg font-semibold text-sm px-6 py-3 rounded-lg hover:bg-green/90 transition-colors w-full sm:w-auto"
            >
              Bekijk onze plannen
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-border2 text-cream2 font-medium text-sm px-6 py-3 rounded-lg hover:border-green/40 hover:text-cream transition-colors w-full sm:w-auto"
            >
              Offerte aanvragen →
            </Link>
          </div>

          <div className="animate-fade-up delay-4 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
            {stats.map((s) => (
              <div key={s.label}>
                <strong className="block text-xl font-head font-bold text-cream">
                  {s.value}
                </strong>
                <span className="text-xs text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up delay-2">
          <RackVisual />
        </div>
      </section>

      <div className="border-t border-border" />

      {/* DIENSTEN */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-green uppercase tracking-widest mb-3">
            Wat wij doen
          </p>
          <h2 className="text-3xl sm:text-4xl font-head font-bold text-cream mb-4">
            Alles voor jouw infrastructuur
          </h2>
          <p className="text-base text-muted max-w-xl mx-auto leading-relaxed">
            Of je nu een dedicated server nodig hebt, managed hosting zoekt of
            hardware wil aankopen — ByteRack regelt het van A tot Z.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-bg2 border border-border rounded-xl p-6 hover:border-border2 hover:bg-bg3 transition-colors animate-fade-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="w-9 h-9 rounded-lg bg-green/10 text-green flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="text-base font-head font-semibold text-cream mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t border-border bg-bg2">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-12 sm:py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-head font-bold text-cream mb-2">
              Klaar om te starten?
            </h2>
            <p className="text-sm text-muted">
              Vraag een vrijblijvende offerte aan — we reageren binnen 24u.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-green text-bg font-semibold text-sm px-6 py-3 rounded-lg hover:bg-green/90 transition-colors w-full sm:w-auto"
            >
              Offerte aanvragen
            </Link>
            <Link
              to="/prijzen"
              className="inline-flex items-center justify-center border border-border2 text-cream2 font-medium text-sm px-6 py-3 rounded-lg hover:border-green/40 hover:text-cream transition-colors w-full sm:w-auto"
            >
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
