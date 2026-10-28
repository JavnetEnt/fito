import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import "./Collection.css";

export default function Collection() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section id="collection" className="section">
      <div className="wrap">
        <div className="collection__head">
          <Reveal as="h2" dir="left">The<br />Collection</Reveal>
          <Reveal as="p" delay={150} className="collection__intro">
            Six essentials. Cut sharp, built to move, made to outlast every program.
          </Reveal>
        </div>

        {status === "loading" && <p className="collection__msg">Loading collection…</p>}
        {status === "error" && (
          <p className="collection__msg">Couldn’t load products. Is the server running?</p>
        )}

        <div className="collection__grid">
          {products.map((p, i) => (
            <Reveal as="article" key={p.id} dir="scale" delay={(i % 3) * 120} className="card">
              <div className="card__img" style={{ background: p.look }}>
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    width="800"
                    height="1000"
                    loading="lazy"
                    style={{ objectFit: p.fit || "cover" }}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                )}
                {p.tag && <span className="card__tag">{p.tag}</span>}
              </div>
              <div className="card__info">
                <div>
                  <h3>{p.name}</h3>
                  <small>{p.category}</small>
                </div>
                <span className="card__price">${p.price}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
