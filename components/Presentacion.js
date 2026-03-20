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
  // ── Typewriter ──────────────────────────────────────────────────────────────
  const original = "Frontend developer";
  const [phase, setPhase] = useState("write");
  const [index, setIndex] = useState(0);
  const shown = original.slice(0, index);

  useEffect(() => {
    let t;
    if (phase === "write") {
      if (index < original.length) {
        t = setTimeout(() => setIndex((i) => i + 1), 110);
      } else {
        t = setTimeout(() => setPhase("pause"), 1800);
      }
    } else if (phase === "pause") {
      t = setTimeout(() => setPhase("erase"), 400);
    } else {
      if (index > 0) {
        t = setTimeout(() => setIndex((i) => i - 1), 60);
      } else {
        t = setTimeout(() => setPhase("write"), 400);
      }
    }
    return () => clearTimeout(t);
  }, [phase, index]);

  // ── tokens por modo ─────────────────────────────────────────────────────────
  const textPrimary = obscure ? "text-slate-900" : "text-white";
  const textSecondary = obscure ? "text-slate-600" : "text-white/75";
  const badgeBg = obscure ? "bg-indigo-50" : "bg-white/10";
  const badgeRing = obscure ? "ring-indigo-200" : "ring-white/20";
  const badgeText = obscure ? "text-indigo-700" : "text-white/90";
  const badgeDot = obscure ? "bg-indigo-500" : "bg-emerald-400";
  const ctaBg = obscure
    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
    : "bg-indigo-500 hover:bg-indigo-600 text-white";

  return (
    <section id="presentacion" className="relative overflow-hidden">
      {/* Fondo gradiente sutil */}
      <div
        aria-hidden
        className="absolute -z-10 inset-0 bg-gradient-to-br from-[#0ea5e9]/10 via-[#6366F1]/10 to-transparent"
      />

      <div className="w-8/12 mx-auto px-5 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-lg:w-full">
        {/* ── Columna texto ── */}
        <div className="order-2 lg:order-1 flex flex-col gap-0">
          {/* Badge */}
          <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium w-fit
              ${badgeBg} ring-1 ${badgeRing} ${badgeText} max-md:mx-auto`}
          >
            <span
              className={`inline-block h-2 w-2 rounded-full animate-pulse ${badgeDot}`}
            />
            Open to work · Disponible
          </span>

          {/* Nombre */}
          <h1
            className={`mt-5 text-5xl font-extrabold tracking-tight leading-tight
              ${textPrimary} max-lg:text-4xl max-md:text-3xl max-md:text-center`}
          >
            Alejandro Arnedo
          </h1>

          {/* Typewriter */}
          <h2
            className={`mt-3 text-2xl md:text-3xl font-semibold ${textSecondary} max-md:text-center`}
          >
            {shown}
            <span className="ml-0.5 animate-pulse text-indigo-400">|</span>
          </h2>

          {/* Separador acento */}
          <div className="mt-5 w-10 h-1 rounded-full bg-indigo-500 max-md:mx-auto" />

          {/* Descripción */}
          <p
            className={`mt-5 max-w-lg leading-relaxed text-base ${textSecondary} max-md:text-center max-md:text-sm`}
          >
            Frontend Developer focused on React & Next.js. I build fast,
            accessible interfaces — from pixel-perfect UI to seamless API
            integration — with clean code and clear communication.
          </p>

          {/* CTA + Social */}
          <div className="mt-10 flex flex-wrap items-center gap-4 max-md:justify-center">
            <Link
              href="https://www.linkedin.com/in/alejandro-augusto-arnedo-27a189240/"
              target="_blank"
              className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-md transition ${ctaBg}`}
            >
              Contact me on LinkedIn
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/alejandro-augusto-arnedo-27a189240/"
                target="_blank"
                aria-label="LinkedIn"
                className="group opacity-80 hover:opacity-100 transition"
              >
                <Image
                  src={obscure ? linkedin : social}
                  alt="LinkedIn"
                  className="w-8 h-8 transition-transform group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="https://github.com/ArnedoAlejandro"
                target="_blank"
                aria-label="GitHub"
                className="group opacity-80 hover:opacity-100 transition"
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
                className="group opacity-80 hover:opacity-100 transition"
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

        {/* ── Columna imagen ── */}
        <div className="order-1 lg:order-2">
          <div className="relative w-full max-w-[720px] mx-auto max-lg:max-w-[320px]">
            {/* Glow detrás */}
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[2.5rem] blur-3xl opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, rgba(59,130,246,0.15) 60%, transparent 100%)",
              }}
            />
            <Image
              src={estudio}
              alt="Alejandro Arnedo — Frontend Developer"
              className="relative w-full h-auto rounded-2xl drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
