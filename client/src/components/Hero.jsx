import Reveal from "./Reveal";
import "./Hero.css";

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <Reveal as="p" className="eyebrow">Women’s performance · SS26</Reveal>

          <Reveal as="h1" delay={100} className="hero__title">
            Built for<br />
            the <span className="hero__accent">grind.</span>
          </Reveal>

          <Reveal as="p" delay={250} className="hero__copy">
            Premium gym wear engineered to move with you, rep after rep.
          </Reveal>

          <Reveal delay={380}>
            <a href="#collection" className="btn">Shop the drop</a>
          </Reveal>
        </div>

        <Reveal dir="scale" delay={200} className="hero__visual">
          <div className="hero__glow" />
          <img className="hero__img" src="/images/hero.webp" alt="FITO women’s gym wear" />
        </Reveal>
      </div>

      <a href="#collection" className="hero__scroll" aria-label="Scroll to collection">
        <span>Scroll</span>
        <i className="hero__pulse" />
      </a>
    </header>
  );
}
