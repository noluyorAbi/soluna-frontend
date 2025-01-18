import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 dark:bg-gray-800 text-gray-600 dark:text-gray-400  shadow-t transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            SOLUNA
          </span>
          . Alle Rechte vorbehalten.
        </p>
        <p className="mt-2 text-sm">
          <Link
            href="/datenschutzrichtlinien"
            className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
            rel="noopener noreferrer"
          >
            Datenschutzrichtlinien
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
