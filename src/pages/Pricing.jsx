import { useState } from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 29,
    desc: "Ideaal voor kleine projecten en ontwikkelomgevingen.",
    features: [
      { text: "4 vCPU cores", active: true },
      { text: "8 GB RAM", active: true },
      { text: "200 GB SSD", active: true },
      { text: "1 Gbps uplink", active: true },
      { text: "DDoS-bescherming", active: false },
      { text: "Managed support", active: false },
      { text: "SLA 99.9%", active: false },
    ],
    featured: false,
    cta: "Kies Starter",
  },
  {
    name: "Professional",
    monthlyPrice: 89,
    desc: "Voor groeiende bedrijven met hogere eisen aan performance.",
    features: [
      { text: "16 vCPU cores", active: true },
      { text: "32 GB RAM", active: true },
      { text: "1 TB NVMe SSD", active: true },
      { text: "10 Gbps uplink", active: true },
      { text: "DDoS-bescherming", active: true },
      { text: "Managed support", active: false },
      { text: "SLA 99.9%", active: true },
    ],
    featured: true,
    badge: "Populairste keuze",
    cta: "Kies Professional",
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    desc: "Volledige vrijheid in hardware en configuratie voor grootschalige infrastructuur.",
    features: [
      { text: "Dedicated hardware", active: true },
      { text: "Tot 2 TB RAM", active: true },
      { text: "Multi-rack setup", active: true },
      { text: "10/40 Gbps uplink", active: true },
      { text: "DDoS-bescherming", active: true },
      { text: "24/7 managed support", active: true },
      { text: "SLA 99.99%", active: true },
    ],
    featured: false,
    cta: "Neem contact op",
    ctaLink: "/contact",
  },
];

const addons = [
  { name: "Extra IPv4-adres", price: "€2/maand" },
  { name: "Extra backup-opslag", price: "vanaf €5/maand" },
  { name: "Geavanceerde firewall", price: "€15/maand" },
  { name: "cPanel / Plesk licentie", price: "€12/maand" },
];

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0">
    <circle
      cx="8"
      cy="8"
      r="7"
      fill="rgba(46,201,122,0.15)"
      stroke="#2ec97a"
      strokeWidth="1.2"
    />
    <polyline
      points="5,8 7,10 11,6"
      stroke="#2ec97a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 shrink-0">
    <circle
      cx="8"
      cy="8"
      r="7"
      fill="rgba(255,255,255,0.04)"
      stroke="#2a3d2e"
      strokeWidth="1.2"
    />
    <line
      x1="5.5"
      y1="8"
      x2="10.5"
      y2="8"
      stroke="#2a3d2e"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const getPrice = (monthly) => {
    if (!monthly) return null;
    return yearly ? Math.round(monthly * 12 * 0.83) : monthly;
  };

  return (
    <div className="pt-16">
      {/* HERO */}
      <div className="max-w-2xl mx-auto px-3 sm:px-4 pt-16 pb-12 text-center">
        <p className="text-xs font-semibold text-green uppercase tracking-widest mb-3">
          Hosting plannen
        </p>
        <h1 className="text-4xl sm:text-5xl font-head font-bold text-cream mb-4">
          Transparante prijzen
        </h1>
        <p className="text-base text-muted leading-relaxed mb-8">
          Geen verborgen kosten, geen langetermijnverplichtingen. Kies het plan
          dat bij jouw noden past.
        </p>

        {/* Toggle */}
        <div className="inline-flex items-center gap-3 text-sm">
          <span className={!yearly ? "text-cream font-medium" : "text-muted"}>
            Maandelijks
          </span>
          <button
            onClick={() => setYearly((y) => !y)}
            aria-label="Toggle jaarlijkse facturatie"
            className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${yearly ? "bg-green" : "bg-border2"}`}
          >
            <span
              className={`absolute top-1 w-4 h-4 rounded-full bg-bg transition-all duration-300 ${yearly ? "left-6" : "left-1"}`}
            />
          </button>
          <span className={yearly ? "text-cream font-medium" : "text-muted"}>
            Jaarlijks
            <span className="ml-1.5 text-xs bg-green/15 text-green border border-green/20 px-1.5 py-0.5 rounded-full">
              −17%
            </span>
          </span>
        </div>
      </div>

      {/* PLANS */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-6 flex flex-col gap-6 ${
                plan.featured
                  ? "bg-bg2 border-green shadow-[0_0_40px_rgba(46,201,122,0.12)]"
                  : "bg-bg2 border-border"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-green text-bg text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h2 className="text-xl font-head font-bold text-cream mb-1">
                  {plan.name}
                </h2>
                <p className="text-sm text-muted">{plan.desc}</p>
              </div>

              <div className="flex items-end gap-1">
                {plan.monthlyPrice ? (
                  <>
                    <span className="text-4xl font-head font-bold text-cream">
                      €{getPrice(plan.monthlyPrice)}
                    </span>
                    <span className="text-sm text-muted mb-1">
                      /{yearly ? "jaar" : "maand"}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-head font-bold text-cream">
                    Op maat
                  </span>
                )}
              </div>

              <ul className="flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    className={`flex items-center gap-2.5 text-sm ${f.active ? "text-cream2" : "text-muted/50"}`}
                  >
                    {f.active ? <CheckIcon /> : <MinusIcon />}
                    {f.text}
                  </li>
                ))}
              </ul>

              <Link
                to={plan.ctaLink || "/contact"}
                className={`mt-auto inline-flex items-center justify-center text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors ${
                  plan.featured
                    ? "bg-green text-bg hover:bg-green/90"
                    : "border border-border2 text-cream2 hover:border-green/40 hover:text-cream"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ADD-ONS */}
      <div className="border-t border-border bg-bg2">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-semibold text-green uppercase tracking-widest mb-2">
                Uitbreidingen
              </p>
              <h2 className="text-2xl sm:text-3xl font-head font-bold text-cream mb-1">
                Optionele add-ons
              </h2>
              <p className="text-sm text-muted">
                Voeg extra functionaliteit toe aan elk plan.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {addons.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between bg-bg border border-border rounded-lg px-4 py-3"
              >
                <span className="text-sm text-cream2">{a.name}</span>
                <strong className="text-sm font-semibold text-green">
                  {a.price}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ CTA */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted">
        <span>Twijfels over welk plan het beste past?</span>
        <Link to="/faq" className="text-green hover:underline font-medium">
          Bekijk onze FAQ →
        </Link>
        <span className="hidden sm:inline">of</span>
        <Link
          to="/contact"
          className="text-cream2 hover:text-cream transition-colors font-medium"
        >
          Contacteer ons
        </Link>
      </div>
    </div>
  );
}
