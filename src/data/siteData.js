// ============================================================
// NEXORY SHOP — Datos del sitio
// Edita este archivo para personalizar todo el contenido
// ============================================================
 
export const SITE = {
  name: "Nexory Shop",
  tagline: "Accessories Premium",
  whatsapp: "51958131469", // ← Reemplaza con tu número real
  whatsappMsg: "Hola! Vi su catálogo en nexoryshop.pe y me gustaría hacer un pedido.",
  email: "ventas@nexoryshop.pe",
  instagram: "https://instagram.com/nexoryshop",
  facebook: "https://facebook.com/nexoryshop",
  tiktok: "https://tiktok.com/@nexoryshop",
};

export const HERO = {
  badge: "🇵🇪 Tienda oficial en Perú",
  title: "Accesorios",
  titleHighlight: "que cambian tu día",
  subtitle: "Cables, audífonos, cargadores, power banks y más. Entrega rápida a todo Lima.",
  cta: "Ver catálogo completo",
  ctaSecondary: "Pedir por WhatsApp",
  stats: [
    { value: "100+", label: "Productos disponibles" },
    { value: "4.9★", label: "Satisfacción de clientes" },
    { value: "24h", label: "Entrega en Lima" },
  ],
};

export const BENEFITS = [
  {
    icon: "Shield",
    title: "Garantía de calidad",
    desc: "Solo trabajamos con marcas certificadas. Si tu producto llega defectuoso, lo cambiamos sin preguntas.",
    color: "blue",
  },
  {
    icon: "Zap",
    title: "Entrega express",
    desc: "Despacho el mismo día para pedidos antes de las 2pm. Llegamos a toda Lima Metropolitana.",
    color: "cyan",
  },
  {
    icon: "Tag",
    title: "Mejor precio garantizado",
    desc: "¿Encontraste más barato? Te igualamos el precio. Siempre la mejor relación calidad-precio.",
    color: "blue",
  },
  {
    icon: "Headphones",
    title: "Soporte por WhatsApp",
    desc: "Respuesta en menos de 30 minutos de lunes a sábado. Te asesoramos para elegir el producto correcto.",
    color: "cyan",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    badge: "Más vendido",
    badgeColor: "Gray",
    brand: "Ugreen",
    name: "Power Bank 20000 mAh 100w Ugreen",
    desc: "Carga rapida de 100w de potencia para tu celular, laptop o tablet. Pantalla Led con indicador de bateria + cable",
    price: "S/ 189",
    oldPrice: "S/ 219",
    image: "/Power-Bank-UGREEN-20000mAh-100W-Carga-Super-Rapida-Portatil-PB720-3.png",
    features: ["100W PD", "Pantalla Led"],
  },
  {
    id: 2,
    badge: "Nuevo",
    badgeColor: "cyan",
    brand: "Baseus",
    name: "Audífonos TWS Pro",
    desc: "Cancelación activa de ruido, 30 horas de batería y sonido Hi-Fi. Tu compañero ideal.",
    price: "S/ 89",
    oldPrice: "S/ 129",
    image: "🎧",
    features: ["ANC", "30h batería", "Hi-Fi Sound"],
  },
  {
    id: 3,
    badge: "Oferta",
    badgeColor: "green",
    brand: "Ugreen",
    name: "Cargador GaN 65W 3 Puertos",
    desc: "Carga hasta 3 dispositivos simultáneamente. Tecnología GaN, más compacto que los cargadores tradicionales.",
    price: "S/ 75",
    oldPrice: "S/ 99",
    image: "⚡",
    features: ["65W GaN", "3 puertos", "Ultra compacto"],
  },
  {
    id: 4,
    badge: "Premium",
    badgeColor: "blue",
    brand: "Hoco",
    name: "Hub USB-C 7 en 1",
    desc: "Conecta todo desde un solo puerto. HDMI 4K, USB 3.0, SD Card, y más.",
    price: "S/ 65",
    oldPrice: "S/ 89",
    image: "🖥️",
    features: ["HDMI 4K", "7 puertos", "Plug & Play"],
  },
  {
    id: 5,
    badge: null,
    badgeColor: null,
    brand: "Baseus",
    name: "Soporte magnético para auto",
    desc: "Fijación magnética potente. Compatible con MagSafe y todos los smartphones.",
    price: "S/ 45",
    oldPrice: null,
    image: "🚗",
    features: ["MagSafe", "360°", "Imán potente"],
  },
  {
    id: 6,
    badge: "Favorito",
    badgeColor: "cyan",
    brand: "Ugreen",
    name: "Powerbank 20,000mAh 22.5W",
    desc: "Carga rápida bidireccional. Recarga 2 dispositivos a la vez. Ideal para viajes.",
    price: "S/ 99",
    oldPrice: "S/ 139",
    image: "🔋",
    features: ["22.5W", "20000mAh", "2 salidas"],
  },
];

export const CATEGORIES = [
  { icon: "🔌", name: "Cables & Carga", count: "120+ productos", color: "blue" },
  { icon: "🎧", name: "Audio & Audífonos", count: "80+ productos", color: "cyan" },
  { icon: "📱", name: "Fundas & Protección", count: "200+ productos", color: "blue" },
  { icon: "⚡", name: "Cargadores & Power", count: "90+ productos", color: "cyan" },
  { icon: "🖥️", name: "Hubs & Accesorios PC", count: "60+ productos", color: "blue" },
  { icon: "🚗", name: "Accesorios para Auto", count: "45+ productos", color: "cyan" },
];

export const WHY_US = [
  { icon: "Award", title: "Marcas 100% originales", desc: "Solo distribuimos productos certificados de marcas reconocidas mundialmente." },
  { icon: "Truck", title: "Logística propia en Lima", desc: "Flota de delivery propio para garantizar tus pedidos a tiempo." },
  { icon: "RefreshCw", title: "Cambios sin burocracia", desc: "¿Algo no está bien? Te lo resolvemos en 24 horas, sin vueltas." },
  { icon: "Users", title: "+1,200 clientes satisfechos", desc: "Empresas y personas naturales confían en Nexory para sus accesorios tech." },
];

export const TESTIMONIALS = [
  {
    name: "María G.",
    role: "Diseñadora gráfica",
    text: "Compré el hub USB-C y llegó al día siguiente. La calidad es excelente, exactamente lo que necesitaba para mi setup de trabajo.",
    stars: 5,
    avatar: "MG",
  },
  {
    name: "Carlos R.",
    role: "Ingeniero de sistemas",
    text: "Los cables Ugreen son increíbles. Ya llevo 3 pedidos con Nexory y el servicio siempre es rápido. Totally recomendado.",
    stars: 5,
    avatar: "CR",
  },
  {
    name: "Sofía M.",
    role: "Emprendedora",
    text: "Pedí 10 cargadores para mi negocio. Me dieron buen precio por volumen y llegaron perfectos. Volvería a comprar sin dudarlo.",
    stars: 5,
    avatar: "SM",
  },
  {
    name: "Diego P.",
    role: "Gamer & streamer",
    text: "Los audífonos Baseus tienen un sonido brutal para el precio. Cancelación de ruido real. Muy buena compra.",
    stars: 5,
    avatar: "DP",
  },
];
