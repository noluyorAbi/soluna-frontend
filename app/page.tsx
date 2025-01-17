"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight, BarChart2, Users, Gift } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/clan-activity");
    }, 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-white">
      <Head>
        <title>SOLUNA Clan-Aktivitäts-Dashboard</title>
        <meta
          name="description"
          content="Verfolgen Sie die Aktivität der SOLUNA Clan-Mitglieder in Echtzeit."
        />
      </Head>

      {/* Navbar */}


      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8 sm:py-16">
        {!isLoading ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl w-full"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-6 leading-tight">
              SOLUNA Clan-Aktivitäts-Dashboard
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Verfolgen Sie die Aktivität der SOLUNA Clan-Mitglieder in
              Echtzeit. Analysieren Sie Spenden, erhaltene Spenden und gewonnene
              Angriffe mit interaktiven Diagrammen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <BarChart2 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">
                  Aktivitäts-Tracking
                </h3>
                <p className="text-gray-400">
                  Verfolgen Sie die Leistung Ihres Clans in Echtzeit.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <Users className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">
                  Mitglieder-Übersicht
                </h3>
                <p className="text-gray-400">
                  Detaillierte Einblicke in die Beiträge jedes Mitglieds.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <Gift className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">Spenden-Analyse</h3>
                <p className="text-gray-400">
                  Verfolgen Sie Spenden und Unterstützung innerhalb des Clans.
                </p>
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={handleButtonClick}
                className="group bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Zum Aktivitäts-Plot</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-6 leading-tight">
              SOLUNA - Clan Daten laden
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
              Bitte warten Sie, während die Clan-Daten verarbeitet werden.
            </p>
            <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-200">SOLUNA</span>. Alle
            Rechte vorbehalten.
          </p>
          <p className="mt-2 text-sm">
            <a
              href="/datenschutzrichtlinien"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
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
