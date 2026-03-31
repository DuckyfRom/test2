import { useEffect, useState } from "react";

const units = [
  {
    id: "BR-DEX-4800",
    label: "Server Node 1",
    spec: "Xeon E5  ·  128 GB RAM  ·  4× NVMe",
    load: 72,
    color: "green",
  },
  {
    id: "BR-DEX-4801",
    label: "Server Node 2",
    spec: "Xeon E5  ·  128 GB RAM  ·  4× NVMe",
    load: 91,
    color: "amber",
  },
  {
    id: "BR-STR-960T",
    label: "Storage Array",
    spec: "240 TB  ·  RAID-60",
    load: 45,
    color: "green",
  },
  {
    id: "BR-NET-100G",
    label: "Core Switch",
    spec: "10 GbE  ·  48-port",
    load: 30,
    color: "green",
  },
];

function getLoadColor(pct, color) {
  if (color === "amber" || pct >= 85) return "bg-amber";
  return "bg-green";
}

function LoadBar({ pct, color }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), 300);
    return () => clearTimeout(t);
  }, [pct]);

  return (
    <div className="h-1.5 w-full bg-bg4 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ${getLoadColor(pct, color)}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default function RackVisual() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-bg2 border border-border rounded-2xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-bg4 border-b border-border">
        <div>
          <p className="text-xs text-muted uppercase tracking-widest font-medium">Datacenter</p>
          <p className="text-sm font-semibold text-cream mt-0.5">ByteRack — AMS-01</p>
        </div>
        <div className="flex items-center gap-2 bg-green/10 border border-green/20 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
          <span className="text-xs font-medium text-green">4 / 4 online</span>
        </div>
      </div>

      {/* Units */}
      <div className="divide-y divide-border">
        {units.map((u, i) => {
          const load = u.load + (tick % 4 === i ? 1 : 0);
          const isHigh = load >= 85;
          return (
            <div
              key={u.id}
              className="px-5 py-4 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Row: status dot + name + percentage */}
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2.5">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${isHigh ? "bg-amber animate-pulse-dot" : "bg-green"}`} />
                  <div>
                    <span className="text-sm font-semibold text-cream">{u.label}</span>
                    <span className="text-xs text-muted ml-2">{u.id}</span>
                  </div>
                </div>
                <span className={`text-sm font-bold tabular-nums ${isHigh ? "text-amber" : "text-cream"}`}>
                  {load}%
                </span>
              </div>

              {/* Spec */}
              <p className="text-xs text-muted mb-3 pl-4">{u.spec}</p>

              {/* Full-width bar */}
              <LoadBar pct={load} color={isHigh ? "amber" : u.color} />
            </div>
          );
        })}
      </div>

      {/* Footer stats */}
      <div className="grid grid-cols-3 divide-x divide-border border-t border-border bg-bg4">
        {[
          { label: "Uptime", value: "99.98%", sub: "30 dagen" },
          { label: "Latency", value: "1.2ms", sub: "gemiddeld" },
          { label: "Bandbreedte", value: "10 Gbps", sub: "uplink" },
        ].map(({ label, value, sub }) => (
          <div key={label} className="flex flex-col items-center py-4 gap-0.5">
            <span className="text-xs text-muted">{label}</span>
            <strong className="text-sm font-bold text-cream">{value}</strong>
            <span className="text-xs text-muted/60">{sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
