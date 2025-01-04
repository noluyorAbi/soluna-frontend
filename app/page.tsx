"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Korrigierter Import
import Head from "next/head";
import Navbar from "./components/Navbar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setIsLoading(true);
    // Nach 50 Millisekunden weiterleiten
    setTimeout(() => {
      router.push("/clan-activity");
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-black transition-colors duration-500">
      <Head>
        <title>SOLUNA Clan-Aktivitäts-Dashboard</title>
        <meta
          name="description"
          content="Verfolgen Sie die Aktivität der SOLUNA Clan-Mitglieder in Echtzeit."
        />
      </Head>

      {/* Navbar */}

      {/* Hauptinhalt */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8 sm:py-16">
        {!isLoading ? (
          <div className="max-w-4xl w-full">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 leading-tight transition-colors duration-500">
              Willkommen zum{" "}
              <span className="text-blue-600 dark:text-blue-400">
                SOLUNA Clan-Aktivitäts-Dashboard
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-500">
              Verfolgen Sie die Aktivität der SOLUNA Clan-Mitglieder in
              Echtzeit. Analysieren Sie Spenden, erhaltene Spenden und gewonnene
              Angriffe mit interaktiven Diagrammen.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleButtonClick}
                className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 transition-colors duration-300"
              >
                Zum Aktivitäts-Plot
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-6 leading-tight transition-colors duration-500">
              SOLUNA - Clan Daten laden
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl transition-colors duration-500">
              Bitte warten Sie, während die Clan-Daten verarbeitet werden.
            </p>
            <div className="w-12 h-12 border-4 border-blue-600 dark:border-blue-400 border-dashed rounded-full animate-spin"></div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-gray-400 dark:text-gray-500 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white dark:text-gray-200">
              SOLUNA
            </span>
            . Alle Rechte vorbehalten.
          </p>
          <p className="mt-2 text-sm">
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
        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
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
              <a
                href="/ueber_uns"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Über Uns
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/G2Br635S4B"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
