import { FaLocationArrow, FaWhatsapp } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          ¿Listo para llegar al{" "}
          <span className="text-yellow-500">siguiente</span> nivel?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Escríbeme hoy y descubramos juntos cómo puedo ayudarte a llevar tu
          idea al mundo digital con una página web a la medida de tus
          necesidades.
        </p>
        <a
          href="https://wa.me/59892617302?text=¡Hola!%20quiero%20crear%20una%20página%20web,%20¿Como%20podríamos%20empezar?%20"
          target="_blank"
        >
          <MagicButton
            title="WhatsApp"
            icon={<FaWhatsapp />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          <a href="https://storyset.com/software">
            Software illustrations by Storyset
          </a>
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
