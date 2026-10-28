import { useState } from "react";
import Reveal from "./Reveal";
import "./Join.css";

export default function Join() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setMessage(data.message);
      setStatus("done");
      setEmail("");
    } catch (err) {
      setMessage(err.message);
      setStatus("error");
    }
  }

  return (
    <section id="join" className="section join">
      <div className="wrap">
        <Reveal as="h2">Join the<br />Team</Reveal>
        <Reveal as="p" delay={150} className="join__copy">
          Early access to drops, members-only pricing and training notes. No spam.
        </Reveal>

        <Reveal delay={250}>
          {status === "done" ? (
            <p className="join__success">{message}</p>
          ) : (
            <form className="join__form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn" disabled={status === "sending"}>
                {status === "sending" ? "Joining…" : "Join"}
              </button>
            </form>
          )}
          {status === "error" && <p className="join__error" role="alert">{message}</p>}
        </Reveal>
      </div>
    </section>
  );
}
