import Image from "next/image";
import fotoPerfil from "../public/fotoPerfil.png";
import descargasWhite from "../public/descargasWhite.png";
import curriculum from "../download/curriculum.pdf";

export default function AboutMe({ obscure }) {
  // Paleta controlada por modo
  const bgCard = obscure ? "bg-white/70" : "bg-slate-900/70";
  const textBase = obscure ? "text-slate-800" : "text-slate-100";
  const textMuted = obscure ? "text-slate-600" : "text-slate-300";
  const titleColor = obscure ? "text-slate-900" : "text-white";
  const waveFrom = obscure ? "#3B82F6" : "#5563FF"; // azul
  const waveTo = obscure ? "#7C3AED" : "#7C8BFF"; // indigo/violeta

  return (
    <section className="w-full b" id="about">
      <div
        className={`relative mx-auto mt-10 w-full max-w-6xl rounded-3xl shadow-xl overflow-hidden ${bgCard} backdrop-blur-md max-md:rounded-none max-md:shadow-sm`}
      >
        {/* Wave decorativa superior */}
        <svg
          aria-hidden="true"
          focusable="false"
          className="absolute inset-x-0 -top-10 h-28 w-full"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0" x2="1">
              <stop offset="0%" stopColor={waveFrom} stopOpacity="0.9" />
              <stop offset="100%" stopColor={waveTo} stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z"
            fill="url(#waveGrad)"
            opacity=".35"
          />
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z"
            fill="url(#waveGrad)"
            opacity=".5"
          />
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"
            fill="url(#waveGrad)"
          />
        </svg>

        {/* Contenido */}
        <div className=" relative grid grid-cols-1 md:grid-cols-5 gap-8 p-6 md:p-8 lg:p-10">
          {/* Imagen */}
          <div className="md:col-span-2 flex items-center">
            <div className=" mx-auto w-full max-w-sm rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-lg  ">
              <Image
                src={fotoPerfil}
                alt="Retrato profesional frente a portátil"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Texto */}
          <div className="md:col-span-3">
            <h2 className={`text-2xl md:text-3xl font-extrabold ${titleColor}`}>
              About Me
            </h2>

            <p className={`mt-4 leading-7 ${textMuted} max-w-prose`}>
              I obtained my diploma in Full-Stack Web Development at the
              National Technological University, where I acquired a solid
              foundation in HTML, CSS, PHP, and MySQL. I then specialized in
              frontend development, honing my skills in JavaScript, React, and
              Next.js to create fast, accessible, and optimized interfaces. I
              work with Tailwind CSS, React Query, and Socket.IO, applying SOLID
              and Clean Architecture principles to develop reusable and scalable
              components. As a freelancer, I have participated in multiple
              projects designing intuitive interfaces, optimizing performance,
              and ensuring smooth user experiences. I use Figma, Postman, and
              agile methodologies to deliver reliable, results-oriented
              solutions.
            </p>

            {/* CTA */}
            <div className="mt-6  max-lg:mt-6 max-lg:m-auto max-lg:w-max">
              <a href={curriculum} download>
                <button
                  type="button"
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow transition
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                    ${
                      obscure
                        ? "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600"
                        : "bg-indigo-500 text-white hover:bg-indigo-600 focus-visible:ring-indigo-400"
                    }`}
                  aria-label="Download Curriculum Vitae"
                >
                  Download CV
                  <Image
                    src={descargasWhite}
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </button>
              </a>
            </div>

            {/* Badges opcionales (toques de credibilidad) */}
            <ul className="mt-5 flex flex-wrap gap-2  max-lg:justify-center ">
              <li
                className={`text-xs px-3 py-1 rounded-full ${
                  obscure
                    ? "bg-blue-50 text-blue-700"
                    : "bg-white/10 text-white/90"
                }`}
              >
                +4 years learning & building
              </li>
              <li
                className={`text-xs px-3 py-1 rounded-full ${
                  obscure
                    ? "bg-blue-50 text-blue-700"
                    : "bg-white/10 text-white/90"
                }`}
              >
                React · Next.js · Node
              </li>
              <li
                className={`text-xs px-3 py-1 rounded-full ${
                  obscure
                    ? "bg-blue-50 text-blue-700"
                    : "bg-white/10 text-white/90"
                }`}
              >
                MongoDB · Express · Socket.io
              </li>
            </ul>
          </div>
        </div>

        {/* Suave “glow” al fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 300px at 50% -10%, rgba(99,102,241,0.12), transparent 60%)",
          }}
        />
      </div>
    </section>
  );
}
