import { useState } from "react";
import emailjs from "emailjs-com";

// ─── icons ────────────────────────────────────────────────────────────────────

function IconShield() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconCode() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
function IconMonitor() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.35h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.92-1.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconSend() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

// ─── data ─────────────────────────────────────────────────────────────────────

const infoCards = [
  {
    icon: <IconShield />,
    title: "Fast response",
    subtitle: "Usually within 24 hours",
  },
  {
    icon: <IconCode />,
    title: "React · Next.js · Tailwind CSS",
    subtitle: "Modern frontend stack",
  },
  {
    icon: <IconMonitor />,
    title: "Freelance & full-time",
    subtitle: "Available for both",
  },
  {
    icon: <IconPhone />,
    title: "WhatsApp · LinkedIn · Email",
    subtitle: "Pick your preferred channel",
  },
];

const MAX_CHARS = 500;

// ─── component ────────────────────────────────────────────────────────────────

export default function ContactForm({ obscure }) {
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

    // 🔧 Reemplazá con tus credenciales de EmailJS
    const SERVICE_ID = "service_co7ii3h";
    const TEMPLATE_ID = "template_dfa9jzl";
    const PUBLIC_KEY = "zOwm2XZOLOBlpnQSW";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setStatus("ok");
        setForm({ name: "", phone: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  // ── tokens por modo ──────────────────────────────────────────────────────
  const sectionBg = obscure ? "bg-white/70" : "bg-slate-900/70";
  const titleCl = obscure ? "text-slate-900" : "text-white";
  const subtitleCl = obscure ? "text-slate-500" : "text-slate-400";
  const cardBg = obscure
    ? "bg-white border-slate-200 shadow-[0_4px_24px_-8px_rgba(99,102,241,0.15)]"
    : "bg-slate-800 border-slate-700";
  const infoPillBg = obscure
    ? "bg-slate-50 border-slate-200"
    : "bg-slate-800/60 border-slate-700/50";
  const pillIconBg = obscure
    ? "bg-indigo-50 text-indigo-600"
    : "bg-indigo-900/50 text-indigo-400";
  const pillTitleCl = obscure ? "text-slate-800" : "text-slate-100";
  const pillSubCl = obscure ? "text-slate-500" : "text-slate-400";
  const inputCl = obscure
    ? "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-400 focus:ring-indigo-100"
    : "bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-500 focus:border-indigo-400 focus:ring-indigo-900/30";
  const labelCl = obscure ? "text-slate-600" : "text-slate-300";
  const hintCl = obscure ? "text-slate-400" : "text-slate-500";
  const privacyCl = obscure ? "text-slate-400" : "text-slate-500";

  const charsLeft = MAX_CHARS - form.message.length;

  return (
    <section
      id="contact"
      className={`relative w-full `}
      aria-label="Contact form"
    >
      {/* Glow decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: obscure
            ? "radial-gradient(900px 500px at 15% 10%, rgba(99,102,241,.1), transparent 60%), radial-gradient(700px 400px at 70% 0%, rgba(139,92,246,.08), transparent 55%)"
            : "radial-gradient(900px 500px at 15% 10%, rgba(99,102,241,.08), transparent 60%)",
        }}
      />

      <div className="mx-auto w-7/12 px-6 py-16 md:py-24 max-lg:w-full md:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* ── Lado izquierdo ── */}
          <div className="flex flex-col gap-8 max-w-md">
            {/* Headline */}
            <div>
              <h2
                className={`text-3xl font-extrabold tracking-tight md:text-4xl ${titleCl}`}
                style={{ fontFamily: "inherit", textShadow: "none" }}
              >
                Let's work <span className="text-indigo-500">together</span>
              </h2>
              <p className={`mt-3 text-base leading-relaxed ${subtitleCl}`}>
                Open to freelance projects, full-time roles, and collaborations.
                I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-3">
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${infoPillBg}`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${pillIconBg}`}
                  >
                    {card.icon}
                  </span>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span
                      className={`text-sm font-semibold leading-snug truncate ${pillTitleCl}`}
                    >
                      {card.title}
                    </span>
                    <span className={`text-xs ${pillSubCl}`}>
                      {card.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Formulario ── */}
          <div className={`w-full rounded-2xl border p-6 md:p-8 ${cardBg}`}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Nombre */}
              <div>
                <label className={`block text-sm font-medium mb-1 ${labelCl}`}>
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Alejandro Arnedo"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 ${inputCl}`}
                />
              </div>

              {/* Teléfono + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${labelCl}`}
                  >
                    Phone{" "}
                    <span className={`font-normal text-xs ${hintCl}`}>
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+54 9 ..."
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 ${inputCl}`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-1 ${labelCl}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 ${inputCl}`}
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className={`block text-sm font-medium ${labelCl}`}>
                    Message
                  </label>
                  <span
                    className={`text-xs ${charsLeft < 50 ? "text-amber-500" : hintCl}`}
                  >
                    {form.message.length} / {MAX_CHARS}
                  </span>
                </div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  maxLength={MAX_CHARS}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 resize-none ${inputCl}`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-60"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "ok" ? (
                  "Message sent!"
                ) : status === "error" ? (
                  "Error — please try again"
                ) : (
                  <>
                    <IconSend />
                    Send message
                  </>
                )}
              </button>

              {/* Nota de privacidad */}
              <p className={`text-center text-xs ${privacyCl}`}>
                Your information will only be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
