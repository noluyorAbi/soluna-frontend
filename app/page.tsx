"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Korrigierter Import
import Head from "next/head";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setIsLoading(true);
    // Nach 30 Sekunden weiterleiten
    setTimeout(() => {
      router.push("/clan-activity");
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <Head>
        <title>SOLUNA Clan-Aktivitäts-Dashboard</title>
        <meta
          name="description"
          content="Verfolgen Sie die Aktivität der SOLUNA Clan-Mitglieder in Echtzeit."
        />
      </Head>

      {/* Navbar */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">SOLUNA Dashboard</h1>
        <nav>
          <ul className="flex space-x-6">
            {/*             
            <li>
              <a href="/Features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
            </li>
 */}
            <li>
              <a
                href="/ueber_uns"
                className="text-gray-600 hover:text-blue-600"
              >
                Über Uns
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/G2Br635S4B"
                className="text-gray-600 hover:text-blue-600"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hauptinhalt */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        {!isLoading ? (
          <>
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Willkommen zum{" "}
              <span className="text-blue-600">
                SOLUNA Clan-Aktivitäts-Dashboard
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Verfolgen Sie die Aktivität der SOLUNA Clan-Mitglieder in
              Echtzeit. Analysieren Sie Spenden, erhaltene Spenden und gewonnene
              Angriffe mit interaktiven Diagrammen.
            </p>
            <button
              onClick={handleButtonClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              Zum Aktivitäts-Plot
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl font-extrabold text-blue-600 mb-6 leading-tight">
              SOLUNA - Clan Daten laden
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              Bitte warten Sie, während die Clan-Daten verarbeitet werden.
            </p>
            {/*               
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce"></div>
              <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce delay-75"></div>
              <div className="w-4 h-4 rounded-full bg-blue-600 animate-bounce delay-150"></div>
              </div>
               */}
            <div className="w-12 h-12 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">SOLUNA</span>. Alle
            Rechte vorbehalten.
          </p>
          <p className="mt-2">
            <a
              href="/datenschutzrichtlinien"
              className="text-blue-400 hover:text-white"
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
