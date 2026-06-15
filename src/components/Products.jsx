import { ShoppingCart, MessageCircle } from "lucide-react";
import { PRODUCTS, SITE } from "../data/siteData";

const BADGE_COLORS = {
  blue: "bg-electric-500/20 text-electric-300 border-electric-500/30",
  cyan: "bg-cyan-glow/15 text-cyan-glow border-cyan-glow/30",
  green: "bg-green-500/15 text-green-400 border-green-500/30",
};

function ProductCard({ product }) {
  const waMsg = `Hola! Estoy interesado en: ${product.brand} ${product.name}. ¿Está disponible?`;
  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(waMsg)}`;

  return (
    <div className="card-glass card-hover rounded-2xl overflow-hidden flex flex-col group">
      {/* Product image area */}
      <div className="relative bg-gradient-to-br from-navy-800 to-navy-950 p-8 flex items-center justify-center min-h-[160px]">
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border ${
              BADGE_COLORS[product.badgeColor] || BADGE_COLORS.blue
            }`}
          >
            {product.badge}
          </span>
        )}
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300 select-none">
          {product.image}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <p className="text-xs font-semibold text-electric-400 uppercase tracking-wider mb-1">
            {product.brand}
          </p>
          <h3 className="text-white font-bold text-base leading-snug mb-2">
            {product.name}
          </h3>
          <p className="text-slate-text text-sm leading-relaxed">
            {product.desc}
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {product.features.map((f) => (
            <span
              key={f}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-text border border-white/8"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/8">
          <div>
            <span className="text-2xl font-black text-white">{product.price}</span>
            {product.oldPrice && (
              <span className="text-sm text-slate-text/60 line-through ml-2">
                {product.oldPrice}
              </span>
            )}
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`;

  return (
    <section id="productos" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold text-cyan-glow uppercase tracking-widest mb-3">
              Catálogo
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Productos{" "}
              <span className="text-gradient">destacados</span>
            </h2>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-electric-400 border border-electric-500/30 hover:bg-electric-500/10 transition-all whitespace-nowrap"
          >
            <ShoppingCart className="w-4 h-4" />
            Ver catálogo completo
          </a>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden text-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-electric-400 border border-electric-500/30 hover:bg-electric-500/10 transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
            Ver catálogo completo
          </a>
        </div>

        {/* Note */}
        <p className="text-center text-slate-text/50 text-sm mt-6">
          * Precios sujetos a disponibilidad. Consulta por stock en tiempo real vía WhatsApp.
        </p>
      </div>
    </section>
  );
}
