export const navItems = [
  { name: "Sobre mí", link: "#about" },
  { name: "Proyectos", link: "#projects" },
  { name: "Testimonios", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Priorizo la colaboración con el cliente y la comunicación constante",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Disponible para trabajo remoto en cualquier zona horaria",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mi stack tecnológico",
    description: "Siempre buscando mejorar",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Desarrollador Full Stack apasionado por la automatización y los sistemas escalables.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "Actualmente construyendo flujos de automatización con IA usando n8n",
    description: "Lo que viene",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "¿Tienes un proyecto en mente? Conversemos.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sistema de Ventas e Inventario",
    des: "Plataforma full stack con dashboard en tiempo real, punto de venta (POS), gestión de inventario y reportes. Desplegada en Vercel con PostgreSQL como base de datos.",
    img: "/p-ventas.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/vite.png", "/pgadmin.png"],
    link: "https://github.com/chagipe/sistema-ventas",
  },
  {
    id: 2,
    title: "ChagiControl — Gestión de Tickets de Soporte",
    des: "Sistema de tickets para Soporte Técnico L1 con alertas sonoras para emergencias, filtro dinámico, asignación de técnicos y panel de control visual en modo oscuro.",
    img: "/p-chagi.svg",
    iconLists: ["/ts.svg", "/js.png", "/tail.svg", "/re.svg"],
    link: "https://github.com/chagipe/chagi-control",
  },
];

export const testimonials = [
  {
    quote:
      "Tuve la oportunidad de trabajar junto a Hiroshi y puedo decir que es un desarrollador muy completo. Su capacidad para resolver problemas complejos, escribir código limpio y adaptarse rápidamente a nuevas tecnologías lo hace destacar. Siempre dispuesto a colaborar y aportar soluciones. Sin duda un gran profesional.",
    name: "Aldair Cano Francisco",
    title: "Software Developer | Data & Applications Specialist",
    img: "/aldair.jpg",
  },
  {
    quote:
      "Hiroshi desarrolló para nuestra inmobiliaria un sistema de gestión que transformó la manera en que operamos. Podemos registrar inmuebles, hacer seguimiento de clientes, gestionar contratos y generar reportes de manera sencilla. Profesional, puntual y con una capacidad técnica impresionante. Muy recomendado.",
    name: "Jorge Begazo Jara",
    title: "Gerente Comercial en Ponte di Pietro Inmobiliaria",
    img: "/jorge.jpg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Técnico de Soporte TI — Ponte di Pietro Inmobiliaria",
    desc: "Soporte técnico integral Nivel 1, gestión de incidencias y requerimientos de usuario. Enfocado en tiempos de respuesta y satisfacción del cliente interno. Jun. 2025 - actualidad.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Desarrollador de Software — Autónomo",
    desc: "Desarrollo de software y páginas web enfocado en soluciones digitales completas. Gestiono desde la construcción del sitio hasta la infraestructura necesaria para su puesta en marcha. Ene. 2023 - actualidad.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Técnico de Centro de Asistencia — ELYCE S.R.L",
    desc: "Soporte técnico integral y resolución de incidencias tecnológicas. Mantenimiento preventivo y correctivo de equipos para asegurar la continuidad operativa. May. 2019 - Nov. 2021.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Automatización e IA — Aprendizaje Continuo",
    desc: "Explorando e implementando flujos de automatización con n8n, integraciones de APIs y agentes con IA. Construyendo soluciones que eliminan procesos manuales y optimizan operaciones.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg", // GitHub: github.com/chagipe
  },
  {
    id: 2,
    img: "/link.svg", // LinkedIn: linkedin.com/in/sebastian-hiroshi-begazo-kobayashi-627190211
  },
];
