import { useMemo } from "react";
import { useNav } from "../app/navigation";
import { useLang } from "../i18n/LanguageContext";
import { track } from "../analytics";
import LangToggle from "../components/LangToggle";

// Atmospheric foxfire card veiled behind the title.
const HERO = import.meta.env.BASE_URL + "cards/major/17.webp";

interface Ember {
  left: number;
  size: number;
  duration: number;
  delay: number;
  blue: boolean;
}

function makeEmbers(n: number): Ember[] {
  return Array.from({ length: n }, () => ({
    left: Math.random() * 100,
    size: 2 + Math.random() * 3.5,
    duration: 5 + Math.random() * 5,
    delay: Math.random() * 7,
    blue: Math.random() < 0.35,
  }));
}

export default function WelcomePage() {
  const { t } = useLang();
  const { go } = useNav();

  // Generated once so embers don't reshuffle on re-render.
  const embers = useMemo(() => makeEmbers(16), []);

  return (
    <div className="page welcome">
      <div className="welcome-bg" aria-hidden="true">
        <img
          className="welcome-hero"
          src={HERO}
          alt="the-star-background-image"
        />
        <div className="welcome-veil" />
        <div className="welcome-glow" />
        <div className="welcome-embers">
          {embers.map((e, i) => (
            <span
              key={i}
              className="ember"
              style={{
                left: `${e.left}%`,
                width: `${e.size}px`,
                height: `${e.size}px`,
                background: e.blue ? "#7cc8ff" : "#ff9a3c",
                boxShadow: `0 0 6px ${e.blue ? "#5cc8ff" : "#ff7a18"}`,
                animationDuration: `${e.duration}s`,
                animationDelay: `${e.delay}s`,
              }}
            />
          ))}
        </div>
        <svg className="filigree tl" viewBox="0 0 60 60">
          <path
            d="M6 34 Q6 6 34 6 M6 20 Q6 6 20 6 M13 42 Q11 13 42 13"
            fill="none"
            stroke="#e8a13a"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="8" cy="8" r="1.6" fill="#f5c878" />
        </svg>
        <svg className="filigree br" viewBox="0 0 60 60">
          <path
            d="M54 26 Q54 54 26 54 M54 40 Q54 54 40 54 M47 18 Q49 47 18 47"
            fill="none"
            stroke="#e8a13a"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="52" cy="52" r="1.6" fill="#f5c878" />
        </svg>
      </div>

      <header className="page-top welcome-top">
        <LangToggle />
      </header>

      <main className="welcome-main">
        <p className="welcome-eyebrow">{t("welcomeTo")}</p>
        <h1 className="brand">kitsunebi</h1>
        <div className="welcome-divider" aria-hidden="true">
          <span />✦<span />
        </div>
        <p className="welcome-sub">{t("oracle")}</p>

        <p className="welcome-intro">
          {t("introBefore")}
          <strong className="intro-solstice">{t("introSolstice")}</strong>
          {t("introAfter")}
        </p>

        <button
          className="btn-primary"
          onClick={() => {
            track("start_click"); // Event 2 — Start button
            go("spread");
          }}
        >
          {t("start")}
        </button>
      </main>

      <footer className="page-footer">{t("madeBy")}</footer>
    </div>
  );
}
