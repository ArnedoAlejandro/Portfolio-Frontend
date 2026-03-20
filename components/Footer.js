import Link from "next/link";

// ─── icons ────────────────────────────────────────────────────────────────────

function IconLinkedIn() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.35h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.92-1.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

// ─── data ─────────────────────────────────────────────────────────────────────

const navLinks = [
  { href: "#presentacion", label: "Presentation" },
  { href: "#proyect", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/alejandro-augusto-arnedo-27a189240/",
    icon: <IconLinkedIn />,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/ArnedoAlejandro",
    icon: <IconGitHub />,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.instagram.com/arnedoalejandro/",
    icon: <IconInstagram />,
    label: "Instagram",
    external: true,
  },
];

const contactInfo = [
  {
    href: "tel:+543548155695880",
    icon: <IconPhone />,
    label: "+54 3548 155-69580",
  },
  {
    href: "mailto:arnedoaalejandro@gmail.com",
    icon: <IconMail />,
    label: "arnedoaalejandro@gmail.com",
  },
];

// ─── component ────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 mt-0">
      {/* Main grid */}
      <div className="mx-auto w-8/12 max-lg:w-full px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* ── Columna 1: Marca ── */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-white text-lg font-bold tracking-tight">
              Alejandro Arnedo
            </p>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-xs">
              Frontend Developer specialized in React & Next.js. Building fast,
              accessible, and scalable interfaces.
            </p>
          </div>

          {/* Badge open to work */}
          <span className="inline-flex items-center gap-2 w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-emerald-400">
              Open to work
            </span>
          </span>
        </div>

        {/* ── Columna 2: Navegación ── */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
            Navigation
          </p>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 w-fit"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Columna 3: Contacto ── */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
            Contact
          </p>

          {/* Social links */}
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group w-fit"
              aria-label={link.label}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-colors duration-200">
                {link.icon}
              </span>
              <span className="text-sm text-slate-400 group-hover:text-white transition-colors duration-200">
                {link.label}
              </span>
            </Link>
          ))}

          {/* Contact info (tel + mail) */}
          <div className="mt-1 flex flex-col gap-3">
            {contactInfo.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 group w-fit"
                aria-label={item.label}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white transition-colors duration-200">
                  {item.icon}
                </span>
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors duration-200 break-all">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto w-8/12 max-lg:w-full px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500">
            © {year} Alejandro Arnedo. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with <span className="text-indigo-400">Next.js</span>
            {" & "}
            <span className="text-indigo-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
