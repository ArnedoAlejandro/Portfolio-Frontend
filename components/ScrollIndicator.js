// components/ScrollIndicator.js
"use client";

export default function ScrollIndicator({ targetId = "about" }) {
  const go = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative w-full py-8 select-none">
      {/* Línea guía sutil */}
      <div className="mx-auto h-10 w-[2px] bg-gradient-to-b from-[#3B82F6]/40 via-[#6366F1]/50 to-transparent" />

      {/* Botón indicador (flota arriba/abajo) */}
      <button
        onClick={go}
        aria-label="Scroll a la siguiente sección"
        className="mx-auto mt-2 block"
      >
        <div
          className="relative h-12 w-12 rounded-full bg-gradient-to-br
                        from-[#3B82F6] to-[#6366F1] shadow-md
                        hover:opacity-95 transition-opacity"
        >
          {/* chevron */}
          <svg
            className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2
                       text-white drop-shadow-sm animate-float"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M6 9l6 6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Texto pequeño */}
      <p className="mt-3 text-center text-xs font-medium text-slate-700/70">
        deslizá para ver más
      </p>

      {/* keyframes locales */}
      <style jsx>{`
        @keyframes floatY {
          0% {
            transform: translate(-50%, -50%) translateY(-4px);
            opacity: 0.9;
          }
          50% {
            transform: translate(-50%, -50%) translateY(4px);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) translateY(-4px);
            opacity: 0.9;
          }
        }
        .animate-float {
          animation: floatY 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
