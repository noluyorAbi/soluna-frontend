"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { ChevronRight, Shield, Database, Lock } from "lucide-react";

export default function Datenschutzrichtlinien() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <Head>
        <title>Datenschutz | SOLUNA Dashboard</title>
        <meta
          name="description"
          content="Datenschutzrichtlinien für das SOLUNA Clan-Aktivitäts-Dashboard. Erfahren Sie, wie wir Ihre Daten schützen."
        />
      </Head>

      <main className="container mx-auto px-4 sm:px-6 py-16 flex-grow">
        <motion.section className="text-center mb-12" {...fadeIn}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">
            Datenschutzrichtlinien
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
            Informationen zum Datenschutz im SOLUNA Dashboard
          </p>
        </motion.section>

        <motion.section
          className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8"
          {...fadeIn}
        >
          <p className="text-lg leading-relaxed">
            Willkommen bei den Datenschutzrichtlinien des{" "}
            <strong className="font-semibold text-blue-600 dark:text-blue-400">
              SOLUNA Clan-Aktivitäts-Dashboards
            </strong>
            . Der Schutz Ihrer Daten ist uns ein wichtiges Anliegen. In dieser
            Richtlinie erklären wir transparent, wie wir mit den Daten umgehen,
            die von der Clash of Clans API stammen.
          </p>
        </motion.section>

        <motion.section
          className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8"
          {...fadeIn}
        >
          <h2 className="flex items-center text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            <Database className="mr-2" size={24} />
            Herkunft der Daten
          </h2>
          <p className="text-lg leading-relaxed">
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
        </motion.section>

        <motion.section
          className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8"
          {...fadeIn}
        >
          <h2 className="flex items-center text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            <Shield className="mr-2" size={24} />
            Zweck der Datennutzung
          </h2>
          <p className="text-lg leading-relaxed">
            Die abgerufenen Daten dienen ausschließlich dem Zweck, eine
            übersichtliche Darstellung der Aktivitäten innerhalb des Clans zu
            ermöglichen. Dies unterstützt Clan-Mitglieder dabei, ihre Leistungen
            zu analysieren und die Zusammenarbeit im Clan zu verbessern.
          </p>
        </motion.section>

        <motion.section
          className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8"
          {...fadeIn}
        >
          <h2 className="flex items-center text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            <Lock className="mr-2" size={24} />
            Datenspeicherung und -sicherheit
          </h2>
          <p className="text-lg leading-relaxed">
            Wir legen großen Wert auf den Schutz Ihrer Daten. Daher speichern
            wir keine Daten dauerhaft. Alle Informationen werden in Echtzeit von
            der API geladen und sind nur für die Dauer Ihrer Sitzung im
            Dashboard verfügbar. Es erfolgt keine Weitergabe dieser Daten an
            Dritte und keine kommerzielle Nutzung.
          </p>
        </motion.section>
        {/* 
        <motion.section
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8"
          {...fadeIn}
        >
          <p className="text-lg leading-relaxed mb-6">
            Sollten Sie weitere Fragen oder Bedenken zum Datenschutz haben,
            können Sie uns jederzeit über die angegebenen Kontaktmöglichkeiten
            erreichen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Kontakt aufnehmen
            <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </motion.section>
         */}
      </main>
    </div>
  );
}
