import { ShoppingBag, MessageCircle } from "lucide-react";

// SVG social icons since lucide-react@0.383 doesn't include Instagram/Facebook
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
import { SITE } from "../data/siteData";

const FOOTER_LINKS = {
  Tienda: [
    { label: "Productos", href: "#productos" },
    { label: "Categorías", href: "#categorias" },
    { label: "Marcas", href: "#productos" },
    { label: "Ofertas", href: "#productos" },
  ],
  Empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ],
  Soporte: [
    { label: "WhatsApp", href: `https://wa.me/${SITE.whatsapp}` },
    { label: "Política de cambios", href: "#" },
    { label: "Delivery Lima", href: "#contacto" },
    { label: "Mayoristas", href: "#contacto" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`;

  return (
    <footer className="relative border-t border-white/8 bg-navy-950/80">
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-500 to-cyan-glow flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Nexory<span className="text-gradient">Shop</span>
              </span>
            </a>
            <p className="text-slate-text text-sm leading-relaxed mb-6 max-w-xs">
              Tu tienda de accesorios tech en Perú. Marcas premium, precios justos y entrega rápida en Lima.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-green-500/15 text-green-400 flex items-center justify-center hover:bg-green-500/25 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 text-slate-text flex items-center justify-center hover:bg-white/10 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 text-slate-text flex items-center justify-center hover:bg-white/10 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-text text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-text/50">
          <p>© {year} Nexory Shop — Todos los derechos reservados</p>
          <p className="flex items-center gap-1">
            🇵🇪 Hecho en Perú con mucho café
          </p>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 btn-whatsapp rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:scale-110 transition-transform"
        aria-label="Contactar por WhatsApp"
        title="Chatea con nosotros"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </footer>
  );
}
