import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8 text-gray-600 dark:text-gray-400 shadow-t transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          {/* Branding and Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                SOLUNA
              </span>
              . Alle Rechte vorbehalten.
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Made with <span className="text-red-500">❤️</span> by Alpi
            </p>
          </div>

          {/* Navigation Links */}

            <Link
              href="/datenschutzrichtlinien"
              className="mt-2 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300 text-sm lg:mr-6"
            >
              Datenschutzrichtlinien
            </Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
