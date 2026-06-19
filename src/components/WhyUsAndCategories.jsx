import { Award, Truck, RefreshCw, Users } from "lucide-react";
import { WHY_US, CATEGORIES, SITE } from "../data/siteData";

const ICON_MAP = { Award, Truck, RefreshCw, Users };

export function WhyUs() {
  return (
    <section id="nosotros" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <p className="text-sm font-semibold text-cyan-glow uppercase tracking-widest mb-3">
              Nuestra diferencia
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Más que una tienda,{" "}
              <span className="text-gradient">tu aliado tech</span>
            </h2>
            <p className="text-slate-text text-lg leading-relaxed mb-10">
              Nacimos como emprendimiento peruano y crecimos con la confianza de nuestros clientes. No somos un catálogo genérico — elegimos las mejores marcas y te asesoramos sin costo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_US.map((item, i) => {
                const Icon = ICON_MAP[item.icon];
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-electric-500/10 text-electric-400 flex items-center justify-center mt-0.5">
                      {Icon && <Icon className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-text text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <div className="card-glass rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-5">
                {[
                  { label: "Satisfacción del cliente", value: 98, color: "bg-electric-500" },
                  { label: "Pedidos entregados a tiempo", value: 96, color: "bg-cyan-glow" },
                  { label: "Productos originales", value: 100, color: "bg-green-500" },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-text">{bar.label}</span>
                      <span className="text-white font-bold">{bar.value}%</span>
                    </div>
                    <div className="h-2 bg-white/8 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${bar.color} rounded-full`}
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t border-white/8 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/4 rounded-2xl">
                    <div className="text-3xl font-black text-white mb-1">300+</div>
                    <div className="text-xs text-slate-text">Clientes activos</div>
                  </div>
                  <div className="text-center p-4 bg-white/4 rounded-2xl">
                    <div className="text-3xl font-black text-white mb-1">50+</div>
                    <div className="text-xs text-slate-text">SKUs disponibles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Categories() {
  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola! Quiero ver el catálogo completo de Nexory Shop.")}`;

  return (
    <section id="categorias" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-cyan-glow uppercase tracking-widest mb-3">
            Explorar
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Todo lo que{" "}
            <span className="text-gradient">necesitas</span>
          </h2>
          <p className="text-slate-text max-w-xl mx-auto">
            Variedad de productos en 6 categorías. Desde cables hasta accesorios de audio premium.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {CATEGORIES.map((cat, i) => {
            const isBlue = cat.color === "blue";
            return (
              <a
                key={i}
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-glass card-hover rounded-2xl p-5 flex flex-col items-center gap-3 text-center cursor-pointer group`}
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200 select-none">
                  {cat.icon}
                </span>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight mb-1">
                    {cat.name}
                  </p>
                  <p className={`text-xs font-medium ${isBlue ? "text-electric-400" : "text-cyan-glow"}`}>
                    {cat.count}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white"
          >
            Ver catálogo completo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
