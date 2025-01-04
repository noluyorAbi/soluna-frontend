"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Datenschutzrichtlinien() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Head>
        <title>Datenschutz | SOLUNA Dashboard</title>
        <meta
          name="description"
          content="Datenschutzrichtlinien für das SOLUNA Clan-Aktivitäts-Dashboard. Erfahren Sie, wie wir Ihre Daten schützen."
        />
      </Head>

      {/* Navbar */}

      {/* Hauptinhalt */}
      <main className="container mx-auto px-6 py-16 flex-grow">
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Datenschutzrichtlinien
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
            Informationen zum Datenschutz im SOLUNA Dashboard.
          </p>
        </section>

        <section className="mb-10">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Willkommen bei den Datenschutzrichtlinien des{" "}
            <strong className="text-gray-900 dark:text-gray-100">
              SOLUNA Clan-Aktivitäts-Dashboards
            </strong>
            . Der Schutz Ihrer Daten ist uns ein wichtiges Anliegen. In dieser
            Richtlinie erklären wir transparent, wie wir mit den Daten umgehen,
            die von der Clash of Clans API stammen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Herkunft der Daten
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Alle im Dashboard angezeigten Daten stammen ausschließlich von der
            offiziellen{" "}
            <a
              href="https://developer.clashofclans.com/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clash of Clans API
            </a>
            . Diese API wird von Supercell bereitgestellt, dem Entwickler von
            Clash of Clans. Wir erheben keine persönlichen Daten direkt.
            Stattdessen greifen wir lediglich auf öffentlich zugängliche
            Informationen über Clan-Aktivitäten zu, wie beispielsweise Spenden,
            Angriffe und Spielerstatistiken.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Zweck der Datennutzung
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Die abgerufenen Daten dienen ausschließlich dem Zweck, eine
            übersichtliche Darstellung der Aktivitäten innerhalb des Clans zu
            ermöglichen. Dies unterstützt Clan-Mitglieder dabei, ihre Leistungen
            zu analysieren und die Zusammenarbeit im Clan zu verbessern.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Datenspeicherung und -sicherheit
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Wir legen großen Wert auf den Schutz Ihrer Daten. Daher speichern
            wir keine Daten dauerhaft. Alle Informationen werden in Echtzeit von
            der API geladen und sind nur für die Dauer Ihrer Sitzung im
            Dashboard verfügbar. Es erfolgt keine Weitergabe dieser Daten an
            Dritte und keine kommerzielle Nutzung.
          </p>
        </section>

        <section>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Sollten Sie weitere Fragen oder Bedenken zum Datenschutz haben,
            können Sie uns jederzeit über die angegebenen Kontaktmöglichkeiten
            erreichen.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-gray-400 dark:text-gray-500 py-8 mt-auto transition-colors duration-500">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2 text-sm sm:text-base">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white dark:text-gray-200">
              SOLUNA
            </span>
            . Alle Rechte vorbehalten.
          </p>
          <p className="text-sm sm:text-base">
            <a
              href="/datenschutzrichtlinien"
              className="text-blue-400 dark:text-blue-300 hover:text-white dark:hover:text-gray-200 transition-colors duration-300"
              rel="noopener noreferrer"
            >
              Datenschutzrichtlinien
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

// Komponente für das mobile Menü
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
        aria-label="Toggle menu"
      >
        {/* Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            // Schließen Icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            // Hamburger Icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          )}
        </svg>
      </button>
      {isOpen && (
        <nav className="mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href={"/"}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Startseite
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

// Komponente für den Dark Mode Umschalter
function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Überprüfe die aktuelle Einstellung im lokalen Speicher oder im System
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Wenn keine Einstellung vorhanden ist, folge der Systempräferenz
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 rounded focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        // Icon für Light Mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707"
          />
        </svg>
      ) : (
        // Icon für Dark Mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          />
        </svg>
      )}
    </button>
  );
}
