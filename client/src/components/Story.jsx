import Reveal from "./Reveal";
import "./Story.css";

export default function Story() {
  return (
    <section id="story" className="section story">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">Our story</Reveal>
        <Reveal as="h2" delay={100} className="story__title">
          Born in the <em>last set</em>, when quitting felt easier.
        </Reveal>
        <Reveal as="p" delay={250} className="story__copy">
          FITO started with a simple frustration: gym wear that looked great for
          a week and fell apart in a month. We built the brand we couldn’t find,
          with premium materials, an uncompromising fit and a design language as
          disciplined as the people who wear it.
        </Reveal>
      </div>
    </section>
  );
}
