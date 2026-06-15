import { Shield, Zap, Tag, Headphones } from "lucide-react";
import { BENEFITS } from "../data/siteData";

const ICON_MAP = { Shield, Zap, Tag, Headphones };

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-cyan-glow uppercase tracking-widest mb-3">
            ¿Por qué Nexory?
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Compra con{" "}
            <span className="text-gradient">total confianza</span>
          </h2>
          <p className="text-slate-text max-w-xl mx-auto text-lg">
            Cada pedido es una promesa. Garantizamos calidad, velocidad y atención real.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b, i) => {
            const Icon = ICON_MAP[b.icon];
            const isBlue = b.color === "blue";
            return (
              <div
                key={i}
                className="card-glass card-hover rounded-2xl p-6 flex flex-col gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isBlue
                      ? "bg-electric-500/15 text-electric-400"
                      : "bg-cyan-glow/15 text-cyan-glow"
                  }`}
                >
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-slate-text text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
