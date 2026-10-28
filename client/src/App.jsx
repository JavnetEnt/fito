import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Technology from "./components/Technology";
import Story from "./components/Story";
import Join from "./components/Join";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Collection />
      <Technology />
      <Story />
      <Join />

      <footer className="footer">
        <div className="wrap">
          <span>© 2026 FITO. All rights reserved.</span>
          <span>Built for the grind.</span>
        </div>
      </footer>
    </>
  );
}
