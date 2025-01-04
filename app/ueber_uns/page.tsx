"use client";
import Head from "next/head";

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Head>
        <title>Funktionen & Vorteile | SOLUNA</title>
        <meta
          name="description"
          content="Entdecken Sie die Vorteile von SOLUNA: Stärken Sie Ihren Clan durch verbesserte Aktivität und Zusammenarbeit."
        />
      </Head>

      {/* Navbar */}

      {/* Hauptinhalt */}
      <main className="container mx-auto px-6 py-16 flex-grow">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Gemeinsam stärker mit SOLUNA
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
            Entdecken Sie, wie SOLUNA Ihren Clan transformiert.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Unser Clan, unsere Regeln
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              SOLUNA ist mehr als nur ein Name – es ist unser Clan und unsere
              Gemeinschaft. Dieses Tool wurde von uns speziell entwickelt, um
              den Clan noch aktiver und erfolgreicher zu machen. Ob Spenden,
              Angriffe oder Strategien: Mit dem SOLUNA-Dashboard bleiben wir
              immer auf dem Laufenden und arbeiten zusammen, um stärker zu
              werden.
            </p>
          </div>
          <div className="flex items-center justify-center">
            {/* Hier könnte ein passendes Icon oder eine Grafik eingefügt werden */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 sm:w-20 sm:h-20 text-blue-500 dark:text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-center justify-center">
            {/* Hier könnte ein passendes Icon oder eine Grafik eingefügt werden */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 sm:w-20 sm:h-20 text-blue-500 dark:text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Aktiv bleiben leicht gemacht
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Wie oft habt ihr euch gefragt, wer wie viel spendet oder wer die
              meisten Angriffe durchführt? Unser Tool bringt Licht ins Dunkel
              und zeigt euch auf einen Blick, wie aktiv jedes Clanmitglied ist.
              So können wir unsere Leistungen besser einschätzen und uns
              gegenseitig motivieren.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Echtzeit-Feedback für den Erfolg
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Mit Echtzeit-Updates behält der gesamte Clan den Überblick. Ob
              während eines Krieges oder in der täglichen Planung – das
              SOLUNA-Dashboard sorgt dafür, dass jeder die richtigen
              Informationen hat, um die besten Entscheidungen zu treffen.
            </p>
          </div>
          <div className="flex items-center justify-center">
            {/* Hier könnte ein passendes Icon oder eine Grafik eingefügt werden */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 sm:w-20 sm:h-20 text-blue-500 dark:text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-center justify-center">
            {/* Hier könnte ein passendes Icon oder eine Grafik eingefügt werden */}
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 sm:w-24 sm:h-24 text-blue-500 dark:text-blue-400"
            >
              <circle cx="30" cy="30" r="10" fill="currentColor" />
              <circle cx="70" cy="30" r="10" fill="currentColor" />
              <circle cx="50" cy="70" r="10" fill="currentColor" />
              <line
                x1="37.071"
                y1="37.071"
                x2="62.929"
                y2="37.071"
                stroke="currentColor"
                strokeWidth="3"
              />
              <line
                x1="35.355"
                y1="39.645"
                x2="44.645"
                y2="60.355"
                stroke="currentColor"
                strokeWidth="3"
              />
              <line
                x1="64.645"
                y1="39.645"
                x2="55.355"
                y2="60.355"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Motivation und Gemeinschaft
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Unser Ziel war es, nicht nur ein praktisches Tool zu schaffen,
              sondern auch den Spaß am Spiel zu fördern. SOLUNA hilft uns,
              unsere Fortschritte zu feiern und als Gemeinschaft
              zusammenzuwachsen. Jeder Punkt, jeder Sieg und jede Spende trägt
              zum Erfolg unseres Clans bei.
            </p>
          </div>
        </section>

        <section className="text-center">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            Werden Sie Teil einer aktiven und motivierten Gemeinschaft!
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-gray-400 dark:text-gray-500 py-8 transition-colors duration-500">
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
