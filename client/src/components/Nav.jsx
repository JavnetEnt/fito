import { useEffect, useState } from "react";
import "./Nav.css";

const LINKS = [
  { label: "Collection", id: "collection" },
  { label: "Technology", id: "technology" },
  { label: "Story", id: "story" },
  { label: "Join", id: "join" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Glass effect after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the menu is open; close on Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the menu if the window grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 40.01rem)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Mobile links: close the menu first, then scroll
  const goMobile = (e, id) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
  };

  return (
    <>
      <nav className={`nav ${scrolled || open ? "nav--scrolled" : ""}`}>
        <div className="wrap nav__inner">
          <a href="#top" className="nav__logo" aria-label="FITO home" onClick={() => setOpen(false)}>
            FITO<span>.</span>
          </a>

          <ul className="nav__links">
            {LINKS.map(({ label, id }) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ul>

          <button
            className={`nav__toggle ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span />
          </button>
        </div>
      </nav>

      {/* Sibling of <nav>, not a child: backdrop-filter would break position: fixed */}
      <div id="mobile-menu" className={`menu ${open ? "menu--open" : ""}`} aria-hidden={!open}>
        <ul>
          {LINKS.map(({ label, id }, i) => (
            <li key={id} style={{ "--i": i }}>
              <a href={`#${id}`} tabIndex={open ? 0 : -1} onClick={(e) => goMobile(e, id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
