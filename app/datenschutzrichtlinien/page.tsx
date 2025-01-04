"use client";
import Head from "next/head";

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