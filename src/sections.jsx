// Portfolio section components

const portfolioStyles = {
  shell: {
    maxWidth: 1240,
    margin: "0 auto",
    padding: "0 40px",
  },
  sectionPad: {
    padding: "120px 0",
    borderTop: "1px solid var(--line)",
  },
  sectionLabel: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    fontFamily: "var(--mono)",
    fontSize: 12,
    color: "var(--ink-3)",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    marginBottom: 48,
  },
  sectionNum: {
    color: "var(--accent)",
  },
  sectionTitle: {
    fontFamily: "var(--sans)",
    fontWeight: 500,
    fontSize: 56,
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    margin: 0,
    color: "var(--ink)",
  },
};

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const linkStyle = { fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: "0.12em", padding: "8px 0", cursor: "pointer" };
  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 24;
    window.scrollTo({ top, behavior: "smooth" });
  };
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      background: scrolled ? "rgba(12,11,10,0.72)" : "transparent",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "all .25s ease",
    }}>
      <div style={{ ...portfolioStyles.shell, display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#top" onClick={go("top")} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 9, height: 9, borderRadius: 999, background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }}></span>
          <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink)", letterSpacing: "-0.01em" }}>oussama<span style={{ color: "var(--ink-3)" }}>.chaabouni</span></span>
        </a>
        <nav style={{ display: "flex", gap: 28 }}>
          {[["about","About"],["ai","AI"],["work","Work"],["stack","Stack"],["contact","Contact"]].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={go(id)} style={linkStyle}>{label}</a>
          ))}
        </nav>
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const [time, setTime] = React.useState(() => fmtTime());
  React.useEffect(() => {
    const t = setInterval(() => setTime(fmtTime()), 1000 * 30);
    return () => clearInterval(t);
  }, []);
  function fmtTime() {
    try {
      return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Madrid" }).format(new Date());
    } catch (e) { return ""; }
  }
  return (
    <section id="top" style={{ position: "relative", minHeight: "100vh", paddingTop: 64, display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.5,
        backgroundImage: "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(circle at 30% 40%, rgba(0,0,0,0.9), transparent 65%)",
        WebkitMaskImage: "radial-gradient(circle at 30% 40%, rgba(0,0,0,0.9), transparent 65%)",
      }}></div>
      <div aria-hidden="true" style={{
        position: "absolute", width: 560, height: 560, top: "-160px", right: "-120px",
        background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)",
        filter: "blur(20px)", pointerEvents: "none",
      }}></div>

      <div style={{ ...portfolioStyles.shell, position: "relative", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 80, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.06em" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#7cd16e", boxShadow: "0 0 10px #7cd16e" }}></span>
            <span>Available · 2026</span>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            <span>BARCELONA</span>
            <span style={{ color: "var(--ink-4)" }}>{time}</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 80, alignItems: "end" }}>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.18em", marginBottom: 28, textTransform: "uppercase" }}>
              <span style={{ color: "var(--accent)" }}>// </span>portfolio · v2 · 2026
            </div>
            <h1 style={{ margin: 0, fontFamily: "var(--sans)", fontWeight: 400, fontSize: "clamp(56px, 9vw, 140px)", lineHeight: 0.92, letterSpacing: "-0.045em", color: "var(--ink)" }}>
              Oussama<br />
              Chaabouni<span style={{ color: "var(--accent)" }}>.</span>
            </h1>
            <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, fontFamily: "var(--mono)", fontSize: 14, color: "var(--ink-2)" }}>
              <Pill>Senior Software Engineer</Pill>
              <span style={{ color: "var(--ink-4)" }}>—</span>
              <Pill>C# / .NET · Azure</Pill>
              <span style={{ color: "var(--ink-4)" }}>—</span>
              <Pill>AZ-204 certified</Pill>
            </div>
          </div>
          <div style={{ paddingBottom: 12 }}>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontSize: 19, lineHeight: 1.45, color: "var(--ink-2)", textWrap: "pretty", fontStyle: "italic" }}>
              I own audit-grade financial backends — 50K+ daily transactions, 99.9% uptime, 180+ countries. Currently shaping cloud architecture at EcoVadis, Barcelona.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 100, paddingTop: 24, borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.06em" }}>
          {[
            ["Now", "Senior SWE @ EcoVadis"],
            ["Domain", "FinTech · Compliance"],
            ["Stack", "C# · .NET · Azure"],
            ["Reach", "Senior / Lead worldwide"],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ color: "var(--ink-4)", textTransform: "uppercase", marginBottom: 8 }}>{k}</div>
              <div style={{ color: "var(--ink)", fontSize: 13 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pill({ children }) {
  return <span style={{ padding: "6px 12px", border: "1px solid var(--line-2)", borderRadius: 999, fontSize: 12, color: "var(--ink-2)" }}>{children}</span>;
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ["AZURE", "·", "DOTNET", "·", "KUBERNETES", "·", "JAVA", "·", "MICROSERVICES", "·", "POSTGRES", "·", "CI / CD", "·", "EVENT-DRIVEN", "·", "DDD", "·", "DOCKER", "·", "REACT"];
  const row = [...items, ...items, ...items];
  return (
    <div style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", overflow: "hidden", padding: "22px 0", background: "var(--bg-2)" }}>
      <div style={{ display: "flex", gap: 56, whiteSpace: "nowrap", fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.22em", color: "var(--ink-3)", animation: "marquee 60s linear infinite" }}>
        {row.map((t, i) => (
          <span key={i} style={{ color: t === "·" ? "var(--accent)" : "var(--ink-3)" }}>{t}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" style={portfolioStyles.sectionPad}>
      <div style={portfolioStyles.shell}>
        <div style={portfolioStyles.sectionLabel}>
          <span style={portfolioStyles.sectionNum}>01</span>
          <span style={{ width: 32, height: 1, background: "var(--line-2)" }}></span>
          <span>About</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <h2 style={{ ...portfolioStyles.sectionTitle, fontSize: 64 }}>
            Senior engineer with an architect's instinct — <span style={{ color: "var(--ink-3)" }}>I take regulated, audit-grade backends from monolith to microservices, and the teams behind them with me.</span>
          </h2>
          <div style={{ paddingTop: 12, fontFamily: "var(--sans)", fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)" }}>
            <p style={{ marginTop: 0, textWrap: "pretty" }}>
              4+ years designing cloud-native platforms in <span style={{ color: "var(--ink)" }}>C#/.NET</span> and <span style={{ color: "var(--ink)" }}>Microsoft Azure</span>. At EcoVadis I own the backend of a financial &amp; compliance intelligence platform processing 50K+ daily transactions across 180+ countries — and I led the monolith-to-microservices migration that got us there.
            </p>
            <p style={{ textWrap: "pretty" }}>
              Beyond code: I'm a Scrum Master, a mentor to 8–12 engineers, and the person who keeps engineering culture honest. Microsoft Certified <span style={{ color: "var(--ink)" }}>Azure Developer (AZ-204)</span>. Fluent in English &amp; French, conversational Spanish, native Arabic.
            </p>
            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {[["Based in", "Barcelona, ES"], ["From", "Tunis, TN"], ["Languages", "AR · EN · FR · ES"], ["Certified", "AZ-204 · until 2026"]].map(([k, v]) => (
                <div key={k} style={{ borderTop: "1px solid var(--line)", paddingTop: 12 }}>
                  <div style={{ color: "var(--ink-4)", marginBottom: 4 }}>{k}</div>
                  <div style={{ color: "var(--ink)", textTransform: "none", letterSpacing: 0, fontSize: 14, fontFamily: "var(--sans)" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS / IMPACT ---------- */
function Stats() {
  return (
    <section id="stats" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "72px 0", background: "var(--bg-2)" }}>
      <div style={portfolioStyles.shell}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
          <div style={portfolioStyles.sectionLabel}>
            <span style={portfolioStyles.sectionNum}>—</span>
            <span style={{ width: 32, height: 1, background: "var(--line-2)" }}></span>
            <span>By the numbers · at EcoVadis</span>
          </div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-4)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Last 4 years &middot; production
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0, borderTop: "1px solid var(--line)" }}>
          {window.STATS.map((s, i) => (
            <div key={s.label} style={{
              padding: "28px 22px",
              borderRight: i < window.STATS.length - 1 ? "1px solid var(--line)" : "none",
              borderBottom: "1px solid var(--line)",
            }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: 44, fontWeight: 500, letterSpacing: "-0.04em", color: "var(--ink)", lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ marginTop: 14, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.4, textWrap: "balance" }}>
                {s.label}
              </div>
              <div style={{ marginTop: 6, fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--ink-4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AI SPOTLIGHT ---------- */
function AISpotlight() {
  return (
    <section id="ai" style={{ ...portfolioStyles.sectionPad, position: "relative", overflow: "hidden" }}>
      {/* ambient backdrop */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(ellipse 800px 400px at 90% 20%, var(--accent-soft) 0%, transparent 60%), radial-gradient(ellipse 600px 300px at 0% 80%, var(--accent-soft) 0%, transparent 55%)",
      }}></div>

      <div style={{ ...portfolioStyles.shell, position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={portfolioStyles.sectionLabel}>
              <span style={portfolioStyles.sectionNum}>02</span>
              <span style={{ width: 32, height: 1, background: "var(--line-2)" }}></span>
              <span>AI &middot; in focus</span>
            </div>
            <h2 style={{ ...portfolioStyles.sectionTitle, fontSize: "clamp(48px, 6.5vw, 84px)" }}>
              Where I'm spending<br />
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>most of my curiosity</span> right now.
            </h2>
          </div>
          <p style={{ maxWidth: 360, fontFamily: "var(--sans)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)", textWrap: "pretty", margin: 0 }}>
            Two threads I'm pulling on outside the day job: <span style={{ color: "var(--ink)" }}>retrieval-augmented generation</span> and <span style={{ color: "var(--ink)" }}>edge AI orchestration</span>. Backend instincts, applied to LLM systems.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {window.AI_PROJECTS.map((p, i) => (
            <AISpotlightCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* terminal strip */}
        <div style={{
          marginTop: 24, padding: "22px 28px", borderRadius: 14,
          background: "var(--bg-2)", border: "1px solid var(--line)",
          fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-2)",
          display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap",
        }}>
          <span style={{ color: "var(--accent)" }}>$</span>
          <span style={{ color: "var(--ink-3)" }}>currently exploring</span>
          <span style={{ color: "var(--ink)" }}>agentic workflows</span>
          <span style={{ color: "var(--ink-4)" }}>&middot;</span>
          <span style={{ color: "var(--ink)" }}>evals &amp; observability</span>
          <span style={{ color: "var(--ink-4)" }}>&middot;</span>
          <span style={{ color: "var(--ink)" }}>LLM → production tradeoffs</span>
          <span style={{ marginLeft: "auto", color: "var(--ink-3)" }}>
            <span style={{ display: "inline-block", width: 8, height: 14, background: "var(--accent)", verticalAlign: "middle", animation: "caret 1s steps(2) infinite" }}></span>
          </span>
          <style>{`@keyframes caret { 50% { opacity: 0; } }`}</style>
        </div>
      </div>
    </section>
  );
}

function AISpotlightCard({ project, index }) {
  const [hover, setHover] = React.useState(false);
  const repoUrl = `https://github.com/oussamachaabounii/${project.repo}`;
  const glyph = project.accent === "ai" ? "◇" : "⧖";

  return (
    <a href={repoUrl} target="_blank" rel="noreferrer"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         position: "relative", padding: 32, minHeight: 440,
         display: "flex", flexDirection: "column", gap: 24,
         background: "linear-gradient(180deg, var(--bg-2) 0%, var(--bg-3) 100%)",
         border: "1px solid " + (hover ? "var(--accent)" : "var(--line-2)"),
         borderRadius: 20, transition: "all .3s ease",
         transform: hover ? "translateY(-4px)" : "none",
         overflow: "hidden",
         boxShadow: hover ? "0 24px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px var(--accent-soft)" : "none",
       }}>
      {/* circuit-grid backdrop */}
      <svg aria-hidden="true" width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: hover ? 0.5 : 0.3, transition: "opacity .3s ease" }}>
        <defs>
          <pattern id={`grid-${index}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="var(--line)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
      </svg>

      {/* glyph */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 24, right: 32,
        fontSize: 100, fontFamily: "var(--serif)", color: "var(--accent)",
        opacity: hover ? 0.25 : 0.14, transition: "all .3s ease",
        transform: hover ? "scale(1.08) rotate(8deg)" : "none",
        lineHeight: 1,
      }}>{glyph}</div>

      {/* top meta */}
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "start", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--accent)" }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }}></span>
          <span>{project.kind}</span>
        </div>
        <span style={{ color: "var(--ink-3)" }}>{project.year}</span>
      </div>

      {/* title block */}
      <div style={{ position: "relative" }}>
        <h3 style={{ margin: 0, fontFamily: "var(--sans)", fontWeight: 500, fontSize: 32, letterSpacing: "-0.02em", color: "var(--ink)", lineHeight: 1.1 }}>
          {project.title}
        </h3>
        <p style={{ margin: "12px 0 0", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 17, color: "var(--ink-2)", textWrap: "balance" }}>
          {project.tagline}
        </p>
      </div>

      {/* description */}
      <p style={{ position: "relative", margin: 0, fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)", textWrap: "pretty", flex: 1 }}>
        {project.description}
      </p>

      {/* metrics row */}
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, paddingTop: 18, borderTop: "1px solid var(--line)" }}>
        {project.metrics.map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>{k}</div>
            <div style={{ fontSize: 13, color: "var(--ink)", letterSpacing: "-0.005em" }}>{v}</div>
          </div>
        ))}
      </div>

      {/* stack pills + CTA */}
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.stack.map((s) => (
            <span key={s} style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", padding: "5px 10px", border: "1px solid var(--line-2)", borderRadius: 999, background: "rgba(0,0,0,0.2)" }}>{s}</span>
          ))}
        </div>
        <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: hover ? "var(--accent)" : "var(--ink-3)", letterSpacing: "0.1em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6 }}>
          View repo <span style={{ transform: hover ? "translateX(4px)" : "none", transition: "transform .2s ease" }}>↗</span>
        </span>
      </div>
    </a>
  );
}

/* ---------- WORK ---------- */
function Work() {
  const [filter, setFilter] = React.useState("All");
  const cats = ["All", "Backend · Microservices", "Cloud", "Research", "Web"];
  const matches = (p) => {
    if (filter === "All") return true;
    if (filter === "Cloud") return p.kind.toLowerCase().includes("infra") || p.kind.toLowerCase().includes("certification");
    if (filter === "Web") return p.kind.toLowerCase().includes("web") || p.id === "blockchain-access";
    if (filter === "Research") return p.kind.toLowerCase().includes("research") || p.kind.toLowerCase().includes("academic");
    return p.kind === filter;
  };
  const visible = window.PROJECTS.filter(matches);

  return (
    <section id="work" style={portfolioStyles.sectionPad}>
      <div style={portfolioStyles.shell}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={portfolioStyles.sectionLabel}>
              <span style={portfolioStyles.sectionNum}>03</span>
              <span style={{ width: 32, height: 1, background: "var(--line-2)" }}></span>
              <span>Selected work</span>
            </div>
            <h2 style={portfolioStyles.sectionTitle}>What I've been<br />building.</h2>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {cats.map((c) => (
              <button key={c} onClick={() => setFilter(c)} style={{
                appearance: "none",
                border: "1px solid " + (filter === c ? "var(--accent)" : "var(--line-2)"),
                background: filter === c ? "var(--accent-soft)" : "transparent",
                color: filter === c ? "var(--ink)" : "var(--ink-2)",
                fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase",
                padding: "8px 14px", borderRadius: 999, cursor: "pointer", transition: "all .2s ease",
              }}>{c}</button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24 }}>
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [hover, setHover] = React.useState(false);
  const wide = index % 4 === 0 || index % 4 === 3;
  const span = wide ? "span 7" : "span 5";
  const accentGlyph = ({
    auth: "⚿", infra: "▣", ml: "∿", java: "☕", azure: "△", web: "◐", more: "→",
  })[project.accent] || "◇";

  const repoUrl = project.repo ? `https://github.com/oussamachaabounii/${project.repo}` : "https://github.com/oussamachaabounii";

  return (
    <a href={repoUrl} target="_blank" rel="noreferrer"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         gridColumn: span, position: "relative",
         padding: 28, minHeight: 360,
         display: "flex", flexDirection: "column", justifyContent: "space-between",
         background: hover ? "var(--bg-3)" : "var(--bg-2)",
         border: "1px solid " + (hover ? "var(--line-2)" : "var(--line)"),
         borderRadius: 18, transition: "all .25s ease",
         transform: hover ? "translateY(-3px)" : "translateY(0)",
         overflow: "hidden",
       }}>
      <div aria-hidden="true" style={{
        position: "absolute", top: 24, right: 28,
        fontFamily: "var(--serif)", fontSize: 120, lineHeight: 1, color: hover ? "var(--accent)" : "var(--ink-4)",
        opacity: 0.18, transition: "all .35s ease",
        transform: hover ? "translate(8px, -8px) rotate(-6deg)" : "translate(0,0)",
      }}>{accentGlyph}</div>

      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "start", gap: 16, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <span style={{ color: "var(--accent)" }}>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.kind}</span>
        </div>
        <span>{project.year}</span>
      </div>

      <div style={{ position: "relative", marginTop: 60 }}>
        <h3 style={{ margin: 0, fontFamily: "var(--sans)", fontWeight: 500, fontSize: 30, letterSpacing: "-0.01em", color: "var(--ink)" }}>
          {project.title}
        </h3>
        <p style={{ margin: "10px 0 0", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 16, color: "var(--ink-3)", textWrap: "balance" }}>
          {project.tagline}
        </p>
        <p style={{ margin: "20px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)", textWrap: "pretty", maxWidth: wide ? 540 : 420 }}>
          {project.description}
        </p>
      </div>

      <div style={{ position: "relative", marginTop: 28, paddingTop: 18, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.stack.map((s) => (
            <span key={s} style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-2)", padding: "4px 9px", border: "1px solid var(--line-2)", borderRadius: 999 }}>{s}</span>
          ))}
        </div>
        <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: hover ? "var(--accent)" : "var(--ink-3)", letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 6, transition: "color .2s ease" }}>
          {project.repo ? "View repo" : "View profile"} <span style={{ transform: hover ? "translateX(4px)" : "none", transition: "transform .2s ease" }}>↗</span>
        </span>
      </div>
    </a>
  );
}

/* ---------- STACK ---------- */
function Stack() {
  return (
    <section id="stack" style={portfolioStyles.sectionPad}>
      <div style={portfolioStyles.shell}>
        <div style={portfolioStyles.sectionLabel}>
          <span style={portfolioStyles.sectionNum}>04</span>
          <span style={{ width: 32, height: 1, background: "var(--line-2)" }}></span>
          <span>Toolkit</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          <h2 style={portfolioStyles.sectionTitle}>The things<br />I reach for.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {window.STACK.map((s) => (
              <div key={s.group} style={{ borderTop: "1px solid var(--line-2)", paddingTop: 16 }}>
                <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
                  {s.group}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.items.map((it) => (
                    <span key={it} style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink-2)", padding: "5px 10px", border: "1px solid var(--line)", borderRadius: 6, background: "var(--bg-2)" }}>{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */
function Experience() {
  return (
    <section id="experience" style={portfolioStyles.sectionPad}>
      <div style={portfolioStyles.shell}>
        <div style={portfolioStyles.sectionLabel}>
          <span style={portfolioStyles.sectionNum}>05</span>
          <span style={{ width: 32, height: 1, background: "var(--line-2)" }}></span>
          <span>Trajectory</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 120 }}>
            <h2 style={portfolioStyles.sectionTitle}>Four years.<br />Three roles.<br /><span style={{ color: "var(--ink-3)" }}>One platform.</span></h2>
            <p style={{ marginTop: 28, fontFamily: "var(--sans)", fontSize: 15.5, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 320, textWrap: "pretty" }}>
              From greenfield full-stack solo work to leading a monolith decomposition — each step bigger systems and more responsibility.
            </p>
            <div style={{ marginTop: 32, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-4)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
              <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: 12, marginBottom: 8 }}>Certifications</div>
              {window.CERTIFICATIONS.map((c) => (
                <div key={c.code} style={{ display: "flex", justifyContent: "space-between", color: "var(--ink-2)", fontSize: 12, padding: "8px 0", borderBottom: "1px solid var(--line)" }}>
                  <span><span style={{ color: "var(--accent)" }}>{c.code}</span> · {c.title}</span>
                  <span style={{ color: "var(--ink-4)" }}>{c.expires}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {window.EXPERIENCE.map((e, i) => <ExperienceRow key={i} job={e} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ job, index }) {
  const [open, setOpen] = React.useState(index === 0);
  const hasBullets = job.bullets && job.bullets.length > 0;
  return (
    <div style={{ borderTop: "1px solid var(--line-2)" }}>
      <button onClick={() => hasBullets && setOpen(!open)}
              style={{
                appearance: "none", background: "transparent", border: "none", color: "inherit",
                width: "100%", textAlign: "left", padding: "28px 0", cursor: hasBullets ? "pointer" : "default",
                display: "grid", gridTemplateColumns: "140px 1fr 40px", gap: 24, alignItems: "start",
              }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.04em", paddingTop: 6 }}>{job.period}</div>
        <div>
          <div style={{ fontSize: 22, fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.01em" }}>{job.company}</div>
          <div style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 4 }}>{job.role}</div>
          {job.summary && (
            <div style={{ marginTop: 10, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14.5, color: "var(--ink-3)", textWrap: "pretty", maxWidth: 600 }}>
              {job.summary}
            </div>
          )}
          <div style={{ marginTop: 14, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{job.location}</div>
        </div>
        {hasBullets && (
          <span style={{
            justifySelf: "end", marginTop: 6,
            width: 32, height: 32, borderRadius: 999, border: "1px solid var(--line-2)",
            display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink-2)",
            transition: "transform .25s ease, background .25s ease",
            transform: open ? "rotate(45deg)" : "none",
            background: open ? "var(--accent-soft)" : "transparent",
          }}>+</span>
        )}
      </button>

      {hasBullets && (
        <div style={{
          maxHeight: open ? 1200 : 0, overflow: "hidden",
          transition: "max-height .4s ease",
        }}>
          <ul style={{ margin: 0, padding: "0 0 32px 0", listStyle: "none", display: "grid", gap: 12 }}>
            {job.bullets.map((b, i) => (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 8, fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)", textWrap: "pretty" }}>
                <span style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontSize: 12, paddingTop: 4 }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" style={{ ...portfolioStyles.sectionPad, position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 80% 50%, var(--accent-soft) 0%, transparent 50%)",
        pointerEvents: "none",
      }}></div>
      <div style={{ ...portfolioStyles.shell, position: "relative" }}>
        <div style={portfolioStyles.sectionLabel}>
          <span style={portfolioStyles.sectionNum}>06</span>
          <span style={{ width: 32, height: 1, background: "var(--line-2)" }}></span>
          <span>Get in touch</span>
        </div>
        <h2 style={{ ...portfolioStyles.sectionTitle, fontSize: "clamp(56px, 8vw, 110px)", maxWidth: 1100, letterSpacing: "-0.03em" }}>
          Got an interesting backend problem<span style={{ color: "var(--accent)" }}>?</span><br />
          <span style={{ color: "var(--ink-3)" }}>Let's compare notes.</span>
        </h2>

        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          <ContactCard label="Email" value="oussama.chaabouni@hotmail.com" href={window.PROFILE.email} />
          <ContactCard label="GitHub" value="@oussamachaabounii" href={window.PROFILE.github} />
          <ContactCard label="LinkedIn" value="/in/oussama-chaabouni" href={window.PROFILE.linkedin} />
        </div>

        <div style={{ marginTop: 80, paddingTop: 24, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.06em" }}>
          <span>© 2026 OUSSAMA CHAABOUNI</span>
          <span>BUILT WITH <span style={{ color: "var(--accent)" }}>♥</span> IN BARCELONA</span>
          <span>v2 · 2026</span>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ label, value, href }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         display: "block", padding: 28, borderRadius: 16,
         background: hover ? "var(--bg-3)" : "var(--bg-2)",
         border: "1px solid " + (hover ? "var(--accent)" : "var(--line)"),
         transition: "all .25s ease",
         transform: hover ? "translateY(-3px)" : "none",
       }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18 }}>{label}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 16, color: "var(--ink)", letterSpacing: "-0.01em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{value}</span>
        <span style={{ color: hover ? "var(--accent)" : "var(--ink-3)", fontSize: 18, transition: "transform .2s ease", transform: hover ? "translate(2px, -2px)" : "none" }}>↗</span>
      </div>
    </a>
  );
}

Object.assign(window, { Nav, Hero, Marquee, About, Stats, Work, Stack, Experience, Contact, AISpotlight });
