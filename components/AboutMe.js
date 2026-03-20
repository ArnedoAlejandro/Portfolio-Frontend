import Image from "next/image";
import fotoPerfil from "../public/fotoPerfil.png";
import descargasWhite from "../public/descargasWhite.png";
import curriculum from "../download/curriculum.pdf";

export default function AboutMe({ obscure }) {
  // ── tokens por modo ─────────────────────────────────────────────────────────
  const bgCard = obscure ? "bg-white/80" : "bg-slate-900/80";
  const titleColor = obscure ? "text-slate-900" : "text-white";
  const textMuted = obscure ? "text-slate-600" : "text-slate-300";
  const waveFrom = obscure ? "#3B82F6" : "#4f46e5";
  const waveTo = obscure ? "#7C3AED" : "#7C8BFF";
  const photoRing = obscure ? "ring-indigo-200" : "ring-indigo-500/30";
  const badgeCl = obscure
    ? "bg-indigo-50 border border-indigo-200 text-indigo-700"
    : "bg-indigo-500/10 border border-indigo-500/25 text-indigo-300";
  const badgeDot = obscure ? "bg-indigo-500" : "bg-indigo-400";
  const btnCl = obscure
    ? "bg-indigo-600 hover:bg-indigo-700 text-white focus-visible:ring-indigo-600"
    : "bg-indigo-500 hover:bg-indigo-600 text-white focus-visible:ring-indigo-400";

  return (
    <section className="w-full" id="about">
      <div
        className={`relative mx-auto mt-10 w-full max-w-6xl rounded-3xl shadow-xl overflow-hidden
          ${bgCard} backdrop-blur-md max-md:rounded-none max-md:shadow-sm`}
      >
        {/* ── Wave decorativa ── */}
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
            opacity=".3"
          />
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z"
            fill="url(#waveGrad)"
            opacity=".45"
          />
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"
            fill="url(#waveGrad)"
          />
        </svg>

        {/* ── Contenido — padding-top para no solaparse con la wave ── */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 px-6 pt-20 pb-10 md:px-8 md:pt-24 md:pb-10 lg:px-10">
          {/* Foto */}
          <div className="md:col-span-2 flex items-stretch">
            <div
              className={`w-full rounded-2xl overflow-hidden shadow-2xl ring-2 ${photoRing}`}
            >
              <Image
                src={fotoPerfil}
                alt="Alejandro Arnedo — Frontend Developer"
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Texto */}
          <div className="md:col-span-3 flex flex-col justify-center">
            {/* Título con línea acento */}
            <div className="flex items-center gap-3 mb-5">
              <h2
                className={`text-2xl md:text-3xl font-extrabold ${titleColor}`}
                style={{ fontFamily: "inherit", textShadow: "none" }}
              >
                Who I am
              </h2>
              <div className="h-1 w-8 rounded-full bg-indigo-500 shrink-0" />
            </div>

            {/* Copy — historia + diferencial + propuesta de valor */}
            <div
              className={`space-y-4 leading-7 text-sm md:text-base ${textMuted} max-w-prose`}
            >
              <p>
                I started coding out of curiosity and ended up building real
                products for real clients. With a diploma from UTN and 4+ years
                of self-driven learning, I've gone from vanilla JS to full-stack
                apps with Next.js, MongoDB, and Socket.IO.
              </p>
              <p>
                What sets me apart isn't just the stack — it's how I work: clean
                component architecture, consistent communication, and a focus on
                delivering interfaces that actually perform.
              </p>
              <p>
                Currently open to frontend roles where I can keep growing and
                ship things that matter.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-7 max-lg:w-max max-lg:mx-auto">
              <a href={curriculum} download>
                <button
                  type="button"
                  aria-label="Download Curriculum Vitae"
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow
                    transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${btnCl}`}
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

            {/* Badges con borde indigo */}
            <ul className="mt-5 flex flex-wrap gap-2 max-lg:justify-center">
              {[
                "+4 years learning & building",
                "React · Next.js · Tailwind",
                "Freelance · Real clients",
              ].map((label) => (
                <li
                  key={label}
                  className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium ${badgeCl}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full shrink-0 ${badgeDot}`}
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Glow de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 300px at 50% -10%, rgba(99,102,241,0.1), transparent 60%)",
          }}
        />
      </div>
    </section>
  );
}
