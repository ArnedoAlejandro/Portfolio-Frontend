import Image from "next/image";
import Link from "next/link";

import almacen from "../public/almacen.png";
import react from "../public/reactBlanc.png";
import css from "/public/css.png";
import java from "/public/js.png";
import tailwind from "/public/tailwind.png";
import html from "/public/html.png";
import prismaWhite from "/public/prismaWhite.png";
import github from "/public/github.png";
import mongo from "/public/mongo.png";
import redux from "/public/redux.png";
import express from "/public/express.png";
import nexttt from "/public/nexttt.png";
import capacitacion from "/public/capacitacion.png";
import estilo from "/public/estilo.png";
import reduxNuevo from "/public/reduxNuevo.png";
import criptomonedas from "/public/criptomonedas.png";
import javascript from "/public/proyecto.png";
import gastos from "/public/gastos.png";
import optica from "/public/optica.png";

// ─── data ────────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "E-learning Training System",
    featured: true,
    featuredLabel: "Featured · Real client",
    image: capacitacion,
    imageAlt: "E-learning Training System screenshot",
    description:
      "Corporate platform with course management, user progress tracking, and certificate generation. Built solo — full stack with Next.js, Express, and MongoDB. Key challenge: PDF/Excel report generation and JWT auth flow.",
    tags: [
      { icon: html, label: "HTML" },
      { icon: css, label: "CSS" },
      { icon: java, label: "JavaScript" },
      { icon: react, label: "React" },
      { icon: nexttt, label: "Next.js" },
      { icon: tailwind, label: "Tailwind CSS" },
      { icon: mongo, label: "MongoDB" },
      { icon: express, label: "Express" },
    ],
    github: "https://github.com/ArnedoAlejandro/Prueba-deploy-plataforma-",
    live: "https://virtualhst.com/",
  },
  {
    title: "E-Commerce",
    image: optica,
    imageAlt: "E-Commerce Óptica Divisar screenshot",
    description:
      "Frontend for a real optical accessories shop. Focused on responsive design, fast rendering, and smooth UX across all devices. Designed in Figma before implementation.",
    tags: [
      { icon: html, label: "HTML" },
      { icon: css, label: "CSS" },
      { icon: java, label: "JavaScript" },
      { icon: react, label: "React" },
      { icon: nexttt, label: "Next.js" },
      { icon: tailwind, label: "Tailwind CSS" },
    ],
    github: "https://github.com/ArnedoAlejandro/Optica-Divisar",
    live: "https://optica-divisar.vercel.app/",
  },
  {
    title: "Food App",
    image: almacen,
    imageAlt: "Food App screenshot",
    description:
      "Point-of-sale app for a food kiosk. Manages orders in real time, persists data with Prisma and a relational DB, and keeps the UI snappy with Next.js and Tailwind CSS.",
    tags: [
      { icon: html, label: "HTML" },
      { icon: css, label: "CSS" },
      { icon: java, label: "JavaScript" },
      { icon: react, label: "React" },
      { icon: prismaWhite, label: "Prisma" },
      { icon: tailwind, label: "Tailwind CSS" },
    ],
    github: "https://github.com/ArnedoAlejandro/kioscoApp",
    live: "https://appcomida-production.up.railway.app/",
  },
  {
    title: "Budget Management",
    image: gastos,
    imageAlt: "Budget Management screenshot",
    description:
      "Personal finance tracker with circular progress charts, swipe-to-delete gestures, and strict type validation with PropTypes. Focused on smooth mobile UX and clear spend visualization.",
    tags: [
      { icon: html, label: "HTML" },
      { icon: css, label: "CSS" },
      { icon: java, label: "JavaScript" },
      { icon: react, label: "React" },
    ],
    github: "https://github.com/ArnedoAlejandro/budget-management.git",
    live: "https://expense-planner-eight.vercel.app/",
  },
  {
    title: "Expense Manager",
    image: javascript,
    imageAlt: "Expense Manager screenshot",
    description:
      "Vanilla JS finance manager — no frameworks. Supports categorized income and expense entries with real-time balance evaluation. Built to sharpen DOM manipulation skills without library abstractions.",
    tags: [
      { icon: html, label: "HTML" },
      { icon: css, label: "CSS" },
      { icon: java, label: "JavaScript" },
    ],
    github: "https://github.com/ArnedoAlejandro/Presupuesto",
    live: "https://presupuesto-sandy.vercel.app/",
  },
  {
    title: "CRUD App",
    image: reduxNuevo,
    imageAlt: "CRUD App screenshot",
    description:
      "Full CRUD with React, Redux, and a custom RESTful API. Axios handles all HTTP communication, Styled Components keep the UI modular. Built to practice scalable state management patterns.",
    tags: [
      { icon: html, label: "HTML" },
      { icon: css, label: "CSS" },
      { icon: java, label: "JavaScript" },
      { icon: react, label: "React" },
      { icon: redux, label: "Redux" },
      { icon: estilo, label: "Styled Components" },
    ],
    github: "https://github.com/ArnedoAlejandro/CRUD-",
    live: "https://crud-neon.vercel.app/",
  },
  {
    title: "Patient Manager",
    image: criptomonedas,
    imageAlt: "Patient Manager screenshot",
    description:
      "Veterinary patient manager built in React. Supports full CRUD for patient records with a responsive UI. Focused on component-based architecture and clean local state management.",
    tags: [
      { icon: html, label: "HTML" },
      { icon: css, label: "CSS" },
      { icon: java, label: "JavaScript" },
      { icon: react, label: "React" },
    ],
    github: "https://github.com/ArnedoAlejandro/Cotizador-de-criptomonedas",
    live: "https://cotizador-de-criptomonedas-ay9j.vercel.app/",
  },
];

// ─── sub-components ───────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ProjectCard({ project, obscure }) {
  const cardBg = obscure ? "bg-white" : "bg-slate-900";
  const titleCl = obscure ? "text-slate-900" : "text-white";
  const descCl = obscure ? "text-slate-600" : "text-slate-400";
  const tagBg = obscure
    ? "bg-slate-100 text-slate-700 border-slate-200"
    : "bg-slate-800 text-slate-300 border-slate-700";
  const footerBr = obscure ? "border-slate-200" : "border-slate-700/60";
  const btnBase = obscure
    ? "bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200"
    : "bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700";

  return (
    <article
      className={`project-card ${cardBg} rounded-2xl overflow-hidden border ${obscure ? "border-slate-200" : "border-slate-700/50"} flex flex-col`}
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Badge featured */}
        {project.featured && (
          <span className="featured-badge">
            <span className="featured-dot" />
            {project.featuredLabel}
          </span>
        )}

        <h4 className={`text-xl text-semibold leading-snug  ${titleCl}`}>
          {project.title}
        </h4>

        <p className={`text-sm leading-relaxed flex-1 ${descCl}`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((t) => (
            <span
              key={t.label}
              className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border font-medium ${tagBg}`}
            >
              <Image
                src={t.icon}
                alt=""
                className="w-3.5 h-3.5 object-contain"
              />
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className={`flex gap-2 px-5 pb-5 pt-3 border-t ${footerBr}`}>
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-btn flex-1 ${btnBase}`}
        >
          <GitHubIcon />
          GitHub
        </Link>
        <Link
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn project-btn--primary flex-1"
        >
          See project
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Skill({ obscure }) {
  return (
    <section id="proyect" className="w-8/12 mx-auto mt-24 max-lg:w-full">
      <header className="mb-12 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl">
          Personal <span className="text-blue-500">projects</span>
        </h2>
        <p className="mx-auto mt-3 text-base md:text-xl text-slate-500">
          Projects completed using various stacks and technologies.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            obscure={obscure}
          />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href="https://github.com/ArnedoAlejandro"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/20 transition-all duration-200"
        >
          <GitHubIcon />
          See more projects
        </Link>
      </div>
    </section>
  );
}
