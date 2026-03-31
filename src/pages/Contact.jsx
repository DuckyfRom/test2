import { useState } from "react";

const subjects = [
  "Offerte dedicated server",
  "Offerte managed hosting",
  "Hardware aankoop",
  "Technische support",
  "Facturatie",
  "Andere",
];

const inputClass = (hasError) =>
  `w-full bg-bg border rounded-lg px-3 py-2.5 text-sm text-cream placeholder-muted/60 outline-none transition-colors focus:border-green/60 focus:ring-1 focus:ring-green/20 ${
    hasError ? "border-red-500/60" : "border-border2"
  }`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Verplicht veld";
    if (!form.email.trim()) e.email = "Verplicht veld";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Ongeldig e-mailadres";
    if (!form.message.trim()) e.message = "Verplicht veld";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1400);
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: null }));
  };

  return (
    <div className="pt-16">
      {/* HERO */}
      <div className="max-w-2xl mx-auto px-3 sm:px-4 pt-16 pb-12 text-center">
        <p className="text-xs font-semibold text-green uppercase tracking-widest mb-3">
          Neem contact op
        </p>
        <h1 className="text-4xl sm:text-5xl font-head font-bold text-cream mb-4">
          Wij helpen je graag verder
        </h1>
        <p className="text-base text-muted leading-relaxed">
          Heb je een vraag over onze diensten of wil je een offerte aanvragen?
          Ons team reageert binnen 24 uur.
        </p>
      </div>

      {/* LAYOUT */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12">
        {/* INFO PANEL */}
        <div className="bg-bg2 border border-border rounded-xl overflow-hidden h-full flex flex-col">
          <div className="px-6 py-5 border-b border-border">
            <h2 className="text-base font-head font-semibold text-cream mb-1">Contactgegevens</h2>
            <p className="text-sm text-muted leading-relaxed">
              Neem direct contact op of stuur ons een bericht via het formulier.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-border flex-1">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                  </svg>
                ),
                label: "Telefoon",
                primary: <a href="tel:+3292000000" className="text-sm text-cream2 hover:text-cream transition-colors">+32 9 200 00 00</a>,
                secondary: "Ma–vr: 8u–18u",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "E-mail",
                primary: <a href="mailto:info@byterack.be" className="text-sm text-cream2 hover:text-cream transition-colors">info@byterack.be</a>,
                secondary: "Reactie binnen 24u",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "Adres",
                primary: <span className="text-sm text-cream2">Voorbeeldstraat 42</span>,
                secondary: "9000 Gent, België",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                label: "Support responstijd",
                primary: <span className="text-sm text-green font-medium">Onder 15 minuten</span>,
                secondary: "Gegarandeerd via SLA",
              },
            ].map(({ icon, label, primary, secondary }) => (
              <div key={label} className="flex items-center gap-4 px-6 py-4">
                <div className="w-8 h-8 rounded-lg bg-green/10 text-green flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted mb-0.5">{label}</p>
                  {primary}
                  <p className="text-xs text-muted mt-0.5">{secondary}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 py-4 border-t border-border bg-bg">
            <div className="flex items-center gap-2 text-xs text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot shrink-0" />
              Alle systemen operationeel · 99.98% uptime
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-bg2 border border-border rounded-xl p-6 sm:p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
              <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  stroke="#2ec97a"
                  strokeWidth="2"
                />
                <polyline
                  points="14,24 21,31 34,17"
                  stroke="#2ec97a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="text-xl font-head font-bold text-cream">
                Bericht verstuurd!
              </h3>
              <p className="text-sm text-muted max-w-xs">
                We contacteren je zo snel mogelijk, normaal gezien binnen 24
                uur.
              </p>
              <button
                className="mt-2 text-sm text-green border border-green/30 px-4 py-2 rounded-lg hover:bg-green/10 transition-colors"
                onClick={() => {
                  setSent(false);
                  setForm({
                    name: "",
                    email: "",
                    company: "",
                    subject: "",
                    message: "",
                  });
                }}
              >
                Nieuw bericht sturen
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              <h2 className="text-xl font-head font-bold text-cream">
                Stuur ons een bericht
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-cream2">
                    Naam <span className="text-green">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Jan Janssen"
                    value={form.name}
                    onChange={handleChange("name")}
                    className={inputClass(errors.name)}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-400">{errors.name}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-cream2">
                    E-mail <span className="text-green">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="jan@bedrijf.be"
                    value={form.email}
                    onChange={handleChange("email")}
                    className={inputClass(errors.email)}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-cream2">
                    Bedrijf
                  </label>
                  <input
                    type="text"
                    placeholder="Bedrijf BV (optioneel)"
                    value={form.company}
                    onChange={handleChange("company")}
                    className={inputClass(false)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-cream2">
                    Onderwerp
                  </label>
                  <select
                    value={form.subject}
                    onChange={handleChange("subject")}
                    className={`${inputClass(false)} appearance-none`}
                  >
                    <option value="">Selecteer een onderwerp</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-cream2">
                  Bericht <span className="text-green">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Beschrijf je vraag of nood zo gedetailleerd mogelijk..."
                  value={form.message}
                  onChange={handleChange("message")}
                  className={`${inputClass(errors.message)} resize-none`}
                />
                {errors.message && (
                  <span className="text-xs text-red-400">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center bg-green text-bg font-semibold text-sm px-6 py-3 rounded-lg hover:bg-green/90 transition-colors disabled:opacity-60"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                ) : (
                  "Bericht versturen →"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
