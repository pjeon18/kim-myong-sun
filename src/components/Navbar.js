import { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { label: "About", href: "about", isAnchor: true },
      { label: "Books", href: "books", isAnchor: true },
      { label: "Contact", href: "contact", isAnchor: true },
      { label: "Exhibit", href: "/exhibit", isAnchor: false },
    ],
    []
  );

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "shadow-md bg-blue-900" : "bg-blue-900"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Author Name
        </Link>

        <div className="space-x-6 hidden md:flex items-center">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="hover:underline"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`hover:underline ${
                  location.pathname === link.href ? "font-bold underline" : ""
                }`}
              >
                {link.label}
              </Link>
            )
          )}

          <button
            onClick={toggleDarkMode}
            className="ml-4 text-sm px-3 py-1 rounded border border-white hover:bg-white hover:text-blue-900 transition"
          >
            Toggle Dark
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-blue-800 px-4 pb-4"
          >
            {navLinks.map((link) =>
              link.isAnchor ? (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-2 border-b border-blue-700 hover:underline"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 border-b border-blue-700 hover:underline ${
                    location.pathname === link.href ? "font-bold underline" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            <button
              onClick={() => {
                toggleDarkMode();
                setIsOpen(false);
              }}
              className="block w-full text-left py-2 hover:underline"
            >
              Toggle Dark
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
