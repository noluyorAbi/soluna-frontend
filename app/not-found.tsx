"use client";

import { useRouter } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";
import { Frown, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  const handleGoHomeClick = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen pb-8 sm:pb-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white transition-colors duration-300">
      <Head>
        <title>Seite nicht gefunden - SOLUNA</title>
        <meta
          name="description"
          content="Die angeforderte Seite konnte nicht gefunden werden."
        />
      </Head>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl w-full text-center"
        >
          <h1 className="text-5xl py-6 sm:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400">
            404 - Seite nicht gefunden
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Die angeforderte Seite konnte nicht gefunden werden. Überprüfen Sie
            die URL oder kehren Sie zur Startseite zurück.
          </p>
          {/* Container für den Button zentrieren */}
          <motion.div
            className="flex justify-center" // Hinzugefügt
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={handleGoHomeClick}
              className="group bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto" // mx-auto hinzugefügt
            >
              <Home className="w-5 h-5" />
              <span>Zur Startseite</span>
            </button>
          </motion.div>
          <motion.div
            className="mt-8 flex justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Frown className="w-12 h-12 text-gray-500 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
