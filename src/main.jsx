// Main app — composes the portfolio sections + Tweaks panel

const { useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakSelect } = window;

function App() {
  const [values, setTweak] = useTweaks({
    accent: "#e9a96b",
    bg: "warm-dark",
    fontHeader: "geist",
  });

  // Apply tweaks via CSS variables
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", values.accent);
    // accent-soft = accent at 14% alpha (approx via color-mix)
    r.style.setProperty("--accent-soft", `color-mix(in oklch, ${values.accent} 16%, transparent)`);

    const bgs = {
      "warm-dark":   ["#0c0b0a", "#131211", "#1a1916"],
      "cool-dark":   ["#0a0c10", "#11141a", "#171c25"],
      "pure-black":  ["#000000", "#0a0a0a", "#141414"],
      "paper":       ["#f3efe7", "#ebe5d8", "#e0d8c6"],
    };
    const [bg, bg2, bg3] = bgs[values.bg] || bgs["warm-dark"];
    r.style.setProperty("--bg", bg);
    r.style.setProperty("--bg-2", bg2);
    r.style.setProperty("--bg-3", bg3);

    if (values.bg === "paper") {
      r.style.setProperty("--ink", "#1a1612");
      r.style.setProperty("--ink-2", "rgba(26,22,18,0.72)");
      r.style.setProperty("--ink-3", "rgba(26,22,18,0.5)");
      r.style.setProperty("--ink-4", "rgba(26,22,18,0.32)");
      r.style.setProperty("--line", "rgba(26,22,18,0.1)");
      r.style.setProperty("--line-2", "rgba(26,22,18,0.18)");
    } else {
      r.style.setProperty("--ink", "#f4ede0");
      r.style.setProperty("--ink-2", "rgba(244, 237, 224, 0.72)");
      r.style.setProperty("--ink-3", "rgba(244, 237, 224, 0.5)");
      r.style.setProperty("--ink-4", "rgba(244, 237, 224, 0.32)");
      r.style.setProperty("--line", "rgba(255, 245, 230, 0.08)");
      r.style.setProperty("--line-2", "rgba(255, 245, 230, 0.14)");
    }

    const fonts = {
      geist: "'Geist', ui-sans-serif, system-ui, sans-serif",
      fraunces: "'Fraunces', ui-serif, Georgia, serif",
      mono: "'Geist Mono', ui-monospace, monospace",
    };
    r.style.setProperty("--sans", fonts[values.fontHeader] || fonts.geist);
  }, [values.accent, values.bg, values.fontHeader]);

  return (
    <React.Fragment>
      <window.Nav />
      <window.Hero />
      <window.Marquee />
      <window.About />
      <window.Stats />
      <window.AISpotlight />
      <window.Work />
      <window.Stack />
      <window.Experience />
      <window.Contact />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme">
          <TweakColor
            label="Accent"
            value={values.accent}
            options={["#e9a96b", "#7cd16e", "#6ea8e9", "#d76b6b", "#c39bff"]}
            onChange={(v) => setTweak("accent", v)}
          />
          <TweakRadio
            label="Background"
            value={values.bg}
            options={["warm-dark", "cool-dark", "pure-black", "paper"]}
            onChange={(v) => setTweak("bg", v)}
          />
        </TweakSection>
        <TweakSection label="Typography">
          <TweakRadio
            label="Headings"
            value={values.fontHeader}
            options={["geist", "fraunces", "mono"]}
            onChange={(v) => setTweak("fontHeader", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
