"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import {
  ChevronRight,
  PieChart,
  Clock,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import React from "react";

interface FeatureSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  reversed?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  icon: Icon,
  reversed = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 mb-16`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex-1">
        <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Icon className="w-24 h-24 sm:w-32 sm:h-32 text-blue-500 dark:text-blue-400" />
      </div>
    </motion.section>
  );
};

const Features: React.FC = () => {
  const handleJoinClick = () => {
    window.open(
      "https://link.clashofclans.com/en?action=OpenClanProfile&tag=2LUVL2QGL",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Head>
        <title>Funktionen & Vorteile | SOLUNA</title>
        <meta
          name="description"
          content="Entdecken Sie die Vorteile von SOLUNA: Stärken Sie Ihren Clan durch verbesserte Aktivität und Zusammenarbeit."
        />
      </Head>

      <main className="container mx-auto px-6 py-16 flex-grow">
        <motion.section
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Gemeinsam stärker mit SOLUNA
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
            Entdecken Sie, wie SOLUNA Ihren Clan transformiert.
          </p>
        </motion.section>

        <FeatureSection
          title="SOLUNA: Unser Clan, unsere Regeln"
          description="SOLUNA ist mehr als nur ein Name – es ist unser Clan und unsere Gemeinschaft. Dieses Tool wurde von uns speziell entwickelt, um SOLUNA noch aktiver und erfolgreicher zu machen. Ob Spenden, Angriffe oder Strategien: Mit dem SOLUNA-Dashboard bleiben wir immer auf dem Laufenden und arbeiten zusammen, um stärker zu werden."
          icon={PieChart}
        />

        <FeatureSection
          title="Aktiv bleiben leicht gemacht"
          description="Wie oft habt ihr euch gefragt, wer in SOLUNA wie viel spendet oder wer die meisten Angriffe durchführt? Unser Tool bringt Licht ins Dunkel und zeigt euch auf einen Blick, wie aktiv jedes SOLUNA-Mitglied ist. So können wir unsere Leistungen besser einschätzen und uns gegenseitig motivieren."
          icon={Clock}
          reversed
        />

        <FeatureSection
          title="Echtzeit-Feedback für den Erfolg"
          description="Mit Echtzeit-Updates behält der gesamte SOLUNA-Clan den Überblick. Ob während eines Krieges oder in der täglichen Planung – das SOLUNA-Dashboard sorgt dafür, dass jeder die richtigen Informationen hat, um die besten Entscheidungen für unseren Clan zu treffen."
          icon={TrendingUp}
        />

        <FeatureSection
          title="Motivation und Gemeinschaft in SOLUNA"
          description="Unser Ziel war es, nicht nur ein praktisches Tool zu schaffen, sondern auch den Spaß am Spiel in SOLUNA zu fördern. Das SOLUNA-Dashboard hilft uns, unsere Fortschritte zu feiern und als Gemeinschaft zusammenzuwachsen. Jeder Punkt, jeder Sieg und jede Spende trägt zum Erfolg unseres SOLUNA-Clans bei."
          icon={Users}
          reversed
        />

        <motion.section
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Werden Sie Teil der aktiven und motivierten SOLUNA-Gemeinschaft!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={handleJoinClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span>SOLUNA beitreten</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </motion.section>
      </main>

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
};

export default Features;
