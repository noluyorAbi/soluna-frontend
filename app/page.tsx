"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";
import { ChevronRight, BarChart2, Users, Gift } from "lucide-react";
import Navbar from "./components/Navbar";
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/clan-activity");
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white transition-colors duration-300">
      <Head>
        <title>SOLUNA Clan-Aktivitäts-Dashboard</title>
        <meta
          name="description"
          content="Verfolgen Sie die Aktivität der SOLUNA Clan-Mitglieder in Echtzeit."
        />
      </Head>



      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8 sm:py-16">
        {!isLoading ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl w-full"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400">
              SOLUNA Clan-Aktivitäts-Dashboard
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              Verfolgen Sie die Aktivität der SOLUNA Clan-Mitglieder in
              Echtzeit. Analysieren Sie Spenden, erhaltene Spenden und gewonnene
              Angriffe mit interaktiven Diagrammen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors duration-300"
              >
                <BarChart2 className="w-12 h-12 mx-auto mb-4 text-blue-500 dark:text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">
                  Aktivitäts-Tracking
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Verfolgen Sie die Leistung Ihres Clans in Echtzeit.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors duration-300"
              >
                <Users className="w-12 h-12 mx-auto mb-4 text-green-500 dark:text-green-400" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">
                  Mitglieder-Übersicht
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Detaillierte Einblicke in die Beiträge jedes Mitglieds.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700 transition-colors duration-300"
              >
                <Gift className="w-12 h-12 mx-auto mb-4 text-yellow-500 dark:text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">
                  Spenden-Analyse
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Verfolgen Sie Spenden und Unterstützung innerhalb des Clans.
                </p>
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button
                onClick={handleButtonClick}
                className="group bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
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
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400">
              SOLUNA - Clan Daten laden
            </h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
              Bitte warten Sie, während die Clan-Daten verarbeitet werden.
            </p>
            <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-6 shadow-t transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              SOLUNA
            </span>
            . Alle Rechte vorbehalten.
          </p>
          <p className="mt-2 text-sm">
            <a
              href="/datenschutzrichtlinien"
              className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
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
