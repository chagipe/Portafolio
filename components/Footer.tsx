import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          ¿Listo para llevar tu{" "}
          <span className="text-purple">presencia digital</span> al siguiente
          nivel?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contáctame hoy y conversemos cómo puedo ayudarte a alcanzar tus
          objetivos.
        </p>
        <a href="mailto:sebastianbegazo@gmail.com">
          <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
              Hablemos
              <FaLocationArrow />
            </span>
          </button>
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Hiroshi Begazo
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <a
            href="https://github.com/chagipe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple transition duration-200"
          >
            <FaGithub className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-hiroshi-begazo-kobayashi-627190211"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple transition duration-200"
          >
            <FaLinkedin className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
