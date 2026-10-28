import Reveal from "./Reveal";
import CountUp from "./CountUp";
import "./Technology.css";

const STATS = [
  { to: 4,   suffix: "×",  label: "Way stretch" },
  { to: 92,  suffix: "%",  label: "Faster drying" },
  { to: 180, suffix: "",   label: "GSM fabric weight" },
  { to: 500, suffix: "+",  label: "Wash cycles tested" },
];

export default function Technology() {
  return (
    <section id="technology" className="section tech">
      <div className="wrap tech__split">
        <div>
          <Reveal as="p" className="eyebrow">FITO·FLEX™ fabric</Reveal>
          <Reveal as="h2" delay={100}>Engineered<br />to endure</Reveal>
          <Reveal as="p" delay={220} className="tech__copy">
            Four-way stretch, flatlock seams and moisture-wicking yarn tested
            through hundreds of cycles, so your kit is never the limiting factor.
          </Reveal>
        </div>

        <Reveal dir="right" className="tech__stats">
          {STATS.map((s) => (
            <div className="tech__stat" key={s.label}>
              <strong><CountUp to={s.to} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
