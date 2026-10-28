import useReveal from "../hooks/useReveal";
import "./Reveal.css";

// Wrap anything in <Reveal> to animate it in as it scrolls into view.
//   as    : HTML tag to render (div, h1, p, section...)
//   dir   : "up" (default) | "left" | "right" | "scale"
//   delay : milliseconds, used to stagger siblings
export default function Reveal({
  as: Tag = "div",
  dir = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const [ref, seen] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${dir} ${seen ? "reveal--in" : ""} ${className}`.trim()}
      style={{ "--delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
