import { ArrowRight, MessageCircle, ChevronDown, Cable, Headphones, Zap, BatteryCharging, Package } from "lucide-react";
import { HERO, SITE } from "../data/siteData";

const CATEGORY_ICONS = [
  { label: "Cables", icon: Cable },
  { label: "Audífonos", icon: Headphones },
  { label: "Cargadores", icon: Zap },
  { label: "Powerbanks", icon: BatteryCharging },
  { label: "Accesorios", icon: Package },
];

export default function Hero() {
  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-glow/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-800/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-cyan-glow rounded-full animate-pulse-slow" />
            {HERO.badge}
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.05]">
            {HERO.title}{" "}
            <span className="text-gradient block sm:inline">{HERO.titleHighlight}</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-text max-w-2xl mx-auto mb-10 leading-relaxed">
            {HERO.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a href="#productos" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white glow-blue">
              {HERO.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white">
              <MessageCircle className="w-5 h-5" />
              {HERO.ctaSecondary}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto mb-12">
            {HERO.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-text leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Categories banner */}
          <div className="relative rounded-3xl overflow-hidden border border-white/8 p-8 sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-500/15 via-navy-800/40 to-cyan-glow/10" />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-cyan-glow/15 rounded-full blur-3xl" />

            <div className="relative">
              <p className="text-xs text-slate-text/70 uppercase tracking-widest mb-6 font-semibold">
                Lo que encontrarás en Nexory
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {CATEGORY_ICONS.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electric-500/30 transition-all duration-200">
                    <Icon className="w-4 h-4 text-cyan-glow" />
                    <span className="text-white text-sm font-semibold tracking-wide">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-text/40" />
      </div>
    </section>
  );
}
