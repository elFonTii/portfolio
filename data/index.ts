export const navItems = [
  { name: "Sobre mí", link: "#about" },
  { name: "Proyectos", link: "#projects" },
  { name: "Misión", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      '"Enfocado en el detalle y en generar una experiencia única para el cliente final."',
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "hidden md:block md:w-[425px] p-4",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 2,
    title:
      '"Un apasionado programador que transforma café en código limpio y soluciones creativas. 🚀"',
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-[250px] h-[250px] opacity-15",
    titleClassName: "justify-start",
    img: "/b2.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tecnologías",
    description: "Uso estas",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 4,
    title: "Entusiasta de la tecnología con pasión por crear.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Actualmente construyendo una APP para Delivery's",
    description: "Mi interna",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "¿Listo para impulsar tus proyectos al siguiente nivel?",
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
    title: "Mobile e-banking app",
    des: "Aplicación de banca de Winterbotham para iOS y Android en React Native",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    url: "www.winterbotham.com/",
  },
  {
    id: 2,
    title: "MiniPay - Aplicación e-wallet",
    des: "Pagos más rápidos y seguros, una billetera electrónica en la web.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    url: "/",
  },
  {
    id: 2,
    title: "Reizen - Muebles de hogar",
    des: "Proyecto académico de e-commerce en React",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    url: "www.reizen.vercel.app/",
  },
  {
    id: 2,
    title: "Hackflix - Cartelera de peliculas",
    des: "Aplicación cartelera de peliculas en React y CSS.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/ts.svg", "/css.svg"],
    url: "www.hackflix-app.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Felipe ha sido una increíble adhesión al equipo de Magenta Innova. Su energía y ganas de mejorar contagian al equipo.  Su talento y ambición van de la mano. En el tiempo que ha pasado con nosotros se ha preocupado por mejorar como compañero, desarrollador y empleado día a día.",
    name: "Lucía Maciel",
    title: "Lic. en Recursos Humanos / RRHH en Magenta Innova",
  },
  {
    quote:
      "Felipe ha sido una increíble adhesión al equipo de Magenta Innova. Su energía y ganas de mejorar contagian al equipo.  Su talento y ambición van de la mano. En el tiempo que ha pasado con nosotros se ha preocupado por mejorar como compañero, desarrollador y empleado día a día.",
    name: "Lucía Maciel",
    title: "Lic. en Recursos Humanos / RRHH en Magenta Innova",
  },
  {
    quote:
      "Felipe ha sido una increíble adhesión al equipo de Magenta Innova. Su energía y ganas de mejorar contagian al equipo.  Su talento y ambición van de la mano. En el tiempo que ha pasado con nosotros se ha preocupado por mejorar como compañero, desarrollador y empleado día a día.",
    name: "Lucía Maciel",
    title: "Lic. en Recursos Humanos / RRHH en Magenta Innova",
  },
];

export const companies = [
  {
    id: 1,
    name: "Supabase",
    img: "",
    nameImg: "/supabase.svg",
  },
  {
    id: 2,
    name: "Next.js",
    img: "/app.svg",
    nameImg: "/nextjs.svg",
  },
  {
    id: 3,
    name: "Hostinger",
    img: "",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Bitbucket",
    img: "",
    nameImg: "/bitbucket.svg",
  },
  {
    id: 5,
    name: "Expo",
    img: "",
    nameImg: "/expo.svg",
  },
  {
    id: 6,
    name: "Jira.",
    img: "",
    nameImg: "/jira.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
