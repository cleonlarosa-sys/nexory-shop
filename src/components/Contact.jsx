import { MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { SITE } from "../data/siteData";

export default function Contact() {
  const waLink = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`;

  return (
    <section id="contacto" className="py-24 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA block */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 border border-electric-500/20 p-8 sm:p-12 lg:p-16 text-center mb-10">
          {/* Background effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-500/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-glow/6 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            {/* WhatsApp icon */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              ¿Listo para hacer{" "}
              <span className="text-gradient">tu pedido?</span>
            </h2>
            <p className="text-slate-text text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Escríbenos por WhatsApp y recibe asesoría personalizada, precios al por mayor y cotizaciones para empresas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold text-white"
              >
                <MessageCircle className="w-6 h-6" />
                Chatear por WhatsApp ahora
              </a>
            </div>

            {/* Quick info */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-text">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-electric-400" />
                Lunes a Sábado, 9am–7pm
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-electric-400" />
                Respuesta en &lt; 30 minutos
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-electric-400" />
                {SITE.email}
              </div>
            </div>
          </div>
        </div>

        {/* Additional channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: "💬",
              title: "WhatsApp Business",
              desc: "Atención directa y cotizaciones",
              href: waLink,
              cta: "Abrir WhatsApp",
              color: "hover:border-green-500/40",
            },
            {
              icon: "📦",
              title: "Pedidos mayoristas",
              desc: "Precios especiales para revendedores",
              href: waLink,
              cta: "Cotizar ahora",
              color: "hover:border-electric-500/40",
            },
            {
              icon: "🚀",
              title: "Delivery Lima",
              desc: "Entrega mismo día en zonas principales",
              href: waLink,
              cta: "Consultar zona",
              color: "hover:border-cyan-glow/40",
            },
          ].map((channel, i) => (
            <a
              key={i}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-glass ${channel.color} rounded-2xl p-6 flex flex-col gap-3 group transition-all duration-200`}
            >
              <span className="text-3xl">{channel.icon}</span>
              <div>
                <h3 className="text-white font-bold mb-1">{channel.title}</h3>
                <p className="text-slate-text text-sm">{channel.desc}</p>
              </div>
              <span className="text-electric-400 text-sm font-semibold group-hover:text-electric-300 transition-colors mt-auto">
                {channel.cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
