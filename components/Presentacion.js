"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import estudio from "../public/estudio.png";
import social from "../public/social.png";
import gitWhite from "../public/gitWhite.png";
import insta from "../public/insta.png";
import instagram from "../public/instagram.png";
import gitBlack from "../public/gitBlack.png";
import linkedin from "../public/linkedin.png";

export default function Presentacion({ obscure = false }) {
  // --- Typewriter sin refs, 100% JS ---
  const original = "Frontend developer";
  const [phase, setPhase] = useState("write"); // "write" | "pause" | "erase"
  const [index, setIndex] = useState(0);
  const shown = original.slice(0, index);

  useEffect(() => {
    let t;

    if (phase === "write") {
      if (index < original.length) {
        t = setTimeout(() => setIndex((i) => i + 1), 110);
      } else {
        t = setTimeout(() => setPhase("pause"), 600);
      }
    } else if (phase === "pause") {
      t = setTimeout(() => setPhase("erase"), 600);
    } else {
      // erase
      if (index > 0) {
        t = setTimeout(() => setIndex((i) => i - 1), 80);
      } else {
        t = setTimeout(() => setPhase("write"), 300);
      }
    }

    return () => clearTimeout(t);
  }, [phase, index, original]);

  // Colores (azul/índigo) en línea con la línea visual que elegiste
  const textPrimary = obscure ? "text-[#0F172A]" : "text-white";
  const textSecondary = obscure ? "text-[#334155]" : "text-white/80";
  const badgeBg = obscure ? "bg-[#EEF2FF]" : "bg-white/10";
  const ring = obscure ? "ring-[#3B82F6]/20" : "ring-white/20";

  return (
    <section id="presentacion" className="relative overflow-hidden">
      {/* fondo con gradiente sutil */}
      <div
        className="absolute -z-10 inset-0 bg-gradient-to-br from-[#0ea5e9]/10 via-[#6366F1]/10 to-transparent"
        aria-hidden
      />

      <div className="w-8/12  mx-auto px-5 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-lg:w-full">
        {/* Columna texto */}
        <div className="order-2 lg:order-1">
          {/* Etiqueta/badge */}
          <span
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${badgeBg} ring-1 ${ring} text-sm ${textSecondary} max-md:m-auto`}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#3B82F6] " />
            Disponible para proyectos
          </span>

          <h1
            className={`mt-6 text-5xl font-extrabold tracking-tight ${textPrimary} max-lg:mt-4 max-lg:text-4xl max-md:text-3xl`}
          >
            Arnedo Alejandro
          </h1>

          <h2
            className={`mt-5 text-2xl md:text-3xl font-semibold ${textSecondary}`}
          >
            {shown}
            <span className="ml-1 animate-pulse">|</span>
          </h2>

          <p
            className={`mt-7 max-w-xl leading-relaxed ${textSecondary} max-md:mt-5`}
          >
            I develop clean, accessible, and high-performance interfaces. I
            focus on a solid user experience and professional delivery, working
            with best practices and clear communication.
          </p>

          {/* CTA + Social */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/alejandro-augusto-arnedo-27a189240/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white px-5 py-3 font-semibold shadow transition max-md:m-auto"
            >
              Contact me on LinkedIn
            </Link>

            <div className="flex items-center gap-4 max-md:m-auto">
              <Link
                href="https://www.linkedin.com/in/alejandro-augusto-arnedo-27a189240/"
                target="_blank"
                aria-label="LinkedIn"
                className="group"
              >
                <Image
                  src={obscure ? linkedin : social}
                  alt="LinkedIn"
                  className="w-8 h-8 transition-transform group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="https://github.com/"
                target="_blank"
                aria-label="GitHub"
                className="group"
              >
                <Image
                  src={obscure ? gitBlack : gitWhite}
                  alt="GitHub"
                  className="w-8 h-8 transition-transform group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="https://www.instagram.com/arnedoalejandro/"
                target="_blank"
                aria-label="Instagram"
                className="group"
              >
                <Image
                  src={obscure ? instagram : insta}
                  alt="Instagram"
                  className="w-9 h-9 transition-transform group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Columna imagen */}
        <div className="order-1 lg:order-2">
          <div className="relative w-full max-w-[760px] mx-auto max-lg:max-w-[350px]">
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#3B82F6]/15 to-[#6366F1]/15 blur-2xl rounded-[2rem]" />
            <Image
              src={estudio}
              alt="Imagen de presentación"
              className="relative w-full h-auto rounded-2xl "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
