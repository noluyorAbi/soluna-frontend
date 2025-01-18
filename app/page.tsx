"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";
import { ChevronRight, BarChart2, Users, Gift } from "lucide-react";

// Schritt 1: Funfacts definieren
const funFacts = [
  "Wussten Sie, dass Clans durchschnittlich 73% mehr Spaß haben?",
  "Ein Clan ohne Spenden ist wie ein Dorf ohne Dorfbewohner!",
  "Die meisten Clans bestehen aus 5 Leuten, die nur dann 10 sind.",
  "Ein guter Clan ist wie eine Familie – aber ohne die nervigen Diskussionen!",
  "Clans: Der einzige Ort, wo Verlieren manchmal genauso viel Spaß macht wie Gewinnen.",
  "P.E.K.K.A bedeutet 'Perfect Enraged Knight Killer of Assassins'.",
  "P.E.K.K.A bekommt doppelten Tesla-Schaden durch ihre Rüstung.",
  "P.E.K.K.A verändert ihr Aussehen mit jedem Level.",
  "Liam Neeson spielte in einer Super Bowl-Werbung für Clash of Clans.",
  "Supercell verdiente 2015 über 5 Mio. USD pro Tag durch das Spiel.",
  "Ein Spieler nutzte 5 iPads gleichzeitig für Clash of Clans.",
  "Der erste Spieler mit 4000 Trophäen bekam 79k Follower.",
  "Clash of Clans wurde in nur 6 Monaten entwickelt.",
  "Das Spiel wurde von Backyard Monsters und Travian inspiriert.",
  "Clash of Clans wurde 2012 für iOS und 2013 für Android veröffentlicht.",
  "Nur 15 Entwickler arbeiteten an Clash of Clans.",
  "Verborgene Teslas fügen P.E.K.K.A doppelten Schaden zu.",
  "Der Barbaren-König liebt dunkles Elixier zum Frühstück.",
  "Der Bauarbeiter verschwindet, wenn man ihm keinen Schlaf gönnt.",
  "Spieler können in Clans ihre eigene Geschichte schreiben.",
  "Die Bogenschützin hat den höchsten Trefferpunkt-Schrei.",
  "Das 'Globus'-Symbol im Spiel erinnert an Supercells weltweite Community.",
  "Ein Spieler hat 6 Monate lang keinen einzigen Angriff verpasst.",
  "Die Heilzauber-Reichweite ist fast so groß wie ein Ballon-Angriff.",
  "Spieler verbringen durchschnittlich 1 Stunde täglich in Clash of Clans.",
  "Jeden Monat werden weltweit Milliarden von Clan-Kriegssternen gesammelt.",
  "Das Design der Mauern wurde von mittelalterlichen Burgen inspiriert.",
  "Das Dorf-Tutorial wurde seit 2012 über 100 Millionen Mal abgeschlossen.",
  "Clash of Clans wurde in über 50 Sprachen übersetzt.",
  "Supercell, das Unternehmen hinter Clash of Clans, wurde 2010 in Helsinki, Finnland, gegründet.",
  "Clash of Clans war 2015 das am zweithöchsten verdienende Spiel im App Store.",
  "Der Name P.E.K.K.A wurde durch einen Facebook-Wettbewerb ermittelt.",
  "Clash of Clans hat weltweit über 500 Millionen Downloads erreicht.",
  "Das Spiel hat eine eigene animierte Webserie namens 'Clash-A-Rama!'.",
  "Der Inferno-Turm verursacht mehr Schaden, je länger er ein Ziel angreift.",
  "Der Bauarbeiter hat einen geheimen Tanz, wenn man ihn antippt, während er nichts tut.",
  "Es gibt einen versteckten Minispiel-Modus namens 'Builder Base', der 2017 eingeführt wurde.",
  "Der 'Giga Tesla' wird freigeschaltet, wenn das Rathaus auf Level 12 aufgerüstet wird.",
  "Clash of Clans hat eine eigene Esports-Szene mit internationalen Turnieren.",
  "Der 'Grand Warden' ist der einzige Held, der sowohl Boden- als auch Lufteinheiten unterstützen kann.",
  "Die 'Clan-Spiele' wurden 2017 eingeführt und bieten spezielle Belohnungen für Clan-Mitglieder.",
  "Der 'Battle Machine' ist der erste Held in der Builder Base.",
  "Clash of Clans feierte 2022 sein 10-jähriges Jubiläum mit besonderen Events.",
  "Der 'Eiszauber' kann Verteidigungsgebäude für kurze Zeit einfrieren.",
  "Es gibt über 2 Millionen aktive Clans weltweit.",
  "Der 'Adlerartillerie' ist eine der stärksten Verteidigungen und wird auf Rathaus-Level 11 freigeschaltet.",
  "Clash of Clans wurde von Spielen wie 'Backyard Monsters' und 'Travian' inspiriert.",
  "Das Spiel erhielt mehrere Auszeichnungen, darunter den 'Best Game' Award im Jahr 2013.",
  "Der 'Schutzzauber' kann Truppen für kurze Zeit unverwundbar machen.",
];


// Schritt 2: FunFacts-Komponente erstellen
function FunFacts() {
  const [currentFact, setCurrentFact] = useState("");

  useEffect(() => {
    // Initial zufälligen Funfact setzen
    setCurrentFact(funFacts[Math.floor(Math.random() * funFacts.length)]);

    // Intervall zum Wechseln des Funfacts alle 5 Sekunden
    const interval = setInterval(() => {
      setCurrentFact(funFacts[Math.floor(Math.random() * funFacts.length)]);
    }, 5000); // 5000 Millisekunden = 5 Sekunden

    // Aufräumen des Intervalls bei Komponentenunmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-center text-sm text-gray-600 dark:text-gray-400">
      <em>{currentFact}</em>
    </div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/clan-activity");
    }, 50);
  };

  const handleJoinClanClick = () => {
    window.open(
      "https://link.clashofclans.com/en?action=OpenClanProfile&tag=2LUVL2QGL",
      "_blank"
    );
  };

  return (
    <div className=" min-h-screen pb-8 sm:pb-0 flex flex-col bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white transition-colors duration-300">
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
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={handleButtonClick}
                  className="group bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Zum Aktivitäts-Plot</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={handleJoinClanClick}
                  className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Werde Teil von SOLUNA</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            ></motion.div>
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
              Bitte warten Sie, während die Clan-Daten verarbeitet werden.{" "}
              <br /> Dies kann bis zu einer Minute dauern.
            </p>

            {/* Schritt 3: FunFacts-Komponente einfügen */}
            <FunFacts />

            <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mt-6"></div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
