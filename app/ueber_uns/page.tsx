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
    <div className="min-h-screen flex flex-col bg-gray-50 pb-32 dark:bg-gray-900 transition-colors duration-500">
      <Head>
        <title>Funktionen & Vorteile | SOLUNA</title>
        <meta
          name="description"
          content="Werde Teil von SOLUNA: Erlebe ein neues Level der Clan-Aktivität und Zusammenarbeit."
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
            Entdecke die Vorteile, die SOLUNA für dich als Clan bringt. Lass uns
            gemeinsam neue Erfolge feiern!
          </p>
        </motion.section>

        <FeatureSection
          title="SOLUNA: Unser Clan, unser Zusammenhalt"
          description="SOLUNA ist nicht nur ein Name – es ist eine lebendige Gemeinschaft. Unser Tool hilft uns, noch aktiver und erfolgreicher zu werden. Von Spenden bis hin zu strategischen Angriffen – wir bleiben immer auf dem neuesten Stand und schaffen es, zusammen immer stärker zu werden."
          icon={PieChart}
        />

        <FeatureSection
          title="Aktivität auf einen Blick"
          description="Egal, wer am meisten spendet oder die meisten Angriffe führt – unser Tool zeigt es uns sofort. So können wir die Leistungen jedes Mitglieds nachvollziehen und uns gegenseitig zu Höchstleistungen anspornen."
          icon={Clock}
          reversed
        />

        <FeatureSection
          title="Echtzeit-Updates für den Erfolg"
          description="Ob im Krieg oder bei der Planung – mit den Echtzeit-Updates von SOLUNA haben wir immer die richtigen Informationen, um die besten Entscheidungen zu treffen und unserem Clan zum Erfolg zu verhelfen."
          icon={TrendingUp}
        />

        <FeatureSection
          title="Gemeinschaft und Motivation"
          description="SOLUNA ist nicht nur ein Tool – es ist unser Herzstück. Wir feiern gemeinsam unsere Erfolge, motivieren uns gegenseitig und wachsen als Clan zusammen. Jeder Angriff, jeder Sieg und jede Spende bringt uns näher ans Ziel."
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
            Sei auch du Teil der starken und aktiven SOLUNA-Gemeinschaft!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={handleJoinClick}
              className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>SOLUNA jetzt beitreten</span>
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
};

export default Features;
