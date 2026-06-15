import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/siteData";

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-cyan-glow uppercase tracking-widest mb-3">
            Testimonios reales
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Lo que dicen{" "}
            <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="text-slate-text max-w-md mx-auto">
            Más de 1,200 clientes confían en Nexory. Aquí algunos comentarios reales.
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { value: "4.9/5", label: "Calificación promedio" },
            { value: "1,200+", label: "Reseñas verificadas" },
            { value: "98%", label: "Recomendarían Nexory" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 bg-white/4 border border-white/8 rounded-2xl px-6 py-3"
            >
              <span className="text-2xl font-black text-white">{badge.value}</span>
              <span className="text-sm text-slate-text">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="card-glass rounded-2xl p-6 flex flex-col gap-4 hover:border-white/15 transition-all duration-200"
            >
              <Stars count={t.stars} />
              <p className="text-slate-text text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/8">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-electric-500 to-cyan-glow flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-text/60 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
