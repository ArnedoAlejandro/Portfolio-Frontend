import Image from "next/image";
import React from "react";
import almacen from "../public/almacen.png";
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
import boostrarp from "../public/bootstrap.png";

const Education = ({ obscure }) => {
  const eduItems = [
    { src: colegio, alt: "Institute", label: "Private Technical Institute" },
    { src: uncnuevo, alt: "UNC", label: "National University of Córdoba" },
    { src: utn, alt: "UTN", label: "National Technological University" },
    { src: udemy, alt: "Udemy", label: "Udemy" },
  ];

  const skills = [
    { src: html, label: "HTML5" },
    { src: nexttt, label: "Next.js" },
    { src: tailwind, label: "Tailwind CSS" },
    { src: css, label: "CSS3" },
    { src: zustandd, label: "Zustand" },
    { src: boostrarp, label: "Bootstrap", extra: "bg-white rounded-md p-1" },
    { src: js, label: "JavaScript" },
    { src: mongo, label: "MongoDB" },
    { src: figma, label: "Figma", size: "h-12 w-12" },
    { src: reactBlanc, label: "React" },
    { src: mysql, label: "MySQL" },
    { src: git, label: "Git" },
  ];

  return (
    <div
      id="education"
      className="fondoAnimado h-auto mt-32 py-28 max-md:mt-16 max-md:p-2"
    >
      {" "}
      <header className="mb-10 text-center md:mb-14">
        <h2
          id="education-title"
          className="text-2xl font-extrabold tracking-tight md:text-4xl"
        >
          Academic and <span className="text-blue-600">skill</span> institutions
        </h2>
        <p className="mx-auto mt-3 text-lg md:text-xl lg:text-2xl text-slate-600">
          Training and tools I use every day to create quality products.
        </p>
      </header>
      <div className="w-7/12 m-auto  max-md:px-4 max-lg:w-full ">
        <span className="w-full mt-24 m-auto flex gap-8  items-center  max-lg:gap-10 h-auto max-lg:grid max-lg:place-content-center max-md:gap-9">
          <article
            aria-labelledby="edu-title"
            className={`
    flex flex-col justify-between
    w-10/12 max-w-3xl m-auto
    rounded-2xl p-6 md:p-8
    shadow-xl border
    h-[530px]   max-md:h-auto  max-md:w-full            
    ${
      obscure
        ? "bg-slate-800/70 text-slate-50 border-white/10"
        : "bg-slate-700/60 text-white border-white/20"
    }
    backdrop-blur relative overflow-hidden
  `}
          >
            {/* halo decorativo */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl" />

            <h3
              id="edu-title"
              className="text-center text-2xl  font-semibold max-md:text-lg"
            >
              Education
            </h3>

            <ul className="space-y-6 md:space-y-7 ">
              {eduItems.map((it, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-10 md:gap-5 rounded-xl p-2 transition-all max-md:gap-3"
                >
                  <span className="relative h-12 w-12 md:h-12 md:w-12 shrink-0 overflow-hidden rounded-xl  ">
                    <Image
                      src={it.src}
                      alt={it.alt}
                      fill
                      className={`object-contain ${
                        it.alt === "Udemy" ? "bg-white p-1.5 rounded-xl" : ""
                      }`}
                      sizes="48px"
                      priority={false}
                    />
                  </span>
                  <p className="text-lg  leading-snug max-md:text-sm">
                    {it.label}
                  </p>
                </li>
              ))}
            </ul>
          </article>

          <article
            aria-labelledby="skills-title"
            className={`
    flex flex-col
    w-10/12 max-w-3xl m-auto
    rounded-2xl p-6 md:p-8
    shadow-xl border h-[530px] max-md:h-auto  max-md:w-full     
    ${
      obscure
        ? "bg-slate-800/70 text-slate-50 border-white/10"
        : "bg-slate-700/60 text-white border-white/20"
    }
    backdrop-blur relative overflow-hidden
  `}
          >
            {/* halo decorativo */}
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl" />

            <h3
              id="skills-title"
              className="text-center text-2xl  font-semibold max-md:text-lg"
            >
              Technical skills
            </h3>

            {/* grid 4 cols fijo (colapsa a 2 en móviles para no aplastar) */}
            <div className="mt-6 grid grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 place-items-stretch flex-1">
              {skills.map((it, i) => (
                <div
                  key={i}
                  className="
          group rounded-xl  
          p-3 flex flex-col items-center justify-center gap-2
          transition-all hover:bg-white/10 hover:shadow-lg
          focus-within:ring-2 
        "
                  title={it.label}
                  aria-label={it.label}
                >
                  {/* Caja de imagen consistente: cuadrada, responsive y sin deformar */}
                  <span className="relative aspect-square w-14 md:w-20">
                    <Image
                      src={it.src}
                      alt={it.label}
                      fill
                      className={`object-contain ${it.extra ?? ""}`}
                      sizes="(min-width: 768px) 128px, 80px"
                      priority={false}
                    />
                  </span>

                  {/* Texto centrado y compacto (evita saltos) */}
                  <span className="text-[11px] md:text-xs font-medium opacity-80 group-hover:opacity-100 text-center line-clamp-1">
                    {it.label}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </span>
      </div>
      <div className="mt-32"></div>
    </div>
  );
};

export default Education;
