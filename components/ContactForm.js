"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactSection({ obscure }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // 🔧 Reemplazá con tus credenciales de EmailJS:
    const SERVICE_ID = "TU_SERVICE_ID";
    const TEMPLATE_ID = "TU_TEMPLATE_ID";
    const PUBLIC_KEY = "TU_PUBLIC_KEY";

    // Las keys del template deben coincidir con las variables configuradas en EmailJS:
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setStatus("ok");
        setForm({ name: "", phone: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  const textBase = obscure ? "text-slate-900" : "text-white/90";
  const textMuted = obscure ? "text-slate-500" : "text-white/80";
  const cardBg = obscure ? "bg-white/90" : "bg-white";
  const inputBg = obscure ? "bg-white" : "bg-white";
  const shadow = "shadow-[0_10px_40px_-15px_rgba(25,25,84,0.25)]";

  return (
    <section
      id="contact"
      className="relative w-full"
      aria-label="Formulario de contacto"
    >
      {/* Fondo degradé suave tipo “hero” */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 15% 10%, rgba(99,102,241,.18), transparent 60%), radial-gradient(900px 500px at 65% 0%, rgba(79,70,229,.12), transparent 55%), linear-gradient(180deg, #f4f6fb 0%, #ffffff 60%)",
        }}
      />

      <div className="mx-auto w-7/12 px-6 md:px-8 lg:px-10 py-16 md:py-24 max-lg:w-full">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Lado izquierdo: texto/beneficios */}
          <div className="max-w-xl ">
            <h2
              className={`text-2xl font-extrabold tracking-tight md:text-4xl${textBase}`}
            >
              Contact me
            </h2>
            <p className={`mt-6 text-base leading-relaxed ${textMuted}`}>
              Tell me what you need and I will get back to you as soon as
              possible. I collaborate with companies, teams, and clients,
              offering solutions in frontend and full-stack development,
              performance optimization, UI/UX, and web application deployment. I
              am open to both new projects and professional opportunities where
              I can contribute my experience in the JavaScript ecosystem,
              contributing to scalable, modern, and high-impact products.
            </p>

            <ul className={`mt-10 space-y-4 text-sm ${textMuted}`}>
              <li>
                • Quick response and professional communication throughout the
                entire process.
              </li>
              <li>
                • Custom development with modern technologies: React · Next.js ·
                Tailwind CSS
              </li>
              <li>
                • Efficient API integration, secure authentication, and
                real-time functionality
              </li>
            </ul>
          </div>

          {/* Lado derecho: card con formulario */}
          <div
            className={`w-full rounded-2xl ${cardBg} ${shadow} ring-1 ring-slate-200/70 p-6 md:p-8`}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-slate-600">
                  First and last name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ej: Alejandro Arnedo"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={`mt-1 w-full rounded-xl border border-slate-200 ${inputBg} px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-400 max-md:text-sm`}
                />
              </div>

              {/* 2 columnas: Teléfono / Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-600">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+54 9 ..."
                    value={form.phone}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-xl border border-slate-200 ${inputBg} px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-400 max-md:text-sm`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tucorreo@dominio.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={`mt-1 w-full rounded-xl border border-slate-200 ${inputBg} px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-400 max-md:text-sm`}
                  />
                </div>
              </div>

              {/* Consulta */}
              <div>
                <label className="block text-sm font-medium text-slate-600">
                  Consultation
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me how I can help, whether it's with a new project, a technical improvement, or a professional opportunity."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`mt-1 w-full rounded-xl border border-slate-200 ${inputBg} px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-400 max-md:text-sm`}
                />
                <p className="mt-2 text-xs text-slate-500">
                  By submitting, you agree to be contacted to proceed with your
                  inquiry.
                </p>
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 py-3 font-semibold text-white shadow-md transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "ok"
                  ? "¡Message sent!"
                  : status === "error"
                  ? "Error, please try again"
                  : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
