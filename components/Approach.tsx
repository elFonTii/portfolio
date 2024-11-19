import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Enfoque <span className="text-yellow-500">de trabajo</span>
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* add des prop */}
        <Card
          title="Planeamiento y Dirección"
          icon={<AceternityIcon order="Fase 1" />}
          des="Trabajaremos juntos para establecer las bases sólidas de tu proyecto de software. Definiremos en detalle los objetivos principales, identificaremos al público objetivo y determinaremos las funcionalidades esenciales. Nos enfocaremos en diseñar la estructura del sistema, planificar la navegación y organizar los requerimientos técnicos. También evaluaremos las prioridades del proyecto y trazaremos un roadmap claro que guiará todo el proceso de desarrollo."
        >
          <CanvasRevealEffect
            animationSpeed={4}
            // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
            containerClassName="bg-red-400 rounded-3xl overflow-hidden"
            dotSize={5}
            colors={[
              [228, 0, 58],
              [140, 0, 0],
              [255, 0, 92],
              [124, 32, 58],
            ]}
          />
        </Card>
        <Card
          title="Diseño y Desarrollo"
          icon={<AceternityIcon order="Fase 2" />}
          des="Me enfocaré en llevar a cabo el desarrollo técnico del proyecto mientras aseguramos un seguimiento continuo de su progreso. Aquí se implementarán las funcionalidades definidas, ajustando la estructura del sistema y optimizando la experiencia del usuario. Además, tendrás actualizaciones regulares para mantenerte informado sobre los avances, resolviendo cualquier desafío y garantizando que el desarrollo se alinee con los objetivos y el roadmap establecidos."
        >
          <CanvasRevealEffect
            animationSpeed={5}
            // change bg-black to bg-pink-900
            containerClassName="bg-red-400 rounded-3xl overflow-hidden"
            dotSize={4}
            colors={[
              [228, 0, 58],
              [140, 0, 0],
              [255, 0, 92],
              [124, 32, 58],
            ]}
          />
          {/* Radial gradient for the cute fade */}
          {/* remove this one */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card
          title="Desarrollo y Despliegue"
          icon={<AceternityIcon order="Fase 3" />}
          des="Me centraré en materializar tu proyecto mediante la implementación de las funcionalidades definidas y la construcción de una solución robusta. Durante esta fase, optimizaremos la estructura del sistema, afinaremos la experiencia del usuario y llevaremos a cabo pruebas exhaustivas para garantizar su calidad. Finalmente, gestionaremos el despliegue del software, asegurando una transición fluida hacia el entorno de producción y un funcionamiento impecable desde el primer día."
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-red-400 rounded-3xl overflow-hidden"
            dotSize={4}
            colors={[
              [228, 0, 58],
              [140, 0, 0],
              [255, 0, 92],
              [124, 32, 58],
            ]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgba(0,0,0,0.2)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-md p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#FFF_0%,#ff0000_50%,#9f0000_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-md bg-red-900 px-5 py-2 text-white backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
