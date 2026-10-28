import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";

// Counts from 0 to `to` once the element scrolls into view.
export default function CountUp({ to, suffix = "", duration = 1600 }) {
  const [ref, seen] = useReveal({ threshold: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return;

    // Respect reduced-motion: jump straight to the final number
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setValue(Math.round(to * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, to, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}
