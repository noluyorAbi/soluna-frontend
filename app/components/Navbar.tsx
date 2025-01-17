"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import React from "react";

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed w-full z-50 bg-white dark:bg-gray-900/90 backdrop-blur-sm shadow-lg"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 dark:text-white"
          >
            SOLUNA
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Startseite</NavLink>
            <NavLink href="/ueber_uns">Über uns</NavLink>
            <NavLink href="https://discord.com/invite/G2Br635S4B" external>
              Discord
            </NavLink>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-300"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <MdLightMode
                  className="h-5 w-5 text-yellow-400"
                  aria-hidden="true"
                />
              ) : (
                <MdDarkMode
                  className="h-5 w-5 text-gray-800 dark:text-gray-300"
                  aria-hidden="true"
                />
              )}
            </motion.button>
          </nav>

          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="mr-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-300"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <MdLightMode
                  className="h-5 w-5 text-yellow-400"
                  aria-hidden="true"
                />
              ) : (
                <MdDarkMode
                  className="h-5 w-5 text-gray-800 dark:text-gray-300"
                  aria-hidden="true"
                />
              )}
            </motion.button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  external?: boolean;
}> = ({ href, children, external = false }) => (
  <Link
    href={href}
    className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
  >
    <motion.span
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      {children}
    </motion.span>
  </Link>
);

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full p-2"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </motion.button>
      <Transition
        show={isOpen}
        as={React.Fragment}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Transition.Child
          as="div"
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50"
        >
          <nav>
            <ul className="flex flex-col space-y-1">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
                Startseite
              </MobileNavLink>
              <MobileNavLink href="/ueber_uns" onClick={() => setIsOpen(false)}>
                Über uns
              </MobileNavLink>
              <MobileNavLink
                href="https://discord.com/invite/G2Br635S4B"
                onClick={() => setIsOpen(false)}
                external
              >
                Discord
              </MobileNavLink>
            </ul>
          </nav>
        </Transition.Child>
      </Transition>
    </div>
  );
};

const MobileNavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  external?: boolean;
}> = ({ href, children, onClick, external = false }) => (
  <li>
    <Link
      href={href}
      className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  </li>
);

export default Navbar;
