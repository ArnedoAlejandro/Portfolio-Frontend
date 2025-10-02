"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const pct = Math.min(100, Math.max(0, (scrolled / height) * 100));
      setWidth(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] transition-[width] duration-150"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
