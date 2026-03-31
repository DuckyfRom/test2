import { useState } from "react";

import { Link } from "react-router-dom";

const categories = [
  {
    label: "Algemeen",
    items: [
      {
        q: "Wat is ByteRack precies?",
        a: "ByteRack is een Belgisch bedrijf gevestigd in Gent dat professionele serveroplossingen aanbiedt. Wij leveren zowel managed hosting als de verkoop van serverhardware. Onze klanten variëren van kleine startups tot grote ondernemingen.",
      },
      {
        q: "Waar bevindt jullie datacenter zich?",
        a: "Onze servers staan opgesteld in een Tier-3 datacenter in Amsterdam (AMS-01) met redundante stroomvoorziening, koeling en 10Gbps-uplinks. Voor Belgische klanten kunnen we ook colocation aanbieden in datacenters in Brussel of Antwerpen.",
      },
      {
        q: "Bieden jullie ook diensten aan voor particulieren?",
        a: "Onze diensten zijn primair gericht op bedrijven en ontwikkelaars. Particulieren zijn echter ook welkom — aarzel niet om contact op te nemen voor een aangepast voorstel.",
      },
    ],
  },
  {
    label: "Hosting & Servers",
    items: [
      {
        q: "Wat is het verschil tussen dedicated hosting en managed hosting?",
        a: "Bij dedicated hosting huur je een volledige fysieke server uitsluitend voor jouw gebruik. Bij managed hosting beheren wij ook het besturingssysteem, updates en monitoring. Managed hosting is ideaal als je geen intern IT-team hebt.",
      },
      {
        q: "Welke besturingssystemen worden ondersteund?",
        a: "Wij ondersteunen alle gangbare Linux-distributies (Ubuntu, Debian, CentOS, AlmaLinux, Rocky Linux) en Windows Server. Aangepaste installaties zijn mogelijk op aanvraag.",
      },
      {
        q: "Kan ik op elk moment upgraden naar een hoger plan?",
        a: "Ja, je kan op elk moment upgraden. De migratie verloopt met minimale downtime en je betaalt alleen het verschil voor de resterende periode.",
      },
      {
        q: "Is er een minimale contractduur?",
        a: "Nee. Onze plannen zijn maand-tot-maand beschikbaar zonder langetermijnverplichting. Bij jaarlijkse facturatie geniet je van 17% korting.",
      },
    ],
  },
  {
    label: "Technisch",
    items: [
      {
        q: "Welke bandbreedte is inbegrepen in elk plan?",
        a: "Alle plannen inclusief onbeperkt inkomend verkeer. Uitkomend verkeer is inclusief tot 10 TB/maand voor Professional en hoger. Starter heeft 2 TB/maand — extra verkeer wordt verrekend aan €0.01/GB.",
      },
      {
        q: "Hoe werkt de DDoS-bescherming?",
        a: "Onze geavanceerde DDoS-mitigatie detecteert aanvallen automatisch en filtert kwaadaardig verkeer weg voor het jouw server bereikt. Dit is volledig transparant voor legitiem verkeer en vereist geen configuratie van jouw kant.",
      },
      {
        q: "Kan ik een eigen IP-adres (BYOIP) meebrengen?",
        a: "Ja, dit is mogelijk bij Enterprise-plannen. Neem contact op met ons team voor de specifieke vereisten en het migratieproces.",
      },
    ],
  },
  {
    label: "Facturatie",
    items: [
      {
        q: "Welke betaalmethoden accepteren jullie?",
        a: "Wij accepteren bankoverschrijving, Bancontact, Visa/Mastercard en SEPA-domiciliëring. Voor Enterprise-klanten zijn ook facturen op 30 dagen mogelijk.",
      },
      {
        q: "Zijn de prijzen inclusief BTW?",
        a: "Alle getoonde prijzen zijn exclusief BTW (21%). BTW-plichtige Belgische bedrijven kunnen hun BTW-nummer opgeven voor vrijstelling. EU-bedrijven buiten België kunnen het intracommunautaire systeem gebruiken.",
      },
      {
        q: "Wat gebeurt er als ik mijn abonnement wil opzeggen?",
        a: "Je kan op elk moment opzeggen via je klantenportaal of door ons te contacteren. Bij maandelijkse facturatie stopt het abonnement op het einde van de lopende betaalperiode. Jouw data blijft beschikbaar voor 14 dagen na stopzetting.",
      },
    ],
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-border/50 last:border-0 ${open ? "bg-bg3/30" : ""}`}>
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-3.5 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`text-sm transition-colors ${open ? "text-cream font-medium" : "text-cream2"}`}>
          {q}
        </span>
        <span className={`shrink-0 text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <polyline points="4,6 8,10 12,6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? "400px" : "0" }}>
        <p className="text-sm text-muted leading-relaxed px-5 pb-4">{a}</p>
      </div>
    </div>
  );
}

function Category({ cat }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border transition-all duration-200 overflow-hidden ${open ? "border-green/30" : "border-border"}`}>
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="flex items-center gap-3">
          <span className={`text-base font-semibold transition-colors ${open ? "text-cream" : "text-cream2"}`}>
            {cat.label}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${open ? "bg-green/20 text-green" : "bg-border2 text-muted"}`}>
            {cat.items.length}
          </span>
        </div>
        <span className={`shrink-0 transition-all duration-300 ${open ? "text-green rotate-180" : "text-muted"}`}>
          <svg viewBox="0 0 16 16" fill="none" className="w-5 h-5">
            <polyline points="4,6 8,10 12,6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? `${cat.items.length * 200}px` : "0" }}>
        <div className="border-t border-border">
          {cat.items.map((item) => (
            <Item key={item.q} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="pt-16">
      {/* HERO */}
      <div className="max-w-2xl mx-auto px-3 sm:px-4 pt-16 pb-12 text-center">
        <p className="text-xs font-semibold text-green uppercase tracking-widest mb-3">
          Veelgestelde vragen
        </p>
        <h1 className="text-4xl sm:text-5xl font-head font-bold text-cream mb-4">
          FAQ
        </h1>
        <p className="text-base text-muted leading-relaxed">
          Vind snel een antwoord op de meest gestelde vragen. Staat jouw vraag
          er niet bij?{" "}
          <Link to="/contact" className="text-green hover:underline">
            Contacteer ons
          </Link>
          .
        </p>
      </div>

      {/* NESTED ACCORDION */}
      <div className="max-w-3xl mx-auto px-3 sm:px-4 pb-12 flex flex-col gap-3">
        {categories.map((cat) => (
          <Category key={cat.label} cat={cat} />
        ))}
      </div>

      {/* BOTTOM CTA */}
      <div className="border-t border-border bg-bg2">
        <div className="max-w-2xl mx-auto px-3 sm:px-4 py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-head font-bold text-cream mb-3">
            Staat je vraag er niet bij?
          </h2>
          <p className="text-sm text-muted mb-6 leading-relaxed">
            Ons team staat klaar om je te helpen — ook voor complexe technische
            vragen.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-green text-bg font-semibold text-sm px-6 py-3 rounded-lg hover:bg-green/90 transition-colors"
          >
            Neem contact op →
          </Link>
        </div>
      </div>
    </div>
  );
}
