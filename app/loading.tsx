// app/loading.tsx

"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white transition-colors duration-300 px-4">
      {/* Titel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400">
          SOLUNA Clan-Aktivitäts-Dashboard
        </h1>
      </motion.div>

      {/* Ladeanimation */}
      <motion.div
        className="flex items-center space-x-3 mb-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 1,
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.div
          className="w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"
          variants={{
            hidden: { y: 0 },
            visible: { y: [0, -10, 0] },
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"
          variants={{
            hidden: { y: 0 },
            visible: { y: [0, -10, 0] },
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"
          variants={{
            hidden: { y: 0 },
            visible: { y: [0, -10, 0] },
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>

    </div>
  );
}
