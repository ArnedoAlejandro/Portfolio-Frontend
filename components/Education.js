import Image from "next/image";

import uncnuevo from "../public/uncnuevo.png";
import udemy from "../public/udemy.png";
import colegio from "../public/colegio.png";
import utn from "../public/utn.png";
import tailwind from "../public/tailwind.png";
import css from "../public/css.png";
import html from "../public/html.png";
import js from "../public/js.png";
import git from "../public/git.png";
import mysql from "../public/mysql.png";
import mongo from "../public/mongo.png";
import reactBlanc from "../public/reactBlanc.png";
import nexttt from "../public/nexttt.png";
import zustandd from "../public/zustandd.png";
import redux from "../public/redux.png";
import figma from "../public/figma.png";
import bootstrap from "../public/bootstrap.png";

// ─── data ────────────────────────────────────────────────────────────────────

const eduItems = [
  {
    src: utn,
    alt: "UTN",
    name: "National Technological University",
    subtitle: "Full-Stack Web Development · Diploma",
  },
  {
    src: uncnuevo,
    alt: "UNC",
    name: "National University of Córdoba",
    subtitle: "University",
  },
  {
    src: colegio,
    alt: "Institute",
    name: "Private Technical Institute",
    subtitle: "Technical secondary",
  },
  {
    src: udemy,
    alt: "Udemy",
    name: "Udemy",
    subtitle: "Self-directed · 10+ courses",
    whiteBg: true,
  },
];

const skillGroups = [
  {
    category: "Frontend",
    color: "blue",
    skills: [
      { src: reactBlanc, label: "React" },
      { src: nexttt, label: "Next.js" },
      { src: tailwind, label: "Tailwind CSS" },
      { src: html, label: "HTML5" },
      { src: css, label: "CSS3" },
      { src: bootstrap, label: "Bootstrap", whiteBg: true },
    ],
  },
  {
    category: "State & data",
    color: "green",
    skills: [
      { src: zustandd, label: "Zustand" },
      { src: redux, label: "Redux" },
      { src: mongo, label: "MongoDB" },
      { src: mysql, label: "MySQL" },
    ],
  },
  {
    category: "Tooling",
    color: "purple",
    skills: [
      { src: js, label: "JavaScript" },
      { src: git, label: "Git" },
      { src: figma, label: "Figma" },
    ],
  },
];

// color dot per category
const dotColor = {
  blue: "bg-blue-400",
  green: "bg-emerald-400",
  purple: "bg-violet-400",
};

// ─── component ───────────────────────────────────────────────────────────────

export default function Education({ obscure }) {
  // shared token per mode
  const cardBg = obscure
    ? "bg-white border-slate-200"
    : "bg-slate-800/70 border-white/10";
  const titleCl = obscure ? "text-slate-900" : "text-white";
  const headerBr = obscure ? "border-slate-100" : "border-white/8";
  const dotAccent = obscure ? "bg-blue-500" : "bg-sky-400";
  const dotGreen = obscure ? "bg-emerald-500" : "bg-emerald-400";
  const itemHover = obscure ? "hover:bg-slate-50" : "hover:bg-white/5";
  const nameCl = obscure ? "text-slate-800" : "text-slate-100";
  const subtitleCl = obscure ? "text-slate-500" : "text-slate-400";
  const catLblCl = obscure ? "text-slate-400" : "text-slate-300";
  const pillCl = obscure
    ? "bg-slate-100 border-slate-200 text-slate-700"
    : "bg-slate-700/60 border-slate-600/40 text-slate-300";

  return (
    <section
      id="education"
      className="fondoAnimado h-auto mt-20 py-24 max-md:mt-16 max-md:py-12 max-md:px-4"
    >
      {/* Section header */}
      <header className="mb-12 text-center">
        <h2
          className="text-2xl font-extrabold tracking-tight md:text-4xl"
          style={{ fontFamily: "inherit", textShadow: "none" }}
        >
          Academic and <span className="text-blue-500">skills</span>
        </h2>
        <p
          className={`mx-auto mt-3 text-base md:text-xl ${obscure ? "text-slate-600" : "text-slate-200"}`}
        >
          Training and tools I use every day to create quality products.
        </p>
      </header>

      {/* Two-column grid */}
      <div className="mx-auto w-7/12 grid grid-cols-2 gap-6 max-lg:w-full max-lg:grid-cols-1 max-lg:px-4">
        {/* ── Education card ── */}
        <article
          aria-labelledby="edu-title"
          className={`rounded-2xl border overflow-hidden ${cardBg}`}
        >
          {/* Card header */}
          <div
            className={`flex items-center gap-2.5 px-6 py-4 border-b ${headerBr}`}
          >
            <span className={`h-2.5 w-2.5 rounded-full ${dotAccent}`} />
            <h3
              id="edu-title"
              className={`font-semibold ${titleCl}`}
              style={{
                fontFamily: "inherit",
                fontSize: "15px",
                textShadow: "none",
              }}
            >
              Education
            </h3>
          </div>

          {/* Education list */}
          <ul className="flex flex-col gap-1 px-4 py-4">
            {eduItems.map((it) => (
              <li
                key={it.name}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 transition-colors ${itemHover}`}
              >
                {/* Logo */}
                <span
                  className={`relative h-9 w-9 shrink-0 overflow-hidden rounded-lg ${
                    it.whiteBg ? "bg-white p-1" : "bg-white/10"
                  }`}
                >
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    className="object-contain"
                    sizes="36px"
                  />
                </span>

                {/* Text */}
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span
                    className={`text-sm font-medium leading-snug truncate ${nameCl}`}
                  >
                    {it.name}
                  </span>
                  <span className={`text-xs leading-none ${subtitleCl}`}>
                    {it.subtitle}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </article>

        {/* ── Skills card ── */}
        <article
          aria-labelledby="skills-title"
          className={`rounded-2xl border overflow-hidden ${cardBg}`}
        >
          {/* Card header */}
          <div
            className={`flex items-center gap-2.5 px-6 py-4 border-b ${headerBr}`}
          >
            <span className={`h-2.5 w-2.5 rounded-full ${dotGreen}`} />
            <h3
              id="skills-title"
              className={`font-semibold ${titleCl}`}
              style={{
                fontFamily: "inherit",
                fontSize: "15px",
                textShadow: "none",
              }}
            >
              Technical skills
            </h3>
          </div>

          {/* Skill groups */}
          <div className="flex flex-col gap-5 px-5 py-5">
            {skillGroups.map((group) => (
              <div key={group.category}>
                {/* Category label */}
                <p
                  className={`mb-2.5 text-[10px] font-semibold uppercase tracking-widest ${catLblCl}`}
                >
                  {group.category}
                </p>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((sk) => (
                    <span
                      key={sk.label}
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium ${pillCl}`}
                    >
                      {/* Skill icon */}
                      <span
                        className={`relative h-3.5 w-3.5 shrink-0 ${
                          sk.whiteBg ? "rounded bg-white p-px" : ""
                        }`}
                      >
                        <Image
                          src={sk.src}
                          alt={sk.label}
                          fill
                          className="object-contain"
                          sizes="14px"
                        />
                      </span>
                      {sk.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
